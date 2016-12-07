require('css/index.less');
var $ = require('jquery');
import { slide } from 'slide';
var dist = 'http://pf.test.com/themes/mall/tmall/styles/default/images/stockpile/'
// var images1 = ['images/shop_cp/shop_cp-banner.jpg', 'images/shop_cp/shop_cp-banner_2.jpg', 'images/shop_cp/shop_cp-banner_3.jpg'];
// var images2 = ['images/shop_fzfzhc_2/shop_fzfzhc_2.jpg', 'images/shop_fzfzhc_2/shop_fzfzhc_4.png', 'images/shop_fzfzhc_2/shop_fzfzhc_6.png'];
var images1 = [{ pic: dist + 'images/shop_cp/shop_cp-banner.jpg', url: 'http://pf.test.com'}, { pic: dist + 'images/shop_cp/shop_cp-banner_2.jpg', url: 'http://pf.test.com'}, { pic: dist + 'images/shop_cp/shop_cp-banner_3.jpg', url: 'http://pf.text.com' }];
var images2 = [{ pic: dist + 'images/shop_fzfzhc_2/shop_fzfzhc_2.jpg', url: 'http://pf.test.com'}, { pic: dist + 'images/shop_fzfzhc_2/shop_fzfzhc_4.png', url: 'http://pf.test.com'}, { pic: dist + 'images/shop_fzfzhc_2/shop_fzfzhc_6.png', url: 'http://pf.text.com'}];
var slide1 = new slide($('.slide'), images1);
$('.content-slide').each(function(index, item) {
	var slide2 = new slide($(item), images2);
	slide2.render().init().startSlide();
})
window.onscroll = function () {
	var allTop = document.body.scrollTop;
	var nowType;
	if (allTop < 3050) {
		$('.nav').css('display', 'none');
	} else {
		nowType = parseInt((allTop - 2095) / 770);
		$('.nav').find('.nav-content').removeClass('on');
		$('.nav').find('.nav-content').eq(nowType - 1).addClass('on');
		$('.nav').css('display', 'block');
	}
}
$('.nav-end').click(function(){
	$('body').animate({ scrollTop: 0 }, 500);
	return false;
})
slide1.render().init().startSlide();