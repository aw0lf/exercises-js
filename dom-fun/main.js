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