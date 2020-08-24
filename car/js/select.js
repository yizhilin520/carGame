;(function ($) {
	var dropdown = {
	  init: function () {
		this.initVal();
		this.bindUI();
	  },
	  bindUI: function () {
		$('[data-provider=ope-dropdown]').on('click', this.toggle);
		$('.drop-down .dropdown-li').on('click', this.select);
	  },
	  //初始化
	  initVal: function () {
		// var $element = $('.dropdown-li[selected]'),
		// 	val = $element.text();
		// $element.closest('.dropdown-list').prev('.drop-text').find('.drop-value').text(val);
	  },
	  //显示隐藏
	  toggle: function () {
		  
		var $this = $(this);
		if ($this.hasClass('on')) {
		  $this.find('.dropdown-list').removeClass('in');
		  $this.find('.dropdown-list').one('webkitTransitionEnd mozTransitionEnd MSTransitionEnd otransition transitionend', function () {
			$this.removeClass('on');
		  });
		} else {
		  $this.addClass('on');
		  var repaint = $this[0].offsetWidth;
		  $this.find('.dropdown-list').addClass('in');
		}
	  },
	  //选择函数
	  select: function () {
		var selectedVal = $(this).text();
		// console.log($(this))
		$(this).closest('.dropdown-list').prev('.drop-text').find('.drop-value').text(selectedVal);
	  }
	};

	 $(function () {
	  dropdown.init();
	});

})(jQuery);