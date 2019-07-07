var number = new Array();
number[0] = 'Rich'
number[1] = 'Affable'
number[2] = 'Agreeable'
number[3] = 'Amiable'
number[4] = 'Charming'
number[5] = 'Polite'
number[6] = 'Likeable'
number[7] = 'Gregarious'
number[8] = 'Considerate'
number[9] = 'Sympathetic'
number[10] = 'Understanding'
number[11] = 'Diplomatic'
number[12] = 'Impartial'
number[13] = 'Cute'
number[14] = 'Handsome'
number[15] = 'Sexy'
number[16] = 'Beautiful'
number[17] = 'CALM'
number[18] = 'HARD-WORKING'
number[19] = 'KIND'
number[20] = 'LOYAL'
number[21] = 'LUCKY'
number[22] = 'NICE'
number[23] = 'Awesome'
number[24] = 'VALUABLE'
number[26] = 'YUMMY'
number[27] = 'WEALTHY'
number[28] = 'WORTHY'
number[29] = 'VIBRANT'
number[30] = 'VIVACIOUS'
number[31] = 'UNASSUMING'
number[32] = 'UNBELIEVABLE'
number[33] = 'MYSTERIOUS'
number[34] = 'THRILLED'
number[35] = 'TRUSTING'
number[36] = 'SELF-ACCEPTING'
number[37] = 'STRONG'
number[38] = 'SHY'
number[39] = 'SOCIABLE'
number[40] = 'SOULFUL'
number[41] = 'ROMANTIC'
number[42] = 'RESOURCEFUL'
number[43] = 'RELIABLE'
number[44] = 'PERFECT'
number[45] = 'PRO-ACTIVE'
number[46] = 'POWERFUL'
number[47] = 'POSITIVE'
number[48] = 'BEST'
number[49] = 'OUTSTANDING'
number[50] = 'ORIGINAL'
number[51] = 'OPTIMISTIC'
number[52] = 'MIRTHFUL'
number[53] = 'LOVABLE'
number[54] = 'LUXURIOUS'
number[55] = 'LOVED'
number[56] = 'LOVELY'
number[57] = 'KING'
number[58] = 'KNOWLEDGEABLE'
number[59] = 'ILLUMINATED'
number[60] = 'IMAGINATIVE'
number[61] = 'IMPARTIAL'
number[62] = 'INCOMPARABLE'
number[63] = 'INVENTIVE'
number[64] = 'HEAVEN'
number[65] = 'FUNNY'
number[66] = 'FOCUSED'
number[67] = 'FRANK'
number[68] = 'ADVENTUROUS'


var white_ball = new Array();
white_ball[0] = '1'
white_ball[1] = '2'
white_ball[2] = '3'
white_ball[3] = '4'
white_ball[4] = '5'
white_ball[5] = '6'
white_ball[6] = '7'
white_ball[7] = '8'
white_ball[8] = '9'
white_ball[9] = '10'
white_ball[10] = '11'
white_ball[11] = '12'
white_ball[12] = '13'
white_ball[13] = '14'
white_ball[14] = '15'
white_ball[15] = '16'
white_ball[16] = '17'
white_ball[17] = '18'
white_ball[18] = '19'
white_ball[19] = '20'
white_ball[20] = '21'
white_ball[21] = '22'
white_ball[22] = '23'
white_ball[23] = '24'
white_ball[24] = '25'
white_ball[25] = '26'
white_ball[26] = '27'
white_ball[27] = '28'
white_ball[28] = '29'
white_ball[29] = '30'
white_ball[30] = '31'
white_ball[31] = '32'
white_ball[32] = '33'
white_ball[33] = '34'
white_ball[34] = '35'
white_ball[35] = '36'
white_ball[36] = '37'
white_ball[37] = '38'
white_ball[38] = '39'
white_ball[39] = '40'
white_ball[40] = '41'
white_ball[41] = '42'
white_ball[42] = '43'
white_ball[43] = '44'
white_ball[44] = '45'
white_ball[45] = '46'
white_ball[46] = '47'
white_ball[47] = '48'
white_ball[48] = '49'
white_ball[49] = '50'
white_ball[50] = '51'
white_ball[51] = '52'
white_ball[52] = '53'
white_ball[53] = '54'
white_ball[54] = '55'
white_ball[55] = '56'
white_ball[56] = '57'
white_ball[57] = '58'
white_ball[58] = '59'
white_ball[59] = '60'
white_ball[60] = '61'
white_ball[61] = '62'
white_ball[62] = '63'
white_ball[63] = '64'
white_ball[64] = '65'
white_ball[65] = '66'
white_ball[66] = '67'
white_ball[67] = '68'
white_ball[68] = '69'


