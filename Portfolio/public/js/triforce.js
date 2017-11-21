	$('canvas#triforce').drawVector({ //Angles are always default 0 degrees, not relative.
		layer:true,
		strokeStyle: 'white',
		name: 'triTop',
		groups: ['triforce'],
		strokeWidth: 12,
		x:360, y:65, //3
		a1:150, l1:0,
		a2:270, l2:0,
		a3:30, l3:0,
		click: function() { 
			$('video#background, div.triangle-fade').css('opacity',0);
			$('body').css('background-color', '#CF0123');

			setTimeout(function(){
					$('video#background, div.triangle-fade').css('display','none');

					// local non server testing
					// window.location.assign("./portfolio_about.html");

					// node testing
					window.location.assign("/about");
			},1000);	 
		},
		mouseover: function() {
   		$('canvas#triforce').animateLayer('triTop', { strokeWidth: 18, y:21, opacity: 1, strokeStyle: '#CF0123' }, 350 
   			).animateLayer('about', { y:176, opacity: 1 }, 500);
   		$('#triforce').css('cursor','pointer');
   		$('.about-cloud').css('opacity', 0.7);
   		$('img.background-words').css('opacity',0);
  	},

  	mouseout: function(){ //about hover }
			$('canvas#triforce').animateLayer('triTop', { strokeWidth: 12, y:65, opacity: 0.55, strokeStyle: 'white' }, 350 
				).animateLayer('about', { y:220, opacity: 0 }, 500);   		
			$('.about-cloud').css('opacity', 0);
			$('img.background-words').css('opacity',1);
		} //outfunction

	}).drawVector({
		layer:true,
		strokeStyle: 'white',
		name: 'triRight',
		groups: ['triforce'],
		strokeWidth: 12,
		x:660, y:585, //523
		a1:270, l1:0,
		a2:30, l2:0,
		a3:150, l3:0,
		mouseover:function(){
			$('canvas#triforce').animateLayer('triRight', { strokeWidth: 18, strokeStyle: '#0AB831', x:704, y:613, opacity: 1 }, 350 
				).animateLayer('blog', { x: 555, y: 516, opacity: 1 }, 500);
			$('#triforce').css('cursor','pointer');
			$('.blog-cloud').css('opacity', 0.7);
			$('img.background-words').css('opacity',0);
		}, 

		mouseout: function(){
			$('canvas#triforce').animateLayer('triRight', { strokeWidth: 12, strokeStyle:'white', x:660, y:585, opacity: 0.55 }, 350 
				).animateLayer('blog', {  x: 510, y: 500, opacity: 0 }, 500);
			$('.blog-cloud').css('opacity', 0);
			$('img.background-words').css('opacity',1);
		}

	}).drawVector({
		layer:true,
		strokeStyle: 'white',
		name: 'triLeft',
		groups: ['triforce'],
		strokeWidth: 12,
		x:60, y:585, //523
		a1:30, l1:0, //44  
		a2:150, l2:0,
		a3:270, l3:0,
		mouseover:function(){
			$('canvas#triforce').animateLayer('triLeft', { strokeWidth: 18, strokeStyle: '#0E7FD6', x:16, y:613, opacity: 1 }, 350 
				).animateLayer('work', { x: 166, y: 516, opacity: 1 }, 500);
			$('#triforce').css('cursor','pointer');
			$('.work-cloud').css('opacity', 0.7);
			$('img.background-words').css('opacity',0);
		},

	  mouseout: function(){
			$('canvas#triforce').animateLayer('triLeft', { strokeWidth: 12, strokeStyle: 'white', x:60, y:585, opacity: 0.55 }, 350 
				).animateLayer('work', { x: 210, y: 500, opacity: 0 }, 500);
			$('.work-cloud').css('opacity', 0);
			$('img.background-words').css('opacity',1);
		}

	}).drawText({
		layer:true,
		groups: ['words'],
		name: 'about',
	  fillStyle: 'white',
	  x: 350, y: 220,
	  fontSize: '30pt',
	  opacity:0,
	  fontFamily: 'Nothing You Could Do',
	  text: 'About',

	}).drawText({
		layer:true,
		groups: ['words'],
		name: 'work',
	  fillStyle: 'white',
	  x: 210, y: 500,
	  fontSize: '30pt',
	  opacity:0,
	  fontFamily: 'Nothing You Could Do',
	  text: 'Work',
	  // click: function() {
			// //window.location = 'www.google.com';
		 // 	window.location.assign("https://www.w3schools.com");
	  // }

	}).drawText({
		layer:true,
		groups: ['words'],
		name: 'blog',
	  fillStyle: 'white',
	  x: 510, y: 500,
	  fontSize: '30pt',
	  opacity:0,
	  fontFamily: 'Nothing You Could Do',
	  text: 'Blog',
	  // click: function() {
	  // 	//window.location = 'www.google.com';
	  // 	window.location.assign("https://www.w3schools.com");
	  // }
});
