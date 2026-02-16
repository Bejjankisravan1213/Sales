var DisplayString = "";

// Auto calculate total when typing
$("input").keyup(function() {
    var a = $("#quantity").val();
    var b = $("#price").val();
    var c = $("#discount").val();
    var p = (a * b) - c;
    $("#total").val(p);
});

// Set price automatically based on product
$("#item").change(function() {
    var Prd = $("#item").val();
    $("#price").val(Prd);

    var a = $("#quantity").val();
    var b = $("#price").val();
    var c = $("#discount").val();
    var p = (a * b) - c;
    $("#total").val(p);
});

var DataList = [];

// Add product to list
$("#btn_id").click(function() {
    var Product = $("#item").val();
    var Quantity = $("#quantity").val();
    var Price = $("#price").val();
    var Discount = $("#discount").val();
    var Total = $("#total").val();

    if (Product === "Select product" || !Quantity || !Price) {
        alert("Please enter all required details!");
        return;
    }

    DataList.push({
        Product: Product,
        Quantity: Quantity,
        Price: Price,
        Discount: Discount,
        Total: Total
    });

    DisplayItem(DataList);
});

// Display items in a table
function DisplayItem(DataList) {
    var SNO = '';
    var AmountTotal = 0;
    DisplayString = '<table class="table table-bordered" width="100%">';
    DisplayString += '<thead style="font-weight:bold;"><tr><td>S.No</td><td>Product</td><td>Quantity</td><td>Price</td><td>Discount</td><td>Total</td></tr></thead>';

    for (var i = 0; i < DataList.length; i++) {
        var item = DataList[i];
        var DisProduct1 = getProductName(item.Product);

        AmountTotal += parseFloat(item.Total);

        DisplayString += `<tr>
            <td>${i + 1}</td>
            <td>${DisProduct1}</td>
            <td>${item.Quantity}</td>
            <td>${FormatIndianCur(item.Price)}</td>
            <td>${item.Discount}</td>
            <td>${FormatIndianCur(item.Total)}</td>
        </tr>`;
    }

    DisplayString += `<thead style="font-weight:bold;"><tr><td colspan="5">Total Amount</td><td>${FormatIndianCur(AmountTotal)}</td></tr></thead>`;
    DisplayString += '</table>';
    $(".DisplayItems").html(DisplayString);
}

// Convert product value to name
function getProductName(value) {
    switch (value) {
        case "13500": return "Mobile";
        case "46000": return "Laptop";
        case "18000": return "Tablet";
        case "500": return "Mobile Charger";
        case "2000": return "Power Bank";
        case "1500": return "Earphones";
        case "700": return "Keyboard";
        case "1200": return "Mouse";
        case "35000": return "Smart TV";
        case "25000": return "Refrigerator";
        case "40000": return "Washing Machine";
        case "800": return "USB Drive";
        case "2200": return "Bluetooth Speaker";
        case "15000": return "Monitor";
        case "3000": return "Router";
        default: return "Unknown";

    }
}

// Format Indian Currency
function FormatIndianCur(amount) {
    const numericAmount = parseFloat(amount);
    if (isNaN(numericAmount)) return "₹0.00";

    return numericAmount.toLocaleString('en-IN', {
        style: 'currency',
        currency: 'INR'
    });
}
