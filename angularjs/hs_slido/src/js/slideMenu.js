(function(global, $){
	'use strict';

	var slideMenu = new SlideMenu();

	function SlideMenu() {
		this.$menu_wrapper = null
		this.$toggle_btn = null
		this.$toggle_contents = null
	}

	SlideMenu.prototype.init = function() {
		this.$menu_wrapper = $('.side-wrap');
		this.$toggle_btn = this.$menu_wrapper.find('button');
		this.$toggle_contents = this.$menu_wrapper.find('.page-nav');
	}

	SlideMenu.prototype.initEvent = function() {
		var objThis = this;
		this.$toggle_btn.on('click', function(){
				objThis.toggleMenu();
		});
	}

	SlideMenu.prototype.toggleMenu = function() {
		if (this.$menu_wrapper.hasClass("sliding") ) {
			this.$toggle_contents.stop().animate({left:"0px"}, 200);
			this.$menu_wrapper.removeClass("sliding");
			console.log('1');
		} else {
			this.$toggle_contents.stop().animate({left:"-200px"}, 200);
			this.$menu_wrapper.addClass("sliding");
			console.log('2');
		}
	}

	slideMenu.init();
	slideMenu.initEvent();

})(this, this.jQuery);