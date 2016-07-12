
window.onload = function(){
	
	// nav 
	var  oMainTitle = document.getElementById('main-title');
	var aOlmt = oMainTitle.getElementsByTagName('ol');
	
	var oNavUl = document.getElementById('nav-list');
	var aLiNav = oNavUl.getElementsByTagName('li');
	
	for( var i=0; i<aLiNav.length-1; i++){
		aLiNav[i].index = i;
		aLiNav[i].onmouseover = function(){
			for( var i=0; i<aLiNav.length-1; i++){
				aOlmt[i].removeAttribute('display');	
			}
			aOlmt[this.index].setAttribute('display', 'block');
		}
	}
	
	aLiNav[3].onmouseover = function(){
		for( var i=0; i<aLiNav.length-1; i++){
			aOlmt[i].style.display = 'none';	
		}	
	}
	
	//search-music
	var oSh = document.getElementById('search');
	var oSM = document.getElementById('search-music');
	oSM.onfocus = function(){
		if(oSM.value == '找到好音乐'){
			oSM.value = '';	
		}
		oSh.style.backgroundPosition = '-233px -161px';
	}
	oSM.onblur = function(){
		if( oSM.value == '' ){
			oSM.value = '找到好音乐';	
			oSh.style.backgroundPosition = '0px -161px';
		}
	}
	
	
	// tab 
	//function tab(){}
	
	var oUl1 = document.getElementById('ul1');
	var aLiUl1 = oUl1.getElementsByTagName('li');
	
	var oOl1 = document.getElementById('ol1');
	var aLiOl1 = oOl1.getElementsByTagName('li');
	
	var oTabBtn = document.getElementById('tabBtn');
	var aA = oTabBtn.getElementsByTagName('a');
	//alert(aA[1].innerHTML)
	
	for(var i=0; i < aLiOl1.length; i++){
		// 点切换部分
		aLiOl1[i].index = i;
		aLiOl1[i].onmouseover = function(){
			for(var i=0; i < aLiOl1.length; i++){
				aLiOl1[i].removeAttribute('class');
				aLiUl1[i].style.display = 'none';
			}
			iNow = this.index;
			this.setAttribute('class', 'active');
			aLiUl1[this.index].style.display = 'block';
		}	
	}
	
	// 按钮切换
	var iNow = 0;
	
	aA[1].onclick = function(){
		
		if(iNow == aLiOl1.length - 1){
			iNow = 0;
			for(var i=0; i < aLiOl1.length; i++){
				aLiOl1[i].removeAttribute('class');
				aLiUl1[i].style.display = 'none';
			}
			aLiOl1[iNow].setAttribute('class', 'active');
			aLiUl1[iNow].style.display = 'block';	
		}else{
			iNow++;		// 1,2,3,4,5,6,7,8,9
			for(var i=0; i < aLiOl1.length; i++){
				aLiOl1[i].removeAttribute('class');
				aLiUl1[i].style.display = 'none';
			}
			aLiOl1[iNow].setAttribute('class', 'active');
			aLiUl1[iNow].style.display = 'block';
		}
	}
	
	aA[0].onclick = function(){
		
		if(iNow == 0){
			iNow = aLiOl1.length - 1;
			for(var i=0; i < aLiOl1.length; i++){
				aLiOl1[i].removeAttribute('class');
				aLiUl1[i].style.display = 'none';
			}
			aLiOl1[iNow].setAttribute('class', 'active');
			aLiUl1[iNow].style.display = 'block';	
		}else{
			iNow--;		// 1,2,3,4,5,6,7,8,9
			for(var i=0; i < aLiOl1.length; i++){
				aLiOl1[i].removeAttribute('class');
				aLiUl1[i].style.display = 'none';
			}
			aLiOl1[iNow].setAttribute('class', 'active');
			aLiUl1[iNow].style.display = 'block';
		}
	}
	
	
	
	
	
	
	
	
	
	// album
	var albumTab = document.getElementById('title_tab');
	var aABtn = albumTab.getElementsByTagName('a');
	
	var albumList = document.getElementById('album_list'); 
	var aUlAlbum = document.getElementsByClassName('ulTab');
	var aLiAlbum = albumList.getElementsByTagName('li');
	var aPlay = document.getElementsByClassName('play');
	var num2 = 0;
	/*var num3 = 0;*/
	
	//alert(aLiAlbum.length)	//40
	
	// li 移入移出事件
	for(var i=0; i < aLiAlbum.length; i++){
		aLiAlbum[i].index = i;
		aLiAlbum[i].onmouseover = function(){
			aPlay[this.index].style.display = 'block';	
		}
		aLiAlbum[i].onmouseout = function(){
			aPlay[this.index].style.display = 'none';	
		}	
	}
	
	// 单击切换按钮
	aABtn[1].onclick = function(){
		if(num2 == aUlAlbum.length-1){
			num2 = aUlAlbum.length-1;
			for(var i=0; i < aUlAlbum.length; i++){
				aUlAlbum[i].style.display = 'none';	
			}
			aUlAlbum[num2].style.display = 'block';
			//
		}else{
			num2++;
			/*num3 = num2;*/
			for(var i=0; i < aUlAlbum.length; i++){
				aUlAlbum[i].style.display = 'none';	
			}
			aUlAlbum[num2].style.display = 'block';	
		}
		return false;
	}
	
	aABtn[0].onclick = function(){
		if(num2 == 0){
			num2 = 0;
			for(var i=0; i < aUlAlbum.length; i++){
				aUlAlbum[i].style.display = 'none';	
			}
			aUlAlbum[num2].style.display = 'block';
			//
		}else{
			num2--;
			/*num3 = num2;*/
			for(var i=0; i < aUlAlbum.length; i++){
				aUlAlbum[i].style.display = 'none';	
			}
			aUlAlbum[num2].style.display = 'block';	
		}
		return false;
	}
	
	
	// 移入按钮(没成功)
	/*aABtn[1].onmouseover = function(){
		if(num3 == 	aUlAlbum.length-1){
			aABtn[1].style.background = 'url(../images/icon_sprite.png) no-repeat -32px -96px';
			aABtn[1].style.cursor = 'none';
		}else{
			aABtn[1].style.background = 'url(../images/icon_sprite.png) no-repeat -64px -96px';
			aABtn[1].style.cursor = 'pointer';
		}
	}*/
	
	
	
	
	
	
	
	// mv
	
	var mvList = document.getElementById('mv_list');
	var aLiMvList = mvList.getElementsByTagName('li');
	var aPlayMv = mvList.getElementsByClassName('play');
	
	for(var i=0; i < aPlayMv.length; i++){
		aLiMvList[i].index = i;
		aLiMvList[i].onmouseover = function(){
			aPlayMv[this.index].style.display = 'block';
		}
		
		aLiMvList[i].onmouseout = function(){
			aPlayMv[this.index].style.display = 'none';
		}
	}
	
	
	
	
	
	
	
}