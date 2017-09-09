// var w = window.innerWidth;
// var b;
// $(document).ready(function(){
//  b = $("body").width();
//  if(b=!w){
//  	$("body").width(w);
//  }
// });

// var w = window.innerWidth;

// $(document).ready(function(){
 
//  if(w>1600){
//  	$("#educacao").css("margin-top","30%");
//  }
// });

// $(document).ready(function(){
// 	$("#eduBtn").click(function(){
// 		(this).addClass('active');
// 	});
// });
var statAud;
var statDes;
var statSis;

var globalStatA;
var globalStatD;
var globalStatS;

var w = window.innerWidth;
var subtrat = 130;


var distanciaTopo;
var trilha =1;
var corHover = "red";
var distanciaScroll1;
var distanciaScroll2;
var distanciaScroll3;
var distanciaScroll4;

var sex = 0;

var etapa1=false;
var etapa2=false;
var etapa2Enable=false;
var aumentar =0;
var acabou=false;
var qualTrilha = 0;




//Verificar Bolinhas das cadeiras
$(document).ready(function(){
	
$(".bolinhasTrilha").children().hide();


setInterval(function(){
$(".bolinhasTrilha").find(".desBall").hide();
$(".bolinhasTrilha").find(".sisBall").hide();
$(".bolinhasTrilha").find(".audBall").hide();


//Neutras
$(".bolinhasTrilha[trilha='N']").find(".desBall").hide();
$(".bolinhasTrilha[trilha='N']").find(".sisBall").hide();
$(".bolinhasTrilha[trilha='N']").find(".audBall").hide();



//Audiovisual
$(".bolinhasTrilha[trilha='A']").find(".audBall").show();
//Design
$(".bolinhasTrilha[trilha='D']").find(".desBall").show();
//Sistema
$(".bolinhasTrilha[trilha='S']").find(".sisBall").show();

//Mistas
	//Audiovisual - Design
	$(".bolinhasTrilha[trilha='AD']").find(".audBall").show();
	$(".bolinhasTrilha[trilha='AD']").find(".desBall").show();

	//Audiovisual - Sistema
	$(".bolinhasTrilha[trilha='AS']").find(".audBall").show();
	$(".bolinhasTrilha[trilha='AS']").find(".sisBall").show();

	//Audiovisual - Sistema
	$(".bolinhasTrilha[trilha='SD']").find(".desBall").show();
	$(".bolinhasTrilha[trilha='SD']").find(".sisBall").show();


//Trio
$(".bolinhasTrilha[trilha='ADS']").find(".desBall").show();
$(".bolinhasTrilha[trilha='ADS']").find(".sisBall").show();
$(".bolinhasTrilha[trilha='ADS']").find(".audBall").show();


 }, 1);





});



$(document).ready(function(){
	
$(".bolinhasTrilha2").children().hide();


setInterval(function(){
$(".bolinhasTrilha2").find(".desBall").hide();
$(".bolinhasTrilha2").find(".sisBall").hide();
$(".bolinhasTrilha2").find(".audBall").hide();


//Neutras
$(".bolinhasTrilha2[trilha='N']").find(".desBall").hide();
$(".bolinhasTrilha2[trilha='N']").find(".sisBall").hide();
$(".bolinhasTrilha2[trilha='N']").find(".audBall").hide();



//Audiovisual
$(".bolinhasTrilha2[trilha='A']").find(".audBall").show();
//Design
$(".bolinhasTrilha2[trilha='D']").find(".desBall").show();
//Sistema
$(".bolinhasTrilha2[trilha='S']").find(".sisBall").show();

//Mistas
	//Audiovisual - Design
	$(".bolinhasTrilha2[trilha='AD']").find(".audBall").show();
	$(".bolinhasTrilha2[trilha='AD']").find(".desBall").show();

	//Audiovisual - Sistema
	$(".bolinhasTrilha2[trilha='AS']").find(".audBall").show();
	$(".bolinhasTrilha2[trilha='AS']").find(".sisBall").show();

	//Audiovisual - Sistema
	$(".bolinhasTrilha2[trilha='SD']").find(".desBall").show();
	$(".bolinhasTrilha2[trilha='SD']").find(".sisBall").show();


//Trio
$(".bolinhasTrilha2[trilha='ADS']").find(".desBall").show();
$(".bolinhasTrilha2[trilha='ADS']").find(".sisBall").show();
$(".bolinhasTrilha2[trilha='ADS']").find(".audBall").show();


 }, 1);





});

var rBoy = "boy2";
var rGirl = "girl2";

$(document).ready(function(){
	

	$(".color1").click(function(){
		rBoy = $(this).attr("menin");
		rGirl = $(this).attr("menina");
		$(".boy").attr("src","img/"+rBoy+".png");
		$(".girl").attr("src","img/"+rGirl+".png");
		$(this).css("background-color","#777");
		$(".color2").css("background-color","#ddd");
		console.log(rBoy,rGirl);

	});

	$(".color2").click(function(){
		rBoy = $(this).attr("menin");
		rGirl = $(this).attr("menina");
		$(".boy").attr("src","img/"+rBoy+".png");
		$(".girl").attr("src","img/"+rGirl+".png");
		$(this).css("background-color","#777");
		$(".color1").css("background-color","#ddd");
		console.log(rBoy,rGirl);

	});


	//Choose avatar
	$(".boy").click(function(){
		sex = 1;
		$(".avatar").attr("src","img/"+rBoy+".png");
		$(".escolhaChar").fadeOut("fast");
		$("#siteMatriz").fadeIn("slow");
		console.log(rBoy,rGirl);
	});

	$(".girl").click(function(){
		sex = 2;
		$(".avatar").attr("src","img/"+rGirl+".png");
		$(".escolhaChar").fadeOut("fast");
		$("#siteMatriz").fadeIn("slow");
		console.log(rBoy,rGirl);
	});
	
});


