var PAGES = ['accueil', 'formules', 'trouver', 'contact'];
var LINKS = $('#links').children('li:not(li.nav-header)');

var displayPage = function(page, target) {
  target = $(target);
  for (var i=0; i<LINKS.length; i++) {
    $(LINKS[i]).removeClass("active");
  }
  for (var i=0; i<PAGES.length; i++) {
    var link = $('#'+PAGES[i])
    if (PAGES[i] == page) {
      link.css('display', 'block');
      target.parent().addClass("active");
    } else {
      link.css('display', 'none');
    }
  }
}

var loadMap = function() {
  var canvas = $('#map_canvas');
  var container = canvas.parent();
  canvas.css('width', container.css('width'));

  var center = new google.maps.LatLng(48.9092, 2.389);
  var mapOptions = {
    center: center,
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.ROADMAP
    
  };
  var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
  var markerOptions = {
    position: center,
    map: map
  }
  var marker = new google.maps.Marker(markerOptions);

  google.maps.event.addListener(map, 'click', function() { console.log(map.getBounds()); });
}

var sendMessage = function(formId) {
}

var resetForm = function(formId) {
  var form = $('#'+formId);
  var inputs = form.find('input');
  var textareas = form.find('textarea');
  for (var i=0; i<inputs.length; i++) {
    $(inputs[i]).val('');
  }
  for (var i=0; i<inputs.length; i++) {
    $(inputs[i]).val('');
  }
}
