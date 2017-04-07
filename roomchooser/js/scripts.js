// Empty JS for your own code to be here
 
$(document).ready(function() { 
     
    $('#carousel').carouFredSel({ 
    	circular			: true,
    	
    	direction: "right",
    	align: "center",
        items                : 1, 
        scroll : { 
            items            : 1,
            easing           : "elastic", 
            duration         : 1000, 
            pauseOnHover     : true 
        } 
    }); 
}); 

$("#booking").modal('show');
// $("#signup").modal('show');
// $("#signin").modal('show');
// $("#payment").modal('show');
// $("#subscribe").modal('show');
