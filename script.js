 function calcular() {
            
            
            let vol = document.getElementById('volml')
            let vml = Number(vol.value)
            
            let dil = document.getElementById('dilu')
            let dilval = Number(dil.value)
            
            let res = document.getElementById('res')

            let cal = vml / dilval
            let agua = vml - cal

            let porp = cal * 100 / (agua + cal)
            let porag = 100 - porp


            
            if (vml == 0 || dilval ==0 ){
               res.innerHTML=`Digite um valor valido`
            }
            else{
             res.innerHTML= `Sua diluição deve ser de <br><ins><strong>${agua.toFixed(0)} ML</strong></ins> de água para <br><strong><ins>${cal.toFixed(1)} ML</ins></strong> de produto<p> ${porag.toFixed(1)}% Água <br>${porp.toFixed(1)}% Produto</p>  `

            }if (porp <= 5){
                res.innerHTML+= ` <img src="m5.png" alt="medidor">
                <div class="coluna">
                <ins><abbr title="Água">${agua.toFixed(0)} ML</abbr></ins>
                 <br>
                <ins><abbr title="Produto">${cal.toFixed(1)} ML</abbr></ins>
                </div> `

            }if (porp >5 && porp <= 10  ) {
                res.innerHTML += `<img src="m10.png" alt="medidor">
                <div class="coluna">
                <ins><abbr title="Água">${agua.toFixed(0)} ML</abbr></ins>
                 <br>
                <ins><abbr title="Produto">${cal.toFixed(1)} ML</abbr></ins>
                </div> `
            }if (porp >10 && porp <= 15 ) {
                res.innerHTML += `<img src="m15.png" alt="medidor">
                <div class="coluna">
                <ins><abbr title="Água">${agua.toFixed(0)} ML</abbr></ins>
                 <br>
                <ins><abbr title="Produto">${cal.toFixed(1)} ML</abbr></ins>
                </div> `
            }if (porp >15 && porp <= 20 ) {
                res.innerHTML += `<img src="m20.png" alt="medidor">
                <div class="coluna">
                <ins><abbr title="Água">${agua.toFixed(0)} ML</abbr></ins>
                 <br>
                <ins><abbr title="Produto">${cal.toFixed(1)} ML</abbr></ins>
                </div> `
            }if (porp >20 && porp <= 25 ) {
                res.innerHTML += `<img src="m25.png" alt="medidor">
                <div class="coluna">
                <ins><abbr title="Água">${agua.toFixed(0)} ML</abbr></ins>
                 <br>
                <ins><abbr title="Produto">${cal.toFixed(1)} ML</abbr></ins>
                </div> `
            }if (porp >25 && porp <= 30 ) {
                res.innerHTML += `<img src="m30.png" alt="medidor">
                <div class="coluna">
                <ins><abbr title="Água">${agua.toFixed(0)} ML</abbr></ins>
                 <br>
                <ins><abbr title="Produto">${cal.toFixed(1)} ML</abbr></ins>
                </div> `
            }if (porp >30 && porp <= 35 ) {
                res.innerHTML += `<img src="m35.png" alt="medidor"> 
                <div class="coluna">
                <ins><abbr title="Água">${agua.toFixed(0)} ML</abbr></ins>
                 <br>
                <ins><abbr title="Produto">${cal.toFixed(1)} ML</abbr></ins>
                </div> `
            }if (porp >35 && porp <= 40 ) {
                res.innerHTML += `<img src="m40.png" alt="medidor">
                <div class="coluna">
                <ins><abbr title="Água">${agua.toFixed(0)} ML</abbr></ins>
                 <br>
                <ins><abbr title="Produto">${cal.toFixed(1)} ML</abbr></ins>
                </div> `
            }if (porp >40 && porp <= 45 ) {
                res.innerHTML += `<img src="m45.png" alt="medidor">
                <div class="coluna">
                <ins><abbr title="Água">${agua.toFixed(0)} ML</abbr></ins>
                 <br>
                <ins><abbr title="Produto">${cal.toFixed(1)} ML</abbr></ins>
                </div> `
            }if (porp >45 && porp <= 50 ) {
                res.innerHTML += `<img src="m50.png" alt="medidor"> 
                <div class="coluna">
                <ins><abbr title="Água">${agua.toFixed(0)} ML</abbr></ins>
                 <br>
                <ins><abbr title="Produto">${cal.toFixed(1)} ML</abbr></ins>
                </div> `
            }
           
        
        }