function check(){
    let name = document.getElementById('txtName').value;
    if(name.length==0){
        alert('Cant be empty!');
        return false;
    }else{
        return true;
    }
 }