# Idris convert to GeoJSON

<img src="/img/tool-converter.png" alt="Idris convert to GeoJSON" width="250" />

Documentation for the [Idris convert to GeoJSON](http://www.idris-maps.com/tools/convert) online tool

Read more about how to get started with our online-tools [here](https://github.com/idris-maps/idris-tools-docs/tree/master/get-started)

## Purpose

Convert CSV, TSV, GPX and zipped shapefiles to GeoJSON

## How to

### Convert a CSV or TSV file

* Drop the file in the designated area
* Say if the first line is the header

If it is not, add the headers

* Choose geometry columns

If the geometry columns in **latitude** and **longitude**, define which columns they are. If your geometries are in **WKT**, click **I have a WKT column** and define that column.

* Click **OK**
* Download the GeoJSON file

### Convert a GPX

* Drop the file in the designated area
* Choose if you want it as points or as a line

If you choose to have the points as a line, choose the simplification level by saying of how many points it should be composed. If you are intending to show it on a webmap, we recommend a maximum of 500 points.

* Download the GeoJSON file

### Convert a shapefile

* Put all files belonging to your shapefile (.shp, .dbf, .prj, .shx) in a folder and zip it
* Drop the zipped folder in the designated area
* Download the GeoJSON file

### Convert data from a spreadsheet

* Open the spreadsheet
* Select all (ctrl - a)
* Click on **Paste from spreadsheet**
* Paste the data
* Click **OK**
* Choose headers and geometry columns in the same way as CSV files (see above)
* Download the GeoJSON file
