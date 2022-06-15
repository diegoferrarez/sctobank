/*Login*/
/*function enviar(){
    var email=document.getElementById("email2").value;
    var senha=document.getElementById("pwd2").value;
    if (email==""){
        alert("Insira seu e-mail e senha");
        return;
    }
    if (senha==""){
        alert("Insira sua senha");
        return;
    }
    alert("Salvo com sucesso");
    document.getElementById("email2").value="";
    document.getElementById("pwd2").value="";
}*/

// function mostrarDados(dados){
//     var lista=dados.split("#");
//     $("#conteudo").html(lista[1]+"<br>"+lista[2])
//     $("#lugar").html(lista[0]);
//     // $("#info").html(lista[1]);
//     // $("#valor").html(lista[2]);

// }


/*carousel de info*/
    $(document).ready(function() {
        $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
            items: 1,
            nav: true
            },
            600: {
            items: 3,
            nav: false
            },
            1000: {
            items: 5,
            nav: true,
            loop: false,
            margin: 20
            }
        }
        });

// /*Login*/
//         $("#btEnviar").click(function(){
//             var email=$("#email2").val();
//             var senha=$("#pwd2").val();
//             console.log(email+" "+senha);
//             if (email==""){
//                 alert("Insira seu e-mail e senha");
//                 return;
//             }
//             if (senha==""){
//                 alert("Insira sua senha");
//                 return;
//             }
//             alert("Salvo com sucesso");
//             $("#email2").val("");
//             $("#pwd2").val("");
//         });


/*mudança das info no pacote*/

        $("#btPrx").click(function exibir(){

            $("#ifm1").fadeOut();
            $("#ifm2").fadeOut(1500);
            $("#ifm3").fadeOut(2000);
            $("btPrx").fadeOut(2100);
            $("#ifm4").fadeIn();
            $("#ifm5").fadeIn(1500);
            $("#ifm6").fadeIn(2000);
            $("#btAtn").fadeIn(2100);
            
           
             $("#ifm1").style.display = "none";
             $("#ifm2").style.display = "none";
             $("#ifm3").style.display = "none";
             $("#btPrx").style.display = "none";
             $("#ifm4").style.display = "inline-block";
             $("#ifm5").style.display = "inline-block";
             $("#ifm6").style.display = "inline-block";
             $("#btAtn").style.display = "inline-block";
            
        });

        $("#btAtn").click(function exibir(){

            $("#ifm1").fadeIn();
            $("#ifm2").fadeIn(1500);
            $("#ifm3").fadeIn(2000);
            $("btPrx").fadeIn(2100);
            $("#ifm4").fadeOut();
            $("#ifm5").fadeOut(1500);
            $("#ifm6").fadeOut(2000);
            $("#btAtn").fadeOut(2100);


             $("#ifm1").style.display = "inline-block";
             $("#ifm2").style.display = "inline-block";
             $("#ifm3").style.display = "inline-block";
             $("#btPrx").style.display = "inline-block";
             $("#ifm4").style.display = "none";
             $("#ifm5").style.display = "none";
             $("#ifm6").style.display = "none";
             $("#btAtn").style.display = "none";
            
        });

        $("#btPesquisar").click(function(){
            var pesquisar=$("#pesquisar").val();

            if (pesquisar==""){
                alert("Digite o que procura");
                return;
            }
            alert("Buscando informações");
            $("#pesquisar").val("");
        });

        $("#email2").focus(function(){
            $(this).css("background-color", "#DCDCDC");
        $("#pwd2").focus(function(){
            $(this).css("background-color", "#DCDCDC");
            
        });
    });

        $("#email2").blur(function(){
            $(this).css("background-color", "#DCDCDC");
        $("#pwd2").blur(function(){
            $(this).css("background-color", "#DCDCDC");
        
        });
    });
    
    //MODAL DAS HOSPEDAGENS
    $(".abreModal").click(function(){
        var dados=$(this).attr("data-dados");
        var lista=dados.split("#");
        $("#conteudo").html(lista[1]+"<br>"+lista[2])
        $("#lugar").html(lista[0]);

        var url = $(this).find("img").attr("src");
        $("#myModal img").attr("src", url);
        $("#myModal").modal("show");
        
    });

    // MODAL DAS PASSAGENS
    $(".abreModal2").click(function(){
        var dados=$(this).attr("data-dados");
        var lista=dados.split("#");
        $("#conteudo2").html(lista[1]+"<br>"+lista[2])
        $("#lugar2").html(lista[0]);

        var url = $(this).find("img").attr("src");
        $("#myModal2 img").attr("src", url);
        $("#myModal2").modal("show");
        
    });

    //Chamando a janela de login
    $("#fLogin").click(function(){
        $("mdLogin").modal();
    })


    //MODAL DO LOGIN
    $("#btEnviar").click(function(){
        var email=$("#email2").val();
        var senha=$("#pwd2").val();
        console.log(email+" "+senha);
        if (email==""){
            alert("Insira seu e-mail e senha");
            return;
        }
        if (senha==""){
            alert("Insira sua senha");
            return;
        }
        alert("Salvo com sucesso");
        $("#email2").val("");
        $("#pwd2").val("");
    });

});
