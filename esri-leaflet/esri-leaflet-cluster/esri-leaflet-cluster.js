/* esri-leaflet-cluster - v2.0.0 - Mon Dec 25 2017 15:31:47 GMT+0800 (中国标准时间)
 * Copyright (c) 2017 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("leaflet"),require("esri-leaflet")):"function"==typeof define&&define.amd?define(["exports","leaflet","esri-leaflet"],t):t((e.L=e.L||{},e.L.esri=e.L.esri||{},e.L.esri.Cluster=e.L.esri.Cluster||{}),e.L,e.L.esri)}(this,function(e,t,r){"use strict";function s(e){return new i(e)}t="default"in t?t.default:t;var i=r.FeatureManager.extend({statics:{EVENTS:"click dblclick mouseover mouseout mousemove contextmenu popupopen popupclose",CLUSTEREVENTS:"clusterclick clusterdblclick clustermouseover clustermouseout clustermousemove clustercontextmenu"},initialize:function(e){r.FeatureManager.prototype.initialize.call(this,e),e=t.setOptions(this,e),this._layers={},this._leafletIds={},this.cluster=t.markerClusterGroup(e),this._key="c"+(1e9*Math.random()).toString(36).replace(".","_"),this.cluster.addEventParent(this)},onAdd:function(e){r.FeatureManager.prototype.onAdd.call(this,e),this._map.addLayer(this.cluster)},onRemove:function(e){r.FeatureManager.prototype.onRemove.call(this,e),this._map.removeLayer(this.cluster)},createLayers:function(e){for(var r=[],s=e.length-1;s>=0;s--){var i=e[s],a=this._layers[i.id];a||(a=t.GeoJSON.geometryToLayer(i,this.options),a.feature=t.GeoJSON.asFeature(i),a.defaultOptions=a.options,a._leaflet_id=this._key+"_"+i.id,this.resetStyle(a.feature.id),this._layers[a.feature.id]=a,this._leafletIds[a._leaflet_id]=i.id,this.options.onEachFeature&&this.options.onEachFeature(a.feature,a),this.fire("createfeature",{feature:a.feature})),(!this.options.timeField||this.options.timeField&&this._featureWithinTimeRange(i))&&r.push(a)}r.length&&this.cluster.addLayers(r)},addLayers:function(e){for(var t=[],r=e.length-1;r>=0;r--){var s=this._layers[e[r]];this.fire("addfeature",{feature:s.feature}),t.push(s)}this.cluster.addLayers(t)},removeLayers:function(e,t){for(var r=[],s=e.length-1;s>=0;s--){var i=e[s],a=this._layers[i];this.fire("removefeature",{feature:a.feature,permanent:t}),r.push(a),this._layers[i]&&t&&delete this._layers[i]}this.cluster.removeLayers(r)},resetStyle:function(e){var t=this._layers[e];return t&&(t.options=t.defaultOptions,this.setFeatureStyle(t.feature.id,this.options.style)),this},setStyle:function(e){return this.eachFeature(function(t){this.setFeatureStyle(t.feature.id,e)},this),this},setFeatureStyle:function(e,t){var r=this._layers[e];"function"==typeof t&&(t=t(r.feature)),r.setStyle&&r.setStyle(t)},eachFeature:function(e,t){for(var r in this._layers)e.call(t,this._layers[r]);return this},getFeature:function(e){return this._layers[e]}});e.FeatureLayer=i,e.featureLayer=s,e.default=s,e.VERSION="2.0.0"});
//# sourceMappingURL=esri-leaflet-cluster.js.map