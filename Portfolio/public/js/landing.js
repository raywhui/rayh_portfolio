	// Canvas Landing
	//grab video id to play when fadein
	var play = document.getElementById('background');

	function mainPageFadeIn(){
		$('.-header').animate({
			top:'0px'
		},1000);

		$('.-footer').animate({
			bottom:'0px'
		},1000);

		setTimeout(function(){ //triangle fadein
			$('.test.red').css('opacity',1);
			setTimeout(function(){
				$('.test.blue').css('opacity',1);
			},500);
			setTimeout(function(){
				$('.test.green').css('opacity',1);
			},1000);
			setTimeout(function(){
				//Animate Triforce layer
				$('canvas#triforce').animateLayerGroup('triforce', {
				 	l1:300
				},1250).animateLayerGroup('triforce', {
					l2:300
				},1250).animateLayerGroup('triforce', {
					l3:300
				},1250).animateLayerGroup('triforce', {
					opacity: 0.55,
					closed:true,
				}).animateLayerGroup('words', {
					opacity:0
				},4250);

				setTimeout(function(){
					$('img.background-about, img.background-blog, img.background-works, img.sheikah-eye').css('opacity', 0.9);
				},3850);

				$('video#background').css('opacity',0.65); //fadein video background
				play.play(); //play video

				$('img.background-hey, img.background-welcome, img.background-click').css('opacity',1);
			},2000);

		},1000);//triangle fadein
	};

	function brandFade(letter,opacity,time){	//Fade effect of letters on landing	
		$('canvas#landing').animateLayer(letter, { 
			opacity:opacity
		},time);
	}

	//intially moves header and footer for animation, needed for animation, but to also maintain fixed place in other pages
	$('.-header').css('top','-101px');
	$('.-footer').css('bottom','-101px');


	$('canvas#landing').drawLine({ //Angles are always default 0 degrees, not relative.
  	layer:true,
  	name: 'rtl',
  	strokeStyle: 'white',
  	strokeWidth: 2,
  	x1: 330, y1: 330,
  	x2: 330, y2: 330
	}).drawLine({ 
  	layer:true,
  	name:'ltr',
  	strokeStyle: 'white',
  	strokeWidth: 2,
  	x1: 330, y1: 170,
  	x2: 330, y2: 170
  }).drawText({
  	layer: true,
	  name: 'r',
	  groups: ['brand'],
	  fillStyle: 'white',
	  x: 250, y: 150,
	  opacity:0,
	  fontSize: '50pt',
	  fontFamily: 'Nothing You Could Do',
	  text: 'R'
  }).drawText({
  	layer: true,
	  name: 'h',
	  groups: ['brand'],
	  fillStyle: 'white',
	  x: 135, y: 250,
	  opacity:0,
	  fontSize: '50pt',
	  fontFamily: 'Nothing You Could Do',
	  text: 'H'
	}).drawText({
  	layer: true,
	  name: 'u',
	  groups: ['brand'],
	  fillStyle: 'white',
	  x: 240, y: 365,
	  opacity:0,  
	  fontSize: '50pt',
	  fontFamily: 'Nothing You Could Do',
	  text: 'U'
	}).drawText({
  	layer: true,
	  name: 'i',
	  groups: ['brand'],
	  fillStyle: 'white',
	  x: 370, y: 250,
	  opacity:0,  
	  fontSize: '50pt',
	  fontFamily: 'Nothing You Could Do',
	  text: 'I'
	}).drawPolygon({
		layer: true,
		name:'load',
	  strokeStyle: 'white',
	  strokeWidth: 2,
	  x: 250, y: 460,
	  radius: 20,
	  sides: 3
	});

	//Landing page logo animations
	$('canvas#landing').animateLayer('rtl', {
  	x1: 170, y1: 170,
		x2: 330, y2: 330
	},1250);

	setTimeout(function(){
		$('canvas#landing').animateLayer('ltr', {
  		x1: 330, y1: 170,
  		x2: 170, y2: 330
		},1250);
	}, 250);

	setTimeout(function(){
		brandFade('r',1,1500);
	},1600);	

	setTimeout(function(){
		brandFade('h',1,1500);
	},1700);	

	setTimeout(function(){
		brandFade('u',1,1500);
	},1800);	

	setTimeout(function(){
		brandFade('i',1,1500);
	},1900);

	var loading = setInterval(function(){ //Loading animation
		$('canvas#landing').animateLayer('load', {
      rotate: '+=120'
    },1250);
	},1250);

	//After main page is fully rendered, allow access to site
	$(window).on("load", function(){ 

		setTimeout(function(){ //debug 


		clearInterval(loading);

		//As of 11/19, I cannot find a way to add more properties to the object unless specified at draw
		//loading triangle removed and swapped for another one with hover + click events
		$('canvas#landing').removeLayer('load').drawLayers();

		$('canvas#landing').drawPolygon({
			layer: true,
			name:'click',
		  strokeStyle: 'white',
		  strokeWidth: 2,
		  x: 250, y: 460,
		  radius: 20,
		  sides: 3,
			mouseover: function(layer) {
	    	$(this).animateLayer(layer, {
	      	fillStyle: 'white',
	    	}, 400);
	    	$('#landing').css('cursor','pointer');
		  },
		  mouseout: function(layer) {
		    $(this).animateLayer(layer, {
		      fillStyle: 'transparent'
		    }, 200);
		  },
		  click: function(){

		  	// ################################################################
		  	console.log('swags');
		  	// $('canvas#landing').css('display','none');
		  	// $('body .main-page').css('display','block');

		  	$('canvas#landing').animateLayerGroup('enterSite', { //Fade text
					opacity:0
				},500).animateLayer('click', { //Fade click triangle
					opacity:0,
				},500);

				setTimeout(function(){ //Removes layer from being clicked after fade
					$('canvas#landing').removeLayer('click').drawLayers();
				},500);


				//Fadeout Logo Animation
				$('canvas#landing').animateLayer('rtl', {
			  	x1: 330, y1: 330,
					x2: 330, y2: 330
				},1250);

				setTimeout(function(){
					$('canvas#landing').animateLayer('ltr', {
			  		x1: 170, y1: 330,
			  		x2: 170, y2: 330
					},1250);
				}, 250);

				brandFade('r', 0, 1000); //r fades immediately, followed by h, u, i

				setTimeout(function(){
					brandFade('h', 0, 1000);
				},100);	

				setTimeout(function(){
					brandFade('u', 0, 1000);
				},200);	

				setTimeout(function(){
					brandFade('i', 0, 1000);
				},300);

				setTimeout(function(){ //fade canvas#landing
					$('canvas#landing').css('opacity',0);
					setTimeout(function(){
						$('canvas#landing').css('display','none');
						$('body .main-page').css('display','block');
						mainPageFadeIn();
					},500);
				},1500);

				//###################################################################
		  }
		});

		$('canvas#landing').drawText({
			layer: true,
		  name: 'enter',
		  groups: ['enterSite'],
		  fillStyle: 'white',
		  x: 195, y: 460,
		  opacity:0,  
		  fontSize: '20pt',
		  fontFamily: 'Nothing You Could Do',
		  text: 'Enter'
		}).drawText({
			layer: true,
		  name: 'site',
		  groups: ['enterSite'],
		  fillStyle: 'white',
		  x: 303, y: 460,
		  opacity:0,  
		  fontSize: '25pt',
		  fontFamily: 'Nothing You Could Do',
		  text: 'Site'
		});

		$('canvas#landing').animateLayerGroup('enterSite', {
			opacity:1
		},1500);


		},1000)//debug
	});

