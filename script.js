class Warehouse {
    constructor(id, name, price, quantity, delivery, nhap) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.delivery = delivery;
        this.nhap = nhap;
    }
}
let warehouse = [
    new Warehouse(1, "bánh tráng vàng", 90000, 4000, 0, 0),
    new Warehouse(2, "bánh tráng trứng", 95000, 3000, 0, 0),
    new Warehouse(3, "bánh tráng gỏi", 180000, 2000, 0, 0),
    new Warehouse(4, "bánh tráng ram", 100000, 5000, 0, 0)
]
let a = 0;
let b = 0;
let c = 0;

for (i = 0; i < warehouse.length; i++) {

    a += warehouse[i].quantity
    b += warehouse[i].delivery
    c += warehouse[i].nhap
}


function displayProducts(warehouse) {
    const productListElement = document.getElementById('listproduct');

    // Xóa danh sách cũ
    productListElement.innerHTML = '';
    productListElement.innerHTML = '<tr>';

    for (let i = 0; i < warehouse.length; i++) {
        const product = warehouse[i];

        productListElement.innerHTML += `
            <td class="text-center" >${i + 1}</td>
            <td class="text-left">${product.name}</td>
            <td class="text-right">${product.price} đồng</td>
            <td class="text-right">${product.quantity} cái</td>
            <td>
                <button type="button" class="btn-edit" onclick="takeDelivery(${i})"><i class="fa-solid fa-pen-to-square"></i>xuất hàng</button>
                <button type="button" class="btn-delete" onclick="takeNhap(${i})"><i class="fa-solid fa-trash"></i>nhập hàng</button>
            </td>  
            <td class="text-right"> xuất:${product.delivery}</td>
            <td class="text-right"> nhập:${product.nhap}</td>
        `;
    }



    productListElement.innerHTML += '</tr>';

    productListElement.innerHTML += `
        <tr>
            <td class="text-left" colspan="3">Tổng</td>
            <td class="text-right" colspan="2">tổng số lượng${a}</td> 
            <td class="text-right">tổng xuât =${b}</td>
            <td class="text-right">tổng nhập =${c}</td>
        </tr>
    `;
}

displayProducts(warehouse);

function takeDelivery(index) {
    let productDelivery = parseInt(prompt("bạn muốn xuất bao nhiêu:"))
    if (productDelivery > (warehouse[index].quantity)) {
        alert('kho hàng bạn không đủ số lượng')
    } else {
        warehouse[index].quantity = warehouse[index].quantity - productDelivery
        warehouse[index].delivery = warehouse[index].delivery + productDelivery
        b += productDelivery
        a -= productDelivery
    }

    displayProducts(warehouse)


}
function takeNhap(index) {
    let productNhap = parseInt(prompt('bạn muốn nhập bao nhiêu:'))
    if ((productNhap + warehouse[index].quantity) <= 10000) {
        warehouse[index].quantity += productNhap
        warehouse[index].nhap += productNhap
        a += productNhap
        c += productNhap

    } else {
        alert('số lượng bạn nhập quá nhiều:')

    }

    displayProducts(warehouse)

}
function searchProduct(){
    let searchKeyword = document.getElementById('timkiem').value;

    let filterList = [];

    for(i = 0; i < warehouse.length;i++ ){
        const productName = warehouse[i].name;
        if(productName.includes(searchKeyword)){
            filterList.push(warehouse[i]);
        }
    }
    displayProducts(filterList)
}

// for (i = 0; i < warehouse.length; i++) {

//     a += warehouse[i].quantity
//     b += warehouse[i].delivery
//     c += warehouse[i].nhap
// }

// function tongnhap() {
    // a += warehouse[index].quantity
    // b += warehouse[index].delivery
    // c += warehouse[index].nhap
    // warehouse2.quantity = a;
    // warehouse2.delivery = b;
    // warehouse2.nhap = c;
    // displayProducts()}



