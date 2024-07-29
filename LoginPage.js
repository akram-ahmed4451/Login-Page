
function abc(){
    fname = document.getElementById('fname').value;
    if(fname.length == ""){
        document.getElementById('ferror').innerHTML="*Name length can't be zero!"
    }else if(fname.length < 3){
        document.getElementById('ferror').innerHTML="*Name length is too short!"
    }else if(fname.length > 15){
        document.getElementById('ferror').innerHTML="*Name length is too long!"
    }else{
        document.getElementById('ferror').innerHTML=""
    }
    fpass = document.getElementById('Pass').value;
    if(fpass.length == ""){
        document.getElementById('passerror').innerHTML="*Please Create Your Password!"
    }else if(fpass.length < 3){
        document.getElementById('passerror').innerHTML="*Password is too short!"
    }else if(fpass.length > 15){
        document.getElementById('passerror').innerHTML="*Password is too long!"
    }else{
        document.getElementById('passerror').innerHTML=""
    }
    return false;
}
