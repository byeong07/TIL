// 왼쪽 slide menu 
(function(global, $){
	'use strict';

	var slideMenu = new SlideMenu();

	function SlideMenu() {
		this.$toggleMenu = null
		this.$toggleBtn = null
		this.$toggleContents = null
	}

	SlideMenu.prototype.init = function() {
		this.$toggleMenu = $('.toggle-menu');
		this.$toggleBtn = this.$toggleMenu.find('button');
		this.$toggleContents = $('.page-nav');
	}

	SlideMenu.prototype.initEvent = function() {
		var objThis = this;
		this.$toggleBtn.on('click', function(){
				objThis.toggleMenu();
		});
	}

	SlideMenu.prototype.toggleMenu = function() {
			this.$toggleContents.toggleClass("sliding");
	}

	slideMenu.init();
	slideMenu.initEvent();

})(this, this.jQuery);