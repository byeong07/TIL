// 왼쪽 slide menu 
(function(global, $){
	'use strict';

	var slideMenu = new SlideMenu();

	function SlideMenu() {
		// 슬라이드 메뉴 관련 프로퍼티 
		this.$toggleMenu = null;
		this.$toggleBtn = null;
		this.$toggleContents = null;
		// 브라우저 크기 관련 프로퍼티 
		this.$deskWidth = true; // 한번만 실행하기 위한 변수 
		this.$deskWidthPx = 1240; // 슬라이드 메뉴 들어가는 시점 
	}

	SlideMenu.prototype.init = function() {
		// 햄버거 버튼
		this.$toggleMenu = $('.toggle-menu');
		this.$toggleBtn = this.$toggleMenu.find('button');
		// 메뉴 
		this.$toggleContents = $('.page-nav');
	}

	SlideMenu.prototype.initEvent = function() {
		var objThis = this;
		// 햄버거 버튼 클릭시 toggleMenu메소드 실행 
		this.$toggleBtn.on('click', function(){
				objThis.toggleMenu();
		});
		// 브라우저 창 크기 바뀔 때 
		$(window).resize(function(){
			// 데스크탑이 아니면 (or 창이 줄어들면)
			if(window.innerWidth < objThis.$deskWidthPx && objThis.$deskWidth == true){
				objThis.toggleMenu();
				objThis.$deskWidth = false;
			} else if(window.innerWidth > objThis.$deskWidthPx && objThis.$deskWidth == false){
				objThis.toggleMenu();
				objThis.$deskWidth = true;
			}
		});
	}
	// class 이름 붙이고 떼는 기능
	SlideMenu.prototype.toggleMenu = function() {
		this.$toggleContents.toggleClass("sliding");
	}

	slideMenu.init();
	slideMenu.initEvent();

})(this, this.jQuery);