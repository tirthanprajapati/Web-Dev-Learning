var lon=0,lat=0;
var url=`https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=${lat,lon}&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;&output=embed`
const askip=()=>
{
    $.getJSON("https://ipgeolocation.abstractapi.com/v1/?api_key=e4c975950903435a8f9cd44b76fcb1d9", function(data) {
        console.log(data.ip_address);
        console.log(data.country);
        console.log(data.longitude);
        console.log(data.latitude);
        console.log(data.city);
        lat = data.latitude;
        lon = data.longitude;
   })
}


function clk()
{
    askip()
    document.querySelector('iframe').setAttribute("src",url);
    document.getElementsByClassName("gmap_canvas").setAttribute(src ,url)
}