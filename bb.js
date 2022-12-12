let puntosVisita = document.getElementById("ptsVisita").textContent;
        puntosVisita = parseInt(puntosVisita)

        let btnVisitaSuma3 = document.getElementById("Vadd3");
        btnVisitaSuma3.addEventListener("click", suma3V);

        let btnVisitaSuma2 = document.getElementById("Vadd2");
        btnVisitaSuma2.addEventListener("click", suma2V);

        let btnVisitaSuma1 = document.getElementById("Vadd1");
        btnVisitaSuma1.addEventListener("click", suma1V);

        function bordeTantos() {
            let contPtsLocal = document.getElementById("ptsLocal")
            let contPtsVisita = document.getElementById("ptsVisita")
            if (puntosLocal > puntosVisita) {
                contPtsLocal.style.border = "thick solid #00ff00"
                contPtsVisita.style.border = "thick solid #ff0000"
            }
            else if (puntosVisita > puntosLocal) {
                contPtsLocal.style.border = "thick solid #ff0000"
                contPtsVisita.style.border = "thick solid #00ff00"
            }

            else {
                contPtsLocal.style.border = "thick solid #0000ff"
                contPtsVisita.style.border = "thick solid #0000ff"
            }
        }

        function  suma3V () {            
            puntosVisita = puntosVisita + 3
            document.getElementById("ptsVisita").textContent = puntosVisita
            bordeTantos()
        }

        function  suma2V () {            
            puntosVisita = puntosVisita + 2
            document.getElementById("ptsVisita").textContent = puntosVisita
            bordeTantos()
        }

        function  suma1V () {            
            puntosVisita = puntosVisita + 1
            document.getElementById("ptsVisita").textContent = puntosVisita
            bordeTantos()
        }

        let puntosLocal = document.getElementById("ptsLocal").textContent;
        puntosLocal = parseInt(puntosLocal)

        let btnLocalSuma3 = document.getElementById("Ladd3");
        btnLocalSuma3.addEventListener("click", suma3L);

        let btnLocalSuma2 = document.getElementById("Ladd2");
        btnLocalSuma2.addEventListener("click", suma2L);

        let btnLocalSuma1 = document.getElementById("Ladd1");
        btnLocalSuma1.addEventListener("click", suma1L);

        function  suma3L () {            
            puntosLocal = puntosLocal + 3
            document.getElementById("ptsLocal").textContent = puntosLocal
            bordeTantos()        
        }

        function  suma2L () {            
            puntosLocal = parseInt(puntosLocal) + 2
            document.getElementById("ptsLocal").textContent = puntosLocal
            bordeTantos()
        }

        function  suma1L () {            
            puntosLocal = parseInt(puntosLocal) + 1
            document.getElementById("ptsLocal").textContent = puntosLocal
            bordeTantos()
        }

        document.getElementById("reset").addEventListener('click', resetea);

        function resetea() {           
            document.getElementById("ptsLocal").textContent = 000
            document.getElementById("ptsVisita").textContent = 000
            puntosLocal = 0;
            puntosVisita = 0;
        }

        let contPtsLocal = document.getElementById("ptsLocal")
        

        if (puntosLocal > puntosVisita) {
            contPtsLocal.style.border = "thick solid #00ff00"
        }