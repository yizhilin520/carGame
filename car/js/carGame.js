// 赛车游戏
// 1,功能：可以配置赛车排名，后面添加：可以设置赛车皮肤，设置赛车跑的效果

// 配置赛车：排名，速度，皮肤
let configCar = [{
		'car': 'car1',
		'showtitel': 'one',
		'number': 'seven',
		'sort': '7',
		'speed': ['speed10'],
		"skin": ['skin1']
	},
	{
		'car': 'car2',
		'showtitel': 'two',
		'number': 'eight',
		'sort': '8',
		'speed': ['speed11'],
		"skin": ['skin1']
	},
	{
		'car': 'car3',
		'showtitel': 'three',
		'number': 'two',
		'sort': '2',
		'speed': ['speed3', 'speed4'],
		"skin": ['skin1']
	},
	{
		'car': 'car4',
		'showtitel': 'four',
		'number': 'six',
		'sort': '6',
		'speed': ['speed9'],
		"skin": ['skin1']
	},
	{
		'car': 'car5',
		'showtitel': 'five',
		'number': 'one',
		'sort': '1',
		'speed': ['speed1', 'speed2'],
		"skin": ['skin1', 'skin2']
	},
	{
		'car': 'car6',
		'showtitel': 'six',
		'number': 'four',
		'sort': '4',
		'speed': ['speed7'],
		"skin": ['skin1']
	},
	{
		'car': 'car7',
		'showtitel': 'seven',
		'number': 'three',
		'sort': '3',
		'speed': ['speed5', 'speed6'],
		"skin": ['skin1']
	},
	{
		'car': 'car8',
		'showtitel': 'eight',
		'number': 'five',
		'sort': '5',
		'speed': ['speed8'],
		"skin": ['skin1']
	},
	{
		'car': 'car9',
		'showtitel': 'nine',
		'number': 'nine',
		'sort': '9',
		'speed': ['speed12'],
		"skin": ['skin1']
	}
]


