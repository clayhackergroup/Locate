// Get location button
const getLocationButton = document.getElementById('get-location');

// Location data container
const locationDataContainer = document.getElementById('location-data');

// Get location function
function getLocation() {
  // Check if geolocation is supported
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      // Save location data to database
      fetch('save_location.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `latitude=${latitude}&longitude=${longitude}`
      })
      .then(response => response.text())
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error(error);
      });

      // Display location data
      locationDataContainer.innerHTML = `
             `;
    });
  } else {
    locationDataContainer.innerHTML = 'Geolocation is not supported by this browser.';
  }
}

// Add event listener to get location button
getLocationButton.addEventListener('click', getLocation);



// Save location data to file
fetch('save_location.php', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  body: `latitude=${latitude}&longitude=${longitude}`
})
.then(response => response.text())
.then(data => {
  console.log(data);
})
.catch(error => {
  console.error(error);
});




// Get device information using JavaScript
var device_info = {
    'screen_resolution': window.screen.width + 'x' + window.screen.height,
    'browser_type': navigator.userAgent,
};

// Send device information to PHP script using AJAX
$.ajax({
    type: 'POST',
    url: 'device_info.php',
    data: device_info,
    success: function(data) {
        console.log(data);
    }
});
