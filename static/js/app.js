//------Model------//
var Model = {
	mapParams: {
		lat: ko.observable(40.7413549),
		lng: ko.observable(-73.9980244),
		zoom: ko.observable(10)
	},

	mapStyles: ko.observableArray([
		{
			"elementType": "geometry",
			"stylers": [
			{
				"color": "#ebe3cd"
			}
			]
		},
		{
			"elementType": "labels.text.fill",
			"stylers": [
			{
				"color": "#523735"
			}
			]
		},
		{
			"elementType": "labels.text.stroke",
			"stylers": [
			{
				"color": "#f5f1e6"
			}
			]
		},
		{
			"featureType": "administrative",
			"elementType": "geometry.stroke",
			"stylers": [
			{
				"color": "#c9b2a6"
			}
			]
		},
		{
			"featureType": "administrative.land_parcel",
			"elementType": "geometry.stroke",
			"stylers": [
			{
				"color": "#f9e7cc"
			}
			]
		},
		{
			"featureType": "administrative.land_parcel",
			"elementType": "labels.text.fill",
			"stylers": [
			{
				"color": "#ae9e90"
			}
			]
		},
		{
			"featureType": "landscape.natural",
			"elementType": "geometry",
			"stylers": [
			{
				"color": "#dfd2ae"
			}
			]
		},
		{
			"featureType": "landscape.natural",
			"elementType": "geometry.fill",
			"stylers": [
			{
				"color": "#ddefa7"
			}
			]
		},
		{
			"featureType": "poi",
			"elementType": "geometry",
			"stylers": [
			{
				"color": "#dfd2ae"
			}
			]
		},
		{
			"featureType": "poi",
			"elementType": "labels.text.fill",
			"stylers": [
			{
				"color": "#93817c"
			}
			]
		},
		{
			"featureType": "poi.park",
			"elementType": "geometry.fill",
			"stylers": [
			{
				"color": "#6abb6a"
			}
			]
		},
		{
			"featureType": "poi.park",
			"elementType": "labels.text.fill",
			"stylers": [
			{
				"color": "#447530"
			}
			]
		},
		{
			"featureType": "road",
			"elementType": "geometry",
			"stylers": [
			{
				"color": "#f5f1e6"
			}
			]
		},
		{
			"featureType": "road.arterial",
			"elementType": "geometry",
			"stylers": [
			{
				"color": "#fdfcf8"
			}
			]
		},
		{
			"featureType": "road.highway",
			"elementType": "geometry",
			"stylers": [
			{
				"color": "#f8c967"
			}
			]
		},
		{
			"featureType": "road.highway",
			"elementType": "geometry.stroke",
			"stylers": [
			{
				"color": "#e9bc62"
			}
			]
		},
		{
			"featureType": "road.highway.controlled_access",
			"elementType": "geometry",
			"stylers": [
			{
				"color": "#e98d58"
			}
			]
		},
		{
			"featureType": "road.highway.controlled_access",
			"elementType": "geometry.stroke",
			"stylers": [
			{
				"color": "#db8555"
			}
			]
		},
		{
			"featureType": "road.local",
			"elementType": "labels.text.fill",
			"stylers": [
			{
				"color": "#806b63"
			}
			]
		},
		{
			"featureType": "transit.line",
			"elementType": "geometry",
			"stylers": [
			{
				"color": "#dfd2ae"
			}
			]
		},
		{
			"featureType": "transit.line",
			"elementType": "labels.text.fill",
			"stylers": [
			{
				"color": "#8f7d77"
			}
			]
		},
		{
			"featureType": "transit.line",
			"elementType": "labels.text.stroke",
			"stylers": [
			{
				"color": "#ebe3cd"
			}
			]
		},
		{
			"featureType": "transit.station",
			"elementType": "geometry",
			"stylers": [
			{
				"color": "#dfd2ae"
			}
			]
		},
		{
			"featureType": "water",
			"elementType": "geometry.fill",
			"stylers": [
			{
				"color": "#a8e7ff"
			}
			]
		},
		{
			"featureType": "water",
			"elementType": "labels.text.fill",
			"stylers": [
			{
				"color": "#92998d"
			}
			]
		}
	]),

	locations: ko.observableArray([
		{
			id: 0,
			placeId: 'ChIJsW4-WBZawokR8cljGm_iOb0',
			categories: {
				accomodation: false,
				administrative: false,
				business: true,
				culture: true,
				education: false,
				gastronomy: false,
				green: false,
				health: false,
				sport: false,
				transport: false
			},
			position: {lat: 40.705921, lng: -74.009399},
			title: '55 Wall Street'
		},
		{
			id: 1,
			placeId: 'ChIJDRoxaY9ZwokR-cBKepLVl20',
			categories: {
				accomodation: false,
				administrative: false,
				business: false,
				culture: true,
				education: false,
				gastronomy: false,
				green: false,
				health: false,
				sport: false,
				transport: false
			},
			position: {lat: 40.723584, lng: -73.995152},
			title: "The Basilica of St. Patrick's Old Cathedral"
		},
		{
			id: 2,
			placeId: 'ChIJtcaxrqlZwokRfwmmibzPsTU',
			categories: {
				accomodation: false,
				administrative: false,
				business: true,
				culture: true,
				education: false,
				gastronomy: false,
				green: false,
				health: false,
				sport: false,
				transport: false
			},
			position: {lat: 40.748492, lng: -73.985710},
			title: 'Empire State Building'
		},
		{
			id: 3,
			placeId: 'ChIJb8Jg9pZYwokR-qHGtvSkLzs',
			categories: {
				accomodation: false,
				administrative: false,
				business: false,
				culture: true,
				education: false,
				gastronomy: false,
				green: false,
				health: false,
				sport: false,
				transport: false
			},
			position: {lat: 40.779437, lng: -73.963308},
			title: 'The Metropolitan Museum of Art'
		},
		{
			id: 4,
			placeId: 'ChIJcWnnWiz0wokRCB6aVdnDQEk',
			categories: {
			accomodation: false,
			administrative: false,
				business: false,
				culture: true,
				education: false,
				gastronomy: false,
				green: false,
				health: false,
				sport: true,
				transport: false
			},
			position: {lat: 40.829658, lng: -73.926315},
			title: 'Yankee Stadium'
		},
		{
			id: 5,
			placeId: 'ChIJ5caAZBJawokRj02q_2O8bmo',
			categories: {
				accomodation: false,
				administrative: false,
				business: false,
				culture: false,
				education: false,
				gastronomy: false,
				green: true,
				health: false,
				sport: false,
				transport: false
			},
			position: {lat: 40.703286, lng: -74.017038},
			title: 'Battery Park'
		},
		{
			id: 6,
			placeId: 'ChIJo2E36BNawokRPaOZk3bvUJg',
			categories: {
				accomodation: false,
				administrative: true,
				business: false,
				culture: false,
				education: false,
				gastronomy: false,
				green: false,
				health: false,
				sport: false,
				transport: false
			},
			position: {lat: 40.704001, lng: -74.013691},
			title: 'Alexander Hamilton US Custom House'
		},
		{
			id: 7,
			placeId: 'ChIJIRiJaRRawokR2KyQ984qa-o',
			categories: {
				accomodation: false,
				administrative: false,
				business: false,
				culture: false,
				education: false,
				gastronomy: true,
				green: false,
				health: false,
				sport: false,
				transport: false
			},
			position: {lat: 40.703302, lng: -74.011052},
			title: 'The Dead Rabbit Grossery and Grog'
		},
		{
			id: 8,
			placeId: 'ChIJ60XhdBJawokRp3qEiacubs8',
			categories: {
				accomodation: false,
				administrative: false,
				business: false,
				culture: false,
				education: false,
				gastronomy: true,
				green: false,
				health: false,
				sport: false,
				transport: false
			},
			position: {lat: 40.704424, lng: -74.017918},
			title: 'Pier A Harbour House'
		},
		{
			id: 9,
			placeId: 'ChIJK3VvhRNawokRje7SOro9dA0',
			categories: {
				accomodation: false,
				administrative: false,
				business: false,
				culture: false,
				education: false,
				gastronomy: false,
				green: false,
				health: false,
				sport: false,
				transport: true
			},
			position: {lat: 40.702098, lng: -74.012640},
			title: 'Whitehall St'
		},
		{
			id: 10,
			placeId: 'ChIJlYpIkBBawokRjyd8kYQpUrc',
			categories: {
				accomodation: true,
				administrative: false,
				business: false,
				culture: false,
				education: false,
				gastronomy: false,
				green: false,
				health: false,
				sport: false,
				transport: false
			},
			position: {lat: 40.709532, lng: -74.014614},
			title: 'New York Marriott Downtown'
		},
		{
			id: 11,
			placeId: 'ChIJm4LEJxpawokRHYuOmc08zGw',
			categories: {
				accomodation: false,
				administrative: false,
				business: false,
				culture: false,
				education: false,
				gastronomy: false,
				green: false,
				health: false,
				sport: false,
				transport: true
			},
			position: {lat: 40.711646, lng: -74.011524},
			title: 'World Trade Center'
		},
		{
			id: 12,
			placeId: 'hIJYcHoGyRawokR9rSZ9FTdFMk',
			categories: {
				accomodation: false,
				administrative: true,
				business: false,
				culture: false,
				education: false,
				gastronomy: false,
				green: false,
				health: false,
				sport: false,
				transport: false
			},
			position: {lat: 40.712199, lng: -74.001675},
			title: 'New York City Police Department'
		},
		{
			id: 13,
			placeId: 'ChIJpYoZlyJawokRv65psH6e2pI',
			categories: {
				accomodation: false,
				administrative: false,
				business: false,
				culture: false,
				education: false,
				gastronomy: false,
				green: false,
				health: true,
				sport: false,
				transport: false
			},
			position: {lat: 40.710345, lng: -74.005086},
			title: 'NewYork-Presbyterian/Lower Manhattan Hospital'
		},
		{
			id: 14,
			placeId: 'ChIJ4SOXq5dZwokR2s0Mw0lpx64',
			categories: {
				accomodation: false,
				administrative: false,
				business: false,
				culture: false,
				education: true,
				gastronomy: false,
				green: false,
				health: false,
				sport: false,
				transport: false
			},
			position: {lat: 40.735324, lng: -73.994594},
			title: 'Parsons School of Design'
		}
	]),

	markers: ko.observableArray([]),

	filteredList: ko.observableArray([]),

	categories: ko.observableArray([
		'accomodation',
		'administrative',
		'business',
		'culture',
		'education',
		'gastronomy',
		'green',
		'health',
		'sport',
		'transport'
	]),

	photosList: ko.observableArray([])
}
//------ViewModel------//
var ViewModel = {
	//Initialize a map
	initMap: function() {
		var lat = Model.mapParams.lat();
		var lng = Model.mapParams.lng();
		var map = new google.maps.Map(document.getElementById('map'), {
			center: {lat, lng},
			zoom: Model.mapParams.zoom(),
			styles: Model.mapStyles()
		});
	//Set all markers, infowindows and bounds accordingly
		var bounds = new google.maps.LatLngBounds();
		var defaultIcon = ViewModel.markerIcon();
		Model.locations().forEach(function(loc) {
			//Create markers for all locations
			var marker = new google.maps.Marker ({
				position: loc.position,
				map: map,
				icon: defaultIcon,
				title: loc.title,
				animation: google.maps.Animation.DROP
			});
			//Get places details
			var placesService = new google.maps.places.PlacesService(map);
			//Open info window when marker is clicked
			marker.addListener('click', function(){
				marker.setIcon(ViewModel.selectIcon())
				placesService.getDetails({placeId: loc.placeId}, function(place, status) {
					var infoWindow = ViewModel.populateInfoWindow(place, status, loc.title);
					infoWindow.open(map, marker);
					infoWindow.addListener('closeclick', function() {
						marker.setIcon(ViewModel.markerIcon())
					});
					if (place) {
						if (place.photos) {
							Model.photosList([]);
							place.photos.forEach(function(photo, i) {
								var src = photo.getUrl({maxHeight: 100, maxWidth: 150});
								Model.photosList.push(src)
							})
						};
						ViewModel.wikiCall(place.name)
					}
				})
			});
			Model.markers.push(marker);
			bounds.extend(marker.position);
		})
		map.fitBounds(bounds)
	//Add event listeners for input fields
		//Display filtered markers
		var catList = document.getElementById('categList');
		catList.addEventListener('change', function() {
			var category = catList.value;
			Model.markers().forEach(function(marker) {
			marker.setMap(map);
				Model.locations().forEach(function(loc) {
					if (marker.title === loc.title) {
						if (loc.categories[category] === false) {
							marker.setMap(null)
						}
					}
				})
			});
		//Display filtered locations list
			var locList = document.getElementById('locatList');
			var options = locList.getElementsByTagName('option');
			options[0].selected = 'selected';
			var selected = options[0];
			Array.from(options).slice(1).forEach(function (opt) {
				if (Model.markers()[opt.value].getMap() != null && selected == options[0]) {
					selected = opt
				};
				opt.style.display = 'block';
				if (Model.markers()[opt.value].getMap() == null) {
					opt.style.display = 'none'
				};
			})
		});
		//When location selected zoom on corresponding marker and open an info window
		var locList = document.getElementById('locatList');
		locList.addEventListener('change', function() {
			var lat = Model.locations()[locList.value].position.lat;
			var lng = Model.locations()[locList.value].position.lng;
			map.setCenter({lat: lat, lng: lng});
			map.setZoom(15);
			var placesService = new google.maps.places.PlacesService(map);
			placesService.getDetails({placeId: Model.locations()[locList.value].placeId}, function(place, status) {
				var marker = Model.markers()[locList.value];
				marker.setIcon(ViewModel.selectIcon());
				var infoWindow = ViewModel.populateInfoWindow(place, status, Model.locations()[locList.value].title);
				infoWindow.open(map, marker);
				infoWindow.addListener('closeclick', function() {
						marker.setIcon(ViewModel.markerIcon())
					});
				if (place) {
					if (place.photos) {
						Model.photosList([]);
						place.photos.forEach(function(photo, i) {
							var src = photo.getUrl({maxHeight: 100, maxWidth: 150});
							Model.photosList.push(src)
						})
					};
					ViewModel.wikiCall(place.name)
				}
			})
		});
	//Set autocomplete functionality
		var field = document.getElementById('nameSearch');
		var searchBox = new google.maps.places.SearchBox(field);
		searchBox.setBounds(map.getBounds());
		searchBox.addListener('places_changed', function() {
			var messagesField = document.getElementById('messagesField');
			messagesField.style.display = 'none'
			if (searchBox.getPlaces().length == 0) {
				messagesField.innerHTML = 'No location found matching your request!';
				messagesField.style.display = 'block'
				return
			};
			var place = searchBox.getPlaces()[0]
			var lat = place.geometry.location.lat()
			var lng = place.geometry.location.lng()
			var status = google.maps.places.PlacesServiceStatus.OK
			map.setCenter({lat: lat, lng: lng});
			map.setZoom(15);
			var infoWindow = ViewModel.populateInfoWindow(place, status, place.name);
			if (place) {
				if (place.photos) {
					Model.photosList([]);
					place.photos.forEach(function(photo, i) {
						var src = photo.getUrl({maxHeight: 100, maxWidth: 150});
						Model.photosList.push(src)
					})
				};
				console.log(place.name);
				ViewModel.wikiCall(place.name)
			}
			infoWindow.setPosition({lat: lat, lng: lng});
			infoWindow.open(map)
		});
		map.addListener('bounds_changed', function() {
			searchBox.setBounds(map.getBounds());
		})
	},
	//Create an icon for marker
	//------Marker icon images taken from www.iconarchive.com
	markerIcon: function() {
		var icon = new google.maps.MarkerImage(
			'static/img/red-icon.png',
			new google.maps.Size(42, 42),
			new google.maps.Point(0, 0),
			new google.maps.Point(17, 34),
			new google.maps.Size(42,42));
        return icon;
	},
	// Icon with different color when the marker is selected
	selectIcon: function() {
		var icon = new google.maps.MarkerImage(
			'static/img/point-icon.png',
			new google.maps.Size(54, 54),
			new google.maps.Point(0, 0),
			new google.maps.Point(17, 34),
			new google.maps.Size(54,54));
        return icon;
	},
	//Set content of info window
	populateInfoWindow: function(place, status, title) {
		if (place != null && place.name) {
			var title = '<b>' + place.name + '</b><br>';
		} else {
			var title = '<b>' + title + '</b><br>'
		};
		var address = '';
		var img = '';
		if (status === google.maps.places.PlacesServiceStatus.OK) {
			if (place.formatted_address) {
				var address = '<span>'+place.formatted_address+'</span>'
			};
			if (place.photos) {
				var img = '<img src="'+place.photos[0].getUrl({maxHeight: 150, maxWidth: 200})+'"><br>';
			}
		};
		var infoWindow = new google.maps.InfoWindow({
			content: '<div>'+
					title + img + address +
				'</div>'
		});
		return infoWindow
	},
	//Retrieve information from wikipedia api
	wikiCall: function(title) {
		$.ajax( {
			url: "https://en.wikipedia.org/w/api.php",
			dataType: 'jsonp',
			data: {
				action: "query",
				format: "json",
				prop: "extracts",
				titles: title,
				redirects: true
			},
			success: function(response) {
				var desc = document.getElementById('description');
				desc.innerHTML = '';
				desc.style.height = '0px';
				desc.style.display = 'block';
				var pageId = Object.keys(response.query.pages)[0];
				if (response.query.pages[pageId].extract != undefined) {
					desc.innerHTML = response.query.pages[pageId].extract;
					desc.style.height = '90%'
				} else {
					desc.innerHTML = '<b>'+title+'</b>';
					desc.style.display = 'inline'
				}
			},
			error: function(jqXHR, exception) {
				var message = ''
				if (jqXHR.status == 404) {
					message = 'No Wikipedia article found for this place';
				} else if (jqXHR.status == 500) {
					message = 'There is insternal server error occured';
				} else if (exception === 'timeout') {
					message = 'Connection time out';
				} else if (exception === 'abort') {
					message = 'Request has been aborted';
				} else {
					msg = 'Uncaught Error.\n' + jqXHR.responseText;
				}
				var desc = document.getElementById('description');
				desc.innerHTML = message
			}
		})
	}

}

ko.applyBindings(ViewModel)