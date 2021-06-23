function clicked(){
    var y=document.getElementById('fname');
    var x=document.getElementById('print');
    x.innerHTML="name: "+y.value;
    var y=document.getElementById('froll');
    var x=document.getElementById('print2');
    x.innerHTML="roll: "+y.value;
}
function clickedd(){
    var y=document.getElementsById('place');
    var x=document.getElementById('print3');
    var text=y.options[y.selectedIndex].text;
    x.innerHTML=text;
}