$(document).ready(function() {
    
    $("#summary a").click(function() {
        $("#summary").addClass("nbd-yellow");
        $("#nbd").show();
        
        $("#donate").removeClass("nbd-yellow");
        $("#ocd").hide();
    });
    
    $("#donate a").click(function() {
        $("#donate").addClass("nbd-yellow");
        $("#ocd").show();
        
        $("#summary").removeClass("nbd-yellow");
        $("#nbd").hide();
    });
    
    $("#summary a").trigger('click');
});