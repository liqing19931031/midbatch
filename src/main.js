require('css/index.less');
var $ = require('jquery');
import { slide } from 'slide';
var dist = '/themes/mall/tmall/styles/default/tunhuo/'
// var images1 = ['images/tunhuo-banner/shop_cp-banner.jpg', 'images/tunhuo-banner/shop_cp-banner_2.jpg', 'images/tunhuo-banner/shop_cp-banner_3.jpg'];
// var images2 = ['images/tunhuo-banner/shop_fzfzhc_2.jpg', 'images/tunhuo-banner/shop_fzfzhc_4.png', 'images/tunhuo-banner/shop_fzfzhc_6.png'];
var images1 = [{ pic: dist + '1/b-1.jpg', url: ''}, { pic: dist + '1/b-2.jpg', url: ''}, { pic: dist + '1/b-3.jpg', url: '' }];
var images = [
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
var slide1 = new slide($('.slide'), images1);
$('.content-slide').each(function(index, item) {
	var slide2 = new slide($(item), images[index]);
	slide2.render().init().startSlide();
})
window.onscroll = function () {
	var allTop = document.documentElement.scrollTop || document.body.scrollTop;
	var nowType;
	if (allTop > 3050) {
		$('.nav').css('display', 'block');
		nowType = parseInt((allTop - 2095) / 770);
		$('.nav').find('.nav-content').removeClass('on');
		$('.nav').find('.nav-content').eq(nowType - 1).addClass('on');
	} else {
		$('.nav').css('display', 'none');
	}
}
$('body').trigger('scroll');
$('.nav-end').click(function(){
	$('body').animate({ scrollTop: 0 }, 500);
	return false;
})
slide1.render().init().startSlide();