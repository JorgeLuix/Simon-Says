let numbers = [];
		for (let i = 0; i < 5; i++) {
			numbers.push(Math.floor(Math.random() * 10));
		}
		let ul = document.getElementById("numbers");
		for (let i = 0; i < numbers.length; i++) {
			let li = document.createElement("li");
			li.appendChild(document.createTextNode(numbers[i]));
			ul.appendChild(li);
		}

		let secondsLeft = 30;
		let timer = setInterval(function() {
			secondsLeft--;
			if (secondsLeft == 0) {
				clearInterval(timer);
				ul.innerHTML = "";
				document.getElementById("input-form").style.display = "block";
				document.getElementById("input-field").focus();
			} else {
				document.getElementById("message").innerHTML = "Timer : " + secondsLeft + " seconds";
			}
		}, 1000);

		document.getElementById("input-form").addEventListener("submit", function(e) {
			e.preventDefault();

			let input = document.getElementById("input-field").value.trim();
			if (input == numbers.join(" ")) {
				document.getElementById("message").innerHTML = `Ottima memoria!`;
			} else {
				document.getElementById("message").innerHTML = `Mi dispiace, riprova!`;
			}
		});