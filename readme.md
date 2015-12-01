# Get started with Idris online tools

* [Example use cases](#use-cases)
* [Do you have Geodata ?](#geodata)
* [The tools](#tools)

<a name="use-cases"></a>
## Example use cases

* [Put all your company's branches on a map on your website](/use-case-1)

<img src="/img/use_case_1.png" alt="" width="200" />

* [Make a population density map of Switerland](/use-case-2)

<img src="/img/use_case_2.png" alt="" width="200" />

<a name="geodata"></a>
## Do you have geodata ?

### Yes

If it is a [GeoJSON](https://en.wikipedia.org/wiki/GeoJSON) file. You can make a map now. 

* Create an [image](../image-map)
* Or a [zoomable map](../zoomable-map)

If your geodata is stored as [WKT](https://en.wikipedia.org/wiki/Well-known_text), [GPX](https://en.wikipedia.org/wiki/GPS_Exchange_Format) or [SHP](https://en.wikipedia.org/wiki/Shapefile), convert it to [GeoJSON](https://en.wikipedia.org/wiki/GeoJSON) with our [converter](../convert)

### No, what is that ?

Geodata is a set of points, lines or polygons placed on a 2D surface with coordinates, generally defined as latitude and longitude. You will need some to make a map.

Geodata comes in a lot of different formats. It is mostly stored in databases but can be stored in files as well. For use in browsers geodata comes in [GeoJSON](https://en.wikipedia.org/wiki/GeoJSON), that is the format used in our tools.

**Where can I get geodata ?**

There are plenty of ressources online. The main one being [Open street map](https://www.openstreetmap.org), often presented as the wikipedia of geodata. You can extract some with the help of [Overpass turbo](http://overpass-turbo.eu/). 

We have prepared some data sets to get you started. You can find them [here](https://github.com/idris-maps/idris-geodata). As of writing we have polygons of the worlds countries, european NUTS2 regions and swiss cantons and communes.

If you need other administrative areas, check out [Mapzen borders](https://mapzen.com/data/borders/). They have Open Street Map extracts of administrative areas by country in GeoJSON.

If you have a list of adresses for which you want to find the coordinates, there are many [geocoding tools](https://www.google.ch/search?q=batch+geocoding) online. They often use Google Maps. To convert the result to GeoJSON, you can copy-paste it in our [converter](../convert). Check out our example for a [tutorial](/use-case-1) on how to do that.

<a name="tools"></a>
## The tools

### Map image

<img src="/img/tool-map-image.png" width="250" />

Create a [SVG](https://en.wikipedia.org/wiki/Scalable_Vector_Graphics) image from [GeoJSON](https://en.wikipedia.org/wiki/GeoJSON) files.

[Link](http://www.idris-maps.com/tools/image-map)

[Docs](/image-map)

### Zoomable map

<img src="/img/tool-zoomable-map.png" width="250" />

An easy way to integrate a [Leaflet](http://leafletjs.com/) map to your website. Creates a script including your data and styles. The easiest way to show your users a map.

[Link](http://www.idris-maps.com/tools/zoomable-map)

[Docs](/zoomable-map)

### Draw a map

<img src="/img/tool-draw.png" width="250" />

Draw on a black and white background map and download the result as a [GeoJSON](https://en.wikipedia.org/wiki/GeoJSON) file.

[Link](http://www.idris-maps.com/tools/draw-map)

[Docs](/draw-map)

### Convert

<img src="/img/tool-converter.png" width="250" />

Convert [GPX](https://en.wikipedia.org/wiki/GPS_Exchange_Format), [CSV](https://en.wikipedia.org/wiki/Comma-separated_values) and [SHP](https://en.wikipedia.org/wiki/Shapefile) files to [GeoJSON](https://en.wikipedia.org/wiki/GeoJSON)

[Link](http://www.idris-maps.com/tools/convert)

[Docs](/convert)

### Edit GeoJSON

<img src="/img/tool-query.png" width="250" />

Edit [GeoJSON](https://en.wikipedia.org/wiki/GeoJSON) files. 

Add, update and remove properties. 

Select features by property or by bounding box.

[Link](http://www.idris-maps.com/tools/convert)

[Docs](/query)


