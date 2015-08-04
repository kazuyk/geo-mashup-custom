# geo-mashup-custom
Some private updates for Geo Mashup (WordPress plugin)

---

##Custom Markers

現在のGeo Mashupの30x36ピクセルのマーカーの代わりに、以前の12x20ピクセルマーカーを使うためのファイルです。

###Files

-custom.js

###How to use
1. Install and activate [Geo Mashup Custom plugin](http://wordpress-geo-mashup.googlecode.com/files/geo-mashup-custom-1.0.zip).
2. Upload 'custom.js' to the 'geo-mashup-custom' directory under wp-content/plugins.

###History

2015.7.13: kazuyk: "obj.terms.category.length" may cause an error if you assign custom taxonomies for the posts. Conditional clause changed.

2015.7.1: kazuyk: GeoMashup.addAction( 'singleMarkerOptions', function() {} ) in the original code did not work. '.icons' in each line of the function should be removed.

original: [WordPress Geo Mashup Mapstraction Custom Markers]http://snipplr.com/view/64680/wordpress-geo-mashup-mapstraction-custom-markers/

