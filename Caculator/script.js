
var result=document.querySelector('.result')
var items=Array.from(document.querySelectorAll('.item'));
items.forEach(function(btn){
    btn.addEventListener('click',function(){
        if(result.innerHTML=='0')
        result.innerHTML='';
        if(btn.innerHTML=='AC')
        result.innerHTML='0';
        else if(btn.innerHTML=='DEL'){
            var arrtex = Array.from(result.innerHTML);
            arrtex.splice(arrtex.length-1,1);
            if(arrtex.length!=0)
            result.innerHTML=arrtex.join('');
            else result.innerHTML='0';
        }
        else if(btn.innerHTML=='='){
            result.innerHTML=eval(result.innerHTML);
        }
        else result.innerHTML+=btn.innerHTML 
    })
})
