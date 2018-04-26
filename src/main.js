var $svg = $(".wavy");

console.log($svg.height());

$svg.css({"top" : -$svg.height()});
$( window ).resize(function() {
	$svg.css({"top" : -$svg.height()});
});