const theme = {
	color_b: #1f1f22,
	$color_b_extramedium: lighten($color_b, 45%),
	$color_b_medium: lighten($color_b, 65%),
	$color_b_light: lighten($color_b, 78%),
	$color_b_extralight: lighten($color_b, 85%),

}

/* Colors */

$color_b: #1f1f22;
	$color_b_extramedium: lighten($color_b, 45%);
	$color_b_medium: lighten($color_b, 65%);
	$color_b_light: lighten($color_b, 78%);
	$color_b_extralight: lighten($color_b, 85%);

$color_highlight: #f5d312;
	$color_highlight_dark: darken($color_highlight, 7%);

$color_background: #e9e9e9;
$color_background_light: #fff;

$color_error: #dc143c;
	$color_error_light: lighten($color_error, 48%);


/* Fonts */
$font_family: 'Montserrat', Arial, sans-serif;

$font_size_b: 1.4rem;
	$font_size_xl: 2rem;
	$font_size_l: 1.7rem;
	$font_size_m: 1.5rem;
	$font_size_s: 1.3rem;
	$font_size_xs: 1.2rem;
	$font_size_xxs: 1.0rem;
	$font_size_xxxs: 0.8rem;

$line_height_b: 1.4em;
	$line_height_xxs: 1em;
	$line_height_xs: 1.2em;
	$line_height_s: 1.3em;
	$line_height_m: 1.6em;

$font_weight_b: 400;
	$font_weight_light: 300;
	$font_weight_mediumbold: 500;
	$font_weight_bold: 600;
	$font_weight_extrabold: 700;


/* Border */
$border_b: 1px;


/* Radius */
$radius_b: 25px;
	$radius_s: 20px;


/* Spacing */
$spacing_b: 2rem;
	$spacing_s: $spacing_b - 0.4rem;
	$spacing_xs: $spacing_s - 0.4rem;
	$spacing_xxs: $spacing_xs - 0.4rem;
	$spacing_xxxs: $spacing_xxs - 0.5rem;
	$spacing_m: $spacing_b + 0.4rem;
	$spacing_l: $spacing_m + 0.4rem;
	$spacing_xl: $spacing_l + 0.4rem;
	$spacing_xxl: $spacing_xl + 0.4rem;
	$spacing_xxxl: $spacing_xxl + 0.4rem;


/* Transition */
$transition_duration: 0.25s;


/* Breakpoints */
$width_desktop: 1024px;
$width_tablet: 768px;
$width_mobile: 480px;