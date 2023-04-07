<?php
/**
 * Storefront Class
 *
 * @since    2.0.0
 * @package  Storefront
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( 'Storefront' ) ) :

	/**
	 * The main Storefront class
	 */
	class Storefront {

		/**
		 * Setup class.
		 *
		 * @since 1.0
		 */
		public function __construct() { 
			add_action( 'widgets_init', array( $this, 'widgets_init' ) );
		 
		}
 
		public function widgets_init() {
			/* $sidebar_args['sidebar'] = array(
				'name'        => __( 'Sidebar', 'storefront' ),
				'id'          => 'sidebar-1',
				'description' => '',
			); */
			register_sidebar(array(
				'name' => __('Barra lateral de Productos', 'Storefront'),
				'id' =>'sidebar-1',
				'description'   => 'Sidebar de tienda',
				'before_widget' => '<div class="store-widget">',
				'after_widget'  => '</div>',
				'before_title' => '<h2 class="hidden">',
				'after_title'  => '</h2>'
			));   
 
		 } 
  
	}
endif;

return new Storefront();
