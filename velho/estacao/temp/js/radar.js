$(function(){
    var radarOptions = {
        palette: "hard",
        dataSource: dataSource[0].values,
        title: "VENTO",
        commonSeriesSettings: {
            type: "stackedbar"
        },
        
        
        valueAxis: {
            valueMarginsEnabled: false
        },
        "export": {
            enabled: false
        },
        series: [{ valueField: "val1", }
        ]
    };
    var radar = $("#radarChart").dxPolarChart(radarOptions).dxPolarChart("instance");
    
    
});