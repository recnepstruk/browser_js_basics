// alert("Hello Boulder!");
// var question= prompt("What is your name?")

// 	if(question) {
// 		alert("Hello " + question + "!")
// 	};

window.onload = function() {
    var name = prompt("What is your name?");
    if (name) {
        document.getElementById('message').innerHTML = name;
    }
}
