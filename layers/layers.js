ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:3857").setExtent([3489138.271759, 1768518.070621, 6547479.668941, 3836251.009592]);
var wms_layers = [];

var format_Areas_0 = new ol.format.GeoJSON();
var features_Areas_0 = format_Areas_0.readFeatures(json_Areas_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Areas_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Areas_0.addFeatures(features_Areas_0);
var lyr_Areas_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Areas_0, 
                style: style_Areas_0,
                popuplayertitle: "Areas",
                interactive: true,
    title: 'Areas<br />\
    <img src="styles/legend/Areas_0_0.png" /> ٣٣٩١٧٤ - ٥٩٣٧٠٩<br />\
    <img src="styles/legend/Areas_0_1.png" /> ٥٩٣٧٠٩ - ١٢١٨٢٢٤<br />\
    <img src="styles/legend/Areas_0_2.png" /> ١٢١٨٢٢٤ - ٢٠٢٤٢٨٥<br />\
    <img src="styles/legend/Areas_0_3.png" /> ٢٠٢٤٢٨٥ - ٣٩٣٠٣٤٦<br />\
    <img src="styles/legend/Areas_0_4.png" /> ٣٩٣٠٣٤٦ - ٨٥٩١٧٤٨<br />'
        });

lyr_Areas_0.setVisible(true);
var layersList = [lyr_Areas_0];
lyr_Areas_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'PROV_ID': 'PROV_ID', 'PROV_NAME_': 'PROV_NAME_', 'PROV_NAME1': 'PROV_NAME1', 'PROV_ABBRE': 'PROV_ABBRE', 'PROV_NAM_1': 'PROV_NAM_1', 'PROV_NAM_2': 'PROV_NAM_2', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'skan': 'skan', });
lyr_Areas_0.set('fieldImages', {'OBJECTID': 'TextEdit', 'PROV_ID': 'TextEdit', 'PROV_NAME_': 'TextEdit', 'PROV_NAME1': 'TextEdit', 'PROV_ABBRE': 'TextEdit', 'PROV_NAM_1': 'TextEdit', 'PROV_NAM_2': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'skan': 'TextEdit', });
lyr_Areas_0.set('fieldLabels', {'OBJECTID': 'hidden field', 'PROV_ID': 'hidden field', 'PROV_NAME_': 'no label', 'PROV_NAME1': 'no label', 'PROV_ABBRE': 'no label', 'PROV_NAM_1': 'hidden field', 'PROV_NAM_2': 'hidden field', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'skan': 'no label', });
lyr_Areas_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});