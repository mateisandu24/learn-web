const button = document.querySelector('button');
const text = document.querySelector("#todo");
const results = document.querySelector("#results");

function btnClick(){
    results.textContent = `You saved "${text.value}".`;
}

button.onclick = btnClick;