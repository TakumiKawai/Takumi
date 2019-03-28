$(function () {
	
	$('.now h3').fadeIn(3000);
	$('.now p').fadeIn(3000);


	let goal = $('.goal').offset().top -  400;
	let past = $('.past').offset().top -  400;
	let want = $('.want').offset().top -  400;
	let hope = $('.hope').offset().top -  400;

	$(window).on('scroll', function () {

		

		if ($(window).scrollTop() > goal) {
			$('.goal h3').fadeIn(4000);
			$('.goal-sentence').fadeIn(2000);			
		}

		if ($(window).scrollTop() > past) {
			$('.past h3').fadeIn(4000);
			$('.past-sentence').fadeIn(2000);
		}

		if ($(window).scrollTop() > want) {
			$('.want h3').fadeIn(4000);
			$('.want-sentence').fadeIn(2000);
		}

		if ($(window).scrollTop() > hope) {
			$('.hope h3').fadeIn(4000);
			$('.hope-sentence').fadeIn(2000);
		}
	})
});