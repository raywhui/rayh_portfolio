//grab video id to play when fadein
	var play = document.getElementById('background');

	function mainPageFadeIn(){
		$('.-header').animate({
			top:'0px'
		},1000);

		$('.-footer').animate({
			bottom:'0px'
		},1000);

		$('.test.red').css('opacity',1);
		setTimeout(function(){
			$('.test.blue').css('opacity',1);
		},500);
		setTimeout(function(){
			$('.test.green').css('opacity',1);
		},1000);

		setTimeout(function(){ //triangles fadein
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

			$('img.background-hey, img.background-welcome, img.background-click, img.background-index-1, img.background-index-2,img.background-index-3').css('opacity',1);

		},1250);//triangle fadein
	};

//intially moves header and footer for animation, needed for animation, but to also maintain fixed place in other pages
$('.-header').css('top','-101px');
$('.-footer').css('bottom','-101px');

$(window).on("load",function(){
	mainPageFadeIn();
});