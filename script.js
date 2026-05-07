const pantalla = document.getElementById("pantalla");

document.querySelectorAll("button").forEach(function(boton) {

    boton.addEventListener("click", function() {

        if (boton.textContent === "=") {
            if (pantalla.value === "") return;

            try {
                const expresion = pantalla.value
                    .replaceAll("×", "*")
                    .replaceAll("÷", "/");
                pantalla.value = eval(expresion);
            } catch (error) {
                pantalla.value = "ERROR!"
            }

        } else if (boton.textContent === "C") {
            pantalla.value = "";

        } else {

            const partes = pantalla.value
                .replaceAll("×", "*")
                .replaceAll("÷", "/")
                .split(/[\+\-\*\/]/);
            const ultimoNumero = partes[partes.length - 1];

            if (boton.textContent === "." && ultimoNumero.includes(".")) return;
            if (pantalla.value === "ERROR!") pantalla.value = "";
            
            const ultimoCaracter = pantalla.value[pantalla.value.length - 1];
            const operador = ["+", "-", "×", "÷"].includes(boton.textContent);
            const ultimoOperador = ["+", "-", "×", "÷"].includes(ultimoCaracter);

            if (operador && ultimoOperador) return;

            const valor = boton.textContent;

            pantalla.value += valor;
        }

    })

})