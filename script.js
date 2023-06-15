let isOpened = false;
document.getElementById('passport').addEventListener('click',openPassport);
function openPassport(){
    isOpened = !isOpened
    if(isOpened){
        document.getElementById('passport-1').className = 'passport-pages open';
    }
    else{
        document.getElementById('passport-1').classList.remove('open');
    }
}