$(document).ready(function() {
    
    $("#summary a").click(function() {
        $("#summary").addClass("nbd-yellow");
        $("#donate").removeClass("nbd-yellow");
    });
    
    $("#donate a").click(function() {
        $("#donate").addClass("nbd-yellow");
        $("#summary").removeClass("nbd-yellow");
    });
    
    $("#summary a").trigger('click');
});