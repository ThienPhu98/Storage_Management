let lsProductList = [];

function findItems() {
    document.getElementById("tbody").innerHTML = "";
    let lsProductList = JSON.parse(localStorage.getItem("product_list"));
    let text = "";
    let check_manufacturer = document.getElementById("Check_Manufacturer")
        .checked;
    let check_type = document.getElementById("Check_Type").checked;
    let check_price = document.getElementById("Check_Price").checked;
    let count = 0;

    let manufacturer = document.getElementById("Find_Manufacturer").value;
    let type = document.getElementById("Find_Type").value;
    let price = document.getElementById("Find_Price").value;

    if (check_manufacturer) {
        if (check_type) {
            if (check_price) {
                if (price == "case1") {
                    for (index = 0; index < lsProductList.length; index++) {
                        if (
                            lsProductList[index].manufacturer == manufacturer &&
                            lsProductList[index].type == type &&
                            lsProductList[index].price < 5
                        ) {
                            text += "<tr>";
                            text += '<th scope="row">' + (count + 1) + "</th>";
                            text += '<td id="td' + index + '"><span id="span' + index + '">' + lsProductList[index].name + "</span></td>";
                            text += '<td id="td' + index + '"><span id="span' + index + '">' + lsProductList[index].manufacturer + "</span></td>";
                            text += '<td id="td' + index + '"><span id="span' + index + '">' + lsProductList[index].type + "</span></td>";
                            text += '<td id="td' + index + '"><span id="span' + index + '">' + lsProductList[index].price + "</span></td>";
                            text += '<td id="td' + index + '"><span id="span' + index + '">' + lsProductList[index].quantity + "</span></td>";
                            text += '<td id="td' + index + '"><span id="span' + index + '">' + lsProductList[index].code + "</span></td>";
                            text += '<td id="tdEdit' + index + '">' + "<button id='btnEdit" + index + "' type='button' class='btn btn-outline-success' onclick='editItem(" + index + ");'>Edit</button>" + "</td>";
                            text += "<td>" + "<button id='btnDel" + index + " type='button' class='btn btn-outline-danger'' onclick='deleteItem(" + index + ")'>Delete</button>" + "</td>";
                            text += "</tr>";
                            count++;

                        }
                    }
                } else if (price == "case2") {
                    for (index = 0; index < lsProductList.length; index++) {
                        if (
                            lsProductList[index].manufacturer == manufacturer &&
                            lsProductList[index].type == type &&
                            lsProductList[index].price > 5 &&
                            lsProductList[index].price < 10
                        ) {
                            text += "<tr>";
                            text += '<th scope="row">' + (count + 1) + "</th>";
                            text += '<td id="td' + index + '"><span id="span' + index + '">' + lsProductList[index].name + "</span></td>";
                            text += '<td id="td' + index + '"><span id="span' + index + '">' + lsProductList[index].manufacturer + "</span></td>";
                            text += '<td id="td' + index + '"><span id="span' + index + '">' + lsProductList[index].type + "</span></td>";
                            text += '<td id="td' + index + '"><span id="span' + index + '">' + lsProductList[index].price + "</span></td>";
                            text += '<td id="td' + index + '"><span id="span' + index + '">' + lsProductList[index].quantity + "</span></td>";
                            text += '<td id="td' + index + '"><span id="span' + index + '">' + lsProductList[index].code + "</span></td>";
                            text += '<td id="tdEdit' + index + '">' + "<button id='btnEdit" + index + "' type='button' class='btn btn-outline-success' onclick='editItem(" + index + ");'>Edit</button>" + "</td>";
                            text += "<td>" + "<button id='btnDel" + index + " type='button' class='btn btn-outline-danger'' onclick='deleteItem(" + index + ")'>Delete</button>" + "</td>";
                            text += "</tr>";
                            count++;
                        }
                    }
                } else if (price == "case3") {
                    for (index = 0; index < lsProductList.length; index++) {
                        if (
                            lsProductList[index].manufacturer == manufacturer &&
                            lsProductList[index].type == type &&
                            lsProductList[index].price > 10
                        ) {
                            text += "<tr>";
                            text += '<th scope="row">' + (count + 1) + "</th>";
                            text += '<td id="td' + index + '"><span id="span' + index + '">' + lsProductList[index].name + "</span></td>";
                            text += '<td id="td' + index + '"><span id="span' + index + '">' + lsProductList[index].manufacturer + "</span></td>";
                            text += '<td id="td' + index + '"><span id="span' + index + '">' + lsProductList[index].type + "</span></td>";
                            text += '<td id="td' + index + '"><span id="span' + index + '">' + lsProductList[index].price + "</span></td>";
                            text += '<td id="td' + index + '"><span id="span' + index + '">' + lsProductList[index].quantity + "</span></td>";
                            text += '<td id="td' + index + '"><span id="span' + index + '">' + lsProductList[index].code + "</span></td>";
                            text += '<td id="tdEdit' + index + '">' + "<button id='btnEdit" + index + "' type='button' class='btn btn-outline-success' onclick='editItem(" + index + ");'>Edit</button>" + "</td>";
                            text += "<td>" + "<button id='btnDel" + index + " type='button' class='btn btn-outline-danger'' onclick='deleteItem(" + index + ")'>Delete</button>" + "</td>";
                            text += "</tr>";
                            count++;
                        }
                    }
                }
            } else {
                for (index = 0; index < lsProductList.length; index++) {
                    if (
                        lsProductList[index].manufacturer == manufacturer &&
                        lsProductList[index].type == type
                    ) {
                        text += "<tr>";
                        text += '<th scope="row">' + (count + 1) + "</th>";
                        text += '<td id="td' + index + '"><span id="span' + index + '">' + lsProductList[index].name + "</span></td>";
                        text += '<td id="td' + index + '"><span id="span' + index + '">' + lsProductList[index].manufacturer + "</span></td>";
                        text += '<td id="td' + index + '"><span id="span' + index + '">' + lsProductList[index].type + "</span></td>";
                        text += '<td id="td' + index + '"><span id="span' + index + '">' + lsProductList[index].price + "</span></td>";
                        text += '<td id="td' + index + '"><span id="span' + index + '">' + lsProductList[index].quantity + "</span></td>";
                        text += '<td id="td' + index + '"><span id="span' + index + '">' + lsProductList[index].code + "</span></td>";
                        text += '<td id="tdEdit' + index + '">' + "<button id='btnEdit" + index + "' type='button' class='btn btn-outline-success' onclick='editItem(" + index + ");'>Edit</button>" + "</td>";
                        text += "<td>" + "<button id='btnDel" + index + " type='button' class='btn btn-outline-danger'' onclick='deleteItem(" + index + ")'>Delete</button>" + "</td>";
                        text += "</tr>";
                        count++;
                    }
                }
            }
        } else if (check_price) {
            if (price == "case1") {
                for (index = 0; index < lsProductList.length; index++) {
                    if (
                        lsProductList[index].manufacturer == manufacturer &&
                        lsProductList[index].price < 5
                    ) {
                        text += "<tr>";
                        text += '<th scope="row">' + (count + 1) + "</th>";
                        text += '<td id="td' + index + '"><span id="span' + index + '">' + lsProductList[index].name + "</span></td>";
                        text += '<td id="td' + index + '"><span id="span' + index + '">' + lsProductList[index].manufacturer + "</span></td>";
                        text += '<td id="td' + index + '"><span id="span' + index + '">' + lsProductList[index].type + "</span></td>";
                        text += '<td id="td' + index + '"><span id="span' + index + '">' + lsProductList[index].price + "</span></td>";
                        text += '<td id="td' + index + '"><span id="span' + index + '">' + lsProductList[index].quantity + "</span></td>";
                        text += '<td id="td' + index + '"><span id="span' + index + '">' + lsProductList[index].code + "</span></td>";
                        text += '<td id="tdEdit' + index + '">' + "<button id='btnEdit" + index + "' type='button' class='btn btn-outline-success' onclick='editItem(" + index + ");'>Edit</button>" + "</td>";
                        text += "<td>" + "<button id='btnDel" + index + " type='button' class='btn btn-outline-danger'' onclick='deleteItem(" + index + ")'>Delete</button>" + "</td>";
                        text += "</tr>";
                        count++;
                    }
                }
            } else if (price == "case2") {
                for (index = 0; index < lsProductList.length; index++) {
                    if (
                        lsProductList[index].manufacturer == manufacturer &&
                        lsProductList[index].price > 5 &&
                        lsProductList[index].price < 10
                    ) {
                        text += "<tr>";
                        text += '<th scope="row">' + (count + 1) + "</th>";
                        text += '<td id="td' + index + '"><span id="span' + index + '">' + lsProductList[index].name + "</span></td>";
                        text += '<td id="td' + index + '"><span id="span' + index + '">' + lsProductList[index].manufacturer + "</span></td>";
                        text += '<td id="td' + index + '"><span id="span' + index + '">' + lsProductList[index].type + "</span></td>";
                        text += '<td id="td' + index + '"><span id="span' + index + '">' + lsProductList[index].price + "</span></td>";
                        text += '<td id="td' + index + '"><span id="span' + index + '">' + lsProductList[index].quantity + "</span></td>";
                        text += '<td id="td' + index + '"><span id="span' + index + '">' + lsProductList[index].code + "</span></td>";
                        text += '<td id="tdEdit' + index + '">' + "<button id='btnEdit" + index + "' type='button' class='btn btn-outline-success' onclick='editItem(" + index + ");'>Edit</button>" + "</td>";
                        text += "<td>" + "<button id='btnDel" + index + " type='button' class='btn btn-outline-danger'' onclick='deleteItem(" + index + ")'>Delete</button>" + "</td>";
                        text += "</tr>";
                        count++;
                    }
                }
            } else if (price == "case3") {
                for (index = 0; index < lsProductList.length; index++) {
                    if (
                        lsProductList[index].manufacturer == manufacturer &&
                        lsProductList[index].price > 10
                    ) {
                        text += "<tr>";
                        text += '<th scope="row">' + (count + 1) + "</th>";
                        text += '<td id="td' + index + '"><span id="span' + index + '">' + lsProductList[index].name + "</span></td>";
                        text += '<td id="td' + index + '"><span id="span' + index + '">' + lsProductList[index].manufacturer + "</span></td>";
                        text += '<td id="td' + index + '"><span id="span' + index + '">' + lsProductList[index].type + "</span></td>";
                        text += '<td id="td' + index + '"><span id="span' + index + '">' + lsProductList[index].price + "</span></td>";
                        text += '<td id="td' + index + '"><span id="span' + index + '">' + lsProductList[index].quantity + "</span></td>";
                        text += '<td id="td' + index + '"><span id="span' + index + '">' + lsProductList[index].code + "</span></td>";
                        text += '<td id="tdEdit' + index + '">' + "<button id='btnEdit" + index + "' type='button' class='btn btn-outline-success' onclick='editItem(" + index + ");'>Edit</button>" + "</td>";
                        text += "<td>" + "<button id='btnDel" + index + " type='button' class='btn btn-outline-danger'' onclick='deleteItem(" + index + ")'>Delete</button>" + "</td>";
                        text += "</tr>";
                        count++;
                    }
                }
            }
        } else {
            for (index = 0; index < lsProductList.length; index++) {
                if (lsProductList[index].manufacturer == manufacturer) {
                    text += "<tr>";
                    text += '<th scope="row">' + (count + 1) + "</th>";
                    text += '<td id="td' + index + '"><span id="span' + index + '">' + lsProductList[index].name + "</span></td>";
                    text += '<td id="td' + index + '"><span id="span' + index + '">' + lsProductList[index].manufacturer + "</span></td>";
                    text += '<td id="td' + index + '"><span id="span' + index + '">' + lsProductList[index].type + "</span></td>";
                    text += '<td id="td' + index + '"><span id="span' + index + '">' + lsProductList[index].price + "</span></td>";
                    text += '<td id="td' + index + '"><span id="span' + index + '">' + lsProductList[index].quantity + "</span></td>";
                    text += '<td id="td' + index + '"><span id="span' + index + '">' + lsProductList[index].code + "</span></td>";
                    text += '<td id="tdEdit' + index + '">' + "<button id='btnEdit" + index + "' type='button' class='btn btn-outline-success' onclick='editItem(" + index + ");'>Edit</button>" + "</td>";
                    text += "<td>" + "<button id='btnDel" + index + " type='button' class='btn btn-outline-danger'' onclick='deleteItem(" + index + ")'>Delete</button>" + "</td>";
                    text += "</tr>";
                    count++;
                }
            }
        }
    } else if (check_type) {
        if (check_price) {
            if (price == "case1") {
                for (index = 0; index < lsProductList.length; index++) {
                    if (
                        lsProductList[index].type == type &&
                        lsProductList[index].price < 5
                    ) {
                        text += "<tr>";
                        text += '<th scope="row">' + (count + 1) + "</th>";
                        text += '<td id="td' + index + '"><span id="span' + index + '">' + lsProductList[index].name + "</span></td>";
                        text += '<td id="td' + index + '"><span id="span' + index + '">' + lsProductList[index].manufacturer + "</span></td>";
                        text += '<td id="td' + index + '"><span id="span' + index + '">' + lsProductList[index].type + "</span></td>";
                        text += '<td id="td' + index + '"><span id="span' + index + '">' + lsProductList[index].price + "</span></td>";
                        text += '<td id="td' + index + '"><span id="span' + index + '">' + lsProductList[index].quantity + "</span></td>";
                        text += '<td id="td' + index + '"><span id="span' + index + '">' + lsProductList[index].code + "</span></td>";
                        text += '<td id="tdEdit' + index + '">' + "<button id='btnEdit" + index + "' type='button' class='btn btn-outline-success' onclick='editItem(" + index + ");'>Edit</button>" + "</td>";
                        text += "<td>" + "<button id='btnDel" + index + " type='button' class='btn btn-outline-danger'' onclick='deleteItem(" + index + ")'>Delete</button>" + "</td>";
                        text += "</tr>";
                        count++;
                    }
                }
            } else if (price == "case2") {
                for (index = 0; index < lsProductList.length; index++) {
                    if (
                        lsProductList[index].type == type &&
                        lsProductList[index].price > 5 &&
                        lsProductList[index].price < 10
                    ) {
                        text += "<tr>";
                        text += '<th scope="row">' + (count + 1) + "</th>";
                        text += '<td id="td' + index + '"><span id="span' + index + '">' + lsProductList[index].name + "</span></td>";
                        text += '<td id="td' + index + '"><span id="span' + index + '">' + lsProductList[index].manufacturer + "</span></td>";
                        text += '<td id="td' + index + '"><span id="span' + index + '">' + lsProductList[index].type + "</span></td>";
                        text += '<td id="td' + index + '"><span id="span' + index + '">' + lsProductList[index].price + "</span></td>";
                        text += '<td id="td' + index + '"><span id="span' + index + '">' + lsProductList[index].quantity + "</span></td>";
                        text += '<td id="td' + index + '"><span id="span' + index + '">' + lsProductList[index].code + "</span></td>";
                        text += '<td id="tdEdit' + index + '">' + "<button id='btnEdit" + index + "' type='button' class='btn btn-outline-success' onclick='editItem(" + index + ");'>Edit</button>" + "</td>";
                        text += "<td>" + "<button id='btnDel" + index + " type='button' class='btn btn-outline-danger'' onclick='deleteItem(" + index + ")'>Delete</button>" + "</td>";
                        text += "</tr>";
                        count++;
                    }
                }
            } else if (price == "case3") {
                for (index = 0; index < lsProductList.length; index++) {
                    if (
                        lsProductList[index].type == type &&
                        lsProductList[index].price > 10
                    ) {
                        text += "<tr>";
                        text += '<th scope="row">' + (count + 1) + "</th>";
                        text += '<td id="td' + index + '"><span id="span' + index + '">' + lsProductList[index].name + "</span></td>";
                        text += '<td id="td' + index + '"><span id="span' + index + '">' + lsProductList[index].manufacturer + "</span></td>";
                        text += '<td id="td' + index + '"><span id="span' + index + '">' + lsProductList[index].type + "</span></td>";
                        text += '<td id="td' + index + '"><span id="span' + index + '">' + lsProductList[index].price + "</span></td>";
                        text += '<td id="td' + index + '"><span id="span' + index + '">' + lsProductList[index].quantity + "</span></td>";
                        text += '<td id="td' + index + '"><span id="span' + index + '">' + lsProductList[index].code + "</span></td>";
                        text += '<td id="tdEdit' + index + '">' + "<button id='btnEdit" + index + "' type='button' class='btn btn-outline-success' onclick='editItem(" + index + ");'>Edit</button>" + "</td>";
                        text += "<td>" + "<button id='btnDel" + index + " type='button' class='btn btn-outline-danger'' onclick='deleteItem(" + index + ")'>Delete</button>" + "</td>";
                        text += "</tr>";
                        count++;
                    }
                }
            }
        } else {
            for (index = 0; index < lsProductList.length; index++) {
                if (lsProductList[index].type == type) {
                    text += "<tr>";
                    text += '<th scope="row">' + (count + 1) + "</th>";
                    text += '<td id="td' + index + '"><span id="span' + index + '">' + lsProductList[index].name + "</span></td>";
                    text += '<td id="td' + index + '"><span id="span' + index + '">' + lsProductList[index].manufacturer + "</span></td>";
                    text += '<td id="td' + index + '"><span id="span' + index + '">' + lsProductList[index].type + "</span></td>";
                    text += '<td id="td' + index + '"><span id="span' + index + '">' + lsProductList[index].price + "</span></td>";
                    text += '<td id="td' + index + '"><span id="span' + index + '">' + lsProductList[index].quantity + "</span></td>";
                    text += '<td id="td' + index + '"><span id="span' + index + '">' + lsProductList[index].code + "</span></td>";
                    text += '<td id="tdEdit' + index + '">' + "<button id='btnEdit" + index + "' type='button' class='btn btn-outline-success' onclick='editItem(" + index + ");'>Edit</button>" + "</td>";
                    text += "<td>" + "<button id='btnDel" + index + " type='button' class='btn btn-outline-danger'' onclick='deleteItem(" + index + ")'>Delete</button>" + "</td>";
                    text += "</tr>";
                    count++;
                }
            }
        }
    } else if (check_price) {
        if (price == "case1") {
            for (index = 0; index < lsProductList.length; index++) {
                if (lsProductList[index].price < 5) {
                    text += "<tr>";
                    text += '<th scope="row">' + (count + 1) + "</th>";
                    text += '<td id="td' + index + '"><span id="span' + index + '">' + lsProductList[index].name + "</span></td>";
                    text += '<td id="td' + index + '"><span id="span' + index + '">' + lsProductList[index].manufacturer + "</span></td>";
                    text += '<td id="td' + index + '"><span id="span' + index + '">' + lsProductList[index].type + "</span></td>";
                    text += '<td id="td' + index + '"><span id="span' + index + '">' + lsProductList[index].price + "</span></td>";
                    text += '<td id="td' + index + '"><span id="span' + index + '">' + lsProductList[index].quantity + "</span></td>";
                    text += '<td id="td' + index + '"><span id="span' + index + '">' + lsProductList[index].code + "</span></td>";
                    text += '<td id="tdEdit' + index + '">' + "<button id='btnEdit" + index + "' type='button' class='btn btn-outline-success' onclick='editItem(" + index + ");'>Edit</button>" + "</td>";
                    text += "<td>" + "<button id='btnDel" + index + " type='button' class='btn btn-outline-danger'' onclick='deleteItem(" + index + ")'>Delete</button>" + "</td>";
                    text += "</tr>";
                    count++;
                }
            }
        } else if (price == "case2") {
            for (index = 0; index < lsProductList.length; index++) {
                if (lsProductList[index].price > 5 && lsProductList[index].price < 10) {
                    text += "<tr>";
                    text += '<th scope="row">' + (count + 1) + "</th>";
                    text += '<td id="td' + index + '"><span id="span' + index + '">' + lsProductList[index].name + "</span></td>";
                    text += '<td id="td' + index + '"><span id="span' + index + '">' + lsProductList[index].manufacturer + "</span></td>";
                    text += '<td id="td' + index + '"><span id="span' + index + '">' + lsProductList[index].type + "</span></td>";
                    text += '<td id="td' + index + '"><span id="span' + index + '">' + lsProductList[index].price + "</span></td>";
                    text += '<td id="td' + index + '"><span id="span' + index + '">' + lsProductList[index].quantity + "</span></td>";
                    text += '<td id="td' + index + '"><span id="span' + index + '">' + lsProductList[index].code + "</span></td>";
                    text += '<td id="tdEdit' + index + '">' + "<button id='btnEdit" + index + "' type='button' class='btn btn-outline-success' onclick='editItem(" + index + ");'>Edit</button>" + "</td>";
                    text += "<td>" + "<button id='btnDel" + index + " type='button' class='btn btn-outline-danger'' onclick='deleteItem(" + index + ")'>Delete</button>" + "</td>";
                    text += "</tr>";
                    count++;
                }
            }
        } else if (price == "case3") {
            for (index = 0; index < lsProductList.length; index++) {
                if (lsProductList[index].price > 10) {
                    text += "<tr>";
                    text += '<th scope="row">' + (count + 1) + "</th>";
                    text += '<td id="td' + index + '"><span id="span' + index + '">' + lsProductList[index].name + "</span></td>";
                    text += '<td id="td' + index + '"><span id="span' + index + '">' + lsProductList[index].manufacturer + "</span></td>";
                    text += '<td id="td' + index + '"><span id="span' + index + '">' + lsProductList[index].type + "</span></td>";
                    text += '<td id="td' + index + '"><span id="span' + index + '">' + lsProductList[index].price + "</span></td>";
                    text += '<td id="td' + index + '"><span id="span' + index + '">' + lsProductList[index].quantity + "</span></td>";
                    text += '<td id="td' + index + '"><span id="span' + index + '">' + lsProductList[index].code + "</span></td>";
                    text += '<td id="tdEdit' + index + '">' + "<button id='btnEdit" + index + "' type='button' class='btn btn-outline-success' onclick='editItem(" + index + ");'>Edit</button>" + "</td>";
                    text += "<td>" + "<button id='btnDel" + index + " type='button' class='btn btn-outline-danger'' onclick='deleteItem(" + index + ")'>Delete</button>" + "</td>";
                    text += "</tr>";
                    count++;
                }
            }
        }
    } else {
        for (index = 0; index < lsProductList.length; index++) {
            text += "<tr>";
            text += '<th scope="row">' + (count + 1) + "</th>";
            text += '<td id="td' + index + '"><span id="span' + index + '">' + lsProductList[index].name + "</span></td>";
            text += '<td id="td' + index + '"><span id="span' + index + '">' + lsProductList[index].manufacturer + "</span></td>";
            text += '<td id="td' + index + '"><span id="span' + index + '">' + lsProductList[index].type + "</span></td>";
            text += '<td id="td' + index + '"><span id="span' + index + '">' + lsProductList[index].price + "</span></td>";
            text += '<td id="td' + index + '"><span id="span' + index + '">' + lsProductList[index].quantity + "</span></td>";
            text += '<td id="td' + index + '"><span id="span' + index + '">' + lsProductList[index].code + "</span></td>";
            text += '<td id="tdEdit' + index + '">' + "<button id='btnEdit" + index + "' type='button' class='btn btn-outline-success' onclick='editItem(" + index + ");'>Edit</button>" + "</td>";
            text += "<td>" + "<button id='btnDel" + index + " type='button' class='btn btn-outline-danger'' onclick='deleteItem(" + index + ")'>Delete</button>" + "</td>";
            text += "</tr>";
            count++;
        }
    }
    document.getElementById("tbody").innerHTML = text;
}
function Show_Manufacturer() {
    let lsProductList = JSON.parse(localStorage.getItem("product_list"));
    let text1 = "";
    let arr_manu = [];
    if (lsProductList != null) {
        for (i = 0; i < lsProductList.length; i++) {
            arr_manu.push(lsProductList[i].manufacturer);
        }

        arr_manu.sort();

        for (j = 0; j < arr_manu.length; j++) {
            arr_manu.splice(j, arr_manu.lastIndexOf(arr_manu[j]) - j);
        }

        for (k = 0; k < arr_manu.length; k++) {
            text1 +=
                '<option value="' + arr_manu[k] + '">' + arr_manu[k] + "</option>";
        }
    }
    document.getElementById("Find_Manufacturer").innerHTML = text1;
}
function Show_Type() {
    let lsProductList = JSON.parse(localStorage.getItem("product_list"));
    let text2 = "";
    let arr_type = [];
    if (lsProductList != null) {
        for (i = 0; i < lsProductList.length; i++) {
            arr_type.push(lsProductList[i].type);
        }

        arr_type.sort();

        for (j = 0; j < arr_type.length; j++) {
            arr_type.splice(j, arr_type.lastIndexOf(arr_type[j]) - j);
        }

        for (k = 0; k < arr_type.length; k++) {
            text2 += '<option value="' + arr_type[k] + '">' + arr_type[k] + "</option>";
        }
    }
    document.getElementById("Find_Type").innerHTML = text2;
}

