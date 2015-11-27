# Use case 2

An example usage of [Idris online tools](http://www.idris-maps.com)

## Scenario

A map showing the population distribution of Switzerland. 

The result we are looking for:

<img src="/img/use_case_2.png" alt="" width="100%" />

### 1. Preparing the data

#### The number of inhabitants per commune

We get the number of inhabitants per commune from [Swiss statistics](http://www.bfs.admin.ch/bfs/portal/fr/index/themen/01/02/blank/key/raeumliche_verteilung/kantone__gemeinden.Document.67224.xls). We clean the data so that we have a document ```communes_population.tsv``` with three columns:

* commune_id
* commune_name
* pop

[Download it here](https://raw.githubusercontent.com/idris-maps/idris-tools-docs/master/use-case-2/communes_population.tsv)

#### The commune geometries

We get simplified geometries of the communes in GeoJSON from [here](https://raw.githubusercontent.com/idris-maps/idris-geodata/master/switzerland/communes_1%25.json), download the file and call it ```communes.json```.

#### Join the two

* Open [Idris query](http://www.idris-maps.com/tools/query) and drop ```communes.json```
* In the properties section, click **Add**
* Then click on **From CSV file**
* Drop ```communes_population.tsv```
* We are asked if the first line is the header. It is so we click **Yes**
* We have to say which property on the GeoJSON corresponds to which column on the TSV. In this case, both are called **commune_id**
* Choose the columns to be added to the GeoJSON. We just want **pop**.
* It says that  2317 features were joined. 11 features were not. 

The communes in ```communes.json``` do not correspond exactly to those in ```communes_population.tsv```. The good news is that there are only 11 features that do not have population data. Click **See not joined features** to see which. 

Four of the features are not actually communes but territories that are managed by several communes or by a canton where there are no inhabitants: 

* Staatswald Galm
* Comunanza Cadenazzo/Monteceneri
* Comunanza Capriasca/Valcolla
* Kommunanz Reckingen-Gluringen/Grafschaft

There are only 7 communes missing from our population dataset. Not too bad, we can fill those in manually. For those last 7 I checked on wikipedia, here is what I got:

* Bauma 4605
* Valbirse 3919
* Péry-La Heutte 1844
* Petit-Val 411
* Domleshg 1941
* Calanca 206
* Albula/Alvra 1347

#### Add data manually

If you are still on the screen with the title **Joined**:

* Click **Continue with new collection**
* Back at the main menu, click **Edit** under properties

This page will take some time to load as we have more than two thousand features in the collection. 

* Sort by **pop** by clicking the down-arrow beside it

Be patient...

* Scroll to the end of the table to see the **undefined** values for **pop**
* Replace with the data above
* When you are done, click **Save changes**

#### Calculate by square kilometers

Often geographically presented data makes more sense to be calculated according to the size of the geometry. In our case a spatially large commune may have a decent amount of inhabitants compared to other communes just because it is big. Not necessarily because it is dense. 

* Add a property with population density by clicking **Add** under **Properties** in the main menu
* Then click **Add value per square meter**
* You will see a list of all numeric properties, choose **pop** and click **OK**
* When the calculation is done, download the file and call it ```with_pop.json```
* Click **Continue with the new collection** and then at the main menu **Create a map image**


### 2. Styling the data

If you clicked **Create a map image** above, you should see your map of Switzerland. If not:

* Go to [Idris image map](http://www.idris-maps.com/tools/image-map)
* Drop ```with_pop.json```

Now lets style the data

#### Style by property

* Click the **style** button

<img src="/img/icon-bucket.png" alt="" width="50" />

* Choose to style the **with_pop** layer
* Click the **Style by property** button as we want to set the color of the commune according to its population
* Choose the **pop_pskm** property (that is the population per square km property we created earlier)
* Choose the **fill** style attribute
* Choose the **by scale** method. The alternative, **by property**, is to fill in a color for each property. As we have a few thousand communes with presumably different **pop_pskm** properties, it is not very useful for our purposes
* Choose scale type. **Sequential** means that we declare a color for the lowest and highest **pop**, everything in between will be calculated. **Diverging** means that we declare the color of the lowest, the highest and median values. We choose the latter
* Now write the colors you want to use. Any [valid HTML colors](https://en.wikipedia.org/wiki/Web_colors) will do. I took some from [Colorbrewer](http://colorbrewer2.org/). The communes with lowest population will be green, the highest red and the median is a very light yellow:
	* Min: #d9ef8b
	* Med: #ffffbf
	* Max: #d73027

Looks good. Let's do some fine tuning by setting the default style

#### Default style

* Click the **style** button
* Choose to style the **with_pop** layer
* Set **fill-opacity** to **1**
* Set **stroke** to **black**
* Set **stroke-width** to **0.5**
* Click **Save style**

#### Add a layer

For the icing on the cake let's add the bigger swiss lakes. 

* Download the data [here](https://raw.githubusercontent.com/idris-maps/idris-geodata/master/switzerland/lakes_1%25.json) and call the file ```lakes.json```
* Click the **Add layer button**

<img src="/img/icon-add.png" alt="" width="50" />

* Drop ```lakes.json```
* Click the **style** button
* Choose to style the **lakes** layer

We want to have a light blue color on the lakes

* Set **fill** and **stroke** to **#e0f3f8** #91bfdb
* Set **fill-opacity** and **stroke-opacity** to **1**
* Click **Save style**

#### Download the map

* Click the **Image** button to download your map

<img src="/img/icon-image.png" alt="" width="50" />

* Give it a name and click **Download**

The downloaded file is a [SVG](https://en.wikipedia.org/wiki/Scalable_Vector_Graphics). It can be used as is in most layout programs or in websites. You can also convert it to a raster file (.jpg or .png) with graphics software such as [Inkscape](https://inkscape.org/en/) or [GIMP](https://www.gimp.org/). If you have none of these and need a raster image of your map, there are [online converters](https://www.google.ch/search?q=convert+svg+to+png+online).













