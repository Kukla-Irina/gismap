import "./style.css";

import "@arcgis/map-components/components/arcgis-layer-list";
import "@arcgis/map-components/components/arcgis-map";

import "@esri/calcite-components/components/calcite-navigation";
import "@esri/calcite-components/components/calcite-navigation-logo";
import "@esri/calcite-components/components/calcite-shell";

// Get a reference to the arcgis-layer-list element
const arcgisLayerList = document.querySelector("arcgis-layer-list");

// Set the listItemCreatedFunction to add a legend to each list item
arcgisLayerList.listItemCreatedFunction = (event) => {
  const { item } = event;
  if (item.layer.type !== "group") {
    item.panel = {
      content: "legend"
    };
  }
};

// Get a reference to the arcgis-map element
const arcgisMap = document.querySelector("arcgis-map");

// Since we are using property values from the map component,
// we use the arcgisViewReadyChange event to determine when the map is ready.
arcgisMap.addEventListener("arcgisViewReadyChange", () => {

  const { portalItem } = arcgisMap.map;

  const navigationLogo = document.querySelector("calcite-navigation-logo");
  navigationLogo.heading = portalItem.title;
  navigationLogo.description = portalItem.snippet;
  navigationLogo.thumbnail = portalItem.thumbnailUrl;

});