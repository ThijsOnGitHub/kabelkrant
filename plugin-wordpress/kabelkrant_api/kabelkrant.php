<?php
/*
 * Plugin Name: Kabelkrant API
 * Description: Plugin voor het aanmaken van de Kabelkrant API
 * Version: 1.0.3
 * Author: Kabelkrant
 * Folder: kabelkrant_api
 */
// import code from CustomPostApi.php
require_once 'CustomPostApi.php';


// Create a new instance of the class
$kabelkrant_api = new KabelkrantAPI();
new CustomPostApi();

/**
 * This class is used to register the custom post type 'slide' and load the ACF fields
 * for the kabelkrant API
 */
class KabelkrantAPI {
    private $my_plugin;
    // Constructor
    function __construct() {
        $this->my_plugin = WP_PLUGIN_DIR . '/kabelkrant_api';
        // Add the post type
        add_action('init', array($this, 'init'));

        // Load ACF fields from the plugin directory
        add_filter('acf/settings/load_json', [$this,'my_acf_json_load_point']);

        add_filter('rest_post_query', [$this, 'filterPosts'], 10, 2);
    }

    function filterPosts($args, $request) {
        if(isset($request['tv-filter']) && $request['tv-filter'] == 'true'){
            $args['meta_query'] = array(
                'relation' => 'AND',
                array(
                    'key' => 'show_on_tv',
                    'value' => true,
                ),
                array(
                    'relation' => 'OR',
                    array(
                        'key' => 'tv_settings_end_date',
                        'value' => date('Y-m-d H:i:s'),
                        'compare' => '>=',
                        'type' => 'DATE',
                    ),
                    array(
                        'key' => 'tv_settings_end_date',
                        'compare' => 'NOT EXISTS',
                    ),
                    array(
                        'key' => 'tv_settings_end_date',
                        'value' => '',
                        'compare' => '=',
                    )
                )
            );
        }
        return $args;
    }

    function init() {
        // Add the post type
        $this->registerTvSlide();
    }

    function registerTvSlide(){
        // Define the post type name
        $post_type_name = 'slide';

        // Define the labels for the post type 'slides'
        $tv_slide_labels = array(
            'name' => __('Dia Kabelkrant'),
            'singular_name' => __('Dia\'s Kabelkrant'),
            'add_new' => __('Nieuwe dia'),
            'add_new_item' => __('Nieuwe dia'),
            'edit_item' => __('Bewerk dia'),
            'new_item' => __('Nieuwe dia'),
            'view_item' => __('Bekijk dia'),
            'search_items' => __('Zoek dia'),
            'not_found' => __('Geen dia\'s gevonden'),
            'not_found_in_trash' => __('Geen dia\'s gevonden in prullenbak'),
            'parent_item_colon' => __('Parent dia'),
            'menu_name' => __('Dia\'s Kabelkrant'),
        );

        // Register the post type 'slides'
        register_post_type($post_type_name, array(
            'labels' => $tv_slide_labels,
            'supports' => array('title', 'custom-fields','page-attributes'),
            'show_in_rest' => true,
            'rest_base' => 'slides',
            'rest_controller_class' => 'WP_REST_Posts_Controller',
            'menu_icon' => 'dashicons-format-video',
            'public' => false,  // it's not public, it shouldn't have it's own permalink, and so on
            'publicly_queryable' => true,  // you should be able to query it
            'show_ui' => true,  // you should be able to edit it in wp-admin
            'exclude_from_search' => true,  // you should exclude it from search results
            'show_in_nav_menus' => false,  // you shouldn't be able to add it to menus
            'has_archive' => false,  // it shouldn't have archive page
            'rewrite' => false,  // it shouldn't have rewrite rules
        ));

        // Add sorting to the post type order property
        $this->addSorting($post_type_name);
    }


    function addSorting($MY_POST_TYPE){
        add_filter('manage_' . $MY_POST_TYPE . '_posts_columns', function ($columns) {
            $columns['menu_order'] = "Order"; //column key => title
            return $columns;
        });

        // display the column value
        add_action( 'manage_' . $MY_POST_TYPE . '_posts_custom_column', function ($column_name, $post_id){
            if ($column_name == 'menu_order') {
                echo get_post($post_id)->menu_order;
            }
        }, 10, 2); // priority, number of args - MANDATORY HERE!

        // make it sortable
        $menu_order_sortable_on_screen = 'edit-' . $MY_POST_TYPE; // screen name of LIST page of posts
        add_filter('manage_' . $menu_order_sortable_on_screen . '_sortable_columns', function ($columns){
            // column key => Query variable
            // menu_order is in Query by default so we can just set it
            $columns['menu_order'] = 'menu_order';
            return $columns;
        });
    }

    function filter_on_display_date( $fields, $resource, $http_method ) {

        // Example 2: Show only a specific field on term GET requests.
        if ( $http_method == 'GET' /*&& $resource['type'] == 'term'*/ ) {
            return array_merge(["display_date" => $fields["display_date"]],$fields["slides"]);
        }

        return $fields;
    }


    /**
     * Load ACF fields files from the plugin directory
     */
    function my_acf_json_load_point( $paths ) {
        // Checks if the plugin directory exists
        if ( is_dir( $this->my_plugin ) ) {
            // append path
            $paths[] = $this->my_plugin . '/acf-fields';
        }

        // return
        return $paths;
    }

}



