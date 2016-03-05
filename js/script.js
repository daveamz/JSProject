var s = ["Oh, yeah!", "Mmmmm!", "Aham!", "Atat !!!"];
var i = 0;

var html = '<button type="button" onclick="myMesage()">Click me</button>';

function onClick(){ 
    
    if (i < 4) {
        document.getElementById("title1").innerHTML = s[i];
        i++;
    } else {
        i = 0; //Reset i
        document.getElementById("title1").innerHTML = "Click";
        document.getElementById("title1").innerHTML = html;
    }
}

function myMesage(){
    document.getElementById("title1").innerHTML = "Click";;
}
