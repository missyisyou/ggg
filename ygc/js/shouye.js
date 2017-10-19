/**
 * Created by Administrator on 2017/10/17.
 */
$(function(){
	document.addEventListener('touchstart',function(ev){
		ev.preventDefault();
	})
	document.documentElement.style.fontSize=innerWidth/15+"px";
	var mySwiper = new Swiper ('.swiper-container', {
	    direction: 'vertical',
	    autoplayDisableOnInteraction:false,
	    effect : 'coverflow',
	    slidesPerView: 3,
	    centeredSlides: true,
	})
	
	var menu=$('#menu');
	var headCbl=$('#header_cbl');
	var headUl=$('#header_cbl_ul');
	var headLi=headUl.children();
	
	menu.on('touchstart',function(ev){
		if(headCbl.offset().top>=-500){
			headCbl.animate({
			'top':'250px'
			},400)
		}
		if(headCbl.offset().top==325){
			headCbl.animate({
			'top':'-500px'
			},400)
		}
	})
	headUl.on('touchstart','headLi',function(){
//		for(var i=1;i<headLi.length;i++){
			$('#us1').css({
				'display':'block'
			})
//		}
	})	
})