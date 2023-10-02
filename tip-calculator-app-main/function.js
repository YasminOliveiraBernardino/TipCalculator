
function calc(){
    var tipAmount = document.getElementById('tipAmount');
    var totalAmount = document.getElementById('totalAmount');
    var bill = parseFloat(document.getElementById('dolar').value);
    var tipPerc = parseFloat(document.querySelector('.customize').value);
    var pp = parseFloat(document.getElementById('people').value);

    /*botões de porcentagem*/
    
    const add5 = document.getElementById('add5');
    const add10 = document.getElementById('add10');
    const add15 = document.getElementById('add15');
    const add25 = document.getElementById('add5');
    const add50 = document.getElementById('add5');

    parcTotal = (bill * tipPerc/100) / pp;
    total = (bill + (bill * tipPerc/100)) / pp;






    tipAmount.innerText = `$${parcTotal.toFixed(2)}`;
    totalAmount.innerText = `$${total.toFixed(2)}`;
}

