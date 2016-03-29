<?php

$productNames = array("Nimhome", "Tough Zozdax", "Tris Sontrax", "Zer-Flex", "Dripdom", "Ozer-La", "Lamcof", "Qvofix", "Triocof", "Inzap", "Stockair", "Zum Keyron", "Ancom", "Treslotstrong", "Techtop", "Voltphase", "Jayeco", "Vivaair", "Tresdamfresh", "Goldenlex", "Donnix", "Bamtone", "Zotjob", "Hay Plus", "Betatip", "Physdex", "Statcom", "Biootcof", "Fresh Traxzap", "Ozerin", "Latphase", "Ontomattax", "Zummaflex", "Zoomlight", "Grave Eco");

/**
 * This function is used to display products
 * for the serverside paging webservice.
 **/
$skip = 0;
if (isset($_GET['skip'])) {
    $skip  = intval($_GET['skip']);
}
$limit = 12;
if (isset($_GET['limit'])) {
    $limit = intval($_GET['limit']);
    if ($limit > 12 || $limit < 1) {
        $limit = 12;
    }
}

header('Content-type: application/json');
header('Access-Control-Allow-Origin: *');

echo '{';
echo '  "total": '.sizeof($productNames).',';
echo '  "products": [';
for ($i = $skip; ($i - $skip < $limit) && ($i < sizeof($productNames)); $i++ ) {
    echo '{';
    echo '  "id": '.$i.',';
    echo '  "name": "'.$productNames[$i].'",';
    echo '  "url": "images/'.sprintf("%02d", $i + 1).'.jpg"';
    echo '}';
    if ($i - $skip < $limit - 1 && $i < sizeof($productNames) - 1) {
        echo ',';
    }
}
echo '  ]';
echo '}';

?>

