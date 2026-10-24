let total = 0;

function buy(price) {
    total = total + price;

    document.getElementById("total").innerHTML =
        "Total: BDT " + total;
}
