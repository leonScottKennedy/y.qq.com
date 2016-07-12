
window.onload = function(){
	init.nav();
	init.searchMusic();
	init.tab();
	init.album();
	init.mv();
	init.fnClose();
}

var init = {
    nav: function() {
        var oMainTitle = document.getElementById('main-title');
        var aOlmt = oMainTitle.getElementsByTagName('ol');

        var oNavUl = document.getElementById('nav-list');
        var aLiNav = oNavUl.getElementsByTagName('li');
        var disTimer = null;
        var status = true;

        for (var i = 0; i < aLiNav.length-1; i++) {
            aLiNav[i].index = i;	// 0,1,2
            aLiNav[i].onmouseover = function() {
                clearTimeout(disTimer);
                for (var i = 0; i < aLiNav.length-1; i++) {
                    aOlmt[i].style.display = 'none';
                }
                aOlmt[this.index].style.display = 'block';
            }
        }

        // 移出整个区域，使用onmouseleave
        oMainTitle.onmouseleave = function(){
        	for (var i = 0; i < aLiNav.length-1; i++) {
                aOlmt[i].style.display = 'none';
            }
        	aOlmt[0].style.display = 'block';
        }

        aLiNav[3].onmouseover = function() {
            for (var i = 0; i < aLiNav.length - 1; i++) {
                aOlmt[i].style.display = 'none';
            }
        }
    },
    searchMusic: function() {
        var oSh = document.getElementById('search');
        var oSM = document.getElementById('search-music');
        oSM.onfocus = function() {
            if (oSM.value == '找到好音乐') {
                oSM.value = '';
            }
            oSh.style.backgroundPosition = '-233px -161px';
        }
        oSM.onblur = function() {
            if (oSM.value == '') {
                oSM.value = '找到好音乐';
                oSh.style.backgroundPosition = '0px -161px';
            }
        }
    },
    tab: function() {
    	var tab = document.querySelector('#tab');
        var oUl1 = document.getElementById('ul1');
        var aLiUl1 = document.querySelectorAll('#ul1 li');
        var oOl1 = document.getElementById('ol1');
        var aLiOl1 = oOl1.getElementsByTagName('li');
        var prevBtn = document.querySelector('.prevBtn');
        var nextBtn = document.querySelector('.nextBtn');
        var tabTimer = null;
        var iNow = 0;

        for (var i = 0; i < aLiOl1.length; i++) {
            // 点
            aLiOl1[i].index = i;
            aLiOl1[i].onmouseover = function() {
                for (var i = 0; i < aLiOl1.length; i++) {
                    aLiOl1[i].removeAttribute('class');
                    aLiUl1[i].style.display = 'none';
                }
                iNow = this.index;
                this.setAttribute('class', 'active');
                aLiUl1[this.index].style.display = 'block';
            }
        }

        nextBtn.onclick = function() {

            if (iNow == aLiOl1.length - 1) {
                iNow = 0;
                for (var i = 0; i < aLiOl1.length; i++) {
                    aLiOl1[i].removeAttribute('class');
                    aLiUl1[i].style.display = 'none';
                }
                aLiOl1[iNow].setAttribute('class', 'active');
                aLiUl1[iNow].style.display = 'block';
            } else {
                iNow++; // 1,2,3,4,5,6,7,8,9
                for (var i = 0; i < aLiOl1.length; i++) {
                    aLiOl1[i].removeAttribute('class');
                    aLiUl1[i].style.display = 'none';
                }
                aLiOl1[iNow].setAttribute('class', 'active');
                aLiUl1[iNow].style.display = 'block';
            }
        }

        prevBtn.onclick = function() {

            if (iNow == 0) {
                iNow = aLiOl1.length - 1;
                for (var i = 0; i < aLiOl1.length; i++) {
                    aLiOl1[i].removeAttribute('class');
                    aLiUl1[i].style.display = 'none';
                }
                aLiOl1[iNow].setAttribute('class', 'active');
                aLiUl1[iNow].style.display = 'block';
            } else {
                iNow--; // 1,2,3,4,5,6,7,8,9
                for (var i = 0; i < aLiOl1.length; i++) {
                    aLiOl1[i].removeAttribute('class');
                    aLiUl1[i].style.display = 'none';
                }
                aLiOl1[iNow].setAttribute('class', 'active');
                aLiUl1[iNow].style.display = 'block';
            }
        }

        tabTimer = setInterval(function(){
        	if(iNow == aLiUl1.length-1){
        		iNow = 0;
        	}else{
        		iNow++;
        	}
        	for (var i = 0; i < aLiUl1.length; i++) {
                aLiOl1[i].removeAttribute('class');
                aLiUl1[i].style.display = 'none';
            }
            aLiOl1[iNow].setAttribute('class', 'active');
            aLiUl1[iNow].style.display = 'block';
        }, 4000)

        tab.onmouseover = function(){
        	clearInterval(tabTimer);
        }
        tab.onmouseout = function(){
        	tabTimer = setInterval(function(){
	        	if(iNow == aLiUl1.length-1){
	        		iNow = 0;
	        	}else{
	        		iNow++;
	        	}
	        	for (var i = 0; i < aLiUl1.length; i++) {
	                aLiOl1[i].removeAttribute('class');
	                aLiUl1[i].style.display = 'none';
	            }
	            aLiOl1[iNow].setAttribute('class', 'active');
	            aLiUl1[iNow].style.display = 'block';
	        }, 4000)
        }
    },
    album: function() {
        var albumTab = document.getElementById('title_tab');
        var aABtn = albumTab.getElementsByTagName('a');

        var albumList = document.getElementById('album_list');
        var aUlAlbum = document.getElementsByClassName('ulTab');
        var aLiAlbum = albumList.getElementsByTagName('li');
        var aPlay = document.getElementsByClassName('play');
        var num2 = 0;

        //alert(aLiAlbum.length)	//40

        // li 移入移出事件
        for (var i = 0; i < aLiAlbum.length; i++) {
            aLiAlbum[i].index = i;
            aLiAlbum[i].onmouseover = function() {
                aPlay[this.index].style.display = 'block';
            }
            aLiAlbum[i].onmouseout = function() {
                aPlay[this.index].style.display = 'none';
            }
        }

        // 单击切换按钮
        aABtn[1].onclick = function() {
        	if (num2 == aUlAlbum.length - 2) {
                num2 = aUlAlbum.length - 1;
                this.className = 'next fr disable_next';
                this.style.cursor = 'default';
                this.style.backgroundPosition = '-32px -128px';
                //
                //aABtn[0].className = 'prev fl';
                aABtn[0].style.cursor = 'pointer';
                //this.style.hover = '';
                for (var i = 0; i < aUlAlbum.length; i++) {
                    aUlAlbum[i].style.display = 'none';
                }
                aUlAlbum[num2].style.display = 'block';
                //
            }else if(num2 == aUlAlbum.length - 1){

            	for (var i = 0; i < aUlAlbum.length; i++) {
                    aUlAlbum[i].style.display = 'none';
                }
                aUlAlbum[num2].style.display = 'block';
            } else {
                num2++;
                for (var i = 0; i < aUlAlbum.length; i++) {
                    aUlAlbum[i].style.display = 'none';
                }
                aUlAlbum[num2].style.display = 'block';
                aABtn[0].className = 'prev fl now';
                aABtn[0].style.backgroundPosition = '';
                aABtn[1].className = 'next fr';
                aABtn[1].style.cursor = 'pointer';
            }
            return false;
        }

        aABtn[0].onclick = function() {
        	if(num2 == 1){
        		this.className = 'prev fl disable_prev';
                this.style.cursor = 'default';
                aABtn[0].style.backgroundPosition = '-32px -96px';
                aABtn[0].className = 'prev fl';
                this.removeAttribute('title');
                aABtn[1].style.cursor = 'pointer';
                aABtn[1].style.backgroundPosition = '';
        		num2--;
        		for (var i = 0; i < aUlAlbum.length; i++) {
                    aUlAlbum[i].style.display = 'none';
                }
                aUlAlbum[num2].style.display = 'block';
        	}else if (num2 == 0) {
                num2 = 0;
                for (var i = 0; i < aUlAlbum.length; i++) {
                    aUlAlbum[i].style.display = 'none';
                }
                aUlAlbum[num2].style.display = 'block';
            } else {
                num2--;
                for (var i = 0; i < aUlAlbum.length; i++) {
                    aUlAlbum[i].style.display = 'none';
                }
                aUlAlbum[num2].style.display = 'block';
                aABtn[0].className = 'prev fl now';
                aABtn[0].style.cursor = 'pointer';
                aABtn[1].className = 'next fr';
                aABtn[1].style.cursor = 'pointer';
                aABtn[1].style.backgroundPosition = '';
            }
            return false;
        }
    },
    mv: function() {
        var mvList = document.getElementById('mv_list');
        var aLiMvList = mvList.getElementsByTagName('li');
        var aPlayMv = mvList.getElementsByClassName('play');

        for (var i = 0; i < aPlayMv.length; i++) {
            aLiMvList[i].index = i;
            aLiMvList[i].onmouseover = function() {
                aPlayMv[this.index].style.display = 'block';
            }

            aLiMvList[i].onmouseout = function() {
                aPlayMv[this.index].style.display = 'none';
            }
        }
    },
    fnClose : function(){
    	var oClose = document.querySelector('.close');
    	var weixin = document.querySelector('#weixin');
    	oClose.onclick = function(){
    		weixin.style.display = 'none';
    	}
    }
}
