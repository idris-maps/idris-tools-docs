# Idris zoomable map

<img src="/img/tool-zoomable-map.png" alt="Idris zoomable map" width="250" />

Documentation for the [Idris zoomable map](http://www.idris-maps.com/tools/zoomable-map) online tool

Read more about how to get started with our online-tools [here](https://github.com/idris-maps/idris-tools-docs/tree/master/get-started)

## Purpose

Use this tool to easily integrate a zoomable map to your website. 

Style the data with this tool and download a script containing the data and styles.

## How to

### Add a layer

Your data layer has to be in the form of a GeoJSON file. If your geodata is in another format, convert it with our online [converter](http://www.idris-maps.com/tools/convert). If you have no geodata, the [getting started](https://github.com/idris-maps/idris-tools-docs/tree/master/get-started) section has a few tips on where to get some.

Once you have a GeoJSON file, just drop it in the designatd area.

To add another layer, click the **Add layer** button

<img src="/img/icon-add.png" width="50" />

### Style the data

Click the **Style** button

<img src="/img/icon-bucket.png" width="50" />

Choose layer to style

#### Set default style

Settigs depend on the geometry type

**Lines**

* FILL: the color of the polygon created by the line. Default is **none**, it is line not a polygon.
* STROKE: the color of the line. Must be a valid [HTML color](https://en.wikipedia.org/wiki/Web_colors)
* STROKE-OPACITY: a number between 0 (0% or invisible) and 1 (100%)
* STROKE-WIDTH: the width of the line in pixels

**Polygons**

* FILL: the color of the inside of the polygon. Must be a valid [HTML color](https://en.wikipedia.org/wiki/Web_colors)
* FILL-OPACITY: a number between 0 (0% or invisible) and 1 (100%)
* STROKE: the color of the border. Must be a valid [HTML color](https://en.wikipedia.org/wiki/Web_colors)
* STROKE-OPACITY: a number between 0 (0% or invisible) and 1 (100%)
* STROKE-WIDTH: the width of the outer border in pixels

#### Add labels

This is only possible with points

* Click the **Style** button and choose a point layer
* Click on **Labels**
* Choose the property that should be displayed
* Choose the font family and font size

#### Style by property

* Click the **Style** button and choose a point layer
* Click on **Style by property**
* Choose the property according to which you want to style the layer
* Choose style attribute (the ones described above)
* Choose method: 
	* by scale (only useable with numeric properties): style will be calculated (see below)
	* by property: fill in style for every value

If you choose to style by scale, you will asked for the type of scale

* **Sequential**: you define the style value for the minimum and maximum values of the chosen property. Everything in between will be calculated. For example, if you put **yellow** as fill color for the minimum and **red** for the maximum, anything in between will be a shade of orange.
* **Diverging**: same as sequential but you also specify a value for the median value of the chosen property

### Center the map

By default the center is set to fit the first layer.

You can set the longitude, latitude and zoom level of the center manually by clicking the **Center** button

<img src="/img/icon-canvas.png" width="50" />

### Background map

Click on the **Tiles** button to choose a tile service provider and click **Add tile service**

<img src="/img/icon-canvas.png" width="50" />

### Get the script to add to your website

* Click the **Script** button

<img src="/img/icon-script.png" alt="" width="50" />

* Download the script
* Open the HTML page to which you want to add the map
* Add the links to [LeafletJS](http://leafletjs.com/) script and CSS as well as a link to the downloaded script in the head of your HTML. You can copy the links from the **Script** screen

<img src="/img/screenshot-2.png" alt="" width="250" />

* In your HTML add a ```<div>``` where you want to have the map. It needs to have an ID and a defined height. If no height is specified, it will be zero.
* At the end of the body of the HTML declare to which element you want to add the map (the ```<div>``` you just created) by adding a script element like this

```
<script>
addToMap('mapDiv')
</script>
```

In this case we suppose that the ID of the div is **mapDiv**. It could be anything as long as it is unique.

* Make sure the downloaded script is in the same folder as the HTML page. If not, change the link to it in the head.





