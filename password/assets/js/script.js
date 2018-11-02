var app = angular.module("password", []);
		app.controller("passwordCtrl", function ($scope) {

			// let timeout;
			

			$scope.idioma = 0;

			$scope.translate = [
			{
				btnJogar: 'Jogar',
				btnVerificar: 'ENTER',
				btnBack: 'Voltar',
				btnRestart: 'Recomeçar',
				btnRegras: 'Regras',
				labelCorreto: 'Correto',
				labelFora: 'Fora de posição',
				labelVerificar: 'Verificar',
				labelTentativas: 'Tentativas',
				textoDerrota: 'VOCÊ PERDEU! A SENHA ERA:',
				textoAtencao:'Atenção! Os círculos não estão associados com a ordem da senha!',
				textoRegra1:'NÃO existem números repetidos;',
				textoRegra2:'Os círculos indicam a quantidade de números certos na senha;',
				textoRegra3:'Você tem 9 tentativas para acertar a senha.',
				textoDicaOk:'Para cada círculo amarelo indica que existe 1 número da senha na posição errada',
				textoDicaCorreto:'Para cada círculo verde indica que existe 1 número da senha na posição certa',
				textoEasterEgg:'Você encontrou um easter egg! Tente agora fazer ao contrário!'
			},
			{
				btnJogar: 'Play',
				btnVerificar: 'ENTER',
				btnBack: 'Back',
				btnRestart: 'Restart',
				btnRegras: 'Rules',
				labelCorreto: 'Correct',
				labelFora: 'Out of position',
				labelVerificar: '    Check',
				labelTentativas: 'Attempts',
				textoDerrota: 'YOU LOSE! THE PASSWORD WAS:',
				textoAtencao: 'Attention! The circles are not associated with the password order!',
				textoRegra1: 'There are NO repeated numbers;',
				textoRegra2: 'The circles indicate the amount of certain numbers in the password;',
				textoRegra3: 'You have 9 attempts to set the password.',
				textoDicaOk: 'For each yellow circle indicates that there is 1 password number in the wrong position',
				textoDicaCorreto: 'For each green circle indicates that there is 1 password number in the right position',
				textoEasterEgg:'You found an easter egg! Try to do it backwards now!'

			}
			];

			$scope.estagio = 0;			
			$scope.n1 = 0;			
			$scope.n2 = 0;			
			$scope.n3 = 0;			
			$scope.n4 = 0;

			$scope.fim=false;

			$scope.leds = ['check','check','check','check'];
			

			$scope.tentativas = 9;

			$scope.numerosCertos = 0;
			$scope.numerosFora = 0;

			//Senha Random
	        $scope.pass1;
	        $scope.pass2;
	        $scope.pass3;
	        $scope.pass4;

	        function gerarSenha(){
	        $scope.pass1 = Math.floor((Math.random()*10));
	        $scope.pass2 = Math.floor((Math.random()*10));

	        while($scope.pass1 == $scope.pass2){
	            $scope.pass2 = Math.floor((Math.random()*10));
	        }

	         $scope.pass3 = Math.floor((Math.random()*10));

	        while($scope.pass3 == $scope.pass2 || $scope.pass3 == $scope.pass1){
	            $scope.pass3 = Math.floor((Math.random()*10));
	        }

	         $scope.pass4 = Math.floor((Math.random()*10));

	        while($scope.pass4 == $scope.pass3 || $scope.pass4 == $scope.pass2 || $scope.pass4==$scope.pass1){
	            $scope.pass4= Math.floor((Math.random()*10));
	        }

	        //console.log("Senha "+$scope.pass1+" "+$scope.pass2+" "+$scope.pass3+" "+$scope.pass4);
	       }
	       gerarSenha(); 

	       function resetar() {
	       		gerarSenha();
	       		
        				
				$scope.n1 = 0;			
				$scope.n2 = 0;			
				$scope.n3 = 0;			
				$scope.n4 = 0;

				$scope.fim=false;

				$scope.leds = ['check','check','check','check'];
				

				$scope.tentativas = 9;

				$scope.numerosCertos = 0;
				$scope.numerosFora = 0;
	       }


			$scope.trocarIdioma = function (n){
				var click = new Audio('./assets/images/click.mp3');
				click.play();
				
				$scope.idioma = n;
				
			};

			$scope.passarFase = function (n){
				

				$scope.estagio = n;
				if(n ==1){
					resetar();
				}

				if(n!=0){
					var click = new Audio('./assets/images/menubtn.wav');
					click.play();
				}else{
					var flick = new Audio('./assets/images/flick.wav');
					flick.play();
				}					
				
			};
		

			$scope.soundOver = function (){
				var over = new Audio('./assets/images/hover.wav');
				over.play();
			};


			
			$scope.aumentarNum1 = function (n){
				

				if(!$scope.fim){
					var seta = new Audio('./assets/images/click.mp3');
					seta.play();
					switch(n){
						case 1:

						$scope.n1++;

						if($scope.n1 >= 10){
							$scope.n1 = 0;
						}
						break;

						case 2:
						$scope.n2++;

						if($scope.n2 >= 10){
							$scope.n2 = 0;
						}
						break;

						case 3:
						$scope.n3++;

						if($scope.n3 >= 10){
							$scope.n3 = 0;
						}
						break;

						case 4:
						$scope.n4++;

						if($scope.n4 >= 10){
							$scope.n4 = 0;
						}
						break;

					}
				}

			};

			$scope.toasty = false;

			//New Easter Egg
			
			var s = "";
			$scope.easterEgg = function (k){
				s=s+k;
				if(s.length > 4){
					s=""+k;
					var resetEgg = new Audio('./assets/images/flick.wav');
					resetEgg.play();
				}else if(s.length == 1){
					var resetEgg = new Audio('./assets/images/flick.wav');
					resetEgg.play();
				}

				if(s == "bOon"){
					$scope.toasty = true;
					var toasty = new Audio('./assets/images/toasty.mp3');
					toasty.play();
					// timeout = $timeout(function(){
					// 	//EasterEgg
					// 	console.log($scope.translate[$scope.idioma].textoEasterEgg);
					// 	$scope.toasty = false;
					// 	},300);
					
				}else if(s == "nOob"){
					$scope.n1 = $scope.pass1;
					$scope.n2 = $scope.pass2;
					$scope.n3 = $scope.pass3;
					$scope.n4 = $scope.pass4;
				}
				

				var flick = new Audio('./assets/images/click.mp3');
				flick.play();
			}
			

			$scope.diminuiNum1 = function (n){
				
				if(!$scope.fim){
					var seta = new Audio('./assets/images/click.mp3');
					seta.play();
					switch(n){
						case 1:
						$scope.n1--;
						if($scope.n1 < 0){
							$scope.n1 = 9;
						}
						break;

						case 2:
						$scope.n2--;
						if($scope.n2 < 0){
							$scope.n2 = 9;
						}
						break;

						case 3:
						$scope.n3--;
						if($scope.n3 < 0){
							$scope.n3 = 9;
						}
						break;

						case 4:
						$scope.n4--;
						if($scope.n4 < 0){
							$scope.n4 = 9;
						}
						break;

					}
				}

				
			};

			$scope.verificar = function (){

						$scope.numerosCertos = 0;
						$scope.numerosFora = 0;
						$scope.senha = [$scope.pass1,$scope.pass2,$scope.pass3,$scope.pass4];

						if($scope.senha.includes($scope.n1)){
							if($scope.n1 == $scope.senha[0]){
								$scope.numerosCertos++;
								//console.log("certo 1")
							}else{
								$scope.numerosFora++;
								//console.log("fora 1")
							}
							
						}

						if($scope.senha.includes($scope.n2)){
							if($scope.n2 == $scope.senha[1]){
								$scope.numerosCertos++;
								//console.log("certo 2")
							}else{
								$scope.numerosFora++;
								//console.log("fora 2")
							}
							
						}

						if($scope.senha.includes($scope.n3)){
							if($scope.n3 == $scope.senha[2]){
								$scope.numerosCertos++;
								//console.log("certo 3")
							}else{
								$scope.numerosFora++;
								//console.log("fora 3")
							}
							
						}


						if($scope.senha.includes($scope.n4)){
							if($scope.n4 == $scope.senha[3]){
								$scope.numerosCertos++;
								//console.log("certo 4")
							}else{
								$scope.numerosFora++;
								//console.log("fora 4")
							}
							
						}


				if(!$scope.fim){
					//console.log($scope.tentativas);
					if($scope.tentativas >1){
						var enter = new Audio('./assets/images/enter.wav');
						enter.play();
						

						


						if($scope.numerosCertos == 0 && $scope.numerosFora == 0 ){
							//console.log("Não tem certo");
							for(var i=0; i < 4; i++){
								$scope.leds[i] = 'check'
							}						
							
						}else{
							
							for(var i=0; i < $scope.numerosCertos; i++){
								$scope.leds[i] = 'correto'
							}

							for(var i=$scope.numerosCertos; i < $scope.numerosCertos+$scope.numerosFora; i++){
								$scope.leds[i] = 'ok'
							}

							for(var i=$scope.numerosCertos+$scope.numerosFora; i < 4; i++){
								$scope.leds[i] = 'check'
							}
							
						}

						if($scope.numerosCertos == 4){
							var win = new Audio('./assets/images/win.wav');
							win.play();
							$scope.fim=true;
							$scope.n1 = $scope.n1+'(correto)';
							$scope.n2 = $scope.n2+'(correto)';
							$scope.n3 = $scope.n3+'(correto)';
							$scope.n4 = $scope.n4+'(correto)';
						}


						$scope.tentativas--;

					}else if($scope.tentativas == 1 && $scope.numerosCertos < 4){
						var fail = new Audio('./assets/images/fail.mp3');
						fail.play();
						
						$scope.estagio = 2;
					}else{
						var win = new Audio('./assets/images/win.wav');
						win.play();
						$scope.fim=true;
						for(var i=0; i < 4; i++){
								$scope.leds[i] = 'correto'
						}
						$scope.n1 = $scope.n1+'(correto)';
						$scope.n2 = $scope.n2+'(correto)';
						$scope.n3 = $scope.n3+'(correto)';
						$scope.n4 = $scope.n4+'(correto)';
						
					}
				}
			};
			
		});

		