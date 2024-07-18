function add() {
    const input = document.querySelector("#valor");  //o # significa que ele procura o id 
    const ul = document.querySelector("ul");
    const li = document.createElement("li");
    li.textContent = input.value;
    ul.appendChild(li);
    input.value = "";
}