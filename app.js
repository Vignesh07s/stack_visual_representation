t=-1,j=0,s=0
function array(size,name){
	table = document.getElementById(name)
	tr = document.createElement('tr')
	tr.setAttribute('class','tr'+j%3)
	table.appendChild(tr)
	for(i=0;i<size;i++){
		th = document.createElement('th')
		th.setAttribute('class',name)
		tr.appendChild(th)
	}
	document.getElementsByClassName('len')[j%3].innerHTML="length : "+size
	if(document.getElementsByClassName('tr'+j%3).length>1)
		document.getElementsByClassName('tr'+j%3)[0].remove()
	j++;
}
function create(){
	size = parseInt(prompt("Choose the size of array : "))
	if(isNaN(size)){
		alert("Wrong Input!!")
		return
	}
	array(size,'create')
	array(size,'push')
	array(size,'pop')
	for(i=0;i<size;i++)
		document.getElementsByClassName('pop')[i].innerHTML= Math.floor(Math.random()*99)
	s=size-1
}
function push(){
	if(t< (size-1) ){
		t++
		x = prompt("Enter an integer to push it into stack : ")
		document.getElementsByClassName('push')[t].innerHTML=x;
		return
	}alert("Stack is FUll!!")
}
function pop(){
	if(s>=0){
		document.getElementsByClassName('pop')[s].innerHTML=null;
		s--
		return
	}alert("Stack Underflow")
}
function display(){
	tr = document.createElement('tr')
	tr.setAttribute('class','dis')
	if(document.getElementsByClassName('dis').length>1)
		document.getElementsByClassName('dis')[0].remove()
	document.getElementById('display').appendChild(tr)
	for(i=t;i>=0;i--){
		th = document.createElement('th')
		th.setAttribute('class','display')
		th.innerHTML = document.getElementsByClassName('push')[i].innerHTML
		tr.appendChild(th)
	}
}