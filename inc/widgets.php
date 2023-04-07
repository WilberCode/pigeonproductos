<?php
 
// Widgets
 
function wph_widgets_registration(){
    /* register_sidebar(array(
        'name' => __('Footer - Información de pie de página'),
        'id' =>'footer-info',
        'description'   => 'Informacion de la p',
        'before_widget' => '<div class="footer-info">',
		'after_widget'  => '</div>',
		'before_title' => '<h2 class="hidden">',
        'after_title'  => '</h2>'
    ));   */ 
 
    register_sidebar(array(
        'name' => __('Home - Banner principal'),
        'id' =>'home-banner',
        'description'   => 'banner principal',
        'before_widget' => '<div class="home-banner">',
		'after_widget'  => '</div>',
		'before_title' => '<h2 class="hidden">',
        'after_title'  => '</h2>'
    ));    
    register_sidebar(array(
        'name' => __('Global - Campos personalizados'),
        'id' =>'global',
        'description'   => 'Campos',
        'before_widget' => '<div class="global">',
        'after_widget'  => '</div>',
        'before_title' => '<h2 class="hidden">',
        'after_title'  => '</h2>'
    ));    
    register_sidebar(array(
        'name' => __('Global - Anuncio'),
        'id' =>'global_announcement',
        'description'   => 'Descripción del Anuncio',
        'before_widget' => '<div class="global_announcement" role="region" aria-label="Anuncio">',
        'after_widget'  => '</div>',
        'before_title' => '<h2 class="hidden">',
        'after_title'  => '</h2>'
    ));    
    register_sidebar(array(
        'name' => __('Home - Testimonio'),
        'id' =>'home-assessment',
        'description'   => 'Síguenos',
        'before_widget' => '<div class="home-assessment">',
		'after_widget'  => '</div>', 
		'before_title' => '<h2 class="hidden">',
        'after_title'  => '</h2>'
    ));    
    register_sidebar(array(
        'name' => __('Home - Síguenos'),
        'id' =>'home-follow-us',
        'description'   => 'Síguenos',
        'before_widget' => '<div class="home-follow-us">',
		'after_widget'  => '</div>', 
    ));    
    register_sidebar(array(
        'name' => __('Home - Quiero vivir - Suscribirse'),
        'id' =>'home-suscribe',
        'description'   => 'Quiero vivir',
        'before_widget' => '<div class="home-suscribe">',
		'after_widget'  => '</div>', 
    ));    
    register_sidebar(array(
        'name' => __('Footer - Suscribirse'),
        'id' =>'footer-subscribe',
        'description'   => 'Suscribirse',
        'before_widget' => '<div class="footer-subscribe">',
		'after_widget'  => '</div>', 
    ));    
	register_sidebar(array(
        'name' => __('Footer - Copy Right'),
        'id' =>'copyright',
        'description'   => 'Copy Right',
        'before_widget' => '<div class="copyright">',
		'after_widget'  => '</div>', 
		'before_title' => '<h2 class="hidden">',
        'after_title'  => '</h2>'
    ));  
  
}
add_action('widgets_init', 'wph_widgets_registration');
 