$(document).ready(function(){
	
	 
$(document).ready(function(){
	setInterval(function(){ distanciaTopo = $(".menuLocal").offset().top;


	w = window.innerWidth;

	if(w>1500){
 		 subtrat = 30;
 	}else{
 		subtrat = 40;
    }
	


	if(trilha ==1){
		corHover="rgb(230,40,40)"; //Red




		distanciaScroll1 = $("#educacao2").offset().top-subtrat;
		distanciaScroll2 = $("#portifolio2").offset().top-subtrat;
		distanciaScroll3 = $("#mercado2").offset().top-subtrat;
		distanciaScroll4 = $("#depoimento2").offset().top-subtrat;

		$(".conteudo .col-3 div").css("background-color","rgb(230,40,40)");
		$(".conteudo .col-3 p").css("border-bottom","solid rgb(230,40,40) 1px");
		$(".conteudo h1").css("color","rgb(230,40,40)");



	}else if(trilha ==2){
		corHover="rgb(60,200,60)"; //Green


		

		distanciaScroll1 = $("#educacao").offset().top-subtrat;
		distanciaScroll2 = $("#portifolio").offset().top-subtrat;
		distanciaScroll3 = $("#mercado").offset().top-subtrat;
		distanciaScroll4 = $("#depoimento").offset().top-subtrat;

		$(".conteudo .col-3 div").css("background-color","rgb(60,200,60)");
		$(".conteudo .col-3 p").css("border-bottom","solid rgb(60,200,60) 1px");
		$(".conteudo h1").css("color","rgb(60,200,60)");


	}else if(trilha == 3){
		corHover="#508ADF";  //Blue


		distanciaScroll1 = $("#educacao3").offset().top-subtrat;
		distanciaScroll2 = $("#portifolio3").offset().top-subtrat;
		distanciaScroll3 = $("#mercado3").offset().top-subtrat;
		distanciaScroll4 = $("#depoimento3").offset().top-subtrat;


		$(".conteudo .col-3 div").css("background-color","#508ADF");
		$(".conteudo .col-3 p").css("border-bottom","solid #508ADF 1px");
		$(".conteudo h1").css("color","#508ADF");

	}



	

	if(distanciaTopo == 500){
			$("#menuEdu").css("color","");
	    	$("#menuPort").css("color","");
	    	$("#menuCarreira").css("color","");
	    	$("#menuMercado").css("color","");
	    	$("#menuDepo").css("color","");
		}
	
	else if( distanciaTopo>=distanciaScroll1 && distanciaTopo<distanciaScroll2){
    	
			$("#menuEdu").css("color",corHover);
	    	$("#menuPort").css("color","");
	    	$("#menuCarreira").css("color","");
	    	$("#menuMercado").css("color","");
	    	$("#menuDepo").css("color","");


    }else if(distanciaTopo>=distanciaScroll2 && distanciaTopo<distanciaScroll3){
    		$("#menuEdu").css("color","");
	    	$("#menuPort").css("color",corHover);
	    	$("#menuCarreira").css("color","");
	    	$("#menuMercado").css("color","");
	    	$("#menuDepo").css("color","");

    }else if(distanciaTopo>=distanciaScroll3 && distanciaTopo<distanciaScroll4){
    		$("#menuEdu").css("color","");
	    	$("#menuPort").css("color","");
	    	$("#menuCarreira").css("color",corHover);
	    	$("#menuMercado").css("color",corHover);
	    	$("#menuDepo").css("color","");
    
    }else if(distanciaTopo>=distanciaScroll4){
    		$("#menuEdu").css("color","");
	    	$("#menuPort").css("color","");
	    	$("#menuCarreira").css("color","");
	    	$("#menuMercado").css("color","");
	    	$("#menuDepo").css("color",corHover);
    
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


});

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//FAZENDO MATRIZ
$(document).ready(function(){
	// console.log($(".extra[nome='Nome2'").attr("tipo")); Achar uma cadeira

	$("#close").click(function(){
		$(".errorMessage").fadeOut();
		$(".erroText").animate({top: '0px'});
	});

	$("#close2").click(function(){
		$("#popUp").fadeOut();
		$("#selS4").hide();
		$("#selS5elt").hide();
		$(".cadeiras").removeClass("highli");
	});



	

	$(".cadeiras").click(function(){//APARECER CADEIRAS PARA ESCOLHER
		// $("#popUp").show();

		

	});



	$(".go1").click(function(){
		$(document).scrollTop(0);
		$(".cadeiras").removeClass("highli");
		$("#sem123").hide();
		$("#sem456").show();
		$("#sem78").hide();
		$("#popUp").hide();
		
	});

	

	

	$("#goTrilha").click(function(){
		if(qualTrilha == 1){
			$("#audiovisualBtn").trigger("click");

		}else if(qualTrilha == 2){
			$("#designBtn").trigger("click");

		}else if(qualTrilha == 3){
			$("#sistemaBtn").trigger("click");

		}



	});

	$(".back1").click(function(){
		$(".cadeiras").removeClass("highli");

		volta1();
		

	});

	$(".go2").click(function(){
		$(".cadeiras").removeClass("highli");
		if(etapa2Enable==true){
			etapa2=true;
			$(document).scrollTop(0);
			$("#sem123").hide();
			$("#sem456").hide();
			$("#sem78").show();
			$("#popUp").hide();

			// statAud = 20;
			// statDes = 30;
			// statSis = 23;


		}else{
			$(".errorMessage").show();
			$(".erroText").animate({top: '200px'});
			$(document).scrollTop(0);

			

	}

	});

	$(".back2").click(function(){
		$(".cadeiras").removeClass("highli");
		aumentar=1;	
		volta2();
		
		


	});

	


	
});

//ITENS QUE MUDAM
// $("input").click(function(){
// 		$(".acc1").attr("src","img/Animate_ac1.png");
// 	});
// 	$("button").click(function(){
// 		$(".acc2").attr("src","img/System_ac1.png");
// });





//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


$(document).ready(function(){
	
	$("body").css("background-color","#ccc");



	
	$("#matrizBtn").click(function(){
		$(document).scrollTop(0);

		if(sex ==0){
			$(".escolhaChar").show();
		}else{
			$("#siteMatriz").show();
			}

		

		
		$("#siteConteudo").hide();
		$("#siteInicial").hide();
		$("#siteContato").hide();
		$("body").css("background-color","#132A2E");
		
		$(this).addClass('active');
		$("#pagInicialBtn").removeClass('active');
		$("#contatosBtn").removeClass('active');
		$("#trilhasBtn").removeClass('active');
		


	});


	$("#pagInicialBtn").click(function(){
		$(document).scrollTop(0);
		$("#siteConteudo").hide();
		$("#siteInicial").show();
		$("#siteContato").hide();
		$("#siteMatriz").hide();
		$(".escolhaChar").hide();
		$("body").css("background-color","#ccc");

		$(this).addClass('active');
		$("#contatosBtn").removeClass('active');
		$("#matrizBtn").removeClass('active');
		$("#trilhasBtn").removeClass('active');
		
	});

});



$(document).ready(function(){


	$("#designBtn").click(function(){
		




		$("#menuEdu").css("color","");
	    $("#menuPort").css("color","");
	    $("#menuCarreira").css("color","");
	    $("#menuMercado").css("color","");
	    $("#menuDepo").css("color","");



		trilha =1;
		$(document).scrollTop(0);
		$("body").css("background-color","#ccc");

		$("#siteConteudo").show();
		$("#siteContato").hide();
		$("#siteInicial").hide();
		$("#siteMatriz").hide();
		$(".escolhaChar").hide();


		$(".design").show();
		$(".audiovisual").hide();
		$(".sistema").hide();

		$("#trilhasBtn").addClass('active');
		$("#contatosBtn").removeClass('active');
		$("#matrizBtn").removeClass('active');
		$("#pagInicialBtn").removeClass('active');

		
	});


	$("#audiovisualBtn").click(function(){
		
		


		$("#menuEdu").css("color","");
	    $("#menuPort").css("color","");
	    $("#menuCarreira").css("color","");
	    $("#menuMercado").css("color","");
	    $("#menuDepo").css("color","");


		trilha =2;
		$(document).scrollTop(0);
		$("body").css("background-color","#ccc");

		$("#siteConteudo").show();
		$("#siteContato").hide();
		$("#siteInicial").hide();
		$("#siteMatriz").hide();
		$(".escolhaChar").hide();

		$(".design").hide();
		$(".audiovisual").show();
		$(".sistema").hide();

		$("#trilhasBtn").addClass('active');
		$("#contatosBtn").removeClass('active');
		$("#matrizBtn").removeClass('active');
		$("#pagInicialBtn").removeClass('active');

		

	});

	$("#sistemaBtn").click(function(){

		




		$("#menuEdu").css("color","");
	    $("#menuPort").css("color","");
	    $("#menuCarreira").css("color","");
	    $("#menuMercado").css("color","");
	    $("#menuDepo").css("color","");


		trilha =3;
		$(document).scrollTop(0);
		$("body").css("background-color","#ccc");

		$("#siteConteudo").show();
		$("#siteContato").hide();
		$("#siteInicial").hide();
		$("#siteMatriz").hide();
		$(".escolhaChar").hide();

		$(".design").hide();
		$(".audiovisual").hide();
		$(".sistema").show();

		$("#trilhasBtn").addClass('active');
		$("#contatosBtn").removeClass('active');
		$("#matrizBtn").removeClass('active');
		$("#pagInicialBtn").removeClass('active');

		

		
		


		
	});


});

//Fazer o menu global ficar fixo ao chegar ao topo da tela
$(window).scroll(function(){
    $(".menuLocal").css("top",Math.max(67,500-$(this).scrollTop()));



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

var code;
var oldCode;
var vaipegar;
var replace;


var requis = new Array();
requis[0] = "c_introSMD";
requis[1] = "c_des1";
requis[2] = "c_autoM1";
requis[3] = "c_prog1";
requis[4] = "c_histDes"

requis[5] = "c_prog2";
requis[6] = "c_cv1";
requis[7] = "c_mam1";
requis[8] = "c_cogTD";
requis[9] = "c_narraM";

requis[10] = "c_autoM2";
requis[11] = "c_dig";
requis[12] = "c_ciber";
requis[13] = "c_IHC1";
requis[14] = "c_proj1";

requis[15] = "nem";

requis[16] = "c_PolAut";
requis[17] = "c_GestProj";

requis[18] = "c_tcc1";
requis[19] = "c_proj2";

requis[20] = "c_tcc2";
requis[21] = "c_Sem";


//Selecionar Cadeiras
$(document).ready(function(){
	$(".cadeiras").click(function(){
		$(".cadeiras").removeClass("highli");
		$(this).toggleClass("highli");
		$(".conteudoCad").hide();
		$(".cSelecionavel span.minus").removeClass("minus");
		$(".cSelecionavel").hide();

	});
	

//Quarto Semestre
	$("#el-41").click(function(){
		
    	code = $(this).attr("id");
    	$("#popUp").fadeOut("fast");
    	$("#popUp").fadeIn("fast");
    	$("#selS4").show();


		
	});

	$("#el-42").click(function(){
		
    	code = $(this).attr("id");
    	$("#popUp").fadeOut("fast");
    	$("#popUp").fadeIn("fast");
    	$("#selS4").show();
     	
		
	});

	$("#el-43").click(function(){
		
    	code = $(this).attr("id");
    	$("#popUp").fadeOut("fast");
    	$("#popUp").fadeIn("fast");
    	$("#selS4").show();
     	
		
	});
	$("#el-44").click(function(){
		
    	code = $(this).attr("id");
    	$("#popUp").fadeOut("fast");
    	$("#popUp").fadeIn("fast");
    	$("#selS4").show();
     	
		
	});


$(".cSelecionavel input").click(function(){//Sanfona
	
	$(this).next().next().toggle();
	$(".confirmar[pega='s']").css("background-color","#666");

	

	$(this).next().toggleClass("minus");

	

	
});


//Verificador de repetição de cadeiras
$("#selS4 input").click(function(){
	oldCode=$("#"+code).parent().attr("id");



});


//Scroll ao clicar na opção
$('.sanfona').click(function(){ 
	 var x = $(this).position().top;
	// console.log("Esse aqui "+x);
	$("#popUp").animate({scrollTop:x}, 500);
	
});


$(".sanfona").click(function(){
	var goOn = false;
	var reqSame;
	var checar = $(this).next().next().children().find(".preRall").each(function(){

		var hasIt = $(this).attr("cod");
		// console.log(hasIt);
		reqSame = hasIt;
		var indic = requis.indexOf(hasIt);
		// console.log(indic);

		if(indic >= 0){
			goOn = true;
			
			$(this).css("color","#222");
		}else{
			goOn = false;
			console.log("não vai dar não");
			$(this).css("color","red");
		}

// [id="'+reqSame+'"]'

	});
	if(goOn == true){
		// console.log("saindo da jaula");
		var pai = $("#"+code).parent().parent().attr("id");

		var saber = $("#"+pai).children("#"+reqSame);

		var proxSaber = $("#"+pai).next().children("#"+reqSame);
			

		if(saber.length <1){
			
			if(proxSaber.length <1){
				$(this).next().next().children().first().next().next().next().next().show();
				

			}else{
				$(this).next().next().children().first().next().next().next().next().hide();
			}


		}else{
			$(this).next().next().children().first().next().next().next().next().hide();
		}

	}else{
		$(this).next().next().children().first().next().next().next().next().hide();
	}
	
});



$("#selS4 .confirmar").click(function(){
	// $(this).trigger( "click" );


			var pegar = $(this).attr("pega"); 
			var trocar = $("#"+code).attr("feito");

		if(trocar == "n"){	
			if(pegar == "n"){
				$(this).attr("pega","s");
				 $(".confirmar[pega='s']").parent().prev().prev().addClass("escol");
				 
				 
				 var valor = $(this).val();
				 var newTrilha = $(this).attr("tril");
					

					$("#"+code).val(valor);
					$("#"+code).attr("feito","s");
					// $("#"+code).find(".bolinhasTrilha").attr("trilha");
		           
					$("#"+code).next().next().attr("trilha","");
					$("#"+code).next().next().attr("trilha",newTrilha);
					$("#"+code).parent().attr("id",$(this).attr("ids"));

					//pre-requisitos na principal
					var preR = $(this).next().next().children().last().attr("cod");

					$("#"+code).parent().attr("pre",preR);

					$("#"+code).parent().next().children().first().trigger("click");

					var codig = $(this).attr("ids")

					requis.push(codig);

					// console.log(requis);
					

			}

		

		}else if(trocar == "s"){
			if(pegar == "n"){
			$('.confirmar[ids="'+oldCode+'"]').css("background-color","#132A2E"); 
			$('.confirmar[ids="'+oldCode+'"]').attr("pega","n");

			

			

			$(this).attr("pega","s");
				 $(".confirmar[pega='s']").parent().prev().prev().addClass("escol");
				
				 
				 var valor = $(this).val();
				 var newTrilha = $(this).attr("tril");
					

					$("#"+code).val(valor);
					$("#"+code).attr("feito","s");
					// $("#"+code).find(".bolinhasTrilha").attr("trilha");
		           
					$("#"+code).next().next().attr("trilha","");
					$("#"+code).next().next().attr("trilha",newTrilha);
					$("#"+code).parent().attr("id",$(this).attr("ids"));

					var preR = $(this).next().next().children().last().attr("cod");

					$("#"+code).parent().attr("pre",preR);

					$("#"+code).parent().next().children().first().trigger("click");

					var codig = $(this).attr("ids");
					var remov = requis.indexOf(oldCode);


					requis.splice(remov,1,codig);


					// console.log(oldCode);
					
					// noFuturo = $(this).next().next().children().last().attr("cod");
					
					// console.log("Esse em baixo");
					var takeOff = oldCode;

						$('.semestres div[pre="'+takeOff+'"]').each(function(){

						replace = $(this).attr("id");
						$(this).children().first().next().next().attr("trilha","N");
						$(this).children().first().attr("feito","n");


						$(this).children().first().val("Escolha uma disciplina");
						$(this).attr("id","");
						$(this).attr("pre","");
						
						$('.confirmar[ids="'+replace+'"]').each(function(){
							if($(this).attr("pega") == "s"){
							    $(this).css("background-color","#132A2E"); 
								$(this).attr("pega","n");
							}
						});
				});

					


					
					// console.log($('.cadeiras').parent().has('[pre="'+oldCode+'"]'));
					// console.log(requis);
					// '[pre="'+oldCode+'"]'

				}
				
		

		}
		
		// console.log("Esse aqui "+$("#"+code).parent().next().children().first().attr("id"));

});

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~




//Quinto Semestre

$("#el-51").click(function(){
		
    	code = $(this).attr("id");
    	$("#popUp").fadeOut("fast");
    	$("#popUp").fadeIn("fast");
    	$("#selS5elt").show();
    	// console.log(code);
     	
		
	});

$("#el-52").click(function(){
		
    	code = $(this).attr("id");
    	$("#popUp").fadeOut("fast");
    	$("#popUp").fadeIn("fast");
    	$("#selS5elt").show();
    	// console.log(code);
     
		
	});

$("#el-53").click(function(){
		
    	code = $(this).attr("id");
    	$("#popUp").fadeOut("fast");
    	$("#popUp").fadeIn("fast");
    	$("#selS5elt").show();
    	// console.log(code);
     		
		
	});




//Verificador de repetição de cadeiras
$("#selS5elt input").click(function(){
	oldCode=$("#"+code).parent().attr("id");
	// console.log($(this).attr("oldCode"));
	
});

$("#selS5elt .confirmar").click(function(){
	// $(this).trigger( "click" );
			// console.log($(this).attr("pega"));

			var pegar = $(this).attr("pega"); 
			var trocar = $("#"+code).attr("feito");

		if(trocar == "n"){	
			if(pegar == "n"){
				$(this).attr("pega","s");
				 $(".confirmar[pega='s']").parent().prev().prev().addClass("escol");
				 var valor = $(this).val();
				 var newTrilha = $(this).attr("tril");
					

					$("#"+code).val(valor);
					$("#"+code).attr("feito","s");
					// $("#"+code).find(".bolinhasTrilha").attr("trilha");
		           
					$("#"+code).next().next().attr("trilha","");
					$("#"+code).next().next().attr("trilha",newTrilha);
					$("#"+code).parent().attr("id",$(this).attr("ids"));

					//pre-requisitos na principal
					var preR = $(this).next().next().children().last().attr("cod");

					$("#"+code).parent().attr("pre",preR);

					$("#"+code).parent().next().children().first().trigger("click");
					
					var codig = $(this).attr("ids")
					requis.push(codig);

					// console.log(requis);
			}

		

		}else if(trocar == "s"){
			if(pegar == "n"){
					$('.confirmar[ids="'+oldCode+'"]').css("background-color","#132A2E"); 
					$('.confirmar[ids="'+oldCode+'"]').attr("pega","n");

					$(this).attr("pega","s");
					 $(".confirmar[pega='s']").parent().prev().prev().addClass("escol");
					 var valor = $(this).val();
					 var newTrilha = $(this).attr("tril");
					

					$("#"+code).val(valor);
					$("#"+code).attr("feito","s");
					// $("#"+code).find(".bolinhasTrilha").attr("trilha");
		           
					$("#"+code).next().next().attr("trilha","");
					$("#"+code).next().next().attr("trilha",newTrilha);
					$("#"+code).parent().attr("id",$(this).attr("ids"));

					//pre-requisitos na principal
					var preR = $(this).next().next().children().last().attr("cod");

					$("#"+code).parent().attr("pre",preR);

					$("#"+code).parent().next().children().first().trigger("click");

					var codig = $(this).attr("ids");
					var remov = requis.indexOf(oldCode);
					requis.splice(remov,1,codig);


					// console.log("Esse em baixo");
					var takeOff = oldCode;

						$('.semestres div[pre="'+takeOff+'"]').each(function(){

						replace = $(this).attr("id");
						$(this).children().first().next().next().attr("trilha","N");
						$(this).children().first().attr("feito","n");


						$(this).children().first().val("Escolha uma disciplina");
						$(this).attr("id","");
						$(this).attr("pre","");
						
						$('.confirmar[ids="'+replace+'"]').each(function(){
							if($(this).attr("pega") == "s"){
							    $(this).css("background-color","#132A2E"); 
								$(this).attr("pega","n");
							}
						});
				});




					}
		}
		
		// console.log("Esse aqui "+$("#"+code).parent().next().children().first().attr("id"));

});

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

		//Optativas
		$("#op-51").click(function(){
		
	    	code = $(this).attr("id");
	    	$("#popUp").fadeOut("fast");
	    	$("#popUp").fadeIn("fast");
	    	$("#opts").show();
	    	// console.log(code);
     		
		
		});

		$("#op-52").click(function(){
		
	    	code = $(this).attr("id");
	    	$("#popUp").fadeOut("fast");
	    	$("#popUp").fadeIn("fast");
	    	$("#opts").show();
	    	// console.log(code);
     		
		
		});

		$("#op-61").click(function(){
		
	    	code = $(this).attr("id");
	    	$("#popUp").fadeOut("fast");
	    	$("#popUp").fadeIn("fast");
	    	$("#opts").show();
	    	// console.log(code);
     		
		
		});

		$("#op-62").click(function(){
		
	    	code = $(this).attr("id");
	    	$("#popUp").fadeOut("fast");
	    	$("#popUp").fadeIn("fast");
	    	$("#opts").show();
	    	// console.log(code);
     		
		
		});

		$("#op-63").click(function(){
		
	    	code = $(this).attr("id");
	    	$("#popUp").fadeOut("fast");
	    	$("#popUp").fadeIn("fast");
	    	$("#opts").show();
	    	// console.log(code);
     		
		
		});

		$("#op-71").click(function(){
		
	    	code = $(this).attr("id");
	    	$("#popUp").fadeOut("fast");
	    	$("#popUp").fadeIn("fast");
	    	$("#opts").show();
	    	// console.log(code);
     		
		
		});

		$("#op-72").click(function(){
		
	    	code = $(this).attr("id");
	    	$("#popUp").fadeOut("fast");
	    	$("#popUp").fadeIn("fast");
	    	$("#opts").show();
	    	// console.log(code);
     		
		
		});

		$("#op-73").click(function(){
		
	    	code = $(this).attr("id");
	    	$("#popUp").fadeOut("fast");
	    	$("#popUp").fadeIn("fast");
	    	$("#opts").show();
	    	// console.log(code);
     		
		
		});

		$("#op-81").click(function(){
		
	    	code = $(this).attr("id");
	    	$("#popUp").fadeOut("fast");
	    	$("#popUp").fadeIn("fast");
	    	$("#opts").show();
	    	// console.log(code);
     		
		
		});

		$("#op-82").click(function(){
		
	    	code = $(this).attr("id");
	    	$("#popUp").fadeOut("fast");
	    	$("#popUp").fadeIn("fast");
	    	$("#opts").show();
	    	// console.log(code);
     		
		
		});
		$("#op-83").click(function(){
		
	    	code = $(this).attr("id");
	    	$("#popUp").fadeOut("fast");
	    	$("#popUp").fadeIn("fast");
	    	$("#opts").show();
	    	// console.log(code);
     		
		
		});



		//Verificador de repetição de cadeiras
$("#opts input").click(function(){
	oldCode=$("#"+code).parent().attr("id");
	// console.log($(this).attr("oldCode"));
	
});

$("#opts .confirmar").click(function(){
	// $(this).trigger( "click" );
			// console.log($(this).attr("pega"));

			var pegar = $(this).attr("pega"); 
			var trocar = $("#"+code).attr("feito");

		if(trocar == "n"){	
			if(pegar == "n"){
				$(this).attr("pega","s");
				 $(".confirmar[pega='s']").parent().prev().prev().addClass("escol");
				 var valor = $(this).val();
				 var newTrilha = $(this).attr("tril");
					

					$("#"+code).val(valor);
					$("#"+code).attr("feito","s");
					// $("#"+code).find(".bolinhasTrilha").attr("trilha");
		           
					$("#"+code).next().next().attr("trilha","");
					$("#"+code).next().next().attr("trilha",newTrilha);
					$("#"+code).parent().attr("id",$(this).attr("ids"));

					//pre-requisitos na principal
					var preR = $(this).next().next().children().last().attr("cod");

					$("#"+code).parent().attr("pre",preR);

					$("#"+code).parent().next().children().first().trigger("click");
					
					var codig = $(this).attr("ids")

					requis.push(codig);

					// console.log(requis);

			}

		

		}else if(trocar == "s"){
			if(pegar == "n"){
					$('.confirmar[ids="'+oldCode+'"]').css("background-color","#132A2E"); 
					$('.confirmar[ids="'+oldCode+'"]').attr("pega","n");

					$(this).attr("pega","s");
					 $(".confirmar[pega='s']").parent().prev().prev().addClass("escol");
					 var valor = $(this).val();
					 var newTrilha = $(this).attr("tril");
					

					$("#"+code).val(valor);
					$("#"+code).attr("feito","s");
					// $("#"+code).find(".bolinhasTrilha").attr("trilha");
		           
					$("#"+code).next().next().attr("trilha","");
					$("#"+code).next().next().attr("trilha",newTrilha);
					$("#"+code).parent().attr("id",$(this).attr("ids"));

					//pre-requisitos na principal
					var preR = $(this).next().next().children().last().attr("cod");

					$("#"+code).parent().attr("pre",preR);

					$("#"+code).parent().next().children().first().trigger("click");

					var codig = $(this).attr("ids");
					var remov = requis.indexOf(oldCode);
					requis.splice(remov,1,codig);


					
					// console.log("Esse em baixo");
					//Fazer um each() pra achar todos
					// $("[test]").each(function(){
					//     
					// });

					var takeOff = oldCode;

						$('.semestres div[pre="'+takeOff+'"]').each(function(){

						replace = $(this).attr("id");
						$(this).children().first().next().next().attr("trilha","N");
						$(this).children().first().attr("feito","n");


						$(this).children().first().val("Escolha uma disciplina");
						$(this).attr("id","");
						$(this).attr("pre","");
						
						$('.confirmar[ids="'+replace+'"]').each(function(){
							if($(this).attr("pega") == "s"){
							    $(this).css("background-color","#132A2E"); 
								$(this).attr("pega","n");
							}
						});
				});

					



					}
		}
		
		// console.log("Esse aqui "+$("#"+code).parent().next().children().first().attr("id"));

});





// $('.semestres div[pre="'+takeOff+'"]').each(function(){
							
// 						replace = $('.semestres div[pre="'+takeOff+'"]').attr("id");
// 						$('.semestres div[pre="'+takeOff+'"]').children().first().next().next().attr("trilha","N");
// 						$('.semestres div[pre="'+takeOff+'"]').children().first().attr("feito","n");


// 						$('.semestres div[pre="'+takeOff+'"]').children().first().val("Escolha uma disciplina");
// 						$('.semestres div[pre="'+takeOff+'"]').attr("id","");
// 						$('.semestres div[pre="'+takeOff+'"]').attr("pre","");
						
						
// 						if($('.confirmar[ids="'+replace+'"]').attr("pega") == "s"){
// 					    $('.confirmar[ids="'+replace+'"]').css("background-color","#132A2E"); 
// 						$('.confirmar[ids="'+replace+'"]').attr("pega","n");
// 						}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


$(".cadeiras").not(".eletivas").not(".optativas").click(function(){
		
    	code = $(this).parent().attr("id");
    	$("#popUp").fadeOut("fast");
    	$("#popUp").fadeIn("fast");
    	$("#obrig").show();
    	// console.log("Id da cadeira "+code);
     	
     	var titulo = $("#"+code).children().first().val();
     	var desc = $("#"+code).children().last().text();
     	var seguimento = $("#"+code).children().first().next().next().attr("trilha");
     	var prereq = $("#"+code).children().last().prev().text();
     	// console.log("Id da cadeira "+prereq);
     	$(".headObrig").html(titulo);
     	$(".headObrig").next().attr("trilha",seguimento);
     	$(".textObrig").html(desc);
     	$(".prereqObrig").html("Pré-requisitos: "+prereq);

		
	});

});




var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
  }
}






//Barra de Stats
$(document).ready(function(){



//Verificador de cadeiras
setInterval(function(){
	$("#sem456 .cadeiras[feito='s']").next().css("color","#fff");
	$("#sem78 .cadeiras[feito='s']").next().css("color","#fff");
	// $(".confirmar[pega='s']").parent().prev().prev().addClass("escol");

	$(".confirmar[pega='n']").parent().prev().prev().removeClass("escol");
	$(".confirmar").hover(function(){
    	$(this).css("background-color", "#eee");
    }, function(){
    	$(this).css("background-color", "#132A2E");
	});

	$(".confirmar[pega='s']").hover(function(){
    	$(this).css("background-color", "#eee");
    }, function(){
    	$(this).css("background-color", "#666");
	});


	 $(".confirmar[pega='n']").css("cursor","pointer");

	 $(".confirmar[pega='s']").css("cursor","not-allowed");
	// $(".confirmar[pega='n']").parent().prev().prev().is(":hover").css("background-color","#eee");

	
	

  }, 1);

//Hack
// $("#sem6 .cadeiras").click(function(){
	
// 	$("#sem456 .cadeiras[feito='n']").attr("feito","s");
// 	$("#sem456 .cadeiras[feito='n']").next().css("color","#fff");
	
// });





	

$(".go1").click(function(){
	etapa1=true;
	// statAud = 10;
	// statDes = 20;
	// statSis = 17.5;

	//Verificar os stats	
	var semiA = ($("#sem123 .bolinhasTrilha[trilha='A']").length)*2.5;
	var semiD = ($("#sem123 .bolinhasTrilha[trilha='D']").length)*2.5;
	var semiS = ($("#sem123 .bolinhasTrilha[trilha='S']").length)*2.5;


	
	var semiAD = ($("#sem123 .bolinhasTrilha[trilha='AD']").length)*2.5;
	var semiAS = ($("#sem123 .bolinhasTrilha[trilha='AS']").length)*2.5;
	var semiSD = ($("#sem123 .bolinhasTrilha[trilha='SD']").length)*2.5;

	var semiADS = ($("#sem123 .bolinhasTrilha[trilha='ADS']").length)*2.5;

		// console.log("Old",statAud);
		statAud = (semiA+semiAD+semiAS+semiADS);
		// console.log("New",statAud);

		// console.log("Old",statDes);
		statDes = (semiD+semiAD+semiSD+semiADS);
		// console.log("New",statDes);

		console.log("Old",statSis);
		statSis = (semiS+semiSD+semiAS+semiADS);
		// console.log("New",statSis);

		

		

		

	
	//Itens menina e menino
	if(sex==2){
	$(".accEnd").attr("src","img/gAcc_c.png");
	$(".acc2").attr("src","img/gAcc_d5.png");
	
	
	}else{
	$(".accEnd").attr("src","img/bAcc_c.png");
	$(".acc2").attr("src","img/bAcc_d5.png");	
	}


	if(aumentar==0){
		aumentar++;
		if(aumentar==1){
			$("#myBarAud").animate({width: ""+statAud+"%"});
			$("#myBarDes").animate({width: ""+statDes+"%"});
			$("#myBarSist").animate({width: ""+statSis+"%"});
			console.log(aumentar);
		}
	}


	


	
});
//Passar para próxima2
$(".go2").click(function(){
	if($("#sem456 .cadeiras[feito='n']").length <=0){
		console.log("Enable");

		var semiA = ($("#sem456 .bolinhasTrilha[trilha='A']").length)*2.5;
		var semiD = ($("#sem456 .bolinhasTrilha[trilha='D']").length)*2.5;
		var semiS = ($("#sem456 .bolinhasTrilha[trilha='S']").length)*2.5;


	
		var semiAD = ($("#sem456 .bolinhasTrilha[trilha='AD']").length)*2.5;
		var semiAS = ($("#sem456 .bolinhasTrilha[trilha='AS']").length)*2.5;
		var semiSD = ($("#sem456 .bolinhasTrilha[trilha='SD']").length)*2.5;

		var semiADS = ($("#sem456 .bolinhasTrilha[trilha='ADS']").length)*2.5;

		
		// console.log("A,D,S: ",semiA,semiD,semiS);
		// console.log("AD,SD,AS: ",semiAD,semiSD,semiAS);
		// console.log("ADS: ",semiADS);

		statAud= 10;
		statDes=20;
		statSis=17.5;

		globalStatA = statAud;
		globalStatD = statAud;
		globalStatS = statSis;	


		console.log("Old A: ",statAud);
		statAud = statAud+(semiA+semiAD+semiAS+semiADS);
		console.log("New A: ",statAud);

		console.log("Old D: ",statDes);
		statDes = statDes+(semiD+semiAD+semiSD+semiADS);
		console.log("New D: ",statDes);

		console.log("Old S: ",statSis);
		statSis = statSis+(semiS+semiSD+semiAS+semiADS);
		console.log("New S: ",statSis);	
		

		if(sex==2){

			if(statSis>28){
				
				$(".acc1").attr("src","img/gAcc_s1.png");
			}else{
				$(".acc1").attr("src","img/none.png");
			}

			if(statAud>=24){
				
				$(".acc3").attr("src","img/gAcc_a1.png");
			}else{
				$(".acc3").attr("src","img/none.png");
			}

			if(statDes>26){
				$(".accBck").attr("src","img/gAcc_d3.png");
			}else{
				$(".accBck").attr("src","img/none.png");
			}

			
		
		
		}else{
			if(statSis>28){
				
				$(".acc1").attr("src","img/bAcc_s1.png");
			}else{
				$(".acc1").attr("src","img/none.png");
			}
			if(statAud>=24){
				
				$(".acc3").attr("src","img/bAcc_a1.png");
			}else{
				$(".acc3").attr("src","img/none.png");
			}
			if(statDes>26){
				$(".accBck").attr("src","img/gAcc_d3.png");
			}else{
				$(".accBck").attr("src","img/none.png");
			}

			$(".acc4").attr("src","img/none.png");
			$(".acc5").attr("src","img/none.png");
			$(".acc6").attr("src","img/none.png");
		
			
		}

		

		
		// $(".acc2").attr("src","img/System_ac1.png");
    
    if(aumentar==1){
		aumentar++;
		if(aumentar==2){
			
			 $("#myBarAud").animate({width: ""+statAud+"%"});
			 $("#myBarDes").animate({width: ""+statDes+"%"});
			 $("#myBarSist").animate({width: ""+statSis+"%"});
			 console.log("Aumentar"+aumentar);
		}
	}
	

		

	}else{
		$("#sem456 .cadeiras[feito='n']").next().css("color","red"); //Avisar onde falta corrigir cadeiras

	}
});

//Ultima Etapa

$(".finalizar").click(function(){

	if($("#sem78 .cadeiras[feito='n']").length <=0){
		acabou=true;
		


		var semiA = ($("#sem78 .bolinhasTrilha[trilha='A']").length)*5;
		var semiD = ($("#sem78 .bolinhasTrilha[trilha='D']").length)*5;
		var semiS = ($("#sem78 .bolinhasTrilha[trilha='S']").length)*5;


	
		var semiAD = ($("#sem78 .bolinhasTrilha[trilha='AD']").length)*5;
		var semiAS = ($("#sem78 .bolinhasTrilha[trilha='AS']").length)*5;
		var semiSD = ($("#sem78 .bolinhasTrilha[trilha='SD']").length)*5;

		var semiADS = ($("#sem78 .bolinhasTrilha[trilha='ADS']").length)*5;

		// semiA = semiA+(($("#sem7 .bolinhasTrilha[trilha='A']").length)*3);
		// semiD = semiD+(($("#sem7 .bolinhasTrilha[trilha='D']").length)*3);
		// semiS = semiS+(($("#sem7 .bolinhasTrilha[trilha='S']").length)*3);


	
		// semiAD = semiAD+(($("#sem7 .bolinhasTrilha[trilha='AD']").length)*3);
		// semiAS = semiAS+(($("#sem7 .bolinhasTrilha[trilha='AS']").length)*3);
		// semiSD = semiSD+(($("#sem7 .bolinhasTrilha[trilha='SD']").length)*3);

		// semiADS = semiADS+(($("#sem7 .bolinhasTrilha[trilha='ADS']").length)*3);




		// semiA = semiA+(($("#sem8 .bolinhasTrilha[trilha='A']").length)*4);
		// semiD = semiD+(($("#sem8 .bolinhasTrilha[trilha='D']").length)*4);
		// semiS = semiS+(($("#sem8 .bolinhasTrilha[trilha='S']").length)*4);


	
		// semiAD = semiAD+(($("#sem8 .bolinhasTrilha[trilha='AD']").length)*4);
		// semiAS = semiAS+(($("#sem8 .bolinhasTrilha[trilha='AS']").length)*4);
		// semiSD = semiSD+(($("#sem8 .bolinhasTrilha[trilha='SD']").length)*4);

		// semiADS = semiADS+(($("#sem8 .bolinhasTrilha[trilha='ADS']").length)*4);

		console.log("Status: ",globalStatA,globalStatD,globalStatS);

		statAud=globalStatA;
		statDes=globalStatD;
		statSis=globalStatS;

		console.log("Old A: ",statAud);
		statAud = statAud+(semiA+semiAD+semiAS+semiADS);
		console.log("New A: ",statAud);

		console.log("Old D: ",statDes);
		statDes = statDes+(semiD+semiAD+semiSD+semiADS);
		console.log("New D: ",statDes);

		console.log("Old S: ",statSis);
		statSis = statSis+(semiS+semiSD+semiAS+semiADS);
		console.log("New S: ",statSis);	




		// var HsemiA = ($("#sem8 .bolinhasTrilha[trilha='A']").length)*4;
		// var HsemiD = ($("#sem8 .bolinhasTrilha[trilha='D']").length)*4;
		// var hsemiS = ($("#sem8 .bolinhasTrilha[trilha='S']").length)*4;


	
		// var HsemiAD = ($("#sem8 .bolinhasTrilha[trilha='AD']").length)*4;
		// var HsemiAS = ($("#sem8 .bolinhasTrilha[trilha='AS']").length)*4;
		// var HsemiSD = ($("#sem8 .bolinhasTrilha[trilha='SD']").length)*4;

		// var HsemiADS = ($("#sem8 .bolinhasTrilha[trilha='ADS']").length)*4;


		
		// console.log("A,D,S: ",semiA,semiD,semiS);
		// console.log("AD,SD,AS: ",semiAD,semiSD,semiAS);
		// console.log("ADS: ",semiADS);

			


		// console.log("Old A: ",statAud);
		// statAud = statAud+((semiA+HsemiA)+(semiAD+HsemiAD)+(semiAS+HsemiAS)+(semiADS+HsemiADS));
		// console.log("New A: ",statAud);

		// console.log("Old D: ",statDes);
		// statDes = statDes+((semiD+HsemiD)+(semiAD+HsemiAD)+(semiSD+HsemiSD)+(semiADS+HsemiADS));
		// console.log("New D: ",statDes);

		// console.log("Old S: ",statSis);
		// statSis = statSis+((semiS+HsemiS)+(semiAS+HsemiAS)+(semiSD+HsemiSD)+(semiADS+HsemiADS));
		// console.log("New S: ",statSis);	
		var maior = Math.max(statSis, statAud, statDes);
		
		
		if(maior == statSis){
			$("#fimTrilha").text("Sistemas e Web");
			qualTrilha=3;
		}
		if(maior == statAud){
			$("#fimTrilha").text("Audiovisual");
			qualTrilha=1;
		}
		if(maior == statDes){
			$("#fimTrilha").text("Design Multimídia");
			qualTrilha=2;
		}



		if(sex==2){
			if(maior == statSis){
				$(".accEnd").attr("src","img/gAcc_s2.png");
			}else if(maior == statDes){
				$(".accEnd").attr("src","img/gAcc_d2.png");
			}else if(maior == statAud){
				$(".accEnd").attr("src","img/gAcc_a2.png");
			}


			

			if(statDes>40 && statDes<50){
				$(".accBck").attr("src","img/gAcc_d3.png")
			}else if(statDes>=50){
				$(".acc6").attr("src","img/gAcc_d1.png");
				$(".accBck").attr("src","img/gAcc_d4.png");
			}else{
				$(".acc6").attr("src","img/none.png");
				$(".accBck").attr("src","img/none.png");
			}



			if(statSis>48 && statSis<50){
				$(".acc2").attr("src","img/gAcc_s1.png");
			}else if(statSis>=50){
				
				$(".acc4").attr("src","img/gAcc_s3.png");
			}else{
				$(".acc2").attr("src","img/gAcc_d5.png");
				$(".acc4").attr("src","img/none.png");
			}

			
			if(statAud>40 && statAud<50){
				$(".acc2").attr("src","img/gAcc_a1.png");
				
			}else if(statAud>=50){
				$(".acc1").attr("src","img/gAcc_a1.png");
				$(".acc5").attr("src","img/gAcc_a3.png");
			}else{
				$(".acc5").attr("src","img/none.png");
				$(".acc2").attr("src","img/gAcc_d5.png");
				$(".acc1").attr("src","img/gAcc_s1.png");
			}
			
		
		
		}else{

			if(maior == statSis){
				$(".accEnd").attr("src","img/bAcc_s2.png");
			}else if(maior == statDes){
				$(".accEnd").attr("src","img/bAcc_d2.png");
			}else if(maior == statAud){
				$(".accEnd").attr("src","img/bAcc_a2.png");
			}


			

			if(statDes>40 && statDes<50){
				$(".accBck").attr("src","img/bAcc_d3.png")
			}else if(statDes>=50){
				$(".acc6").attr("src","img/bAcc_d1.png");
				$(".accBck").attr("src","img/bAcc_d4.png");
			}else{
				$(".acc6").attr("src","img/none.png");
				$(".accBck").attr("src","img/none.png");
			}



			if(statSis>48 && statSis<55){
				$(".acc2").attr("src","img/bAcc_s1.png");
			}else if(statSis>=55){
				
				$(".acc4").attr("src","img/bAcc_s3.png");
			}else{
				$(".acc2").attr("src","img/bAcc_d5.png");
				$(".acc4").attr("src","img/none.png");
			}

			

			if(statAud>40 && statAud<50){
				$(".acc2").attr("src","img/bAcc_a1.png");
				
			}else if(statAud>=50){
				$(".acc1").attr("src","img/bAcc_a1.png");
				$(".acc5").attr("src","img/bAcc_a3.png");
			}else{
				$(".acc5").attr("src","img/none.png");
				$(".acc2").attr("src","img/bAcc_d5.png");
				$(".acc1").attr("src","img/bAcc_s1.png");
			}



			
		
			
		}

		

		
		// $(".acc2").attr("src","img/System_ac1.png");
    
    
		if(aumentar>1){
			
			 $("#myBarAud2").animate({width: ""+statAud+"%"});
			 $("#myBarDes2").animate({width: ""+statDes+"%"});
			 $("#myBarSist2").animate({width: ""+statSis+"%"});
			 console.log("Aumentar"+aumentar);

			 
			 
		}
	
	

		

	}else{
		$("#sem78 .cadeiras[feito='n']").next().css("color","red"); //Avisar onde falta corrigir cadeiras
		$(".errorMessage").show();
			$(".erroText").animate({top: '200px'});
			$(document).scrollTop(0);

	}

	if(acabou == true){
		$(document).scrollTop(0);
		
		$("#complete").show();
		$(".cadeiras").removeClass("highli");
		$("#semestres").hide();
		$("#sem78").hide();
		$("#popUp").hide();
		$("#personagemCaixa").hide();
		$(".localizar").hide();

		
	}

});

	


	



setInterval(function(){
if($("#sem456 .cadeiras[feito='n']").length <=0){
	etapa2Enable =true;
}else{
	etapa2Enable= false;
}

	
if(etapa1 == true && etapa2==false){
	
	
	$(".primPass").css("background-color"," rgba(0,0,0,0.5)");

	 	
	$("#blk1").hide();
	$(".segTril").show();
	

}
if(etapa2 == true){
	
	$(".segTril").css("background-color"," rgba(0,0,0,0.5)");


	
		
	
	
	$("#blk2").hide();
	$(".fimCurs").show();

}



	

  }, 1);

});





// //Barra Stats
// function move() {
//   var elem = document.getElementById("myBarDes");
//   var width = 20; //De onde começa
//   var id = setInterval(frame, 10);
//   function frame() {
//     if (width >= 80) { //Até onde vai
//       clearInterval(id);
//     } else {
//       width++;
//       elem.style.width = width + '%';
      
//     }
//   }
// }




function volta1() {
			$(document).scrollTop(0);
			$("#sem123").fadeIn();
			$("#sem456").hide();
			$("#sem78").hide();
			$("#popUp").hide();
			
}

function volta2() {
		$(document).scrollTop(0);
		$("#sem123").hide();
		$("#sem456").fadeIn();
		$("#sem78").hide();
		$("#popUp").hide();
		
		

}

function vai1() {
$(document).scrollTop(0);
		$("#sem123").hide();
		$("#sem456").fadeIn();
		$("#sem78").hide();
		$("#popUp").hide();
		
		
		
}

