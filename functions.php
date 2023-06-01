<?php


use WpTailwindCssThemeBoilerplate\AutoLoader;
use WpTailwindCssThemeBoilerplate\View;


/*
 * Set up our auto loading class and mapping our namespace to the app directory.
 *
 * The autoloader follows PSR4 autoloading standards so, provided StudlyCaps are used for class, file, and directory
 * names, any class placed within the app directory will be autoloaded.
 *
 * i.e; If a class named SomeClass is stored in app/SomeDir/SomeClass.php, there is no need to include/require that file
 * as the autoloader will handle that for you.
 */
require get_stylesheet_directory() . '/app/AutoLoader.php';

 

require get_stylesheet_directory() . '/inc/widgets.php'; 

require get_stylesheet_directory() . '/inc/shortcodes.php'; 
require get_stylesheet_directory() . '/inc/theme_support.php'; 


require get_stylesheet_directory(). '/inc/class-storefront.php'; 





$loader = new AutoLoader();
$loader->register();
$loader->addNamespace( 'WpTailwindCssThemeBoilerplate', get_stylesheet_directory() . '/app' );

View::$view_dir = get_stylesheet_directory() . '/templates/views';

require get_stylesheet_directory() . '/includes/scripts-and-styles.php';
  
require get_stylesheet_directory(). '/inc/woocommerce/storefront-woocommerce-template-hooks.php';
require get_stylesheet_directory(). '/inc/woocommerce/storefront-woocommerce-template-functions.php';




function store_register_styles() { 
	$theme_version = wp_get_theme()->get( 'Version' ); 
	wp_enqueue_style( 'twentytwenty-style', get_stylesheet_uri(), array(), $theme_version );  





}




add_action( 'wp_enqueue_scripts', 'store_register_styles' );
function my_theme_setup() {
    add_theme_support( 'woocommerce' );
}

add_action( 'after_setup_theme', 'my_theme_setup' );
 
 
// Eliminar todos los CSS de WooCommerce de golpe
add_filter( 'woocommerce_enqueue_styles', '__return_false' );

 

// Load css - Pigeon Latam 
function add_theme_scripts() { 
      wp_register_style( 'pigeonlatam-common', get_template_directory_uri().'/pigeonlatam/css/common.css', [], false );  

      wp_register_style( 'pigeonlatam-css', get_template_directory_uri().'/build/css/pigeonlatam-css.css', [], false );  
   
      wp_enqueue_style( 'pigeonlatam-common' );  
      wp_enqueue_style( 'pigeonlatam-css' );  
    
 
} 
add_action( 'wp_enqueue_scripts', 'add_theme_scripts' );  
  
// Load js - Pigeon Latam 
add_action( 'wp_footer', function () {
 
/* 	wp_register_script ('pigeonlatam-library',get_template_directory_uri().'/pigeonlatam/js/library.js');   */
	wp_register_script ('pigeonlatam-setting',get_template_directory_uri().'/pigeonlatam/js/setting.js');  
	wp_register_script ('pigeonlatam-function',get_template_directory_uri().'/pigeonlatam/js/function.js');  
	wp_register_script ('pigeonlatam-common',get_template_directory_uri().'/pigeonlatam/js/common.js');  
	wp_register_script ('pigeonlatam-search',get_template_directory_uri().'/pigeonlatam/js/search.js?v=8');    
	// enqueue global assets 
	wp_enqueue_script( 'pigeonlatam-library' );  
	wp_enqueue_script( 'pigeonlatam-setting' );  
	wp_enqueue_script( 'pigeonlatam-function' );  
	wp_enqueue_script( 'pigeonlatam-common' );  
	wp_enqueue_script( 'pigeonlatam-search' );  
      

} );

 

// Obtiene la Url del thumbnail     
function thumbnail_image_url($size){
    global $post; 
    $image_id = get_post_thumbnail_id($post -> ID);
    $main_image = wp_get_attachment_image_src($image_id, $size);
    //0 = ruta o url, 1 = width, 2 = height, 3 = boolean
    return $main_image[0];
} 
 
 
/* FINALIZAR COMPRA - START */

// Obliga a registrarse antes de finalizar compra
  add_action('template_redirect','check_if_logged_in');
  function check_if_logged_in()
  {
	  $pageid = 8; // your checkout page id
	  if(!is_user_logged_in() && is_page($pageid))
	  {
		  $url = add_query_arg(
			  'redirect_to',
			  get_permalink($pagid),
			  site_url('/mi-cuenta/') // your my acount url
		  );
		  wp_redirect($url);
		  exit;
	  }
	  if(is_user_logged_in())
	  {
	  if(is_page(9))//my-account page id
	  {

		  $redirect = $_GET['redirect_to'];
		  if (isset($redirect)) {
		  echo '<script>window.location.href = "'.$redirect.'";</script>';
		  }

	  }
	 }
  }   

  /* FINALIZAR COMPRA - END */


/* SINGLE PRODUCT - START */

//Remove title
/* remove_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_title', 5 ); */

// Change price location
/* remove_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_price', 10 ); 
add_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_price', 25 ); */
 
