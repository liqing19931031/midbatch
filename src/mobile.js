require('css/mobile.less');
var $ = require('jquery');
import { slide } from 'slide';
var dist = 'images/tunhuo/';
// '/themes/mall/tmall/styles/default/tunhuo/';
var images = [
	[
		{ pic: dist + '1/b-1.jpg', url: ''},
		{ pic: dist + '1/b-2.jpg', url: ''},
		{ pic: dist + '1/b-3.jpg', url: ''}
	],
	[
		{ pic: dist + '3/FZ-2.jpg', url: ''},
		{ pic: dist + '3/FZ-3.jpg', url: ''},
		{ pic: dist + '3/FZ-4.jpg', url: ''}
	],
	[
		{ pic: dist + '4/MY-2.jpg', url: ''},
		{ pic: dist + '4/MY-3.jpg', url: ''},
		{ pic: dist + '4/MY-4.jpg', url: ''}
	],
	[
		{ pic: dist + '5/XS-2.jpg', url: ''},
		{ pic: dist + '5/XS-3.jpg', url: ''},
		{ pic: dist + '5/XS-4.jpg', url: ''}
	],
	[
		{ pic: dist + '6/MZ-2.jpg', url: ''},
		{ pic: dist + '6/MZ-3.jpg', url: ''},
		{ pic: dist + '6/MZ-4.jpg', url: ''}
	],
	[
		{ pic: dist + '7/YS-2.jpg', url: ''},
		{ pic: dist + '7/YS-3.jpg', url: ''},
		{ pic: dist + '7/YS-4.jpg', url: ''}
	],
	[
		{ pic: dist + '8/SH-2.jpg', url: ''},
		{ pic: dist + '8/SH-3.jpg', url: ''},
		{ pic: dist + '8/SH-4.jpg', url: ''}
	],
	[
		{ pic: dist + '9/GZ-2.jpg', url: ''},
		{ pic: dist + '9/GZ-3.jpg', url: ''},
		{ pic: dist + '9/GZ-4.jpg', url: ''}
	]
]
var rem = document.body.clientWidth / 10;
var windowHeight = document.body.clientWidth / 2;
var turnRed = function(item){
	$('.nav').find('a').removeClass('on');
	if (item) {
		$('[data-index=' + item + ']').addClass('on');
	}
	console.log($('.nav-left').scrollLeft());
	$('.nav-left').scrollLeft((item - 1) * 2.5 * rem);
}
$('.slide').each(function(index, item) {
	var Slide = new slide($(item), images[index]);
	Slide.render().init().startSlide();
})
window.onscroll = function () {
	var allTop = document.documentElement.scrollTop || document.body.scrollTop;
	var nowType;
	if (allTop > 26.4 * rem) {
		if (allTop < 52 * rem - windowHeight) {
			nowType = 1;
		} else {
			nowType = parseInt((allTop - 52 * rem) / (25.5 * rem) + 2)
		}
		$('.nav').css('position', 'fixed');
	} else {
		nowType = 0;
		$('.nav').css('position', 'relative');
	}
	turnRed(nowType);
}
$('.nav-open').on('click', function(){
	if ($(this).hasClass('open')) {
		$(this).removeClass('open');
		$('.navlist').css('height', 0);
		$(this).find('img').css('transform', 'rotate(0deg)');
	} else {
		$(this).addClass('open');
		$('.navlist').css('height', 4.266667 * rem);
		$(this).find('img').css('transform', 'rotate(180deg)')
	}
});
$('.nav a').on('click',function(){
	var a = $(this).attr('data-index');
	turnRed(a);
});
