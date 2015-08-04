/* 
Original: WordPress Geo Mashup Mapstraction Custom Markers
(http://snipplr.com/view/64680/wordpress-geo-mashup-mapstraction-custom-markers/)

2015.7.1 kazuyk: GeoMashup.addAction( 'singleMarkerOptions', function() {} ) in the original code did not work. '.icons' in each line of the function should be removed.

2015.7.13 kazuyk: "obj.terms.category.length" may cause an error if you assign custom taxonomies for the posts. Conditional clause changed.

*/

(function() {
 
	GeoMashup.addAction( 'colorIcon', function( properties, icon, color_name ) {
		// For single category icons use the Geo Mashup color icon names, 
		// but the 24x24 ones in the custom image directory
		icon.image = properties.custom_url_path + '/images/mm_20_' + color_name + '.png';
		icon.iconShadow = '';
		icon.iconSize = [ 24, 24 ];
		icon.iconAnchor = [ 12, 24 ];
		icon.iconInfoWindowAnchor = [ 12, 1 ];
	} );
 
	GeoMashup.addAction( 'objectIcon', function( properties, obj ) {

//	  if ( obj.terms.category.length == 0 ) {
	  jQuery.each( obj.terms, function( taxonomy, terms ) {

	    if ( terms.length == 0) {

	      // When there are no categories - mm_20_uncategorised.png
	      obj.icon.image = properties.custom_url_path + '/images/mm_20_white.png';
	      obj.icon.iconShadow = '';
	      obj.icon.iconSize = [ 24, 24 ];
	      obj.icon.iconAnchor = [ 12, 24 ];
	      obj.icon.iconInfoWindowAnchor = [ 12, 1 ];
 
//	    } else if ( obj.terms.category.length > 1 ) {
	    } else if ( terms.length > 1 ) {

	      // When there is more than one category - mm_20_mixed.png
	      obj.icon.image = properties.custom_url_path + '/images/mm_20_mixed.png';
	      obj.icon.iconShadow = '';
	      obj.icon.iconSize = [ 24, 24 ];
	      obj.icon.iconAnchor = [ 12, 24 ];
	      obj.icon.iconInfoWindowAnchor = [ 12, 1 ];

		}
	  });

	});
 
	GeoMashup.addAction( 'multiObjectMarker', function( properties, marker ) {
 
		// When there is more than one marker assigned to the same location - mm_20_plus.png
		marker.setIcon( properties.custom_url_path + '/images/mm_20_plus.png' );
 
	} );
 
	GeoMashup.addAction( 'singleMarkerOptions', function ( properties, marker_opts ) {
 
		// When the map is a single object map with just one marker
		marker_opts.image = properties.custom_url_path + '/images/mm_20_red.png';
		marker_opts.iconShadow = '';
		marker_opts.iconSize = [ 24, 24 ];
		marker_opts.iconAnchor = [ 12, 24 ];
		marker_opts.iconInfoWindowAnchor = [ 12, 1 ];
 
	} );
 
	GeoMashup.addAction( 'glowMarkerIcon', function( properties, glow_options ) {
	    glow_options.icon = properties.custom_url_path + '/images/mm_20_glow.png';
	    glow_options.iconSize = [ 22, 30 ];
	    glow_options.iconAnchor = [ 11, 27 ];
	} );


}());