// Elimanar  comentario y valoraciones
/* add_filter( 'woocommerce_product_tabs', 'sb_woo_remove_reviews_tab', 98);
 function sb_woo_remove_reviews_tab($tabs)
 {
 unset($tabs['reviews']);
 return $tabs;
 } 
 */
/* SINGLE PRODUCT - END */


/* REMOVE DASHICONS - START */
add_action( 'wp_print_styles', 'zgwd_dequeue_styles' );
function zgwd_dequeue_styles() { 
    if ( ! is_user_logged_in() ) {
        wp_dequeue_style( 'dashicons' );
        wp_deregister_style( 'dashicons' );
    }
}
/* REMOVE DASHICONS - END */
  

 

 

/* apply_filters( 'storefront_default_layout',  'left' ); */
add_filter( 'storefront_default_layout', 'prefix_custom_front_page_sections' );
     
function prefix_custom_front_page_sections( $num_sections )
{
        return 'left';
}


/* 
remove_filter( 'the_content', 'wpautop' ); */



// PIGEON


/* RESULT COUNT - HIDDEN */

add_action( 'after_setup_theme', 'my_remove_product_result_count', 99 );
function my_remove_product_result_count() { 
    remove_action( 'woocommerce_before_shop_loop' , 'woocommerce_result_count', 20 );
    remove_action( 'woocommerce_after_shop_loop' , 'woocommerce_result_count', 20 );
}

/* PRICE - HIDDEN */
 
add_filter( 'woocommerce_variable_sale_price_html', 'businessbloomer_remove_prices', 9999, 2 );
 
add_filter( 'woocommerce_variable_price_html', 'businessbloomer_remove_prices', 9999, 2 );
 
add_filter( 'woocommerce_get_price_html', 'businessbloomer_remove_prices', 9999, 2 );
 
function businessbloomer_remove_prices( $price, $product ) {
   if ( ! is_admin() ) $price = '';
   return $price;
}

  
/* RELATED PRODUCTS  */

// Eliminamos los productos relacionados de la zona en la que están
remove_action( 'woocommerce_after_single_product_summary', 'woocommerce_upsell_display', 15 );
remove_action( 'woocommerce_after_single_product_summary', 'woocommerce_output_related_products', 20 );

// Creamos la nueva pestaña
function maybe_add_tab( $tabs ) {

    $tabs['related_items'] = array(
        'title'    => __( 'Productos relacionados', 'textdomain' ), //Cambiamos nombre de la pestaña
        'priority' => 90, // Establecemos dónde mostrar la pestaña
        'callback' => 'dl_mostrar_prod_relacc_en_pestana',
    );

    return $tabs;
}

add_filter( 'woocommerce_product_tabs', 'maybe_add_tab' );

// Generamos todo el contenido de la pestaña
function sv_wc_maybe_add_upsell_tab( $tabs ) {
    global $product;

    $upsells = is_callable( array( $product, 'get_upsell_ids' ) )     ? $product->get_upsell_ids()     : $product->get_upsells();
    $related = is_callable( array( $product, 'get_cross_sell_ids' ) ) ? $product->get_cross_sell_ids() : $product->get_cross_sells();

    if ( empty( $upsells ) && empty( $related ) ) {
        return $tabs;
    }

    remove_action( 'woocommerce_after_single_product_summary', 'woocommerce_upsell_display', 15 );
    remove_action( 'woocommerce_after_single_product_summary', 'woocommerce_output_related_products', 20 );

    $new_tabs = is_null( $tabs ) ? array() : $tabs;

    $new_tabs['upsells'] = array(
        'title'    => __( 'Related Items', 'woocommerce-upsells-tab' ),
        'priority' => 25,
        'callback' => 'dl_mostrar_prod_relacc_en_pestana',
    );

    return $new_tabs;
}
add_filter( 'woocommerce_product_tabs', 'sv_wc_maybe_add_upsell_tab' );


// Volver a activar los prodcutos relacionados
function dl_mostrar_prod_relacc_en_pestana() {
    woocommerce_upsell_display();
    woocommerce_output_related_products();
}
 

/* CHANGE PRODUCT TAB TITLES - START */

add_filter( 'woocommerce_product_tabs', 'misha_rename_description_tab' );

function misha_rename_description_tab( $tabs ) {

	$tabs[ 'description' ][ 'title' ] = 'Detalle del producto';

	return $tabs;

}

add_filter( 'woocommerce_product_description_heading', 'misha_description_heading' );

function misha_description_heading( $heading ){

	return 'Detalle del producto';
	
}

/* CHANGE PRODUCT TAB TITLES - END */


 

add_filter( 'woocommerce_product_tabs', 'woo_reorder_tabs', 98 );
function woo_reorder_tabs( $tabs ) {

	$tabs['reviews']['priority'] = 10;			// Reviews primero
	$tabs['description']['priority'] = 5;			// Description segundo
//	$tabs['additional_information']['priority'] = 15;	// Información adicional tercero

	return $tabs;
}


add_filter('jpeg_quality', function($arg){return 100;});
add_filter('wp_editor_set_quality', function($arg){return 100;});
