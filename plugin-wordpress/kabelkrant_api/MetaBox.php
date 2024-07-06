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
        $category_id = isset($value['tv_settings']['category']) ? $value['tv_settings']['category'] : null;

        if(isset($category_id)){
            $category = get_category($category_id);
            $fieldOfCategory = get_fields('category_'.$category_id);
        }
       



        // check if site is staging site


        $site_url = get_site_url();
        $preview_url= "http://localhost:5173/preview";
        switch ($site_url) {
            case 'https://rtvmiddenholland.nl/':
                $preview_url = "https://kabelkrant.vercel.app/preview";
                break;
            case "https://rtvmiddenholland.nl/staging":
                $preview_url = "https://staging-kabelkrant.vercel.app/preview";
                break;
        }
    
        ?> 
            <iframe src="<?php echo $preview_url ?>" id="kabelkrant-preview" style="aspect-ratio:16/10;width:100%" ></iframe>   
            <div id="kabelkrant-needs-first-save">Om een preview van de pagina te bekijken, zorg ervoor dat er een categorie is toegewezen. Sla vervolgens het bericht op als concept of publiceer het en herlaad de pagina.</div>
            <div id="kabelkrant-disabled" >Deze post wordt niet op de kabelkrant weergegeven</div>
        <?php
         if (false){
            echo json_encode($value);
            echo json_encode($fieldOfCategory);	
         }

         if(isset($post) && isset($category)){
            $data = [
                'post' => [
                    'title' => [
                        'rendered' => $post->post_title
                    ],
                    'acf'=> $value
                ],
                'category' => [
                    'acf' =>  $fieldOfCategory != null ? $fieldOfCategory : [],
                    'name' => $category != null ? $category->name : "",
                    'id' => $category != null ? $category->term_id : "",
                ],
            ];
         }else {
            $data = null;
         }
       
        $encoded_data = json_encode($data);

        ?> <script>
            var encoded_data = <?php echo $encoded_data; ?>;
            var iframe = document.getElementById('kabelkrant-preview');
            var warning = document.getElementById('kabelkrant-disabled');
            var needsFirstSaveElement = document.getElementById('kabelkrant-needs-first-save');
            let acfField = <?php echo $encoded_data; ?>;

            function updatePreviewShow(showPreview){
                if(showPreview && encoded_data == null){
                    iframe.style.display = "none";
                    warning.style.display = "none";
                    needsFirstSaveElement.style.display = "block";
                } else if(showPreview) {
                    iframe.style.display = "block";
                    warning.style.display = "none";
                    needsFirstSaveElement.style.display = "none";
                } else {
                    iframe.style.display = "none";
                    warning.style.display = "block";
                    needsFirstSaveElement.style.display = "none";
                }
            }

            acf.add_action('ready', function() {
                const isOnTV = acf.getField('field_63daae2e861d2');

              
                // get input element 
                document.addEventListener('readystatechange', function() {
                    if (document.readyState === 'complete') {
                        // good luck!
                        var title = document.getElementsByClassName("editor-post-title").item(0)
                        console.log(document.getElementsByClassName("editor-post-title"),title); 
                        if (title == null){
                           return;
                        }
                        title.addEventListener('input', function(element){
                            acfField.post.title.rendered = title.innerHTML;
                            let data = {'type': "new_preview_data", data: acfField }
                            iframe.contentWindow.postMessage( data , '*');
                        })
                    }
                });
                /*;*/

                 
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
                console.log('iframe loaded',encoded_data);
                try{
                    iframe.contentWindow.postMessage( {'type': "new_preview_data", data : encoded_data } , '*');
                } catch (e){
                    console.log(e);
                }
                window.addEventListener('message', function(event){
                    if(event.data.type == 'send_message'){
                        iframe.contentWindow.postMessage( {'type': "new_preview_data", data : encoded_data } , '*');
                    }
                })


            };
        </script> <?php

    }

}