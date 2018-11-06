window.onload = function () {
	
	var movie_img = document.getElementById('movie_img');
	var movie_text = document.getElementById('movie_text');
	var item = movie_text.getElementsByClassName('item');
	var imgs = movie_img.getElementsByTagName('img');
	
	
	for (var i = 0;i < imgs.length;i ++) {
		
		imgs[i].setAttribute('tid',i);
		
		movie_img.onclick = function(e) {
			
			e = window.event || e;
			
			//获取事件源对象
		    var currObj = e.target || e.srcElement;
		    
		    if (currObj.className == 'item1'){
		    	
		    	var tid = currObj.getAttribute('tid');
		    	for (var i = 0;i < imgs.length;i ++) {
		    		imgs[i].className = 'item1';
		    		item[i].style.display = 'none';
		    		
		    	}

		    	item[tid].style.display = 'block';
		    	imgs[tid].className = 'item1 selected';
		    	
		    }
	
		}
	}
	
	
}
