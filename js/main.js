let map;
function initMap() {
    const loc={lat:42.364168 ,lng: -71.46828};
    const map = new google.maps.Map(document.querySelector('.map')
    , {
    center: loc,
    zoom: 14,
  });
    const marker=new google.maps.Marker({position:loc ,map:map});
}
$('#navbar a').on('click', function(event) {
    if (this.hash !== '') {
      event.preventDefault();
  
      const hash = this.hash;
  
      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top - 100
        },
        800
      );
    }
  });
  window.addEventListener('scroll', function() {
    if (window.scrollY > 150) {
      document.querySelector('#navbar').style.opacity = 0.9;
    } else {
      document.querySelector('#navbar').style.opacity = 1;
    }
  });