$(function() {
	let timer;
	let zong = 4000 - 130;
	let $box = $(".box");
	$box.scrollLeft(3000);

	let k1 = 0; //冠军运行速度
	let k2 = 0; //亚军运行速度
	let k3 = 0; //季军运行速度
	let k4 = 0; //第4名运行速度
	let k5 = 0; //第5名运行速度
	let k6 = 0; //第6名运行速度
	let k7 = 0; //第7名运行速度
	let k8 = 0; //第8名运行速度
	let k9 = 0; //第9名运行速度

	let scrol = 2600; //滚动条宽度
	let speed11 = 2;
	let speedzc = 2.5;
	let speed1 = 3;
	let speed2 = 4;
	let speed3 = 4.5;
	let speed4 = 5;

	//清动画
	function clean() {
		// document.getElementById("car1").classList.remove('caranimt');
		let care1 = document.querySelectorAll('.care');
		for (let e of care1) {
			e.classList.remove('caranimt');
		}
	}

	//汽车动画
	function car1Animation() {
		if (timer) {
			clearInterval(timer);
		}
		timer = setInterval(function() {
			//滚动条速度
			scrol -= speed11;
			//加速
			// console.log(k1)

			// 冠军
			function sort1(car, number) {
				if (k1 <= 300) {
					k1 += speed2;
					$('#' + car).find('.fire').show();
				} else if (k1 >= 300 && k1 <= 1100) {
					k1 += speedzc;
					$('#' + car).find('.fire').hide();
				} else if (k1 >= 1100 && k1 <= 1500) {
					k1 += speed2;
					$('#' + car).find('.fire').show();
				} else if (k1 >= 1500 && k1 <= 1600) {
					k1 += speedzc;
					$('#' + car).find('.fire').hide();
				} else if (k1 >= 1600 && k1 <= 2000) {
					k1 += speed1;
					$('#' + car).find('.fire').show();
				} else if (k1 >= 2000 && k1 <= 2500) {
					k1 += speed11;
					$('#' + car).find('.fire').hide();
				} else if (k1 >= 2500 && k1 <= 3000) {
					k1 += speed1;
				} else if (k1 >= 3000) {
					k1 += speed2;
					$('#' + car).find('.fire').show();
				}
				if (k1 >= zong) {
					k1 = zong;
					$('#' + car).find('.fire').hide();
					$('[data-pai=' + number + ']').show().text('冠').removeClass('guang').addClass('guang');
				};

				document.getElementById(car).style.right = k1 + 'px';
			}
			// sort1('car5', 'five');

			// 第二
			function sort2(car, number) {
				if (k2 <= 400) {
					k2 += speed1;
				} else if (k2 >= 400 && k2 <= 800) {
					k2 += speed2;
					$('#' + car).find('.fire').show();
				} else if (k2 >= 800 && k2 <= 1400) {
					k2 += speedzc;
					$('#' + car).find('.fire').hide();
				} else if (k2 >= 1400 && k2 <= 1700) {
					k2 += speed1;
					$('#' + car).find('.fire').show();
				} else if (k2 >= 1700 && k2 <= 2000) {
					k2 += speedzc;
					$('#' + car).find('.fire').hide();
				} else if (k2 >= 2000 && k2 <= 2500) {
					k2 += speed1;
					$('#' + car).find('.fire').show();
				} else if (k2 >= 2500 && k2 <= 3000) {
					k2 += speed11;
					$('#' + car).find('.fire').hide();
				} else if (k2 >= 3000) {
					k2 += speed2;
					$('#' + car).find('.fire').show();
				}
				if (k2 >= zong) {
					k2 = zong;
					$('#' + car).find('.fire').hide();
					$('[data-pai=' + number + ']').show().text('亚').removeClass('ya').addClass('ya');
				}
				document.getElementById(car).style.right = k2 + 'px';
			}

			// 第三
			function sort3(car, number) {
				if (k3 <= 600) {
					k3 += speed11;
				} else if (k3 >= 600 && k3 <= 1100) {
					k3 += speed2;
					$('#' + car).find('.fire').show();
				} else if (k3 >= 1100 && k3 <= 1600) {
					k3 += speed2;
				} else if (k3 >= 1600 && k3 <= 2200) {
					k3 += speed11;
					$('#' + car).find('.fire').hide();
				} else if (k3 >= 2200 && k3 <= 2800) {
					k3 += speed2;
					$('#' + car).find('.fire').show();
				} else if (k3 >= 2800 && k3 <= 3300) {
					k3 += speedzc;
					$('#' + car).find('.fire').hide();
				} else if (k3 >= 3300) {
					k3 += speed2;
					$('#' + car).find('.fire').show();
				}
				if (k3 >= zong) {
					k3 = zong;
					$('#' + car).find('.fire').hide();
					$('[data-pai=' + number + ']').show().text('季').removeClass('ji').addClass('ji');
				};

				document.getElementById(car).style.right = k3 + 'px';
			}

			// 4名
			function sort4(car, number) {
				if (k4 <= 600) {
					k4 += speedzc;
				} else if (k4 >= 600 && k4 < 1100) {
					k4 += speed11;
				} else if (k4 > 1100 && k4 <= 1600) {
					k4 += speed2;
					$('#' + car).find('.fire').show();
				} else if (k4 > 1600) {
					k4 += speed1;
					$('#' + car).find('.fire').hide();
				}
				if (k4 >= zong) {
					k4 = zong;
					$('[data-pai=' + number + ']').show().text('四');
				};

				document.getElementById(car).style.right = k4 + 'px';
			}

			//5名         
			function sort5(car, number) {
				if (k5 <= 300) {
					k5 += speed2;
					$('#' + car).find('.fire').show();
				} else if (k5 >= 300 && k5 <= 800) {
					k5 += speedzc;
					$('#' + car).find('.fire').hide();
				} else if (k5 >= 800 && k5 <= 1500) {
					k5 += speed1;
					$('#' + car).find('.fire').show();
				} else if (k5 >= 1500 && k5 <= 2000) {
					k5 += speedzc;
					$('#' + car).find('.fire').hide();
				} else if (k5 >= 2000 && k5 <= 2500) {
					k5 += speed1;
					$('#' + car).find('.fire').show();
				} else if (k5 > 2500) {
					k5 += speedzc;
					$('#' + car).find('.fire').hide();
				}
				if (k5 >= zong) {
					k5 = zong;
					$('[data-pai=' + number + ']').show().text('五');
				};

				document.getElementById(car).style.right = k5 + 'px';
			}

			//6名
			function sort6(car, number) {
				if (k6 <= 300) {
					k6 += speed2;
					$('#' + car).find('.fire').show();
				} else if (k6 >= 300 && k6 <= 800) {
					k6 += speed1;
					$('#' + car).find('.fire').hide();
				} else if (k6 >= 800 && k6 <= 1500) {
					k6 += speedzc;
				} else if (k6 >= 1500 && k6 <= 2000) {
					k6 += speed1;
					$('#' + car).find('.fire').show();
				} else if (k6 >= 1500) {
					k6 += speedzc;
					$('#' + car).find('.fire').hide();
				}
				if (k6 >= zong) {
					k6 = zong;
					$('[data-pai=' + number + ']').show().text('六');
				};
				document.getElementById(car).style.right = k6 + 'px';
			}

			//7名
			function sort7(car, number) {
				if (k7 < 500) {
					k7 += speed3;
					$('#' + car).find('.fire').show();
				} else if (k7 >= 500 && k7 < 1000) {
					k7 += speedzc;
					$('#' + car).find('.fire').hide();
				} else if (k7 >= 1000 && k7 <= 1500) {
					k7 += speed1;
					$('#' + car).find('.fire').show();
				} else if (k7 >= 1500 && k7 <= 2000) {
					k7 += speed11;
					$('#' + car).find('.fire').hide();
				} else if (k7 >= 2000 && k7 <= 2500) {
					k7 += speed1;
					$('#' + car).find('.fire').show();
				} else if (k7 >= 2500 && k7 <= 3000) {
					k7 += speed11;
					$('#' + car).find('.fire').hide();
				} else if (k7 >= 3000 && k7 <= 3500) {
					k7 += speed1;
					$('#' + car).find('.fire').show();
				} else if (k7 >= 3500) {
					k7 += speedzc;
					$('#' + car).find('.fire').hide();
				}
				if (k7 >= zong) {
					k7 = zong;
					$('[data-pai=' + number + ']').show().text('七');
				};
				document.getElementById(car).style.right = k7 + 'px';
			}

			//八名
			function sort8(car, number) {
				if (k8 < 500) {
					k8 += speed2;
					$('#' + car).find('.fire').show();
				} else if (k8 >= 500 && k8 < 1000) {
					k8 += speed11;
					$('#' + car).find('.fire').hide();
				} else if (k8 >= 1000 && k8 <= 2000) {
					k8 += speed1;
					$('#' + car).find('.fire').show();
				} else if (k8 >= 2000 && k8 <= 2500) {
					k8 += speedzc;
					$('#' + car).find('.fire').hide();
				} else if (k8 >= 2500 && k8 <= 3000) {
					k8 += speed11;
				} else if (k8 >= 3000) {
					k8 += speedzc;
				}
				if (k8 >= zong) {
					k8 = zong;
					$('[data-pai=' + number + ']').show().text('八');
				};
				document.getElementById(car).style.right = k8 + 'px';
			}

			//9名
			function sort9(car, number) {
				if (k9 <= 300) {
					k9 += speed3;
					$('#' + car).find('.fire').show();
				} else if (k9 >= 300 && k9 <= 800) {
					k9 += speed11;
					$('#' + car).find('.fire').hide();
				} else if (k9 >= 800 && k9 <= 1600) {
					k9 += speed2;
					$('#' + car).find('.fire').show();
				} else if (k9 >= 1600 && k9 <= 2000) {
					k9 += speed11;
					$('#' + car).find('.fire').hide();
				} else if (k9 >= 2000 && k9 <= 2500) {
					k9 += speedzc;
				} else if (k9 > 2500) {
					k9 += speed11;
				}
				if (k9 >= zong) {
					k9 = zong;
					$('[data-pai=' + number + ']').show().text('九');

					clearInterval(timer);
				};
				document.getElementById(car).style.right = k9 + 'px';
			}
			// sort9('car9', 'nine');


			for (let i = 0; i < configCar.length; i++) {
				if (configCar[i].number === 'one') {
					sort1(configCar[i].car, configCar[i].showtitel);
				} else if (configCar[i].number === 'two') {
					sort2(configCar[i].car, configCar[i].showtitel);
				} else if (configCar[i].number === 'three') {
					sort3(configCar[i].car, configCar[i].showtitel);
				} else if (configCar[i].number === 'four') {
					sort4(configCar[i].car, configCar[i].showtitel);
				} else if (configCar[i].number === 'five') {
					sort5(configCar[i].car, configCar[i].showtitel);
				} else if (configCar[i].number === 'six') {
					sort6(configCar[i].car, configCar[i].showtitel);
				} else if (configCar[i].number === 'seven') {
					sort7(configCar[i].car, configCar[i].showtitel);
				} else if (configCar[i].number === 'eight') {
					sort8(configCar[i].car, configCar[i].showtitel);
				} else if (configCar[i].number === 'nine') {
					sort9(configCar[i].car, configCar[i].showtitel);
				}
			}

			// $(".box").animate({ scrollLeft: scrol + 'px' }, 0);
			//console.log(scrol)

			$box.scrollLeft(scrol);

		}, 10);

	}

	let key = 1;
	$('.start').on('click', function() {
		if (key === 1) {
			clean();
			car1Animation();
			key = 2;
			$(this).text('暂停');
		} else {
			clearInterval(timer);
			key = 1;
			$(this).text('开始');
		}
	});
	//重新开始
	$('.restart').on('click', function() {
		clearInterval(timer);
		$box.scrollLeft(3000);
		scrol = 2600
		k1 = 0;
		k2 = 0;
		k3 = 0;
		k4 = 0;
		k5 = 0;
		k6 = 0;
		k7 = 0;
		k8 = 0;
		k9 = 0;

		let care = document.querySelectorAll('.care');
		for (let ele of care) {
			ele.style.right = 0 + 'px';
		}
		key = 1;
		$('.start').text('开始');
		$('.road_end').find('div').hide();
		$('.fire').hide();

	});

	// 设置
	$('.setcar').on('click', function() {
		let targetName = $(this).data('target');
		$(targetName).addClass('fade11');
		$(targetName).trigger('show.modal');
	});
	// 关闭弹框
	$('[data-dismiss=modal]').on('click', function() {
		let $modal = $(this).closest('.modal');
		if ($modal.hasClass('fade11')) {
			$modal.removeClass('fade11');
			$modal.trigger('hide.ope.modal');
		} else {
			$modal.removeClass('fade11');
			$modal.trigger('hide.modal');
		}
	});


	let dataLi = [{
			'datanumber': 'one',
			'name': '第1名'
		},
		{
			'datanumber': 'two',
			'name': '第2名'
		},
		{
			'datanumber': 'three',
			'name': '第3名'
		},
		{
			'datanumber': 'four',
			'name': '第4名'
		},
		{
			'datanumber': 'five',
			'name': '第5名'
		},
		{
			'datanumber': 'six',
			'name': '第6名'
		},
		{
			'datanumber': 'seven',
			'name': '第7名'
		},
		{
			'datanumber': 'eight',
			'name': '第8名'
		},
		{
			'datanumber': 'nine',
			'name': '第9名'
		}
	]

	// 配置排名下拉框数据
	function paimingSelect() {
		let datacar11 = $('.dropdown-list');
		let li = '';
		datacar11.each(function(index, el) {
			let datacar2 = $(el).attr('data-car');
			for (let i = 0; i < dataLi.length; i++) {
				li = `<li class="dropdown-li" data-car="${datacar2}" data-number="${dataLi[i].datanumber}">${dataLi[i].name}</li>`;
				$(el).append(li);
			}
		});

	}
	paimingSelect();

	//设置车排名
	let setCar, setNumber;

	function downlist() {
		$('.drop-down .dropdown-li').on('click', function() {
			let selectedVal = $(this).text();
			$(this).closest('.dropdown-list').prev('.drop-text').find('.drop-value').text(selectedVal);
			// let datanum = $(this).attr('data-number');
			// for(let i=0; i<dataLi.length; i++){
			// 	if(dataLi[i].datanumber === datanum){
			// 		dataLi.splice(i, 1)
			// 	}
			// }
			// console.log(dataLi)

			setCar = $(this).attr('data-car');
			setNumber = $(this).attr('data-number');

			for (let i = 0; i < configCar.length; i++) {
				if (setCar === configCar[i].car) {
					configCar[i].number = setNumber;

				}
			}

		});
	}
	downlist()


	// 判断数组重复的数据
	function removeArray(arrayC) {
		let titele = [];
		for (let i = 0; i < arrayC.length; i++) {
			for (let j = i + 1; j < arrayC.length; j++) {
				if (arrayC[i].number == arrayC[j].number) {
					console.log(arrayC[i].car)
					titele.push(arrayC[i].car)
				}
			}
		}
		return titele;

	}

	console.log(configCar)
	$('.user-btn').on('click', function() {
		let remove1 = removeArray(configCar);
		// console.log(remove1Str)
		if (remove1.length > 0) {
			let remove1Str = remove1.join(',');

			let targetName = $(this).data('target');
			$(targetName).addClass('fade11');
			$(targetName).trigger('show.modal');
			$('.text-ctn').text(remove1Str + "车的排名选择重复！请重新选择")
		} else {
			return false;
		}
	});


})