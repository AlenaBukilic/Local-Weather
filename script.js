$(document).ready(function(){
  var date = new Date();
  var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var today = days[date.getDay()];
  var todayDate = date.getDate();
  var month = months[date.getMonth()];

  $(".date").html(today + ', ' + todayDate + ' ' + month);
  
	var lat;
	var long;
	var api;
	if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
		lat = position.coords.latitude;
		long = position.coords.longitude;
		
		$("#cel").show(function(){
			api = "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/b4589d3103ef8f98b1a9dfda01cee532/"+lat+","+long+"?units=si";
		$.getJSON(api,function(data){
		$(".temp" ).html(data.currently.temperature.toFixed(0)+ "&#8451;");
      $(".summary" ).html(data.currently.summary);
      $(".timezone").html(data.timezone);
      if (data.currently.icon == "clear-day") {
				$(".icon").html('<img src="http://www.pd.astro.it/meteo/icone/sole.png">');
      }
      else if(data.currently.icon == "clear-night") {
        $(".icon").html('<img src="http://www.hohwacht-online.de/back/night.png">');
      }
      else if(data.currently.icon == "rain"){
        $(".icon").html('<img src="http://www.cumbriacrack.com/wp-content/themes/stylebook/timthumb.php?src=http%3A%2F%2Fwww.cumbriacrack.com%2Fwp-content%2Fuploads%2F2012%2F12%2Frain-logo.png&q=90&w=795&zc=1">');
      }
      else if(data.currently.icon == "snow") {
        $(".icon").html('<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Weather-snow.svg/2000px-Weather-snow.svg.png">');
      }
      else if (data.currently.icon == "cloudy"){
        $(".icon").html('<img src="http://www.xlcarp.com/templates/default/assets/weather/partlycloudy.png">');
      }
      else if(data.currently.icon == "partly-cloudy-day") {
        $(".icon").html('<img src="http://vignette2.wikia.nocookie.net/necyklopedia/images/d/d2/04Gnome-weather-few-clouds.png/revision/latest?cb=20120910154638&path-prefix=sk">');
      }
      else if(data.currently.icon == "partly-cloudy-night") {
        $(".icon").html('<img src="http://icons.iconarchive.com/icons/large-icons/large-weather/256/cloudy-night-icon.png">');
      }
   });
		});
    $("#cel").click(function(){
			api = "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/b4589d3103ef8f98b1a9dfda01cee532/"+lat+","+long+"?units=si";
		$.getJSON(api,function(data){
		$(".temp" ).html(data.currently.temperature.toFixed(0)+ "&#8451;");
      $(".summary" ).html(data.currently.summary);
      $(".timezone").html(data.timezone);
      if (data.currently.icon == "clear-day") {
				$(".icon").html('<img src="http://www.pd.astro.it/meteo/icone/sole.png">');
      }
      else if(data.currently.icon == "clear-night") {
        $(".icon").html('<img src="http://www.hohwacht-online.de/back/night.png">');
      }
      else if(data.currently.icon == "rain"){
        $(".icon").html('<img src="http://www.cumbriacrack.com/wp-content/themes/stylebook/timthumb.php?src=http%3A%2F%2Fwww.cumbriacrack.com%2Fwp-content%2Fuploads%2F2012%2F12%2Frain-logo.png&q=90&w=795&zc=1">');
      }
      else if(data.currently.icon == "snow") {
        $(".icon").html('<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Weather-snow.svg/2000px-Weather-snow.svg.png">');
      }
      else if (data.currently.icon == "cloudy"){
        $(".icon").html('<img src="http://www.xlcarp.com/templates/default/assets/weather/partlycloudy.png">');
      }
      else if(data.currently.icon == "partly-cloudy-day") {
        $(".icon").html('<img src="http://vignette2.wikia.nocookie.net/necyklopedia/images/d/d2/04Gnome-weather-few-clouds.png/revision/latest?cb=20120910154638&path-prefix=sk">');
      }
      else if(data.currently.icon == "partly-cloudy-night") {
        $(".icon").html('<img src="http://icons.iconarchive.com/icons/large-icons/large-weather/256/cloudy-night-icon.png">');
      }
   });
		});
    
    $("#far").click(function(){
     api = "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/b4589d3103ef8f98b1a9dfda01cee532/"+lat+","+long+"?units=us"; 
      $.getJSON(api, function(data){
        $(".temp").html(data.currently.temperature.toFixed(0)+"&#8457;");
        $(".summary").html(data.currently.summary);
         $(".timezone").html(data.timezone);
        if (data.currently.icon == "clear-day") {
				$(".icon").html('<img src="http://www.pd.astro.it/meteo/icone/sole.png">');
      }
      else if(data.currently.icon == "rain"){
        $(".icon").html('<img src="http://www.cumbriacrack.com/wp-content/themes/stylebook/timthumb.php?src=http%3A%2F%2Fwww.cumbriacrack.com%2Fwp-content%2Fuploads%2F2012%2F12%2Frain-logo.png&q=90&w=795&zc=1">');
      }
      else if(data.currently.icon == "snow") {
        $(".icon").html('<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Weather-snow.svg/2000px-Weather-snow.svg.png">');
      }
      else if (data.currently.icon == "cloudy"){
        $(".icon").html('<img src="http://www.xlcarp.com/templates/default/assets/weather/partlycloudy.png">');
      }
        else if(data.currently.icon == "partly-cloudy-day") {
        $(".icon").html('<img src="http://vignette2.wikia.nocookie.net/necyklopedia/images/d/d2/04Gnome-weather-few-clouds.png/revision/latest?cb=20120910154638&path-prefix=sk">');
      }
      });
    });
});
};	
});