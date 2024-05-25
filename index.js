const obj = document.querySelector('#text');

function increment() {
    let value = parseInt(obj.innerText);
    value = value + 1 ;
    obj.innerText = value ;
}

function decrement() {
    let value = parseInt(obj.innerText);
    value = value - 1 ;
    obj.innerText = value ;
}