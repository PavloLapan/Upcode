//
// +function ($) {
//
//     'use strict';
//
//     var GoogleMap = function (element, options) {
//         this.element = element ? element : '[data-render=googlemap]';
//         this.options = options ? options : GoogleMap.defaults;
//
//         return this;
//     }
//
//     GoogleMap.prototype.start = function () {
//         var option  = this.options;
//         option.map.center = new google.maps.LatLng(option.map.latitude, option.map.longitude)
//
//         var element = document.getElementById(option.target),
//             render  = new google.maps.Map(element, option.map);
//
//         var marker = new google.maps.Marker({
//             position: new google.maps.LatLng(option.map.latitude, option.map.longitude),
//             map: render,
//             title: option.info.title
//         });
//     };
//
//     GoogleMap.defaults = {
//         // Target Div Selector
//         target: 'map',
//
//         // Map Information
//         info: {
//             description: ' We find top quality vehicles, put them through a rigorous 120-point inspection, and offer them at the absolute lowest prices possible. ',
//             telephone:   '587-293-9009',
//             email:       'accelerateautosales@live.ca',
//             icon:        '',
//             web:         'www.accelerateautosales.com',
//             tel:         'Accelerate Auto Sales'
//         },
//
//         // Map Options
//         map: {
//             latitude:  51.0828781,
//             longitude: -113.9886477,
//             draggable : true,
//             disableDoubleClickZoom: true,
//             mapTypeControl: true,
//             mapTypeControlOptions: {
//                 style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
//             },
//             mapTypeId: google.maps.MapTypeId.ROADMAP,
//             overviewMapControl: false,
//             overviewMapControlOptions: {
//                 opened: false,
//             },
//             panControl: false,
//             scaleControl: false,
//             scrollwheel: false,
//             zoom: 15,
//             zoomControl: true,
//             zoomControlOptions: {
//                 style: google.maps.ZoomControlStyle.LARGE,
//             },
//             // Cobalt Theme
//             styles: [
//                 { 'featureType': 'all',
//                     'elementType': 'all',
//                     'stylers': [
//                         { 'invert_lightness': true },
//                         { 'saturation': 10 },
//                         { 'lightness': 30 },
//                         { 'gamma': 0.5 },
//                         { 'hue': '#435158' }
//                     ]
//                 }
//             ]
//         },
//
//         // Heads Up Display
//         hud: {
//             zoom: 15,
//             panControl: false,
//             zoomControl: false,
//             mapTypeControl: false,
//             scaleControl: false,
//             streetViewControl: false,
//             overviewMapControl: false,
//             scrollwheel: false,
//             disableDoubleClickZoom: true
//         }
//     };
//
//     if ($('#map').length > 0) {
//         var gmap = new GoogleMap();
//
//         google.maps.event.addDomListener(window, 'load', gmap.start());
//     }
//
// }(window.jQuery);
//



// Initialize and add the map
function initMap() {
    // The location of Uluru
    var uluru = {lat: 49.8310, lng: 24.0331};
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 17, center: uluru});
    var mapOptions = {


        // How zoomed in you want the map to start at (always required)
        zoom: 11,
        styles: [
            {
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#242f3e"
                    }
                ]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#746855"
                    }
                ]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#242f3e"
                    }
                ]
            },
            {
                "featureType": "administrative.locality",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#d59563"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#d59563"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#263c3f"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#6b9a76"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#38414e"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#212a37"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9ca5b3"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#746855"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#1f2835"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#f3d19c"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#2f3948"
                    }
                ]
            },
            {
                "featureType": "transit.station",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#d59563"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#17263c"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#515c6d"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#17263c"
                    }
                ]
            }
        ],


        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(40.6700, -73.9400), // New York

        // How you would like to style the map.
        // This is where you would paste any style found on Snazzy Maps.

    };
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: uluru, map: map});
}
