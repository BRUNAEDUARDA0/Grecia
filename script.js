<script>

    
    const botoes = document.querySelectorall("button");

    botoes.array.forEach (function(botao){
        botao.addEventListener("click", botaoClicado);
        function botaoClicado (){
            console.log("fui clicado");
            let texto = botao.querySelector("span");
            texto.textContent++;
            
        }
        
    })


</script>
