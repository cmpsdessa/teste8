var wms_layers = [];

var format_NmerodeFalhasdePalntio_0 = new ol.format.GeoJSON();
var features_NmerodeFalhasdePalntio_0 = format_NmerodeFalhasdePalntio_0.readFeatures(json_NmerodeFalhasdePalntio_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NmerodeFalhasdePalntio_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NmerodeFalhasdePalntio_0.addFeatures(features_NmerodeFalhasdePalntio_0);
var lyr_NmerodeFalhasdePalntio_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NmerodeFalhasdePalntio_0, 
                style: style_NmerodeFalhasdePalntio_0,
                interactive: true,
    title: 'Número de Falhas de Palntio<br />\
    <img src="styles/legend/NmerodeFalhasdePalntio_0_0.png" /> 2<br />\
    <img src="styles/legend/NmerodeFalhasdePalntio_0_1.png" /> 8<br />\
    <img src="styles/legend/NmerodeFalhasdePalntio_0_2.png" /> 24<br />\
    <img src="styles/legend/NmerodeFalhasdePalntio_0_3.png" /> 31<br />\
    <img src="styles/legend/NmerodeFalhasdePalntio_0_4.png" /> 75<br />\
    <img src="styles/legend/NmerodeFalhasdePalntio_0_5.png" /> 88<br />\
    <img src="styles/legend/NmerodeFalhasdePalntio_0_6.png" /> 319<br />\
    <img src="styles/legend/NmerodeFalhasdePalntio_0_7.png" /> 346<br />\
    <img src="styles/legend/NmerodeFalhasdePalntio_0_8.png" /> 367<br />\
    <img src="styles/legend/NmerodeFalhasdePalntio_0_9.png" /> 424<br />'
        });
var format_NmerodeLinhasdePlantio_1 = new ol.format.GeoJSON();
var features_NmerodeLinhasdePlantio_1 = format_NmerodeLinhasdePlantio_1.readFeatures(json_NmerodeLinhasdePlantio_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NmerodeLinhasdePlantio_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NmerodeLinhasdePlantio_1.addFeatures(features_NmerodeLinhasdePlantio_1);
var lyr_NmerodeLinhasdePlantio_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NmerodeLinhasdePlantio_1, 
                style: style_NmerodeLinhasdePlantio_1,
                interactive: true,
    title: 'Número de Linhas de Plantio<br />\
    <img src="styles/legend/NmerodeLinhasdePlantio_1_0.png" /> 22<br />\
    <img src="styles/legend/NmerodeLinhasdePlantio_1_1.png" /> 27<br />\
    <img src="styles/legend/NmerodeLinhasdePlantio_1_2.png" /> 31<br />\
    <img src="styles/legend/NmerodeLinhasdePlantio_1_3.png" /> 33<br />\
    <img src="styles/legend/NmerodeLinhasdePlantio_1_4.png" /> 46<br />\
    <img src="styles/legend/NmerodeLinhasdePlantio_1_5.png" /> 47<br />\
    <img src="styles/legend/NmerodeLinhasdePlantio_1_6.png" /> 48<br />\
    <img src="styles/legend/NmerodeLinhasdePlantio_1_7.png" /> 59<br />\
    <img src="styles/legend/NmerodeLinhasdePlantio_1_8.png" /> 65<br />\
    <img src="styles/legend/NmerodeLinhasdePlantio_1_9.png" /> 72<br />'
        });
var format_AnodePlantio_2 = new ol.format.GeoJSON();
var features_AnodePlantio_2 = format_AnodePlantio_2.readFeatures(json_AnodePlantio_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnodePlantio_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnodePlantio_2.addFeatures(features_AnodePlantio_2);
var lyr_AnodePlantio_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AnodePlantio_2, 
                style: style_AnodePlantio_2,
                interactive: true,
    title: 'Ano de Plantio<br />\
    <img src="styles/legend/AnodePlantio_2_0.png" /> 1995<br />\
    <img src="styles/legend/AnodePlantio_2_1.png" /> 2019<br />\
    <img src="styles/legend/AnodePlantio_2_2.png" /> 2019/2020<br />\
    <img src="styles/legend/AnodePlantio_2_3.png" /> 2020<br />'
        });