//设置一个毫秒数让他进行倒计时
var endDate = 5000; //后台传入的时间
var second = parseInt(endDate / 1000) % 60; //second
var minute = parseInt(endDate / 1000 / 60) % 60; //minute
var hour = parseInt(endDate / 1000 / 60 / 60) % 24; //hour
var day = parseInt(endDate / 1000 / 60 / 60 / 24) %24; //day

$('.count_down .second').html(second);
$('.count_down .minute').html(minute);
$('.count_down .hour').html(hour);
$('.count_down .day').html(day);

if(second < 10){
	$('.count_down .second').html('0'+ second);
}
if(minute < 10){
	$('.count_down .minute').html('0'+ minute);
}
if(hour < 10){
	$('.count_down .hour').html('0'+ hour);
}
if(day < 10){
	$('.count_down .day').html('0'+ day);
}

var timeRun = setInterval(function(){
	second--;
	if(second < 0){
		minute = minute - 1;
		second = 59;
		if(minute < 0){
			hour = hour - 1;
			minute = 59;
			if(hour < 0){
				day = day -1;
				hour = 23;
			}
		}
	}
	$('.count_down .second').html(second);
	$('.count_down .minute').html(minute);
	$('.count_down .hour').html(hour);
	$('.count_down .day').html(day);

	if(second < 10){
		$('.count_down .second').html('0'+ second);
	}
	if(minute < 10){
		$('.count_down .minute').html('0'+ minute);
	}
	if(hour < 10){
		$('.count_down .hour').html('0'+ hour);
	}
	if(day < 10){
		$('.count_down .day').html('0'+ day);
	}

	if(second <= 0 && minute <= 0 && hour <= 0 && day <= 0){
		clearInterval(timeRun);
		$('.count_down').html('Drawing....');
		start();
	}
},1000); //设计倒计时速度

//循环参加参加人数
var white_balltxt = $('.white_ball');
var numbertxt = $('.number');
var pcount = white_ball.length - 1; //参加人数
var runing = true;
var td = 6; //抽6个
var num = 0;
var gundong;//随机滚动


//循环参加名单
function startNum(){
	//实时更新名单
	pcount = white_ball.length - 1;
	num = Math.floor(Math.random()*pcount); //floor向下取整 返还函数最接近的整数
	white_balltxt.html(white_ball[num]);
	numbertxt.html(number[num]);
	gundong = setTimeout(startNum,0);

}

//时间结束开始循环
function start(){
	if(runing){
		runing = false;
		startNum();
	}
	var timing = setInterval(function(){
		time = timing;
		zd();
	},1000)
}

//抽取个数
function zd(){
	if(td < 2){
		clearInterval(time);
		// clearInterval(gundong);
		// gundong = 0;
		// runing = true;
		stop();
		$('.count_down').html('Here is your luckly numbers and You are...');
	}
	if(td >= 1){
		clearInterval(time);
		// clearInterval(gundong);
		// gundong = 0;
		stop();
		$('.list').prepend('<p>'  + "" + white_ball[num] + "---" + number[num] + '</p>');
		td -= 1;
	}
	if(td > 0){
		// startNum();
		// var timing = function(){
		// 	time = timing;
		// }
		// setTimeout(timing,0)
		setTimeout(reset,2000);
	}white_ball.splice($.inArray(white_ball[num],white_ball),1);
	number.splice($.inArray(number[num],number),1);

}
function reset(){
	startNum();
	var timing = setInterval(function(){
		time = timing;
		zd();
	},1000)
}

function stop(){
	clearInterval(gundong);
	gundong = 0;
}

