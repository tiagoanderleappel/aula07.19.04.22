$.support.cors = true;

$(document).ready(
    function(){
        $('#conteudo').load("pagina01.html");
    }
)



$('#btPagina1').click(
    function (){
        $('#conteudo').load("pagina01.html");
        
    }
    
)

$('#btPagina2').click(
    function (){
        $('#conteudo').load("pagina02.html");
        
    }
    
)
$('#btPagina2').click(
    function (){
        console.log("clique do botão 2");

    }
)

