const ingressos = [];

function highLight(selector){
    var element = document.querySelector(selector);
    element.classList.toggle("cardHighlight");
}

function cardSelected(selector){
    var element = document.querySelector(selector);
    element.classList.toggle("card-selected");
    if(ingressos.includes(selector)) ingressos.pop(selector);
    else ingressos.push(selector)
}

function showCardSelected() {
    if(ingressos.length > 0) alert("Ingressos Selecionados:"+ingressos);
}
