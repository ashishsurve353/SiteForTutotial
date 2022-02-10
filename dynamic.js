var a=[
"item1",
"item2",
"item3",
"item4"

];

var ul=document.getElementById("first-ul");
var btn=document.getElementById("btn");

btn.addEventListener("click",function(){
    console.log("clicked");
    a.forEach(function(e){
    var li=document.createElement('li');
    li.innerText=e;
    console.log(li);
    ul.append(li);
    })



})