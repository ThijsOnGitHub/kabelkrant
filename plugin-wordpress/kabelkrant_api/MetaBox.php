<?php

class MetaBox{

    function __construct(){
        add_action( 'add_meta_boxes', [$this,'wpdocs_register_meta_boxes'] );
    }

    function wpdocs_register_meta_boxes() {
        add_meta_box( 'meta-box-id', __( 'Kabelkrant preview', 'textdomain' ), [$this,'wpdocs_my_display_callback'], 'post', 'normal', 'high');
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
        $preview_url= "http://localhost:5173/preview";
        switch ($site_url) {
            case 'https://rtvmiddenholland.nl/':
                $preview_url = "https://kabelkrant.vercel.app/preview";
                break;
            case 'https://www.rtvkrimpenerwaard.nl/site':
                $preview_url = "https://kabelkrant.vercel.app/preview";
                break;
            
            case 'https://staging.rtvkrimpenerwaard.nl':
                $preview_url = "https://staging-kabelkrant.vercel.app/preview";
                break;
        }
    
        ?> 
            <iframe src="<?php echo $preview_url ?>" id="kabelkrant-preview" style="aspect-ratio:16/10;width:100%" ></iframe>   
            <div id="kabelkrant-disabled" >Deze post wordt niet op de kabelkrant weergegeven</div>
        <?php
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
            var warning = document.getElementById('kabelkrant-disabled');
            let acfField = <?php echo $encoded_data; ?>;

            function updatePreviewShow(showPreview){
                if(showPreview){
                    iframe.style.display = "block";
                    warning.style.display = "none";
                } else {
                    iframe.style.display = "none";
                    warning.style.display = "block";
                }
            }


            acf.add_action('ready', function() {
                const isOnTV = acf.getField('field_63daae2e861d2');

                
                // get input element 
                var title =document.getElementsByClassName('editor-post-title__input')[0];
                if(title != undefined){
                    title.addEventListener('input', function(){
                        acfField.post.title.rendered = title.value;
                        let data = {'type': "new_preview_data", data: acfField }
                        iframe.contentWindow.postMessage( data , '*');
                    });
                }
               


                // updat ecf title 
                var titleAcfField = acf.getField('field_6474bd77ab7c0');
                titleAcfField.on('change', function(){
                    acfField.post.acf.tv_settings.title = titleAcfField.val();
                    let data = {'type': "new_preview_data", data: acfField }
                    iframe.contentWindow.postMessage( data , '*');
                });



                isOnTV.on('change', function(){
                    updatePreviewShow(isOnTV.val());
                });
                updatePreviewShow(isOnTV.getValue())
            });
           

 
            


            acf.addAction('wysiwyg_tinymce_init', function( ed, id, mceInit, field ){
                if(field.data.key  == "field_63daae1d861d1"){
                    ed.on('change', function(){
                        acfField.post.acf.tv_settings.text = ed.getContent();
                        let data = {'type': "new_preview_data", data: acfField }
                        iframe.contentWindow.postMessage( data , '*');
                    });
                }
                // ed (object) tinymce object returned by the init function
                // id (string) identifier for the tinymce instance
                // mceInit (object) args given to the tinymce function
                // field (object) field instance 
            });
            iframe.onload = function() {
                console.log('iframe loaded',<?php echo $encoded_data; ?>);
                try{
                    iframe.contentWindow.postMessage( {'type': "new_preview_data", data : <?php echo $encoded_data; ?> } , '*');
                } catch (e){
                    console.log(e);
                }
                window.addEventListener('message', function(event){
                    if(event.data.type == 'send_message'){
                        iframe.contentWindow.postMessage( {'type': "new_preview_data", data : <?php echo $encoded_data; ?> } , '*');
                    }
                });


            };
        </script> <?php

    }

}