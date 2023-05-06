<?php

/** Creates a custom api for the posts where all the posts are filtered
 * on the acf field end_date. The end_date is a date field in the future.
*/

class CustomPostApi
{
    function __construct()
    {
        add_action('rest_api_init', array($this, 'api_init'));
    }

    function api_init()
    {
        $this->registerPostRoute();
    }

    function registerPostRoute()
    {
        register_rest_route('kabelkrant/v1', '/posts', array(
            'methods' => 'GET',
            'callback' => array($this, 'getPosts'),
        ));
    }

    function getPosts()
    {
        $args = array(
            'post_type' => 'post',
            'posts_per_page' => -1,
            'meta_query' => array(
               // check if date in the future
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
            )
        );
        $posts = get_posts($args);
        $posts = array_map(function ($post) {
            $post->acf = get_fields($post->ID);
            return $post;
        }, $posts);
        $rest_class = new WP_REST_Posts_Controller('post');
        $posts = array();
        // transform post to a webapi response
        return $posts;
    }

}