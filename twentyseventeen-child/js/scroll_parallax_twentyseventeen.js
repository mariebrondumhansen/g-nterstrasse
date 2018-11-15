// JavaScript Document
jQuery(document).ready(function($){

	//Smoothy scroll to panel
$('a[href*="#"]:not([href="0"])').click(function() {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top+400
      }, 1000);
      return false;
    }
  }
});
});

function my_smooth_parallax_child() {
	if (!is_admin()) {
	if (is_front_page()) {
	wp_enqueue_script( 'my_twentyseventeen_autoscrolling', get_stylesheet_directory_uri() . '/js/scroll_parallax_twentyseventeen.js', '', '1.0', true );
	}
	}
}

add_action('wp_enqueue_scripts', 'my_smooth_parallax_child');