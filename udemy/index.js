// JavaScript Document
(function(){
	
	/* ----------------------------------------------------------------
	階層メニュー
	-----------------------------------------------------------------*/
	var json="data.json";
	var menu=document.getElementById('menu');
	var xhr=new XMLHttpRequest();
	xhr.open("GET",json);
	xhr.send();
	
	xhr.onreadystatechange=function(){
		if(this.readyState==4&&this.status==200){
			var data=JSON.parse(this.response);
			
			for(var i=0;i<data.length;i++){
				var title=document.createTextNode(data[i].menu[0].title);
				
				//第1階層anchor
				var a=document.createElement('a');
				a.setAttribute("class","cat1");
				a.appendChild(title);
				menu.appendChild(a);
				
				//第2階層
				var subMenu=document.createElement('div');
				subMenu.setAttribute("id","subMenu");
				for(var j=0;j<data[i].subMenu.length;j++){
					var subTitle=document.createTextNode(data[i].subMenu[j].title);
					var subAnchor=document.createElement('a');
					subAnchor.setAttribute("class","cat2");
					subAnchor.setAttribute("href",data[i].subMenu[j].href);
					subAnchor.appendChild(subTitle);
					subMenu.appendChild(subAnchor);
					a.appendChild(subMenu);
					
					//第2階層[表示・非表示]
					a.addEventListener("mouseover",function(){
						this.lastChild.style.visibility="visible";
						this.lastChild.style.left="248px";
						this.lastChild.style.opacity=1;
					});
					a.addEventListener("mouseout",function(){
						this.lastChild.style.visibility="hidden";
						this.lastChild.style.left="238px";
						this.lastChild.style.opacity=0;
					});
					
					//第3階層
					if(data[i].subMenu[j].sub2Menu.length>0){
						var sub2Menu=document.createElement('div');
						sub2Menu.setAttribute("id","sub2Menu");
						for(var k=0;k<data[i].subMenu[j].sub2Menu.length;k++){
							var sub2Title=document.createTextNode(data[i].subMenu[j].sub2Menu[k].title);
							
							var sub2Anchor=document.createElement('a');
							sub2Anchor.setAttribute("class","cat3");
							sub2Anchor.setAttribute("href",data[i].subMenu[j].sub2Menu[k].href);
							sub2Anchor.appendChild(sub2Title);
							sub2Menu.appendChild(sub2Anchor);
							subAnchor.appendChild(sub2Menu);
						}
						
						//第3階層[表示・非表示]
						subAnchor.addEventListener("mouseover",function(){
							this.lastChild.style.visibility="visible";
							this.lastChild.style.left="248px";
							this.lastChild.style.opacity=1;
						});
						subAnchor.addEventListener("mouseout",function(){
							this.lastChild.style.visibility="hidden";
							this.lastChild.style.left="238px";
							this.lastChild.style.opacity=0;
						});
					}
				}
			}
		}
	}
	
	/* ----------------------------------------------------------------
	メニューボタン
	-----------------------------------------------------------------*/
	var menuButton=document.getElementById('menuButton');
	menuButton.addEventListener('mouseover',function(){
		menu.style.visibility="visible";
		menu.style.left="0px";
		menu.style.opacity=1;
	});
	menu.addEventListener('mouseover',function(){
		this.style.visibility="visible";
		menu.style.opacity=1;
	});
	menu.addEventListener('mouseout',function(){
		menu.style.visibility="hidden";
		menu.style.opacity=0;
	});
	
})();