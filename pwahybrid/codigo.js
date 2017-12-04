	//registra o service worker
	navigator.serviceWorker && navigator.serviceWorker.register('./sw.js').then(function(registration) {
 		console.log('Excellent, registered with scope: ', registration.scope);
	});
	//limpa o cache
	var limpa = document.getElementById('limpa');
	limpa.addEventListener('click', function() {
	  navigator.serviceWorker && navigator.serviceWorker.register('./sw.js').then(function(registration) {
	    caches.delete('the-magic-cache').then(() => {
	      alert('ok');
	    }, () => {
	      alert('Failed!');
	    });
	  }).catch(err => {
	    alert('Couldn\'t get Service Worker- is it installed?');
	  });
	});

	//camera
	var player = document.getElementById('player'); 
	var snapshotCanvas = document.getElementById('snapshot');
	var captureButton = document.getElementById('capture');
	var btnInverter = document.getElementById('inverter');
	var btnSepia = document.getElementById('sepia');
	var btnGS = document.getElementById('gs');
	var btnOG = document.getElementById('og');
	var btnUsaCamera = document.getElementById('usaCamera');
	//só funciona no chrome mobile acima do 61
	var btnCompPosi = document.getElementById('compPosi');

	//botao que pede pela camera
	btnUsaCamera.addEventListener('click', function(){
		navigator.mediaDevices.getUserMedia({video: true})
			.then(handleSuccess);
	});

	//executa se conseguir acesso da camera
	var handleSuccess = function(stream) {    
		player.srcObject = stream;
		player.removeAttribute("controls");
		player.style.display = "block";
	};

	//tira a foto e desenha ela no canvas
	captureButton.addEventListener('click', function() {
		var context = snapshot.getContext('2d');
		context.drawImage(player, 0, 0, snapshotCanvas.width, 
		snapshotCanvas.height);
		snapshotCanvas.style.display = "block";
	});

	//botao de inverter a cor
	btnInverter.addEventListener('click', function(){
		snapshotCanvas.style.filter = "invert(1)";
	});
	//botao de deixar em escala de cinza
	btnGS.addEventListener('click', function(){
		snapshotCanvas.style.filter = "grayscale(100%)";
	});
	//botao de sepia
	btnSepia.addEventListener('click', function(){
		snapshotCanvas.style.filter = "sepia(100%)";
	});
	//botao de voltar a imagem pro original
	btnOG.addEventListener('click', function(){
		snapshotCanvas.style.filter = "none";
	});

	//só funciona no chrome mobile acima do 61, serve pra invocar
	//o compartilhador do sistema mesmo
	btnCompPosi.addEventListener('click', function(){
		if (navigator.share) {
			navigator.share({
				title: 'aaaaaaaa',
				text: 'Latitude e longitude: ',
				url: 'www.aaaaa.aaa',
			})
				.then(() => console.log('Successful share'))
				.catch((error) => console.log('Error sharing', error));
		}
	});


	//localizacao
	var btnPosi = document.getElementById("posi");
	var x = document.getElementById("oi");
	btnPosi.addEventListener('click', function(){
		getLocation();
	});
	function getLocation() {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(showPosition);
		} 
		else {
			x.innerHTML = "Geolocation is not supported by this browser.";
		}
	}
	function showPosition(position) {
		x.innerHTML = "Latitude: " + position.coords.latitude + 
			"<br>Longitude: " + position.coords.longitude; 
	}

	//acelerometro
	//essa parte ainda ta muito sensivel, tem que ajustar melhor mas ainda
	//nao consegui
	var z = document.getElementById("aceleracao");
	var a = document.getElementById("a");
	window.addEventListener('devicemotion', motion, false);

	let lastX, lastY, lastZ;
	let moveCounter = 0;

	var numero = 0;
	function motion(e) {
		let acc = e.acceleration;
		if(!acc.hasOwnProperty('x')) {
			acc = e.accelerationIncludingGravity;
		}


		if(!acc.x) return;
		if(Math.abs(acc.x) >= 1 ){
			if(!lastX) {
				lastX = acc.x;
				lastY = acc.y;
				lastZ = acc.z;
				return;
			}

			let deltaX = Math.abs(acc.x - lastX);
			let deltaY = Math.abs(acc.y - lastY);
			let deltaZ = Math.abs(acc.z - lastZ);

			a.innerHTML = 'x: ';

			if(deltaX > 2){
				moveCounter++;
			} 
			else {
				moveCounter = Math.max(0, --moveCounter);
			}

			if(moveCounter > 3) {
				numero++;
				moveCounter = 0;
			}
			
			if (numero > 3){
				numero = 0;
			}

			switch (numero){
				case 0:
					snapshotCanvas.style.filter = "invert(1)";
					break;
				case 1:
					snapshotCanvas.style.filter = "grayscale(100%)";
					break;
				case 2:
					snapshotCanvas.style.filter = "sepia(100%)";
					break;
				case 3:
					snapshotCanvas.style.filter = "none";
					break;
			}

			z.innerHTML = numero;

			lastX = acc.x;
			lastY = acc.y;
			lastZ = acc.z;

		}
	}
