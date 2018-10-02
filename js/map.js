function initMap() {
  const waka = {lat: -2.491287, lng: -44.242576}

  const options = {
    zoom: 16,
    center: waka
  }

  const map = new google.maps.Map(
    document.getElementById('map'),
    options
  )

  const marker = new google.maps.Marker({position: waka, map: map})
}