var format_Variedades_3 = new ol.format.GeoJSON();
var features_Variedades_3 = format_Variedades_3.readFeatures(json_Variedades_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Variedades_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Variedades_3.addFeatures(features_Variedades_3);
var lyr_Variedades_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Variedades_3, 
                style: style_Variedades_3,
                interactive: true,
    title: 'Variedades<br />\
    <img src="styles/legend/Variedades_3_0.png" /> 785-15 Verm.<br />\
    <img src="styles/legend/Variedades_3_1.png" /> Arara<br />\
    <img src="styles/legend/Variedades_3_2.png" /> Arara e Japy<br />\
    <img src="styles/legend/Variedades_3_3.png" /> Catuai<br />\
    <img src="styles/legend/Variedades_3_4.png" /> Mundo Novo<br />'
        });
var format_reaha_4 = new ol.format.GeoJSON();
var features_reaha_4 = format_reaha_4.readFeatures(json_reaha_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reaha_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaha_4.addFeatures(features_reaha_4);
var lyr_reaha_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_reaha_4, 
                style: style_reaha_4,
                interactive: true,
    title: 'Área ha<br />\
    <img src="styles/legend/reaha_4_0.png" /> 0,28<br />\
    <img src="styles/legend/reaha_4_1.png" /> 0,286<br />\
    <img src="styles/legend/reaha_4_2.png" /> 0,407<br />\
    <img src="styles/legend/reaha_4_3.png" /> 0,607<br />\
    <img src="styles/legend/reaha_4_4.png" /> 0,832<br />\
    <img src="styles/legend/reaha_4_5.png" /> 0,84<br />\
    <img src="styles/legend/reaha_4_6.png" /> 0,899<br />\
    <img src="styles/legend/reaha_4_7.png" /> 1,032<br />\
    <img src="styles/legend/reaha_4_8.png" /> 1,110<br />\
    <img src="styles/legend/reaha_4_9.png" /> 1,867<br />'
        });
var format_TalhesProdutivos_5 = new ol.format.GeoJSON();
var features_TalhesProdutivos_5 = format_TalhesProdutivos_5.readFeatures(json_TalhesProdutivos_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TalhesProdutivos_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TalhesProdutivos_5.addFeatures(features_TalhesProdutivos_5);
var lyr_TalhesProdutivos_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TalhesProdutivos_5, 
                style: style_TalhesProdutivos_5,
                interactive: true,
    title: 'Talhões Produtivos<br />\
    <img src="styles/legend/TalhesProdutivos_5_0.png" /> T01<br />\
    <img src="styles/legend/TalhesProdutivos_5_1.png" /> T02<br />\
    <img src="styles/legend/TalhesProdutivos_5_2.png" /> T03<br />\
    <img src="styles/legend/TalhesProdutivos_5_3.png" /> T04<br />\
    <img src="styles/legend/TalhesProdutivos_5_4.png" /> T05<br />\
    <img src="styles/legend/TalhesProdutivos_5_5.png" /> T07<br />\
    <img src="styles/legend/TalhesProdutivos_5_6.png" /> T08<br />\
    <img src="styles/legend/TalhesProdutivos_5_7.png" /> T09<br />\
    <img src="styles/legend/TalhesProdutivos_5_8.png" /> T10<br />\
    <img src="styles/legend/TalhesProdutivos_5_9.png" /> T11<br />'
        });
var format_LimiteStioIranita_6 = new ol.format.GeoJSON();
var features_LimiteStioIranita_6 = format_LimiteStioIranita_6.readFeatures(json_LimiteStioIranita_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimiteStioIranita_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimiteStioIranita_6.addFeatures(features_LimiteStioIranita_6);
var lyr_LimiteStioIranita_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LimiteStioIranita_6, 
                style: style_LimiteStioIranita_6,
                interactive: true,
                title: '<img src="styles/legend/LimiteStioIranita_6.png" /> Limite Sítio Iranita'
            });
var group_reasProdutivas = new ol.layer.Group({
                                layers: [lyr_NmerodeFalhasdePalntio_0,lyr_NmerodeLinhasdePlantio_1,lyr_AnodePlantio_2,lyr_Variedades_3,lyr_reaha_4,lyr_TalhesProdutivos_5,],
                                title: "Áreas Produtivas"});

