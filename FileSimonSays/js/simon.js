let titolo = document.getElementById('titolo');
let inputForm = document.getElementById('input-form');
let messaggio = document.getElementById("message");
let inputfield = document.getElementById('input-field'); 

let numbers = [];
		for (let i = 0; i <= 5; i++) {
			numbers.push(Math.floor(Math.random() * 10));
		}
		let ul = document.getElementById('numbers');
        

		for (let i = 0; i < numbers.length; i++) {
			let li = document.createElement('li');
			li.appendChild(document.createTextNode(numbers[i]));
			ul.appendChild(li);
		}

		let secondsLeft = 30;

		let timer = setInterval(function() {

			secondsLeft--;

			if (secondsLeft === 0) {
				clearInterval(timer);
				ul.innerHTML = "";
                titolo.innerHTML = "";
				//.style.display = "block";
                inputfield.focus();
                
			} else {
				messaggio.innerHTML = "Timer : " + secondsLeft + " seconds";
			}
		}, 1000);

		inputForm.addEventListener("submit", function(e) {
			e.preventDefault();

			let INPUT = inputfield.value.trim();
			if (INPUT == numbers.join(" ")) {
				messaggio.innerHTML = `Ottima memoria!`;
			} else {
				let correctNumbers = [];
            let inputNumbers = input.split(" ");
            for (let i = 0; i < inputNumbers.length; i++) {
                if (numbers.includes(parseInt(inputNumbers[i]))) {
                    correctNumbers.push(inputNumbers[i]);
                }
            }
            if (correctNumbers.length == 0) {
                messaggio.innerHTML = "Scusa, non ricordi nessuno dei numeri.";
            } else {
                messaggio.innerHTML = "Ti sei ricordato " + correctNumbers.length + " numero(i): " + correctNumbers.join(", ");
            }
	    }
			
	});