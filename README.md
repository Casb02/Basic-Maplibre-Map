# Maplibre Map

### Alternative to OpenLayers

Unlike OpenLayers with Mapbox 1.13, MapLibre is an open source continuation built on Mapbox 1.13.
MapLibre offers similar features to newer Mapbox versions. MapLibre uses the Mapbox Style layout. You can create styles with tools such as [https://maputnik.github.io/](https://maputnik.github.io/)

# Github notice

The map is empty by default because the style is not set. Soon this can be enabled through an option. For now you must supply your own style.

---

## Yarn

Add MapLibre
`yarn add maplibre-gl`

---

## Files

### Add manually

1. Copy the `map` folder to `/resources/js`

### Adjust manually

**file.tpl**

### **More usage examples below**

```html
<!-- Place this in the right spot in your template. id is OPTIONAL -->
<div id="maplibre" data-maplibre data-lat="52.284410" data-lng="6.814800" data-height="500"></div>

<!-- Script -->
<script src="/js/map.js"></script>
```

**style.css or scss**
Add the line to your SCSS

```scss
@import "maplibre-gl/dist/maplibre-gl.css";
```

# Map tag options

## Available attributes

| Attribute              | Required | Description                                                                                                                                |
| ---------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| data-maplibre          | Yes      | Attribute to initialize the map                                                                                                            |
| data-lat               | Yes      | Latitude of the map                                                                                                                        |
| data-lng               | Yes      | Longitude of the map                                                                                                                       |
| data-height            | No       | Height of the map in px. You can also use your own class                                                                                   |
| data-zoom              | No       | Default zoom level when the map loads. Default is 14                                                                                       |
| data-zoom-mobile       | No       | Default zoom level for mobile. If not set it uses data-zoom or 14                                                                          |
| data-is-custom         | No       | The marker is basic by default. To use a custom marker set this attribute to true data-is-custom="true"                                    |
| data-marker-color      | No       | Color of the marker. Works only with the basic marker                                                                                      |
| data-marker-icon       | No       | Icon for the marker. The URL is used as the background image. For more customization use the marker class. Works only with a custom marker |
| data-marker-icon-width | No       | Width of the marker icon. Works only with a custom marker                                                                                  |
| data-marker-class      | No       | Class for the marker. You can also set a custom size here or an img. Works only with a custom marker                                       |

### Example

```html
<div id="example" data-maplibre data-lat="52.284410" data-lng="6.814800" data-height="500"></div>
```

### Example with custom marker

```html
<div id="example-custom" data-maplibre data-lat="52.284410" data-lng="6.814800" data-height="500" data-is-custom="true" data-marker-class="custom-marker" data-marker-icon="/img/example.png" data-marker-icon-width="50"></div>
```

### Example basic marker with color

```html
<div id="example-color" data-maplibre data-lat="52.284410" data-lng="6.814800" data-height="500" data-marker-color="#0000ff"></div>
```
