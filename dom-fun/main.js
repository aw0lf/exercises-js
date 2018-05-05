/*
exercise 1
*/
var text=document.getElementById('text');
var style_js=document.getElementById("style_js");
var formInput=document.getElementById("Submit");
style_js.onclick=function(){
    text.style.fontSize="18px";
    text.style.fontFamily = "Helvetic";
    text.style.color= "purple";
}

/*
exercise 2
*/
function styleJs(){
var fname= document.getElementById('fname').value;
var lname = document.getElementById('lname').value;
console.log("Hello"+fname+" "+lname+"!");

}
formInput.onsubmit=styleJs();

/*
exercise 3
*/
var backColour=document.getElementById("text-back");
backColour.onclick=function(){
    text.style.background="white";
}
/*
exercise 4
*/
var link=document.getElementById("w3r");
function getAttributes(){
    var href=link.href;
    var hreflang=link.hreflang;
    var rel=link.rel;
    var target=link.target;
    var type=link.type;
    var attributes="href: "+href+", hreflang: "+hreflang+", rel: "+ rel+", target: "+ target+", type: "+type;
    alert(attributes);
}
/*
exercise 5
*/
var table=document.getElementById("sampleTable");
function insert_Row(){
    var row=table.insertRow(0);
    var cell1=row.insertCell(0);
    var cell2=row.insertCell(1);
    cell1.innerHTML="New";
    cell2.innerHTML="New2";
    
}