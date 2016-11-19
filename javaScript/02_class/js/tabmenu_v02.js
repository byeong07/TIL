// 2. 함수 단위 -> 프로토타입 방식 클래스 

(function(global, $){
	'use strict';
	
	// 인스턴스 생성 	
	var tabTab = new TabMenu();

	// 클래스 생성, 프로퍼티 생성 
	function TabMenu() {
		this.$tab = null
		this.$tabMenus = null;
		this.$selectMenu = null;
	}
	// 메서드 생성, 요소 초기화  
	TabMenu.prototype.init =function(){
		this.$tab = $('#tabMenu1');
		this.$tabMenus = this.$tab.find('li');
	}

	TabMenu.prototype.initEvent = function(){
		var objThis = this;
		this.$tabMenus.on("click", function(){
			objThis.setSelectMenu($(this));
		});
	}

	TabMenu.prototype.setSelectMenu = function($thisMenu){
		if(this.$selectMenu){
			this.$selectMenu.removeClass('select');
		}
		this.$selectMenu = $thisMenu;
		this.$selectMenu.addClass('select');
	}

	tabTab.init();
	tabTab.initEvent();

})(this, this.jQuery);