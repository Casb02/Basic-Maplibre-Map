# Maplibre Map 
### Alternatief op Openlayers 

In tegenstelling tot Openlayers met mapbox 1.13 is maplibre een opensource versie verder gebouwd op mapbox 1.13
maplibre bevat vergelijkbare mogelijkheden als nieuwere mapbox versies. Maplibre maakt gebruik van mapbox style layout deze 
kun je ook zelf maken met hulpmiddelen als https://maputnik.github.io/


#Github notice,

De map is standaard leeg omdat de style niet gevuld is. Binnenkort kan via een optie dit worden ingeschakeld.
Momenteel moet je eigen style aanleveren

---

## Yarn

Voeg Maplibre toe:\
``yarn add maplibre-gl``

---

## Files

### Handmatig toevoegen

1. Kopieer de folder `map` naar `/resources/js`


### Handmatig aanpassen

**file.tpl** 

### **Meer gebruiksvoorbeelden onderaan**

```html
<!-- Zet op de juiste plaats binnen je template, id is OPTIONEEL -->
<div id="maplibre" data-maplibre data-lat="52.284410" data-lng="6.814800" data-height="500"></div>

{block name="scripts"}
    <script src="/js/map.js"></script>
{/block}
```

**style.css of scss** \
Voeg de regel toe aan je scss
````scss
@import "maplibre-gl/dist/maplibre-gl.css";
````


Map tag opties
================

Beschikbare attributen
-----------------------


| Attribuut              | Verplicht | Beschrijving                                                                                                                      |
|------------------------|-----------|-----------------------------------------------------------------------------------------------------------------------------------|
| data-maplibre          | Ja        | Attribuut om de map te initialiseren                                                                                              |
| data-lat               | Ja        | Latitude van de kaart                                                                                                             |
| data-lng               | Ja        | Longitude van de kaart                                                                                                            |
| data-height            | Nee       | Hoogte van de kaart in PX, optioneel gebruik eigen class                                                                          |
| data-zoom              | Nee       | Standaard zoom waarde bij laden map, standaard 14                                                                                 |
| data-zoom-mobile       | Nee       | Standaard zoom waarde voor mobile, niet gezet is data-zoom of 14                                                                  |
| data-is-custom         | Nee       | Standaard is de marker basic. Als je een custom marker wilt gebruiken, zet je dit attribuut op true data-is-custom="true"         |
| data-marker-color      | Nee       | Kleur van de marker, werkt alleen bij basic marker                                                                                |
| data-marker-icon       | Nee       | Icon van de marker, url wordt gebruikt als background image. voor meer custom gebruik marker class, werkt alleen bij custom marker |
| data-marker-icon-width | Nee       | Breedte van de marker icon, werkt alleen bij custom marker                                                                        |
| data-marker-class      | Nee       | Class van de marker, hier kan ook custom size ingesteld worden of img, werkt alleen bij custom marker                             |

### Voorbeeld

```html
<div id="example" data-maplibre data-lat="52.284410" data-lng="6.814800" data-height="500"></div>
```

### Voorbeeld met custom marker

```html
<div id="example-custom" data-maplibre data-lat="52.284410" data-lng="6.814800" data-height="500" data-is-custom="true" data-marker-class="custom-marker" data-marker-icon="/img/example.png" data-marker-icon-width="50"></div>
```

### Voorbeeld basic marker met kleur

```html
<div id="example-color" data-maplibre data-lat="52.284410" data-lng="6.814800" data-height="500" data-marker-color="#0000ff"></div>
```
