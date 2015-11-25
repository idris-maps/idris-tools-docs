﻿function addMapTo(elementId) { var map = L.map(elementId); var config = {"context":"leaflet","layers":[{"name":"branches","type":"Point","data":{"type":"FeatureCollection","features":[{"type":"Feature","properties":{"id":1,"street":"387 Maple Street","city":"Garner","postal":"NC 27529"},"geometry":{"type":"Point","coordinates":[-78.793845,35.790861]}},{"type":"Feature","properties":{"id":2,"street":"874 Route 11","city":"Stone Mountain","postal":"GA 30083"},"geometry":{"type":"Point","coordinates":[-84.170196,33.808161]}},{"type":"Feature","properties":{"id":3,"street":"289 Cherry Street","city":"East Hartford","postal":"CT 06118"},"geometry":{"type":"Point","coordinates":[-72.579533,41.738361]}},{"type":"Feature","properties":{"id":4,"street":"595 Ivy Court","city":"New Brunswick","postal":"NJ 08901"},"geometry":{"type":"Point","coordinates":[-74.484015,40.537746]}},{"type":"Feature","properties":{"id":5,"street":"27 Forest Avenue","city":"Durham","postal":"NC 27703"},"geometry":{"type":"Point","coordinates":[-78.912603,35.921664]}},{"type":"Feature","properties":{"id":6,"street":"466 Main Street West","city":"Lewiston","postal":"ME 04240"},"geometry":{"type":"Point","coordinates":[-70.210968,44.1069]}},{"type":"Feature","properties":{"id":7,"street":"534 Buckingham Drive","city":"Marysville","postal":"OH 43040"},"geometry":{"type":"Point","coordinates":[-83.367143,40.236449]}},{"type":"Feature","properties":{"id":8,"street":"975 Ann Street","city":"Woonsocket","postal":"RI 02895"},"geometry":{"type":"Point","coordinates":[-71.474584,42.006499]}},{"type":"Feature","properties":{"id":9,"street":"612 Lafayette Street","city":"North Attleboro","postal":"MA 02760"},"geometry":{"type":"Point","coordinates":[-71.324599,41.974749]}},{"type":"Feature","properties":{"id":10,"street":"933 Devon Court","city":"Warner Robins","postal":"GA 31088"},"geometry":{"type":"Point","coordinates":[-83.623366,32.64841]}},{"type":"Feature","properties":{"id":11,"street":"222 Buckingham Drive","city":"Belleville","postal":"NJ 07109"},"geometry":{"type":"Point","coordinates":[-74.195741,40.844666]}},{"type":"Feature","properties":{"id":12,"street":"197 5th Street","city":"Bakersfield","postal":"CA 93306"},"geometry":{"type":"Point","coordinates":[-119.001837,35.361646]}},{"type":"Feature","properties":{"id":13,"street":"22 Hawthorne Avenue","city":"Burlington","postal":"MA 01803"},"geometry":{"type":"Point","coordinates":[-71.17151,42.451253]}},{"type":"Feature","properties":{"id":14,"street":"81 Rose Street","city":"Plymouth","postal":"MA 02360"},"geometry":{"type":"Point","coordinates":[-70.600534,41.823756]}},{"type":"Feature","properties":{"id":15,"street":"651 Willow Lane","city":"Oak Lawn","postal":"IL 60453"},"geometry":{"type":"Point","coordinates":[-87.79476,41.725022]}},{"type":"Feature","properties":{"id":16,"street":"306 Route 9","city":"East Northport","postal":"NY 11731"},"geometry":{"type":"Point","coordinates":[-73.329993,40.878524]}},{"type":"Feature","properties":{"id":17,"street":"487 Bay Street","city":"Louisville","postal":"KY 40207"},"geometry":{"type":"Point","coordinates":[-85.836208,38.29252]}},{"type":"Feature","properties":{"id":18,"street":"117 Valley View Drive","city":"Arlington Heights","postal":"IL 60004"},"geometry":{"type":"Point","coordinates":[-112.071693,33.365904]}},{"type":"Feature","properties":{"id":19,"street":"859 10th Street","city":"Seattle","postal":"WA 98144"},"geometry":{"type":"Point","coordinates":[-122.320245,47.626783]}},{"type":"Feature","properties":{"id":20,"street":"83 Sunset Drive","city":"Romulus","postal":"MI 48174"},"geometry":{"type":"Point","coordinates":[-83.443219,42.218728]}},{"type":"Feature","properties":{"id":21,"street":"402 Cobblestone Court","city":"Hamtramck","postal":"MI 48212"},"geometry":{"type":"Point","coordinates":[-83.049644,42.392815]}},{"type":"Feature","properties":{"id":22,"street":"428 Morris Street","city":"Hollywood","postal":"FL 33020"},"geometry":{"type":"Point","coordinates":[-122.661242,45.544648]}},{"type":"Feature","properties":{"id":23,"street":"430 Morris Street","city":"Hollywood","postal":"FL 33020"},"geometry":{"type":"Point","coordinates":[-122.661223,45.544648]}},{"type":"Feature","properties":{"id":24,"street":"462 Lilac Lane","city":"Lemont","postal":"IL 60439"},"geometry":{"type":"Point","coordinates":[-87.94652,41.717373]}},{"type":"Feature","properties":{"id":25,"street":"822 Green Street","city":"Portland","postal":"ME 04103"},"geometry":{"type":"Point","coordinates":[-70.371486,43.672556]}},{"type":"Feature","properties":{"id":26,"street":"388 Oxford Road","city":"Greenfield","postal":"IN 46140"},"geometry":{"type":"Point","coordinates":[-73.180563,41.344712]}},{"type":"Feature","properties":{"id":27,"street":"930 Route 29","city":"Trussville","postal":"AL 35173"},"geometry":{"type":"Point","coordinates":[-86.667099,33.656151]}},{"type":"Feature","properties":{"id":28,"street":"112 Orange Street","city":"Amsterdam","postal":"NY 12010"},"geometry":{"type":"Point","coordinates":[-74.193949,42.944148]}},{"type":"Feature","properties":{"id":29,"street":"540 Street Road","city":"Matthews","postal":"NC 28104"},"geometry":{"type":"Point","coordinates":[-80.714359,35.117558]}},{"type":"Feature","properties":{"id":30,"street":"616 Glenwood Drive","city":"Norwalk","postal":"CT 06851"},"geometry":{"type":"Point","coordinates":[-73.428138,41.1082]}},{"type":"Feature","properties":{"id":31,"street":"699 Franklin Avenue","city":"Orchard Park","postal":"NY 14127"},"geometry":{"type":"Point","coordinates":[-78.829831,42.824896]}},{"type":"Feature","properties":{"id":32,"street":"390 Walnut Street","city":"Greensboro","postal":"NC 27405"},"geometry":{"type":"Point","coordinates":[-79.774694,36.093342]}},{"type":"Feature","properties":{"id":33,"street":"380 5th Street East","city":"Fort Worth","postal":"TX 76110"},"geometry":{"type":"Point","coordinates":[-97.328584,32.754909]}},{"type":"Feature","properties":{"id":34,"street":"613 Spruce Avenue","city":"North Augusta","postal":"SC 29841"},"geometry":{"type":"Point","coordinates":[-81.97114,33.540351]}},{"type":"Feature","properties":{"id":35,"street":"840 Locust Street","city":"Sandusky","postal":"OH 44870"},"geometry":{"type":"Point","coordinates":[-82.747685,40.771706]}},{"type":"Feature","properties":{"id":36,"street":"324 Laurel Street","city":"Flemington","postal":"NJ 08822"},"geometry":{"type":"Point","coordinates":[-74.81756,40.562751]}},{"type":"Feature","properties":{"id":37,"street":"214 East Street","city":"Bangor","postal":"ME 04401"},"geometry":{"type":"Point","coordinates":[-68.791826,44.799023]}},{"type":"Feature","properties":{"id":38,"street":"399 Laurel Street","city":"Hampton","postal":"VA 23666"},"geometry":{"type":"Point","coordinates":[-76.342432,37.04026]}},{"type":"Feature","properties":{"id":39,"street":"44 Windsor Drive","city":"Howell","postal":"NJ 07731"},"geometry":{"type":"Point","coordinates":[-74.223047,40.153916]}},{"type":"Feature","properties":{"id":40,"street":"564 Durham Court","city":"Michigan City","postal":"IN 46360"},"geometry":{"type":"Point","coordinates":[-87.000629,41.678525]}},{"type":"Feature","properties":{"id":41,"street":"26 Cedar Street","city":"Duarte","postal":"CA 91010"},"geometry":{"type":"Point","coordinates":[-118.001056,34.15425]}},{"type":"Feature","properties":{"id":42,"street":"817 Orchard Avenue","city":"Peoria","postal":"IL 61604"},"geometry":{"type":"Point","coordinates":[-89.581055,40.655608]}},{"type":"Feature","properties":{"id":43,"street":"58 Summit Street","city":"Natick","postal":"MA 01760"},"geometry":{"type":"Point","coordinates":[-71.343578,42.291615]}},{"type":"Feature","properties":{"id":44,"street":"261 Center Street","city":"Colorado Springs","postal":"CO 80911"},"geometry":{"type":"Point","coordinates":[-104.819341,38.803561]}},{"type":"Feature","properties":{"id":45,"street":"248 Hudson Street","city":"Chevy Chase","postal":"MD 20815"},"geometry":{"type":"Point","coordinates":[-81.12817,32.065741]}},{"type":"Feature","properties":{"id":46,"street":"454 Heritage Drive","city":"Knoxville","postal":"TN 37918"},"geometry":{"type":"Point","coordinates":[-84.167884,35.884765]}},{"type":"Feature","properties":{"id":47,"street":"416 Bridle Lane","city":"Harlingen","postal":"TX 78552"},"geometry":{"type":"Point","coordinates":[-97.763402,26.186275]}},{"type":"Feature","properties":{"id":48,"street":"626 Pine Street","city":"Oakland Gardens","postal":"NY 11364"},"geometry":{"type":"Point","coordinates":[-73.744283,40.767601]}},{"type":"Feature","properties":{"id":49,"street":"503 Country Lane","city":"Mahopac","postal":"NY 10541"},"geometry":{"type":"Point","coordinates":[-73.723658,41.361308]}},{"type":"Feature","properties":{"id":50,"street":"712 Cedar Street","city":"Oswego","postal":"NY 13126"},"geometry":{"type":"Point","coordinates":[-76.41439,43.309398]}}]},"style":{"fill":"#B24F3F","fill-opacity":0.5,"stroke":"#B24F3F","stroke-opacity":1,"stroke-width":1,"r":10},"label":{"property":"city","style":{"font-size":10,"font-family":"sans-serif","text-anchor":"middle"}}}],"tiles":{"name":"NASA_night","url":"http://map1.vis.earthdata.nasa.gov/wmts-webmerc/VIIRS_CityLights_2012/default/{time}/{tilematrixset}{maxZoom}/{z}/{y}/{x}.{format}","attribution":"Imagery provided by services from the Global Imagery Browse Services (GIBS), operated by the NASA/GSFC/Earth Science Data and Information System (<a href=\"https://earthdata.nasa.gov\">ESDIS</a>) with funding provided by NASA/HQ.","bounds":[[-85.0511287776,-179.999999975],[85.0511287776,179.999999975]],"minZoom":1,"maxZoom":8,"format":"jpg","time":"","tilematrixset":"GoogleMapsCompatible_Level"}}; drawLayers(map, function(firstLayer) { if(config.tiles !== undefined) { var t = config.tiles; var attrs = []; for(k in t) { if(k !== "name" && k !== "url") { attrs.push(k) } }; var  tileConfig = {}; for(i=0;i<attrs.length;i++) { tileConfig[attrs[i]] = t[attrs[i]] }; L.tileLayer(t.url, tileConfig).addTo(map)};if(config.center !== undefined) { var x = config.center; map.setView([x.lat,x.lng], x.zoom) } else {if(firstLayer === undefined) {map.setView([0,0], 3);} else {map.fitBounds(firstLayer.getBounds())}}});function reset(map, callback) {map.eachLayer(function(layer) {map.removeLayer(layer)});callback()};function drawLayers(map, callback) {var layers = config.layers;var first = undefined;for(i=0;i<layers.length;i++) { var defaultStyle = layers[i].style; var styleByProp = layers[i].styleByProp; var label = layers[i].label; function style(feature) { return {fillColor: getStyle(feature, "fill", defaultStyle, styleByProp),fillOpacity: getStyle(feature, "fill-opacity", defaultStyle, styleByProp),weight: getStyle(feature, "stroke-width", defaultStyle, styleByProp),opacity: getStyle(feature, "stroke-opacity", defaultStyle, styleByProp),color: getStyle(feature, "stroke", defaultStyle, styleByProp)}}function onEachFeature(feature, layer) {if(label !== undefined) {if (feature.properties && feature.properties[layers[i].label.property]) {layer.bindPopup(feature.properties[layers[i].label.property])}}}; var layer = L.geoJson(layers[i].data.features, {style: style, onEachFeature: onEachFeature}).addTo(map); if(i===0) { first = layer }}callback(first)}; function getStyle(f, attr, style, byProp) { var sbp = null; if(byProp !== undefined) { for(i=0;i<byProp.length;i++) { if(byProp[i].attr === attr) {sbp = byProp[i];break;}}}; if(sbp === null) { return style[attr] } else { var val = style[attr]; for(j=0;j<sbp.values.length;j++) { if(sbp.values[j].propVal === f.properties[sbp.property]) { val = sbp.values[j].attrVal}} return val }}}