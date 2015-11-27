# Idris image map

<img src="/img/tool-map-image.png" alt="Idris image map" width="250" />

Documentation for the [Idris image map](http://www.idris-maps.com/tools/image-map) online tool

Read more about how to get started with our online-tools [here](https://github.com/idris-maps/idris-tools-docs/tree/master/get-started)

## Purpose

Use this tool to create an [SVG](https://en.wikipedia.org/wiki/Scalable_Vector_Graphics) map by styling [GeoJSON](https://en.wikipedia.org/wiki/GeoJSON) data

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

**Points**

Points are represented as circles

* FILL: the color of the inside of the circle. Must be a valid [HTML color](https://en.wikipedia.org/wiki/Web_colors)
* FILL-OPACITY: a number between 0 (0% or invisible) and 1 (100%)
* STROKE: the color of the border of the circle. Must be a valid [HTML color](https://en.wikipedia.org/wiki/Web_colors)
* STROKE-OPACITY: a number between 0 (0% or invisible) and 1 (100%)
* STROKE-WIDTH: the width of the outer border in pixels
* R: the radius of the circle in pixels

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

### Set the size of the map

Click on the **Canvas** button

<img src="/img/icon-canvas.png" width="50" />

#### Canvas size

By default the size of the canvas is set to the visible screen.

You can change that by specifing the **width** and **height** in pixels

#### Bounding box

By default the bounding box is set to fit the first layer on the canvas.

You can choose to make another layer fit the canvas or write your own bounding box by specifying minimum and maximum latitudes and longitudes

### Download the image

Click on the **Image** button

<img src="/img/icon-image.png" width="50" />

Choose a name for the file and **Download**

The downloaded file is a [vector image](https://en.wikipedia.org/wiki/Vector_graphics) in [SVG](https://en.wikipedia.org/wiki/Scalable_Vector_Graphics)

Most layout programs can read SVG. It can also be read by browsers. But sometimes you need a [raster image](https://en.wikipedia.org/wiki/Raster_graphics). Common graphics programs such as [Inkscape](https://inkscape.org/en/) or [GIMP](https://www.gimp.org/) will convert the SVG to a raster format like PNG or JPG. If you do not have any of them installed try with an [online converter](https://www.google.ch/search?q=convert+svg+to+png+online).

