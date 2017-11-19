<?php
$or= @$_GET["or"];
$ds= @$_GET["ds"];
$txtQ =file_get_contents("https://maps.googleapis.com/maps/api/distancematrix/json?origins=$or&destinations=$ds&key=AIzaSyDn6_X7PP9sDlrDzZ8O1pGiKaIRmmy3ltU");
echo $txtQ;