Show_Manufacturer();
Show_Type();

function editItem(index) {

    document.getElementById("Update_product").style.display = 'block';

    let lsProductList = JSON.parse(localStorage.getItem("product_list"));

    document.getElementById("Product_Name").focus();

    document.getElementById("Product_Name").value = lsProductList[index].name;
    document.getElementById("Product_Manufacturer").value = lsProductList[index].manufacturer;
    document.getElementById("Product_Type").value = lsProductList[index].type;
    document.getElementById("Product_Price").value = lsProductList[index].price;
    document.getElementById("Product_Quantity").value = lsProductList[index].quantity;
    document.getElementById("Product_Code").value = lsProductList[index].code;

    document.getElementById("btn_update").value = index;

}

function updateItem(id) {
    let lsProductList = JSON.parse(localStorage.getItem("product_list"));
    lsProductList[id].name = document.getElementById("Product_Name").value;
    lsProductList[id].manufacturer = document.getElementById("Product_Manufacturer").value;
    lsProductList[id].type = document.getElementById("Product_Type").value;
    lsProductList[id].price = document.getElementById("Product_Price").value;
    lsProductList[id].quantity = document.getElementById("Product_Quantity").value;

    localStorage.setItem("product_list", JSON.stringify(lsProductList));
    findItems();
    cancelItem();
    document.getElementById("Update_product").style.display = 'none';
}

function resetItem() {
    document.getElementById("Product_Name").value = "";
    document.getElementById("Product_Manufacturer").value = "";
    document.getElementById("Product_Type").value = "";
    document.getElementById("Product_Price").value = "";
    document.getElementById("Product_Quantity").value = "";
}

function cancelItem() {
    document.getElementById("Update_product").style.display = 'none';
    findItems();
}

function deleteItem(index) {
    let lsProductList = JSON.parse(localStorage.getItem("product_list"));
    var conf = confirm('Are you sure you want to delete: "' + lsProductList[index].name + '" with code: ' + lsProductList[index].code + " product?");
    if (conf) {
        lsProductList.splice(index, 1);
        localStorage.setItem("product_list", JSON.stringify(lsProductList));
        findItems();
    }
}