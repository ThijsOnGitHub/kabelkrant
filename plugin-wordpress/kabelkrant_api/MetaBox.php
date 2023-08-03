<?php

class MetaBox{

    function __construct(){
        add_action( 'add_meta_boxes', [$this,'wpdocs_register_meta_boxes'] );
    }

    function wpdocs_register_meta_boxes() {
        if (get_field('show_on_tv')){
            add_meta_box( 'meta-box-id', __( 'Kabelkrant preview', 'textdomain' ), [$this,'wpdocs_my_display_callback'], 'post', 'normal', 'high');
        }
    }

    
    /**
     * Meta box display callback.
     *
     * @param WP_Post $post Current post object.
     */
    function wpdocs_my_display_callback( $post ) {
        // Display code/markup goes here. Don't forget to include nonces!

        // Get field value from a custom group field the group is called tv_settings and the field is called title
        $value = get_fields();
        $category_id = $value['tv_settings']['category'];
        $category = get_category($category_id);

        $fieldOfCategory = get_fields('category_'.$category_id);

        $site_url = get_site_url();
        $preview_url= "http://localhost:5173/preview"
        switch ($preview_url) {
            case 'https://www.rtvkrimpenerwaard.com':
                $preview_url = "https://staging-kabelkrant.vercel.app/preview"
                break;
            
            case 'https://www.staging.rtvkrimpenerwaard.com':
                $preview_url = "https://kabelkrant.vercel.app/preview"
                break;
        }
    
        ?> <iframe src="http://localhost:5173/preview" id="kabelkrant-preview" style="aspect-ratio:16/10;width:100%" ></iframe>  <?php
         if (false){
            echo json_encode($value);
            echo json_encode($fieldOfCategory);	
         }

        $data = [
            'post' => [
                'title' => [
                    'rendered' => $post->post_title
                ],
                'acf'=> $value
            ],
            'category' => [
                'acf' => $fieldOfCategory,
                'name' => $category->name,
                'id' => $category->term_id,
            ],
        ];
        $encoded_data = json_encode($data);
        ?> <script>
            var iframe = document.getElementById('kabelkrant-preview');
            
            iframe.onload= function() {
                console.log('iframe loaded',<?php echo $encoded_data; ?>);
                iframe.contentWindow.postMessage( {'type': "new_preview_data", data : <?php echo $encoded_data; ?> } , '*');
            };
        </script> <?php

    }

}