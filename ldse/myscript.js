var w = window.innerWidth;
var subtrat = 130;


var distanciaTopo;
var trilha =3;
var corHover = "red";
var distanciaScroll1;
var distanciaScroll2;
var distanciaScroll3;
var distanciaScroll4;
var distanciaScroll5;
var distanciaScroll6;
var distanciaScroll7;


$(document).ready(function(){
		$("body").css("background-color","#ccc");

		$("#menuEdu").css("color","");
	    $("#menuPort").css("color","");
	    $("#menuCarreira").css("color","");
	    $("#menuMercado").css("color","");
	    $("#menuDepo").css("color","");


		trilha =3;
		$(document).scrollTop(0);
		$("body").css("background-color","#ccc");

		$("#siteConteudo").show();
		
		$(".sistema").show();

		$("#trilhasBtn").addClass('active');


	
	


	
$(document).ready(function(){
	setInterval(function(){ distanciaTopo = $(".menuLocal").offset().top;


	w = window.innerWidth;

	if(w>1500){
 		 subtrat = 30;
 	}else{
 		subtrat = 40;
    }
	

	corHover="#5096b8";  //Blue


		distanciaScroll1 = $("#educacao3").offset().top-subtrat+50;
		distanciaScroll2 = $("#portifolio3").offset().top-subtrat;
		distanciaScroll3 = $("#mercado3").offset().top-subtrat;
		distanciaScroll4 = $("#depoimento3").offset().top-subtrat;
		distanciaScroll5 = $("#soft3").offset().top-subtrat;
		distanciaScroll6 = $("#down3").offset().top-subtrat;
		distanciaScroll7 = $("#contat3").offset().top-subtrat;

		$(".conteudo .col-3 div").css("background-color","#5096b8");
		$(".conteudo .col-3 p").css("border-bottom","solid #5096b8 1px");
		$(".conteudo h1").css("color","#5096b8");



	

	if(distanciaTopo == 735){
			$("#menuEdu").css("color","");
	    	$("#menuPort").css("color","");
	    	$("#menuCarreira").css("color","");
	    	
	    	$("#menuDepo").css("color","");
	    	$("#menuSoft").css("color","");
	    	$("#menuDownl").css("color","");
	    	$("#menuContat").css("color","");

		}
	
	else if( distanciaTopo>=distanciaScroll1 && distanciaTopo<distanciaScroll2){
    	
			$("#menuEdu").css("color",corHover);
	    	$("#menuPort").css("color","");
	    	$("#menuCarreira").css("color","");
	    	
	    	$("#menuDepo").css("color","");
	    	$("#menuSoft").css("color","");
	    	$("#menuDownl").css("color","");
	    	$("#menuContat").css("color","");


    }else if(distanciaTopo>=distanciaScroll2 && distanciaTopo<distanciaScroll3){
    		$("#menuEdu").css("color","");
	    	$("#menuPort").css("color",corHover);
	    	$("#menuCarreira").css("color","");
	    	
	    	$("#menuDepo").css("color","");
	    	$("#menuSoft").css("color","");
	    	$("#menuDownl").css("color","");
	    	$("#menuContat").css("color","");

    }else if(distanciaTopo>=distanciaScroll3 && distanciaTopo<distanciaScroll4){
    		$("#menuEdu").css("color","");
	    	$("#menuPort").css("color","");
	    	$("#menuCarreira").css("color",corHover);
	    
	    	$("#menuDepo").css("color","");
	    	$("#menuSoft").css("color","");
	    	$("#menuDownl").css("color","");
	    	$("#menuContat").css("color","");
    
    }else if(distanciaTopo>=distanciaScroll4 && distanciaTopo<distanciaScroll5){
    		$("#menuEdu").css("color","");
	    	$("#menuPort").css("color","");
	    	$("#menuCarreira").css("color","");
	    
	    	$("#menuDepo").css("color",corHover);
	    	$("#menuSoft").css("color","");
	    	$("#menuDownl").css("color","");
	    	$("#menuContat").css("color","");
    
    }else if(distanciaTopo>=distanciaScroll5 && distanciaTopo<distanciaScroll6){
    		$("#menuEdu").css("color","");
	    	$("#menuPort").css("color","");
	    	$("#menuCarreira").css("color","");
	 
	    	$("#menuDepo").css("color","");
	    	$("#menuSoft").css("color",corHover);
	    	$("#menuDownl").css("color","");
	    	$("#menuContat").css("color","");
    
    }else if(distanciaTopo>=distanciaScroll6 && distanciaTopo<distanciaScroll7){
    		$("#menuEdu").css("color","");
	    	$("#menuPort").css("color","");
	    	$("#menuCarreira").css("color","");
	    
	    	$("#menuDepo").css("color","");
	    	$("#menuSoft").css("color","");
	    	$("#menuDownl").css("color",corHover);
	    	$("#menuContat").css("color","");
    
    }else if(distanciaTopo>=distanciaScroll7 ){
    		$("#menuEdu").css("color","");
	    	$("#menuPort").css("color","");
	    	$("#menuCarreira").css("color","");
	    
	    	$("#menuDepo").css("color","");
	    	$("#menuSoft").css("color","");
	    	$("#menuDownl").css("color","");
	    	$("#menuContat").css("color",corHover);
    
    }


    $(".h1Branco").css("color","#fff");

	 }, 1);





	


});
	 


	$("#menuEdu").click(function(){
		

		$('html, body').animate({scrollTop:distanciaScroll1}, 500);

		
		
	});

	$("#menuPort").click(function(){
		
		$('html, body').animate({scrollTop:distanciaScroll2+20}, 500);
		
	});

	$("#menuCarreira").click(function(){
		
		$('html, body').animate({scrollTop:distanciaScroll3}, 500);
		
	});

	

	$("#menuDepo").click(function(){
		
		$('html, body').animate({scrollTop:distanciaScroll4}, 500);
		
	});

	$("#menuSoft").click(function(){
		
		$('html, body').animate({scrollTop:distanciaScroll5}, 500);
		
	});

	$("#menuDownl").click(function(){
		
		$('html, body').animate({scrollTop:distanciaScroll6}, 500);
		
	});


$("#menuContat").click(function(){
		
		$('html, body').animate({scrollTop:distanciaScroll7}, 500);
		
	});
	

});

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


//Fazer o menu global ficar fixo ao chegar ao topo da tela
$(window).scroll(function(){
    $(".menuLocal").css("top",Math.max(0,735-$(this).scrollTop()));



});


//Rolamento Suave
$(document).ready(function(){
	
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

