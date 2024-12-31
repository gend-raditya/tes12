var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_perumahan_1 = new ol.format.GeoJSON();
var features_perumahan_1 = format_perumahan_1.readFeatures(json_perumahan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_perumahan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_perumahan_1.addFeatures(features_perumahan_1);
var lyr_perumahan_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_perumahan_1, 
                style: style_perumahan_1,
                popuplayertitle: 'perumahan',
                interactive: true,
                title: '<img src="styles/legend/perumahan_1.png" /> perumahan'
            });
var format_lapangan_2 = new ol.format.GeoJSON();
var features_lapangan_2 = format_lapangan_2.readFeatures(json_lapangan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lapangan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lapangan_2.addFeatures(features_lapangan_2);
var lyr_lapangan_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lapangan_2, 
                style: style_lapangan_2,
                popuplayertitle: 'lapangan',
                interactive: true,
                title: '<img src="styles/legend/lapangan_2.png" /> lapangan'
            });
var format_Fasilitas_3 = new ol.format.GeoJSON();
var features_Fasilitas_3 = format_Fasilitas_3.readFeatures(json_Fasilitas_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fasilitas_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fasilitas_3.addFeatures(features_Fasilitas_3);
var lyr_Fasilitas_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Fasilitas_3, 
                style: style_Fasilitas_3,
                popuplayertitle: 'Fasilitas',
                interactive: true,
                title: '<img src="styles/legend/Fasilitas_3.png" /> Fasilitas'
            });
var format_jalur_joging_4 = new ol.format.GeoJSON();
var features_jalur_joging_4 = format_jalur_joging_4.readFeatures(json_jalur_joging_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalur_joging_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalur_joging_4.addFeatures(features_jalur_joging_4);
var lyr_jalur_joging_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jalur_joging_4, 
                style: style_jalur_joging_4,
                popuplayertitle: 'jalur_joging',
                interactive: true,
                title: '<img src="styles/legend/jalur_joging_4.png" /> jalur_joging'
            });
var format_Jalan_5 = new ol.format.GeoJSON();
var features_Jalan_5 = format_Jalan_5.readFeatures(json_Jalan_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_5.addFeatures(features_Jalan_5);
var lyr_Jalan_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jalan_5, 
                style: style_Jalan_5,
                popuplayertitle: 'Jalan',
                interactive: true,
                title: '<img src="styles/legend/Jalan_5.png" /> Jalan'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_perumahan_1.setVisible(true);lyr_lapangan_2.setVisible(true);lyr_Fasilitas_3.setVisible(true);lyr_jalur_joging_4.setVisible(true);lyr_Jalan_5.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_perumahan_1,lyr_lapangan_2,lyr_Fasilitas_3,lyr_jalur_joging_4,lyr_Jalan_5];
lyr_perumahan_1.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_lapangan_2.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_Fasilitas_3.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_jalur_joging_4.set('fieldAliases', {'id': 'id', });
lyr_Jalan_5.set('fieldAliases', {'id': 'id', });
lyr_perumahan_1.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_lapangan_2.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_Fasilitas_3.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_jalur_joging_4.set('fieldImages', {'id': '', });
lyr_Jalan_5.set('fieldImages', {'id': '', });
lyr_perumahan_1.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_lapangan_2.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_Fasilitas_3.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_jalur_joging_4.set('fieldLabels', {'id': 'no label', });
lyr_Jalan_5.set('fieldLabels', {'id': 'no label', });
lyr_Jalan_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});