<?php

	function wpa_theme_styles() {
		wp_enqueue_style ( 'bootstrap_css', get_template_directory_uri() . '/plug-ins/bootstrap/css/bootstrap.min.css' );
		wp_enqueue_style ( 'select_css', get_template_directory_uri() . '/css/select2.min.css' );
		wp_enqueue_style ( 'main_css', get_template_directory_uri() . '/style.css' );
	}
	add_action ( 'wp_enqueue_scripts', 'wpa_theme_styles' );

	function wpa_theme_js() {
		wp_enqueue_script ( 'easing_js', 'http://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js', array('jquery'),'', false );
		wp_enqueue_script ( 'bootstrap_js', get_template_directory_uri() . '/plug-ins/bootstrap/js/bootstrap.min.js', '','', false );
		wp_enqueue_script ( 'scrollrv_js', get_template_directory_uri() . '/plug-ins/scrollreveal/scrollreveal.min.js', '','', false );
		wp_enqueue_script ( 'flexslider_js', get_template_directory_uri() . '/js/jquery.flexslider-min.js', '','', false );
		wp_enqueue_script ( 'select_js', get_template_directory_uri() . '/js/select2.full.min.js', '','', false );
		wp_enqueue_script ( 'agency_js', get_template_directory_uri() . '/js/agency.min.js', '','', false );
		wp_enqueue_script ( 'creative_js', get_template_directory_uri() . '/js/creative.js', array('jquery'),'', false );
	}
	add_action ( 'wp_enqueue_scripts', 'wpa_theme_js' );

?>