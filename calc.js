let result = document.getElementById('inputext');

let calculate = (number) => {
    // result.value=result.value+number;
    result.value+=number;
}

let Result = () => {
    try {
        result.value=eval(result.value);
        
    } catch (error) {
        alert("Enter a valid calculation");
    }
}

function clr(){
    result.value="";
}

function del(){
    result.value=result.value.slice(0, -1);
}