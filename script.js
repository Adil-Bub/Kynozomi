var count=0;
function slider(e){
	var d="";
	if(count%3==0)
		d="one";
	else if(count%3==1)
		d="two";
	else d="three";
	console.log(d);
	count++;
	const titleOne=document.getElementsByClassName("one");
	const titleTwo=document.getElementsByClassName("two");
	const titleThree=document.getElementsByClassName("three");
	const slide=document.getElementById("slideOne");
	const slideIn=document.getElementById("slideTwo");	
	if(d=="one"){
		titleOne[0].style.display="block";
		titleOne[1].style.display="block";
		titleOne[2].style.display="block";
		titleThree[0].style.display="none";
		titleThree[1].style.display="none";
		titleThree[2].style.display="none";	
		titleTwo[0].style.display="none";
		titleTwo[1].style.display="none";
		titleTwo[2].style.display="none";
		slide.style.transform = "translateX(0%)";
		slideIn.style.transform = "translateX(0%)";
}
	else if(d=="two"){
		titleTwo[0].style.display="block";
		titleTwo[1].style.display="block";
		titleTwo[2].style.display="block";
		titleOne[0].style.display="none";
		titleOne[1].style.display="none";
		titleOne[2].style.display="none";
		titleThree[0].style.display="none";
		titleThree[1].style.display="none";
		titleThree[2].style.display="none";	
	    slide.style.transform = "translateX(50%)";
	    slideIn.style.transform = "translateX(33%)";	
	}
	else {
		titleThree[0].style.display="block";
		titleThree[1].style.display="block";
		titleThree[2].style.display="block";
		titleOne[0].style.display="none";
		titleOne[1].style.display="none";
		titleOne[2].style.display="none";		
		titleTwo[0].style.display="none";
		titleTwo[1].style.display="none";
		titleTwo[2].style.display="none";
		slide.style.transform = "translateX(100%)";
		slideIn.style.transform = "translateX(66%)";		
	}
	
}
