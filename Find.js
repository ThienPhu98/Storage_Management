let lsProductList = [];

function findItems() {
    document.getElementById("tbody").innerHTML = '';
    let lsProductList = JSON.parse(localStorage.getItem("product_list"));
    let text = '';
    let check_manufacturer = document.getElementById('Check_Manufacturer').checked;
    let check_type = document.getElementById('Check_Type').checked;
    let check_price = document.getElementById('Check_Price').checked;
    let count = 0;

    let manufacturer = document.getElementById('Find_Manufacturer').value;
    let type = document.getElementById('Find_Type').value;
    let price = document.getElementById('Find_Price').value;


    if (check_manufacturer) {
        console.log('1');
        if (check_type) {
            if (check_price) {
                if (price == 'case1') {
                    for (index = 0; index < lsProductList.length; index++) {
                        if (lsProductList[index].manufacturer == manufacturer && lsProductList[index].type == type && lsProductList[index].price < 5) {
                            text += '<tr>';
                            text += '<th scope="row">' + (count + 1) + '</th>';
                            text += '<td id="td' + (index) + '"><span id="span' + (index) + '">' + lsProductList[index].name + '</span></td>';
                            text += '<td id="td' + (index) + '"><span id="span' + (index) + '">' + lsProductList[index].manufacturer + '</span></td>';
                            text += '<td id="td' + (index) + '"><span id="span' + (index) + '">' + lsProductList[index].type + '</span></td>';
                            text += '<td id="td' + (index) + '"><span id="span' + (index) + '">' + lsProductList[index].price + '</span></td>';
                            text += '<td id="td' + (index) + '"><span id="span' + (index) + '">' + lsProductList[index].quantity + '</span></td>';
                            text += '<td id="td' + (index) + '"><span id="span' + (index) + '">' + lsProductList[index].code + '</span></td>';
                            text += '<td id="tdEdit' + (index) + '">' + "<button id='btnEdit" + index + "' type='button' class='btn btn-outline-success' onclick='editItem(" + index + ");'>Edit</button>" + '</td>';
                            text += '<td>' + "<button id='btnDel" + index + " type='button' class='btn btn-outline-danger'' onclick='deleteItem(" + index + ")'>Delete</button>" + '</td>';
                            text += '</tr>';
                        }
                    }
                } else if (price == 'case2') {
                    for (index = 0; index < lsProductList.length; index++) {
                        if (lsProductList[index].manufacturer == manufacturer && lsProductList[index].type == type && lsProductList[index].price > 5 && lsProductList[index].price < 10) {
                            text += '<tr>';
                            text += '<th scope="row">' + (count + 1) + '</th>';
                            text += '<td id="td' + (index) + '"><span id="span' + (index) + '">' + lsProductList[index].name + '</span></td>';
                            text += '<td id="td' + (index) + '"><span id="span' + (index) + '">' + lsProductList[index].manufacturer + '</span></td>';
                            text += '<td id="td' + (index) + '"><span id="span' + (index) + '">' + lsProductList[index].type + '</span></td>';
                            text += '<td id="td' + (index) + '"><span id="span' + (index) + '">' + lsProductList[index].price + '</span></td>';
                            text += '<td id="td' + (index) + '"><span id="span' + (index) + '">' + lsProductList[index].quantity + '</span></td>';
                            text += '<td id="td' + (index) + '"><span id="span' + (index) + '">' + lsProductList[index].code + '</span></td>';
                            text += '<td id="tdEdit' + (index) + '">' + "<button id='btnEdit" + index + "' type='button' class='btn btn-outline-success' onclick='editItem(" + index + ");'>Edit</button>" + '</td>';
                            text += '<td>' + "<button id='btnDel" + index + " type='button' class='btn btn-outline-danger'' onclick='deleteItem(" + index + ")'>Delete</button>" + '</td>';
                            text += '</tr>';
                        }
                    }
                } else if (price == 'case3') {
                    for (index = 0; index < lsProductList.length; index++) {
                        if (lsProductList[index].manufacturer == manufacturer && lsProductList[index].type == type && lsProductList[index].price > 10) {
                            text += '<tr>';
                            text += '<th scope="row">' + (count + 1) + '</th>';
                            text += '<td id="td' + (index) + '"><span id="span' + (index) + '">' + lsProductList[index].name + '</span></td>';
                            text += '<td id="td' + (index) + '"><span id="span' + (index) + '">' + lsProductList[index].manufacturer + '</span></td>';
                            text += '<td id="td' + (index) + '"><span id="span' + (index) + '">' + lsProductList[index].type + '</span></td>';
                            text += '<td id="td' + (index) + '"><span id="span' + (index) + '">' + lsProductList[index].price + '</span></td>';
                            text += '<td id="td' + (index) + '"><span id="span' + (index) + '">' + lsProductList[index].quantity + '</span></td>';
                            text += '<td id="td' + (index) + '"><span id="span' + (index) + '">' + lsProductList[index].code + '</span></td>';
                            text += '<td id="tdEdit' + (index) + '">' + "<button id='btnEdit" + index + "' type='button' class='btn btn-outline-success' onclick='editItem(" + index + ");'>Edit</button>" + '</td>';
                            text += '<td>' + "<button id='btnDel" + index + " type='button' class='btn btn-outline-danger'' onclick='deleteItem(" + index + ")'>Delete</button>" + '</td>';
                            text += '</tr>';
                        }
                    }
                }
            } else {
                for (index = 0; index < lsProductList.length; index++) {
                    if (lsProductList[index].manufacturer == manufacturer && lsProductList[index].type == type) {
                        text += '<tr>';
                        text += '<th scope="row">' + (count + 1) + '</th>';
                        text += '<td id="td' + (index) + '"><span id="span' + (index) + '">' + lsProductList[index].name + '</span></td>';
                        text += '<td id="td' + (index) + '"><span id="span' + (index) + '">' + lsProductList[index].manufacturer + '</span></td>';
                        text += '<td id="td' + (index) + '"><span id="span' + (index) + '">' + lsProductList[index].type + '</span></td>';
                        text += '<td id="td' + (index) + '"><span id="span' + (index) + '">' + lsProductList[index].price + '</span></td>';
                        text += '<td id="td' + (index) + '"><span id="span' + (index) + '">' + lsProductList[index].quantity + '</span></td>';
                        text += '<td id="td' + (index) + '"><span id="span' + (index) + '">' + lsProductList[index].code + '</span></td>';
                        text += '<td id="tdEdit' + (index) + '">' + "<button id='btnEdit" + index + "' type='button' class='btn btn-outline-success' onclick='editItem(" + index + ");'>Edit</button>" + '</td>';
                        text += '<td>' + "<button id='btnDel" + index + " type='button' class='btn btn-outline-danger'' onclick='deleteItem(" + index + ")'>Delete</button>" + '</td>';
                        text += '</tr>';
                    }
                }
            }
        } else if (check_price) {
            if (price == 'case1') {
                for (index = 0; index < lsProductList.length; index++) {
                    if (lsProductList[index].manufacturer == manufacturer && lsProductList[index].price < 5) {
                        text += '<tr>';
                        text += '<th scope="row">' + (count + 1) + '</th>';
                        text += '<td id="td' + (index) + '"><span id="span' + (index) + '">' + lsProductList[index].name + '</span></td>';
                        text += '<td id="td' + (index) + '"><span id="span' + (index) + '">' + lsProductList[index].manufacturer + '</span></td>';
                        text += '<td id="td' + (index) + '"><span id="span' + (index) + '">' + lsProductList[index].type + '</span></td>';
                        text += '<td id="td' + (index) + '"><span id="span' + (index) + '">' + lsProductList[index].price + '</span></td>';
                        text += '<td id="td' + (index) + '"><span id="span' + (index) + '">' + lsProductList[index].quantity + '</span></td>';
                        text += '<td id="td' + (index) + '"><span id="span' + (index) + '">' + lsProductList[index].code + '</span></td>';
                        text += '<td id="tdEdit' + (index) + '">' + "<button id='btnEdit" + index + "' type='button' class='btn btn-outline-success' onclick='editItem(" + index + ");'>Edit</button>" + '</td>';
                        text += '<td>' + "<button id='btnDel" + index + " type='button' class='btn btn-outline-danger'' onclick='deleteItem(" + index + ")'>Delete</button>" + '</td>';
                        text += '</tr>';
                    }
                }
            } else if (price == 'case2') {
                for (index = 0; index < lsProductList.length; index++) {
                    if (lsProductList[index].manufacturer == manufacturer && lsProductList[index].price > 5 && lsProductList[index].price < 10) {
                        text += '<tr>';
                        text += '<th scope="row">' + (count + 1) + '</th>';
                        text += '<td id="td' + (index) + '"><span id="span' + (index) + '">' + lsProductList[index].name + '</span></td>';
                        text += '<td id="td' + (index) + '"><span id="span' + (index) + '">' + lsProductList[index].manufacturer + '</span></td>';
                        text += '<td id="td' + (index) + '"><span id="span' + (index) + '">' + lsProductList[index].type + '</span></td>';
                        text += '<td id="td' + (index) + '"><span id="span' + (index) + '">' + lsProductList[index].price + '</span></td>';
                        text += '<td id="td' + (index) + '"><span id="span' + (index) + '">' + lsProductList[index].quantity + '</span></td>';
                        text += '<td id="td' + (index) + '"><span id="span' + (index) + '">' + lsProductList[index].code + '</span></td>';
                        text += '<td id="tdEdit' + (index) + '">' + "<button id='btnEdit" + index + "' type='button' class='btn btn-outline-success' onclick='editItem(" + index + ");'>Edit</button>" + '</td>';
                        text += '<td>' + "<button id='btnDel" + index + " type='button' class='btn btn-outline-danger'' onclick='deleteItem(" + index + ")'>Delete</button>" + '</td>';
                        text += '</tr>';
                    }
                }
            } else if (price == 'case3') {
                for (index = 0; index < lsProductList.length; index++) {
                    if (lsProductList[index].manufacturer == manufacturer && lsProductList[index].price > 10) {
                        text += '<tr>';
                        text += '<th scope="row">' + (count + 1) + '</th>';
                        text += '<td id="td' + (index) + '"><span id="span' + (index) + '">' + lsProductList[index].name + '</span></td>';
                        text += '<td id="td' + (index) + '"><span id="span' + (index) + '">' + lsProductList[index].manufacturer + '</span></td>';
                        text += '<td id="td' + (index) + '"><span id="span' + (index) + '">' + lsProductList[index].type + '</span></td>';
                        text += '<td id="td' + (index) + '"><span id="span' + (index) + '">' + lsProductList[index].price + '</span></td>';
                        text += '<td id="td' + (index) + '"><span id="span' + (index) + '">' + lsProductList[index].quantity + '</span></td>';
                        text += '<td id="td' + (index) + '"><span id="span' + (index) + '">' + lsProductList[index].code + '</span></td>';
                        text += '<td id="tdEdit' + (index) + '">' + "<button id='btnEdit" + index + "' type='button' class='btn btn-outline-success' onclick='editItem(" + index + ");'>Edit</button>" + '</td>';
                        text += '<td>' + "<button id='btnDel" + index + " type='button' class='btn btn-outline-danger'' onclick='deleteItem(" + index + ")'>Delete</button>" + '</td>';
                        text += '</tr>';
                    }
                }
            }
        } else {
            for (index = 0; index < lsProductList.length; index++) {
                if (lsProductList[index].manufacturer == manufacturer) {
                    text += '<tr>';
                    text += '<th scope="row">' + (count + 1) + '</th>';
                    text += '<td id="td' + (index) + '"><span id="span' + (index) + '">' + lsProductList[index].name + '</span></td>';
                    text += '<td id="td' + (index) + '"><span id="span' + (index) + '">' + lsProductList[index].manufacturer + '</span></td>';
                    text += '<td id="td' + (index) + '"><span id="span' + (index) + '">' + lsProductList[index].type + '</span></td>';
                    text += '<td id="td' + (index) + '"><span id="span' + (index) + '">' + lsProductList[index].price + '</span></td>';
                    text += '<td id="td' + (index) + '"><span id="span' + (index) + '">' + lsProductList[index].quantity + '</span></td>';
                    text += '<td id="td' + (index) + '"><span id="span' + (index) + '">' + lsProductList[index].code + '</span></td>';
                    text += '<td id="tdEdit' + (index) + '">' + "<button id='btnEdit" + index + "' type='button' class='btn btn-outline-success' onclick='editItem(" + index + ");'>Edit</button>" + '</td>';
                    text += '<td>' + "<button id='btnDel" + index + " type='button' class='btn btn-outline-danger'' onclick='deleteItem(" + index + ")'>Delete</button>" + '</td>';
                    text += '</tr>';
                }
            }
        }
    } else if (check_type) {
        if (check_price) {
            if (price == 'case1') {
                for (index = 0; index < lsProductList.length; index++) {
                    if (lsProductList[index].type == type && lsProductList[index].price < 5) {
                        text += '<tr>';
                        text += '<th scope="row">' + (count + 1) + '</th>';
                        text += '<td id="td' + (index) + '"><span id="span' + (index) + '">' + lsProductList[index].name + '</span></td>';
                        text += '<td id="td' + (index) + '"><span id="span' + (index) + '">' + lsProductList[index].manufacturer + '</span></td>';
                        text += '<td id="td' + (index) + '"><span id="span' + (index) + '">' + lsProductList[index].type + '</span></td>';
                        text += '<td id="td' + (index) + '"><span id="span' + (index) + '">' + lsProductList[index].price + '</span></td>';
                        text += '<td id="td' + (index) + '"><span id="span' + (index) + '">' + lsProductList[index].quantity + '</span></td>';
                        text += '<td id="td' + (index) + '"><span id="span' + (index) + '">' + lsProductList[index].code + '</span></td>';
                        text += '<td id="tdEdit' + (index) + '">' + "<button id='btnEdit" + index + "' type='button' class='btn btn-outline-success' onclick='editItem(" + index + ");'>Edit</button>" + '</td>';
                        text += '<td>' + "<button id='btnDel" + index + " type='button' class='btn btn-outline-danger'' onclick='deleteItem(" + index + ")'>Delete</button>" + '</td>';
                        text += '</tr>';
                    }
                }
            } else if (price == 'case2') {
                for (index = 0; index < lsProductList.length; index++) {
                    if (lsProductList[index].type == type && lsProductList[index].price > 5 && lsProductList[index].price < 10) {
                        text += '<tr>';
                        text += '<th scope="row">' + (count + 1) + '</th>';
                        text += '<td id="td' + (index) + '"><span id="span' + (index) + '">' + lsProductList[index].name + '</span></td>';
                        text += '<td id="td' + (index) + '"><span id="span' + (index) + '">' + lsProductList[index].manufacturer + '</span></td>';
                        text += '<td id="td' + (index) + '"><span id="span' + (index) + '">' + lsProductList[index].type + '</span></td>';
                        text += '<td id="td' + (index) + '"><span id="span' + (index) + '">' + lsProductList[index].price + '</span></td>';
                        text += '<td id="td' + (index) + '"><span id="span' + (index) + '">' + lsProductList[index].quantity + '</span></td>';
                        text += '<td id="td' + (index) + '"><span id="span' + (index) + '">' + lsProductList[index].code + '</span></td>';
                        text += '<td id="tdEdit' + (index) + '">' + "<button id='btnEdit" + index + "' type='button' class='btn btn-outline-success' onclick='editItem(" + index + ");'>Edit</button>" + '</td>';
                        text += '<td>' + "<button id='btnDel" + index + " type='button' class='btn btn-outline-danger'' onclick='deleteItem(" + index + ")'>Delete</button>" + '</td>';
                        text += '</tr>';
                    }
                }
            } else if (price == 'case3') {
                for (index = 0; index < lsProductList.length; index++) {
                    if (lsProductList[index].type == type && lsProductList[index].price > 10) {
                        text += '<tr>';
                        text += '<th scope="row">' + (count + 1) + '</th>';
                        text += '<td id="td' + (index) + '"><span id="span' + (index) + '">' + lsProductList[index].name + '</span></td>';
                        text += '<td id="td' + (index) + '"><span id="span' + (index) + '">' + lsProductList[index].manufacturer + '</span></td>';
                        text += '<td id="td' + (index) + '"><span id="span' + (index) + '">' + lsProductList[index].type + '</span></td>';
                        text += '<td id="td' + (index) + '"><span id="span' + (index) + '">' + lsProductList[index].price + '</span></td>';
                        text += '<td id="td' + (index) + '"><span id="span' + (index) + '">' + lsProductList[index].quantity + '</span></td>';
                        text += '<td id="td' + (index) + '"><span id="span' + (index) + '">' + lsProductList[index].code + '</span></td>';
                        text += '<td id="tdEdit' + (index) + '">' + "<button id='btnEdit" + index + "' type='button' class='btn btn-outline-success' onclick='editItem(" + index + ");'>Edit</button>" + '</td>';
                        text += '<td>' + "<button id='btnDel" + index + " type='button' class='btn btn-outline-danger'' onclick='deleteItem(" + index + ")'>Delete</button>" + '</td>';
                        text += '</tr>';
                    }
                }
            }
        } else {
            for (index = 0; index < lsProductList.length; index++) {
                if (lsProductList[index].type == type) {
                    text += '<tr>';
                    text += '<th scope="row">' + (count + 1) + '</th>';
                    text += '<td id="td' + (index) + '"><span id="span' + (index) + '">' + lsProductList[index].name + '</span></td>';
                    text += '<td id="td' + (index) + '"><span id="span' + (index) + '">' + lsProductList[index].manufacturer + '</span></td>';
                    text += '<td id="td' + (index) + '"><span id="span' + (index) + '">' + lsProductList[index].type + '</span></td>';
                    text += '<td id="td' + (index) + '"><span id="span' + (index) + '">' + lsProductList[index].price + '</span></td>';
                    text += '<td id="td' + (index) + '"><span id="span' + (index) + '">' + lsProductList[index].quantity + '</span></td>';
                    text += '<td id="td' + (index) + '"><span id="span' + (index) + '">' + lsProductList[index].code + '</span></td>';
                    text += '<td id="tdEdit' + (index) + '">' + "<button id='btnEdit" + index + "' type='button' class='btn btn-outline-success' onclick='editItem(" + index + ");'>Edit</button>" + '</td>';
                    text += '<td>' + "<button id='btnDel" + index + " type='button' class='btn btn-outline-danger'' onclick='deleteItem(" + index + ")'>Delete</button>" + '</td>';
                    text += '</tr>';
                }
            }
        }
    } else if (check_price) {
        if (price == 'case1') {
            for (index = 0; index < lsProductList.length; index++) {
                if (lsProductList[index].price < 5) {
                    text += '<tr>';
                    text += '<th scope="row">' + (count + 1) + '</th>';
                    text += '<td id="td' + (index) + '"><span id="span' + (index) + '">' + lsProductList[index].name + '</span></td>';
                    text += '<td id="td' + (index) + '"><span id="span' + (index) + '">' + lsProductList[index].manufacturer + '</span></td>';
                    text += '<td id="td' + (index) + '"><span id="span' + (index) + '">' + lsProductList[index].type + '</span></td>';
                    text += '<td id="td' + (index) + '"><span id="span' + (index) + '">' + lsProductList[index].price + '</span></td>';
                    text += '<td id="td' + (index) + '"><span id="span' + (index) + '">' + lsProductList[index].quantity + '</span></td>';
                    text += '<td id="td' + (index) + '"><span id="span' + (index) + '">' + lsProductList[index].code + '</span></td>';
                    text += '<td id="tdEdit' + (index) + '">' + "<button id='btnEdit" + index + "' type='button' class='btn btn-outline-success' onclick='editItem(" + index + ");'>Edit</button>" + '</td>';
                    text += '<td>' + "<button id='btnDel" + index + " type='button' class='btn btn-outline-danger'' onclick='deleteItem(" + index + ")'>Delete</button>" + '</td>';
                    text += '</tr>';
                }
            }
        } else if (price == 'case2') {
            for (index = 0; index < lsProductList.length; index++) {
                if (lsProductList[index].price > 5 && lsProductList[index].price < 10) {
                    text += '<tr>';
                    text += '<th scope="row">' + (count + 1) + '</th>';
                    text += '<td id="td' + (index) + '"><span id="span' + (index) + '">' + lsProductList[index].name + '</span></td>';
                    text += '<td id="td' + (index) + '"><span id="span' + (index) + '">' + lsProductList[index].manufacturer + '</span></td>';
                    text += '<td id="td' + (index) + '"><span id="span' + (index) + '">' + lsProductList[index].type + '</span></td>';
                    text += '<td id="td' + (index) + '"><span id="span' + (index) + '">' + lsProductList[index].price + '</span></td>';
                    text += '<td id="td' + (index) + '"><span id="span' + (index) + '">' + lsProductList[index].quantity + '</span></td>';
                    text += '<td id="td' + (index) + '"><span id="span' + (index) + '">' + lsProductList[index].code + '</span></td>';
                    text += '<td id="tdEdit' + (index) + '">' + "<button id='btnEdit" + index + "' type='button' class='btn btn-outline-success' onclick='editItem(" + index + ");'>Edit</button>" + '</td>';
                    text += '<td>' + "<button id='btnDel" + index + " type='button' class='btn btn-outline-danger'' onclick='deleteItem(" + index + ")'>Delete</button>" + '</td>';
                    text += '</tr>';
                }
            }
        } else if (price == 'case3') {
            for (index = 0; index < lsProductList.length; index++) {
                if (lsProductList[index].price > 10) {
                    text += '<tr>';
                    text += '<th scope="row">' + (count + 1) + '</th>';
                    text += '<td id="td' + (index) + '"><span id="span' + (index) + '">' + lsProductList[index].name + '</span></td>';
                    text += '<td id="td' + (index) + '"><span id="span' + (index) + '">' + lsProductList[index].manufacturer + '</span></td>';
                    text += '<td id="td' + (index) + '"><span id="span' + (index) + '">' + lsProductList[index].type + '</span></td>';
                    text += '<td id="td' + (index) + '"><span id="span' + (index) + '">' + lsProductList[index].price + '</span></td>';
                    text += '<td id="td' + (index) + '"><span id="span' + (index) + '">' + lsProductList[index].quantity + '</span></td>';
                    text += '<td id="td' + (index) + '"><span id="span' + (index) + '">' + lsProductList[index].code + '</span></td>';
                    text += '<td id="tdEdit' + (index) + '">' + "<button id='btnEdit" + index + "' type='button' class='btn btn-outline-success' onclick='editItem(" + index + ");'>Edit</button>" + '</td>';
                    text += '<td>' + "<button id='btnDel" + index + " type='button' class='btn btn-outline-danger'' onclick='deleteItem(" + index + ")'>Delete</button>" + '</td>';
                    text += '</tr>';
                }
            }
        }
    } else {
        text += '<tr>';
        text += '<th scope="row"></th>';
        text += '<th scope="row">Nothing To Show</th>';
        text += '</tr>';
    }
    document.getElementById('tbody').innerHTML = text;
}



function Show_Manufacturer() {
    let lsProductList = JSON.parse(localStorage.getItem("product_list"));
    let text1 = '';
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
            text1 += '<option value="' + arr_manu[k] + '">' + arr_manu[k] + '</option>'
        }
    }
    document.getElementById('Find_Manufacturer').innerHTML = text1;
}


function Show_Type() {
    let lsProductList = JSON.parse(localStorage.getItem("product_list"));
    let text2 = '';
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
            text2 += '<option value="' + arr_type[k] + '">' + arr_type[k] + '</option>'
        }
    }
    document.getElementById('Find_Type').innerHTML = text2;
}

Show_Manufacturer();
Show_Type();