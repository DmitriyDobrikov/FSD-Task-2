import '../../../node_modules/jquery-ui-slider/jquery-ui.min.js'
import '../../../node_modules/jquery-ui-slider/jquery-ui.js'
import '../../../node_modules/jquery-ui-slider/jquery-ui.css'

function spaceAdd(string) {
    if (string.length > 3) {
        return string.substring(0, string.length - 3) + " " + string.substr(-3, 3) + "₽"
    }else {
        return string + "₽"
    }
}

$("#polzunok").slider({
    animate: "slow",
    min: 0,
    max: 16000,
    range: true,    
    values: [ 5000, 10000 ],
    slide : function(event, ui) {

        $("#result-polzunok").text( spaceAdd(ui.values[ 0 ] + "") + " - " + spaceAdd(ui.values[ 1 ] + "") );        
    }
});

$( "#result-polzunok" ).text(`${spaceAdd($("#polzunok").slider("values", 0) + "")} -  ${spaceAdd($("#polzunok").slider("values", 1) + "")}`);