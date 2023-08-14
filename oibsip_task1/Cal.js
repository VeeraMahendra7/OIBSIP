var inputElement = document.getElementById('inputValue');
function fun(num){
    inputElement.value += num;
}
function Cal(){
    try{
        inputElement.value = eval(inputElement.value);
    }
    catch(error){
        alert('Invalid');
    }
}
function Clear(){
    inputElement.value = '';
}
function Empty(){
    inputElement.value = inputElement.value.slice(0,-1);
}