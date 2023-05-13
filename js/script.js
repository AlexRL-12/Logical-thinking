function generateOddNumbers() {
    var inputNumber = document.getElementById("inputNumber").value;
    var oddNumbers = [];
  
    if (inputNumber.trim() === "") {
      alert("Por favor, ingrese un número entero.");
      return;
    }
  
    for (var i = 1; i <= inputNumber; i++) {
      if (i % 2 !== 0) {
        oddNumbers.push(i);
      }
    }
  
    var resultElement = document.getElementById("result");
    resultElement.innerHTML = "<h3>Los números enteros impares desde el 1 hasta el " + inputNumber + " son:</h3>";
    resultElement.innerHTML += "<p>[" + oddNumbers.join(", ") + "]</p>";
  }
  