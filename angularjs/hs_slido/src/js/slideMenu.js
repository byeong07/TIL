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
		if (this.$toggleMenu.hasClass("sliding") ) {
			this.$toggleContents.stop().animate({left:"0px"}, 200);
			this.$toggleMenu.removeClass("sliding");
			console.log('1');
		} else {
			this.$toggleContents.stop().animate({left:"-200px"}, 200);
			this.$toggleMenu.addClass("sliding");
			console.log('2');
		}
	}

	slideMenu.init();
	slideMenu.initEvent();

})(this, this.jQuery);