/*

Set and display current day and time

*/
var today = new Date();
function setDate(){ 
    var daylist = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var day=today.getDay();
    return daylist[day];
}
function setTime(){
    var hour=today.getHours();
    var min=today.getMinutes();
    var sec=today.getSeconds();
    var dayOp=(hour>=12)? ' PM ' : ' AM ';
    if(hour===0 && dayOp=== ' PM '){
        if(hour===0 && sec===0)
        {
            hour=12;
            dayOp=' Noon ';
        }
        else{
            hour=12;
            dayOp= 'PM ';
        }
    }
    if(hour===0 && dayOp=== ' AM '){
        if(min===0 && sec===0)
        {
            hour=12;
            dayOp=' Midnight ';
        }
        else{
            hour=12;
            dayOp=' AM ';
        }
    }
  return + hour + dayOp + " : " + min + " : " + sec;
}

var seconds = today.getSeconds();
var full_time = today.toLocaleTimeString();
window.onload = function() {
document.getElementById('date').innerHTML = "Today is: " + setDate();
document.getElementById('time').innerHTML = "Current time is: " + setTime();
}