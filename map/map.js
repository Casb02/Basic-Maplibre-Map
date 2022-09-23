import maplibregl from 'maplibre-gl';
const mapStyle = require('./style/style.json');

//get all elements with data-attribute data-maplibre
const mapElements = document.querySelectorAll('[data-maplibre]');

mapElements.forEach((mapEl) => {

    // Get lat and lng from attributes
    const lat = mapEl.getAttribute("data-lat");
    const lng = mapEl.getAttribute("data-lng");

    const zoomWeb = mapEl.getAttribute("data-zoom");
    const zoomMobile = mapEl.getAttribute("data-zoom-mobile");

    const mapHeight = mapEl.getAttribute("data-height");

    const isCustom = mapEl.getAttribute("data-is-custom");

    //Basic marker
    const markerColor = mapEl.getAttribute("data-marker-color");

    //Custom marker
    const markerIcon = mapEl.getAttribute("data-marker-icon");
    const markerIconWidth = mapEl.getAttribute("data-marker-icon-width");
    const markerClass = mapEl.getAttribute("data-marker-class");

    let mapZoom = 14;
    if (zoomMobile) {
        if (window.innerWidth < 768) {
            mapZoom = zoomMobile;
        } else {
            mapZoom = zoomWeb ? zoomWeb : 14;
        }
    }

    if (mapHeight) {
        mapEl.style.height = mapHeight + "px";
    }

    // Default map settings
    // U can comment some parts out to use default maplibre values: https://maplibre.org/maplibre-gl-js-docs/api/map/
    const map = new maplibregl.Map({
        container: mapEl.id,
        style: mapStyle, // mapbox style location (custum style with https://maputnik.github.io/)
        center: [lng, lat], // starting position [lng, lat]
        zoom: mapZoom, // starting zoom
        attributionControl: false, // disable large attribution
        maxPitch: 0, // Disables pitch (set to +1 to 85 to enable)
        scrollZoom: true, // enable scrollzoom
        maxZoom: 18, // prevent user to zoom in to much
        minZoom: 8, // min zoom 7/8 prevents user to so empty map parts
    });

    console.log(map);
    // prevent mobiles from zoom, it can be annoying
    if (window.innerWidth < 768) {
        map.dragPan.disable();
    }

    // Make small attribution ball
    // Attribution is a requirement for using OpenStreetMap, Dont disable!
    // You can edit position by editing the last portion of the function.
    map.addControl(new maplibregl.AttributionControl({
        compact: true,
    }),'top-right');

    // Zoom controls
    // Comment out to disable
    map.addControl(new maplibregl.NavigationControl({
        showCompass: false, //show compass
        showZoom: true, //show + and - button
        visualizePitch: true // visualize pitch in compass (only if compass enabled)
    }), 'bottom-right');

    // Scale of map
    // Comment out to disable
    map.addControl(new maplibregl.ScaleControl({
        unit: 'metric',
        maxWidth: 200
    }), 'bottom-left')


    // Default marker, only color required! :) ez

    if (isCustom === "true") {
        const customMarker = document.createElement('div');
        customMarker.className = markerClass ? markerClass : 'marker';
        if (markerIcon) {
            const img = document.createElement('img');
            img.src = markerIcon;
            img.width = markerIconWidth ? markerIconWidth : 50;
            customMarker.appendChild(img);
        }
        customMarker.style.width = '50px';
        customMarker.style.height = '50px';


        // Custom marker
        new maplibregl.Marker({
            element: customMarker, // Custom marker element
            draggable: false, // toggle if marker can be moved
        }).setLngLat([lng, lat])
            .addTo(map);

    } else {
        new maplibregl.Marker({
            color: markerColor,// Custom map marker color
            draggable: false, // toggle if marker can be moved
        }).setLngLat([lng, lat])
            .addTo(map);

    }
});
