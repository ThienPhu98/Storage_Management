class Item {
    constructor(name, manufacturer, type, price, quantity, code) {
        this.name = name;
        this.manufacturer = manufacturer;
        this.type = type;
        this.price = price;
        this.quantity = quantity;
        this.code = code;
    }
}

let lsProductList = [];

function addItem() {
    let pro_name = document.getElementById('Product_Name').value;
    let pro_manufacturer = document.getElementById('Product_Manufacturer').value;
    let pro_type = document.getElementById('Product_Type').value;
    let pro_price = document.getElementById('Product_Price').value;
    let pro_quantity = document.getElementById('Product_Quantity').value;
    let pro_code = document.getElementById('Product_Code').value;

    if (pro_name != '') {
        if (pro_manufacturer != '') {
            if (pro_type != '') {
                if (pro_price != '') {
                    if (pro_quantity != '') {
                        if (pro_code != '') {
                            let newItem = new Item(pro_name, pro_manufacturer, pro_type, pro_price, pro_quantity, pro_code);


                            lsProductList = JSON.parse(localStorage.getItem("product_list"));

                            console.log(lsProductList)

                            let existProduct = false;

                            if (lsProductList != null) {
                                lsProductList.forEach(item => {
                                    if (item.code == pro_code) {
                                        console.log(item.code)
                                        item.quantity += pro_quantity;
                                        existProduct = true;
                                    }
                                });

                                if (!existProduct) {
                                    lsProductList.push(newItem);
                                }
                            } else {
                                lsProductList = [];
                                lsProductList.push(newItem);
                            }

                            localStorage.setItem("product_list", JSON.stringify(lsProductList));

                            displayItems();
                            document.getElementById('Product_Name').value = '';
                            document.getElementById('Product_Manufacturer').value = '';
                            document.getElementById('Product_Type').value = '';
                            document.getElementById('Product_Price').value = '';
                            document.getElementById('Product_Quantity').value = '';
                            document.getElementById('Product_Code').value = '';
                        }

                    }
                }
            }
        }
    }
}

function cancelItem() {
    document.getElementById('Product_Name').value = '';
    document.getElementById('Product_Manufacturer').value = '';
    document.getElementById('Product_Type').value = '';
    document.getElementById('Product_Price').value = '';
    document.getElementById('Product_Quantity').value = '';
    document.getElementById('Product_Code').value = '';

    document.getElementById('btn_add').style.display = 'initial';
    document.getElementById('btn_update').style.display = 'none';
    document.getElementById('btn_reset').style.display = 'none';
    document.getElementById('btn_cancel').style.display = 'initial';
    document.getElementById('btn_find').style.display = 'initial';
}

displayItems();
function displayItems() {
    let lsProductList = JSON.parse(localStorage.getItem("product_list"));
    let text = '';

    if (lsProductList != null) {
        lsProductList.forEach((item, index) => {
            text += '<tr>';
            text += '<th scope="row">' + (index + 1) + '</th>';
            text += '<td id="td' + (index) + '"><span id="span' + (index) + '">' + item.name + '</span></td>';
            text += '<td id="td' + (index) + '"><span id="span' + (index) + '">' + item.manufacturer + '</span></td>';
            text += '<td id="td' + (index) + '"><span id="span' + (index) + '">' + item.type + '</span></td>';
            text += '<td id="td' + (index) + '"><span id="span' + (index) + '">' + item.price + '</span></td>';
            text += '<td id="td' + (index) + '"><span id="span' + (index) + '">' + item.quantity + '</span></td>';
            text += '<td id="td' + (index) + '"><span id="span' + (index) + '">' + item.code + '</span></td>';
            text += '<td id="tdEdit' + (index) + '">' + "<button id='btnEdit" + index + "' type='button' class='btn btn-outline-success' onclick='editItem(" + index + ");'>Edit</button>" + '</td>';
            text += '<td>' + "<button id='btnDel" + index + " type='button' class='btn btn-outline-danger'' onclick='deleteItem(" + index + ")'>Delete</button>" + '</td>';
            text += '</tr>';
        });
    }

    document.getElementById('countItem').innerHTML = lsProductList.length + " product";
    if (lsProductList.length > 1) {
        document.getElementById('countItem').innerHTML += "s";
    }

    document.getElementById("tbody").innerHTML = text;
}

function editItem(index) {
    let lsProductList = JSON.parse(localStorage.getItem("product_list"));

    document.getElementById("Product_Name").focus();

    document.getElementById('btn_add').style.display = 'none';
    document.getElementById('btn_update').style.display = 'initial';
    document.getElementById('btn_reset').style.display = 'initial';
    document.getElementById('btn_cancel').style.display = 'initial';
    document.getElementById('btn_find').style.display = 'none';

    document.getElementById('Product_Name').value = lsProductList[index].name;
    document.getElementById('Product_Manufacturer').value = lsProductList[index].manufacturer;
    document.getElementById('Product_Type').value = lsProductList[index].type;
    document.getElementById('Product_Price').value = lsProductList[index].price;
    document.getElementById('Product_Quantity').value = lsProductList[index].quantity;
    document.getElementById('Product_Code').value = lsProductList[index].code;

    document.getElementById("btn_update").addEventListener('click', function () {
        lsProductList[index].name = document.getElementById('Product_Name').value;
        lsProductList[index].manufacturer = document.getElementById('Product_Manufacturer').value;
        lsProductList[index].type = document.getElementById('Product_Type').value;
        lsProductList[index].price = document.getElementById('Product_Price').value;
        lsProductList[index].quantity = document.getElementById('Product_Quantity').value;

        localStorage.setItem("product_list", JSON.stringify(lsProductList));

        document.getElementById('Product_Name').value = '';
        document.getElementById('Product_Manufacturer').value = '';
        document.getElementById('Product_Type').value = '';
        document.getElementById('Product_Price').value = '';
        document.getElementById('Product_Quantity').value = '';
        document.getElementById('Product_Code').value = '';

        document.getElementById('btn_add').style.display = 'initial';
        document.getElementById('btn_update').style.display = 'none';
        document.getElementById('btn_reset').style.display = 'none';
        document.getElementById('btn_cancel').style.display = 'initial';
        document.getElementById('btn_find').style.display = 'initial';

        displayItems();

    });

    document.getElementById("btn_reset").addEventListener('click', function () {
        document.getElementById('Product_Name').value = '';
        document.getElementById('Product_Manufacturer').value = '';
        document.getElementById('Product_Type').value = '';
        document.getElementById('Product_Price').value = '';
        document.getElementById('Product_Quantity').value = '';
    });
}

function deleteItem(index) {
    let lsProductList = JSON.parse(localStorage.getItem("product_list"));
    var conf = confirm('Are you sure you want to delete: "'+ lsProductList[index].name +'" with code: '+ lsProductList[index].code + " product?");
    if (conf) {
        lsProductList.splice(index, 1);
        localStorage.setItem("product_list", JSON.stringify(lsProductList));
        displayItems();
    }
}