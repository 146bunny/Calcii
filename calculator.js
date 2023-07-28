let string = ""

let buttons = document.querySelectorAll('.button');

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        if (e.target.innerHTML == "=") {
            string = eval(string);//eval() performs operations based on the expression
            document.querySelector('.input').value = string;

        }
        else if (e.target.innerHTML == "AC") {
            string = "";
            document.querySelector('.input').value = string;
        }
        // else if (e.target.classList.contains("val")) {
        //     let evalue=Math.E;
        //     string = eval(string * evalue);
        //     document.querySelector('.input').value = string;
        // } 
        //find out something for e--how to evaluate e
        else if (e.target.classList.contains("del")) {
            string = string.slice(0, -1);
            document.querySelector('.input').value = string;
        } 
        else {
            string = string + e.target.innerHTML;//target property shows where the event occured
            document.querySelector('.input').value = string;
        }

    })
});

console.log(Math.E)