lyr_NmerodeFalhasdePalntio_0.setVisible(true);lyr_NmerodeLinhasdePlantio_1.setVisible(true);lyr_AnodePlantio_2.setVisible(true);lyr_Variedades_3.setVisible(true);lyr_reaha_4.setVisible(true);lyr_TalhesProdutivos_5.setVisible(true);lyr_LimiteStioIranita_6.setVisible(true);
var layersList = [group_reasProdutivas,lyr_LimiteStioIranita_6];
lyr_NmerodeFalhasdePalntio_0.set('fieldAliases', {'fid': 'fid', 'Talhão': 'Talhão', 'Localizaç': 'Localizaç', 'Área (m)': 'Área (m)', 'Área (ha)': 'Área (ha)', 'Perimetro ': 'Perimetro ', 'Variedade': 'Variedade', 'Ano de Pla': 'Ano de Pla', 'Altitude M': 'Altitude M', 'Altitude M_1': 'Altitude M_1', ' Diferenç': ' Diferenç', 'N Linhas': 'N Linhas', 'N Falhas': 'N Falhas', });
lyr_NmerodeLinhasdePlantio_1.set('fieldAliases', {'fid': 'fid', 'Talhão': 'Talhão', 'Localizaç': 'Localizaç', 'Área (m)': 'Área (m)', 'Área (ha)': 'Área (ha)', 'Perimetro ': 'Perimetro ', 'Variedade': 'Variedade', 'Ano de Pla': 'Ano de Pla', 'Altitude M': 'Altitude M', 'Altitude M_1': 'Altitude M_1', ' Diferenç': ' Diferenç', 'N Linhas': 'N Linhas', 'N Falhas': 'N Falhas', });
lyr_AnodePlantio_2.set('fieldAliases', {'fid': 'fid', 'Talhão': 'Talhão', 'Localizaç': 'Localizaç', 'Área (m)': 'Área (m)', 'Área (ha)': 'Área (ha)', 'Perimetro ': 'Perimetro ', 'Variedade': 'Variedade', 'Ano de Pla': 'Ano de Pla', 'Altitude M': 'Altitude M', 'Altitude M_1': 'Altitude M_1', ' Diferenç': ' Diferenç', 'N Linhas': 'N Linhas', 'N Falhas': 'N Falhas', });
lyr_Variedades_3.set('fieldAliases', {'fid': 'fid', 'Talhão': 'Talhão', 'Localizaç': 'Localizaç', 'Área (m)': 'Área (m)', 'Área (ha)': 'Área (ha)', 'Perimetro ': 'Perimetro ', 'Variedade': 'Variedade', 'Ano de Pla': 'Ano de Pla', 'Altitude M': 'Altitude M', 'Altitude M_1': 'Altitude M_1', ' Diferenç': ' Diferenç', 'N Linhas': 'N Linhas', 'N Falhas': 'N Falhas', });
lyr_reaha_4.set('fieldAliases', {'fid': 'fid', 'Talhão': 'Talhão', 'Localizaç': 'Localizaç', 'Área (m)': 'Área (m)', 'Área (ha)': 'Área (ha)', 'Perimetro ': 'Perimetro ', 'Variedade': 'Variedade', 'Ano de Pla': 'Ano de Pla', 'Altitude M': 'Altitude M', 'Altitude M_1': 'Altitude M_1', ' Diferenç': ' Diferenç', 'N Linhas': 'N Linhas', 'N Falhas': 'N Falhas', });
lyr_TalhesProdutivos_5.set('fieldAliases', {'fid': 'fid', 'Talhão': 'Talhão', 'Localizaç': 'Localizaç', 'Área (m)': 'Área (m)', 'Área (ha)': 'Área (ha)', 'Perimetro ': 'Perimetro ', 'Variedade': 'Variedade', 'Ano de Pla': 'Ano de Pla', 'Altitude M': 'Altitude M', 'Altitude M_1': 'Altitude M_1', ' Diferenç': ' Diferenç', 'N Linhas': 'N Linhas', 'N Falhas': 'N Falhas', });
lyr_LimiteStioIranita_6.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Area_ha': 'Area_ha', });
lyr_NmerodeFalhasdePalntio_0.set('fieldImages', {'fid': 'TextEdit', 'Talhão': 'TextEdit', 'Localizaç': 'TextEdit', 'Área (m)': 'TextEdit', 'Área (ha)': 'TextEdit', 'Perimetro ': 'TextEdit', 'Variedade': 'TextEdit', 'Ano de Pla': 'TextEdit', 'Altitude M': 'TextEdit', 'Altitude M_1': 'TextEdit', ' Diferenç': 'TextEdit', 'N Linhas': 'TextEdit', 'N Falhas': 'TextEdit', });
lyr_NmerodeLinhasdePlantio_1.set('fieldImages', {'fid': 'TextEdit', 'Talhão': 'TextEdit', 'Localizaç': 'TextEdit', 'Área (m)': 'TextEdit', 'Área (ha)': 'TextEdit', 'Perimetro ': 'TextEdit', 'Variedade': 'TextEdit', 'Ano de Pla': 'TextEdit', 'Altitude M': 'TextEdit', 'Altitude M_1': 'TextEdit', ' Diferenç': 'TextEdit', 'N Linhas': 'TextEdit', 'N Falhas': 'TextEdit', });
lyr_AnodePlantio_2.set('fieldImages', {'fid': 'TextEdit', 'Talhão': 'TextEdit', 'Localizaç': 'TextEdit', 'Área (m)': 'TextEdit', 'Área (ha)': 'TextEdit', 'Perimetro ': 'TextEdit', 'Variedade': 'TextEdit', 'Ano de Pla': 'TextEdit', 'Altitude M': 'TextEdit', 'Altitude M_1': 'TextEdit', ' Diferenç': 'TextEdit', 'N Linhas': 'TextEdit', 'N Falhas': 'TextEdit', });
lyr_Variedades_3.set('fieldImages', {'fid': 'TextEdit', 'Talhão': 'TextEdit', 'Localizaç': 'TextEdit', 'Área (m)': 'TextEdit', 'Área (ha)': 'TextEdit', 'Perimetro ': 'TextEdit', 'Variedade': 'TextEdit', 'Ano de Pla': 'TextEdit', 'Altitude M': 'TextEdit', 'Altitude M_1': 'TextEdit', ' Diferenç': 'TextEdit', 'N Linhas': 'TextEdit', 'N Falhas': 'TextEdit', });
lyr_reaha_4.set('fieldImages', {'fid': 'TextEdit', 'Talhão': 'TextEdit', 'Localizaç': 'TextEdit', 'Área (m)': 'TextEdit', 'Área (ha)': 'TextEdit', 'Perimetro ': 'TextEdit', 'Variedade': 'TextEdit', 'Ano de Pla': 'TextEdit', 'Altitude M': 'TextEdit', 'Altitude M_1': 'TextEdit', ' Diferenç': 'TextEdit', 'N Linhas': 'TextEdit', 'N Falhas': 'TextEdit', });
lyr_TalhesProdutivos_5.set('fieldImages', {'fid': 'TextEdit', 'Talhão': 'TextEdit', 'Localizaç': 'TextEdit', 'Área (m)': 'TextEdit', 'Área (ha)': 'TextEdit', 'Perimetro ': 'TextEdit', 'Variedade': 'TextEdit', 'Ano de Pla': 'TextEdit', 'Altitude M': 'TextEdit', 'Altitude M_1': 'TextEdit', ' Diferenç': 'TextEdit', 'N Linhas': 'TextEdit', 'N Falhas': 'TextEdit', });
lyr_LimiteStioIranita_6.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Area_ha': 'TextEdit', });
lyr_NmerodeFalhasdePalntio_0.set('fieldLabels', {});
lyr_NmerodeLinhasdePlantio_1.set('fieldLabels', {});
lyr_AnodePlantio_2.set('fieldLabels', {});
lyr_Variedades_3.set('fieldLabels', {});
lyr_reaha_4.set('fieldLabels', {});
lyr_TalhesProdutivos_5.set('fieldLabels', {});
lyr_LimiteStioIranita_6.set('fieldLabels', {'fid': 'no label', 'Name': 'inline label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Area_ha': 'inline label', });
lyr_LimiteStioIranita_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});