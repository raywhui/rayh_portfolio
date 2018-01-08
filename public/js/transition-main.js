//grab video id to play when fadein
	var play = document.getElementById('background');
	var menuPageChange = localStorage.getItem('rhui-returnPage');
	console.log(menuPageChange);

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
				$('img.background-about, img.background-blog, img.background-works, img.sheikah-eye').css('opacity', 1);
			},3850);

			$('video#background').css('opacity',0.65); //fadein video background
			play.play(); //play video

			$('img.background-hey, img.background-welcome, img.background-click, img.background-index-1, img.background-index-2,img.background-index-3').css('opacity',1);

		},1250);//triangle fadein
	};

	function menuTransition(backgroundColor, URL){
		$('video#background, div.triangle-fade').css('opacity',0);
		$('body').css('background-color', backgroundColor);
		setTimeout(function(){
			$('video#background, div.triangle-fade').css('display','none');

			// local non server testing
			// window.location.assign("./portfolio_about.html");

			// node testing
			window.location.assign(URL);
		},1000);	
	};

//Transition from About, work, or blog
function outerToMainFadeIn(){
	$('.test.red').css('opacity',1);
	$('.test.blue').css('opacity',1);
	$('.test.green').css('opacity',1);

	$('img.background-about, img.background-blog, img.background-works, img.sheikah-eye').css('opacity', 1);
	$('video#background').css('opacity',0.65); //fadein video background
	play.play(); //play video
	$('img.background-hey, img.background-welcome, img.background-click, img.background-index-1, img.background-index-2,img.background-index-3').css('opacity',1);
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
};


//intially moves header and footer for animation, needed for animation, but to also maintain fixed place in other pages



//Set header/footer changes before window loads for smooth transition effect.
	if (menuPageChange === 'about' || menuPageChange === 'works'){
		$('.-header').css('top','0px');
		$('.-footer').css('bottom','0px');

	}else{
		$('.-header').css('top','-101px');
		$('.-footer').css('bottom','-101px');
	}


$(window).on("load",function(){
	if (menuPageChange === 'about'){
		$('.menu').addClass('about-transition');
		outerToMainFadeIn();

	}else if (menuPageChange === 'works'){
		$('.menu').addClass('works-transition');
		outerToMainFadeIn();

	}else{
		mainPageFadeIn();
	}
});

//Menu Transitions to return to previous page
$('body .main-page').on('click','.menu.about-transition',function(){
	menuTransition('#CF0123','./about');
});

$('body .main-page').on('click','.menu.works-transition',function(){
	menuTransition('#0E7FD6','./works');
});
