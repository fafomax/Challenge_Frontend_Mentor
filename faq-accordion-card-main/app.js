let estado = false;
let estado2 = false;
let estado3 = false;
let estado4 = false;
let estado5 = false;

$(document).ready(function(){
    
    

    $("#elemento1").on('click', function(){
        $('.texto_oculto1').slideToggle();
        if(estado==false){
            document.getElementById('flechita').classList.add('rotada');
            estado = true;
            
            $('.texto_oculto2,.texto_oculto3,.texto_oculto4,.texto_oculto5').slideUp('slow');
            document.getElementById('flechita2').classList.remove('rotada');
            estado2 = false;
            document.getElementById('parrafo2').style.fontWeight="normal";

            document.getElementById('flechita3').classList.remove('rotada');
            estado3 = false;
            document.getElementById('parrafo3').style.fontWeight="normal";

            document.getElementById('flechita4').classList.remove('rotada');
            estado4 = false;
            document.getElementById('parrafo4').style.fontWeight="normal";
            
            document.getElementById('flechita5').classList.remove('rotada');
            estado5 = false;
            document.getElementById('parrafo5').style.fontWeight="normal";
            
            document.getElementById('parrafo1').style.fontWeight="bold";
            
        } else {document.getElementById('flechita').classList.remove('rotada');
            estado = false;
            document.getElementById('parrafo1').style.fontWeight="normal";
        }
        
    })
});

$(document).ready(function(){
    

    $('#elemento2').on('click', function(){
        $('.texto_oculto2').slideToggle();
        if(estado2==false){
            document.getElementById('flechita2').classList.add('rotada');
            estado2 = true;

            $('.texto_oculto1,.texto_oculto3,.texto_oculto4,.texto_oculto5').slideUp('slow');
            document.getElementById('flechita').classList.remove('rotada');
            estado = false;
            document.getElementById('parrafo1').style.fontWeight="normal";

            document.getElementById('flechita3').classList.remove('rotada');
            estado3 = false;
            document.getElementById('parrafo3').style.fontWeight="normal";

            document.getElementById('flechita4').classList.remove('rotada');
            estado4 = false;
            document.getElementById('parrafo4').style.fontWeight="normal";

            document.getElementById('flechita5').classList.remove('rotada');
            estado5 = false;
            document.getElementById('parrafo5').style.fontWeight="normal";

            document.getElementById('parrafo2').style.fontWeight="bold";
          
        } else {document.getElementById('flechita2').classList.remove('rotada');
            estado2 = false;
            document.getElementById('parrafo2').style.fontWeight="normal";
        }   
    })
});

$(document).ready(function(){
    

    $('#elemento3').on('click', function(){
        $('.texto_oculto3').slideToggle();
        if(estado3==false){
            document.getElementById('flechita3').classList.add('rotada');
            estado3 = true;
            $('.texto_oculto1,.texto_oculto2,.texto_oculto4,.texto_oculto5').slideUp('slow');
            document.getElementById('flechita').classList.remove('rotada');
            estado = false;
            document.getElementById('parrafo1').style.fontWeight="normal";

            document.getElementById('flechita2').classList.remove('rotada');
            estado2 = false;
            document.getElementById('parrafo2').style.fontWeight="normal";

            document.getElementById('flechita4').classList.remove('rotada');
            estado4 = false;
            document.getElementById('parrafo4').style.fontWeight="normal";

            document.getElementById('flechita5').classList.remove('rotada');
            estado5 = false;
            document.getElementById('parrafo5').style.fontWeight="normal";

            document.getElementById('parrafo3').style.fontWeight="bold";
           
        } else {document.getElementById('flechita3').classList.remove('rotada');
            estado3 = false;
            document.getElementById('parrafo3').style.fontWeight="normal";
        }  
    })
});

$(document).ready(function(){
    

    $('#elemento4').on('click', function(){
        $('.texto_oculto4').slideToggle();
        if(estado4==false){
            document.getElementById('flechita4').classList.add('rotada');
            estado4 = true;
            $('.texto_oculto1,.texto_oculto2,.texto_oculto3,.texto_oculto5').slideUp('slow');
            document.getElementById('flechita').classList.remove('rotada');
            estado = false;
            document.getElementById('parrafo1').style.fontWeight="normal";

            document.getElementById('flechita2').classList.remove('rotada');
            estado2 = false;
            document.getElementById('parrafo2').style.fontWeight="normal";

            document.getElementById('flechita3').classList.remove('rotada');
            estado3 = false;
            document.getElementById('parrafo3').style.fontWeight="normal";

            document.getElementById('flechita5').classList.remove('rotada');
            estado5 = false;
            document.getElementById('parrafo5').style.fontWeight="normal";

            document.getElementById('parrafo4').style.fontWeight="bold";
           
        } else {document.getElementById('flechita4').classList.remove('rotada');
            estado4 = false;
            document.getElementById('parrafo4').style.fontWeight="normal";
        }  
    })
});

$(document).ready(function(){
    
    $('#elemento5').on('click', function(){
        $('.texto_oculto5').slideToggle();
        if(estado5==false){
            document.getElementById('flechita5').classList.add('rotada');
            estado5 = true;
            
            $('.texto_oculto1,.texto_oculto2,.texto_oculto3,.texto_oculto4').slideUp('slow');
            document.getElementById('flechita').classList.remove('rotada');
            estado = false;
            document.getElementById('parrafo1').style.fontWeight="normal";

            document.getElementById('flechita2').classList.remove('rotada');
            estado2 = false;
            document.getElementById('parrafo2').style.fontWeight="normal";

            document.getElementById('flechita3').classList.remove('rotada');
            estado3 = false;
            document.getElementById('parrafo3').style.fontWeight="normal";

            document.getElementById('flechita4').classList.remove('rotada');
            estado4 = false;
            document.getElementById('parrafo4').style.fontWeight="normal";

            document.getElementById('parrafo5').style.fontWeight="bold";
           
        } else {document.getElementById('flechita5').classList.remove('rotada');
            estado5 = false;
            document.getElementById('parrafo5').style.fontWeight="normal";
        } 
    })
});
