push.addEventListener('click',showBar);
pushed.addEventListener('click',showBar);
let a = true;
function showBar() {
    let barLet=document.querySelector('.panel-left');
    if(a){
        barLet.classList.add('show');
        a=false;
    }else{
        barLet.classList.remove('show');
        a=true;
    }
}