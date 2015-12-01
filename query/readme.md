# Idris edit GeoJSON

<img src="/img/tool-query.png" alt="Idris edit GeoJSON" width="250" />

Documentation for the [Idris edit GeoJSON](http://www.idris-maps.com/tools/query) online tool

Read more about how to get started with our online-tools [here](https://github.com/idris-maps/idris-tools-docs/tree/master/get-started)

## Purpose

Edit GeoJSON files online

## How to

* Start by dropping a GeoJSON file in the designated area

### Select by property

* Say you have all countries in the world in your GeoJSON but only want those in Africa
* Click **by property** in the select section
* Choose a property, say **continent**
* Select the property you want to keep
* Choose a name and download the selected file

Now you can continue querying either the original GeoJSON (click "Do a selection on" **The previous collection**) or with the newly created one (**The new collection**)

### Select by bounding box

* Click **by bounding box** in the select section
* Choose the bounding box (minimum and maximum latitudes and longitudes)
* Choose if you want properties within, intersecting or croped to the bounding box
* Choose a name and download the selected file

Now you can continue querying either the original GeoJSON (click "Do a selection on" **The previous collection**) or with the newly created one (**The new collection**)

### Add properties from a spreadsheet

* In the properties section, click **Add**
* Click **Paste data from a spreadsheet**
* Copy - paste data
* Define headers
* Choose columns on the GeoJSON and on the pasted data that should be joined
* Choose which properties should be added

For more details, have a look at [this tutorial](https://github.com/idris-maps/idris-tools-docs/tree/master/use-case-2)

### Add properties from a CSV file

The same procedure as above, except you drop your file instead of pasting the data

### Add calculated properties by square kilometer

Sometimes map data makes more sense calculated by square kilometer

* In the properties section, click **Add**
* Click **Add value per square km**
* Choose the property to calculate and click **OK**

### Edit properties by hand

* In the properties section, click **Edit**
* Filter the data by property
* Do your edits
* Click **Save changes**

Note that this can be very slow if you have a lot of properties

### Remove properties

* In the properties section, click **Remove**
* Choose properties to remove
* Click **OK**



