// 2. 함수 단위 -> 프로토타입 방식 클래스 

(function(global, $){
	'use strict';

	// 클래스 생성 
	function TabMenu() {
		this.$tab = null
		this.$tabMenus = null;
		this.$selectMenu = null;
	}

	// 필요한 변수 초기화
	// var $tab = null;
	// var $tabMenus = null;
	// var $selectMenu = null;
	// // 초기화 
	// function init(){
	// 	$tab = $('#tabMenu1');
	// 	$tabMenus = $tab.find('li');
	// }

	// function initEvent(){
	// 	$tabMenus.on("click", function(){
	// 		setSelectMenu($(this));
	// 	});
	// }

	// function setSelectMenu($thisMenu){
	// 	if($selectMenu){
	// 		$selectMenu.removeClass('select');
	// 	}
	// 	$selectMenu = $thisMenu;
	// 	$selectMenu.addClass('select');
	// }

	// // 함수 실행
	// $(init);		// $(document).ready(init);
	// $(initEvent);

})(this, this.jQuery);