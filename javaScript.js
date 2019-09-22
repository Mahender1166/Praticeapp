function calc() {
    var total = parseFloat(document.getElementById("bill").value);
    var rate = parseFloat(document.getElementById("rate").value);

    var tax1= total*(rate/100);
    const taxrate= 5.5;
    var tip = total *(taxrate/100);
    var total = total + tip + tax1;

    document.getElementById("tipAmount").innerHTML= tip;
    document.getElementById("taxAmount").innerHTML= tax1;     
    document.getElementById("grandAmount").innerHTML = total;    
}
document.querySelector('#cal').addEventListener('click',calc);