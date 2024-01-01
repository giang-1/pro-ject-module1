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
    new Warehouse(1, "bánh tráng vàng", 900, 4000, 0, 0),
    new Warehouse(2, "bánh tráng trứng", 950, 3000, 0, 0),
    new Warehouse(3, "bánh tráng gỏi", 1800, 2000, 0, 0),
    new Warehouse(4, "bánh tráng ram", 1000, 5000, 0, 0)
]
let a = 0;
let b = 0;
let c = 0;
let time = new Date()
let year = time.getFullYear()
let month = time.getMonth() + 1
let day = time.getDay()
let gio = time.getHours()
let phut = time.getMinutes()


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
            <td class="text-right"> ${product.price} đồng<button <i class="fa-solid fa-pen-to-square" onclick = "editProduct(${i})"></i>></button></td>
            <td class="text-right">${product.quantity} cái</td>
            <td>
                <button type="button" class="btn-edit" onclick="takeDelivery(${i})"><i <i class="fa-solid fa-truck"></i></i>xuất hàng</button>
                <button type="button" class="btn-delete" onclick="takeNhap(${i})"><i <i class="fa-solid fa-warehouse"></i  ></i>nhập hàng</button>
            </td>  
            <td class="text-right"> xuất:${product.delivery}</td>
            <td class="text-right"> nhập:${product.nhap}</td>
        `;
    }



    productListElement.innerHTML += '</tr>';

    productListElement.innerHTML += `
        <tr>
            <td class="text-left" colspan="3">Tổng</td>
            <td class="text-left" colspan="2">tổng số lượng${a}</td> 
            <td class="text-left">tổng =${b}</td>
            <td class="text-left">tổng =${c}</td>
        </tr>
    `
    productListElement.innerHTML += `<tr><button  style = "background-color: #0d6efd" onclick = "addProduct()" <i class="fa-solid fa-circle-plus"></i>add</button></tr>`;
}

displayProducts(warehouse);
class History{
    constructor(date,ten,thuoctinh,soluong){
        this.date = date;
        this.ten = ten;
        this.thuoctinh = thuoctinh;
        this.soluong = soluong;
    }
}
//in khối lịch sủ
let history = []
function displayHistory(){
    let showHistory = document.getElementById('history');
    showHistory.innerHTML = '';
    showHistory.innerHTML = '<tr>';
    for (let i = 0; i < history.length; i++) {
        const productHistory = history[i];
        showHistory.innerHTML += `
        <td class="text-center" >${productHistory.date}</td>
        <td class="text-left">${productHistory.ten}</td>
        <td class="text-right">${productHistory.thuoctinh}</td>
        <td class="text-right">${productHistory.soluong} cái</td>`

    }
    productListElement.innerHTML += '</tr>'
    
}
displayHistory()
//hàm xuất
function takeDelivery(index) {
    let productDelivery = parseInt(prompt("bạn muốn xuất bao nhiêu:"))
    if(productDelivery){
            if (productDelivery > (warehouse[index].quantity)) {
                alert('kho hàng bạn không đủ số lượng')
            } else {
                warehouse[index].quantity = warehouse[index].quantity - productDelivery
                warehouse[index].delivery = warehouse[index].delivery + productDelivery
                b += productDelivery
                a -= productDelivery
                let date = `${gio}giờ${phut}phút(${day}/${month}/${year})`
                let ten = warehouse[index].name
                let thuoctinh = "xuất"
                let soluong = productDelivery
                let history1 = new History(date,ten,thuoctinh,soluong);
                history.push(history1)
            }

    }

    displayProducts(warehouse)
    displayHistory()


}
//hàm nhập
function takeNhap(index) {
    let productNhap = parseInt(prompt('bạn muốn nhập bao nhiêu:'))
    if(productNhap){
        if ( productNhap >= 0 && (productNhap + warehouse[index].quantity) <= 10000) {
            warehouse[index].quantity += productNhap
            warehouse[index].nhap += productNhap
            a += productNhap
            c += productNhap
            let date =`${gio}giờ${phut}phút(${day}/${month}/${year})`
            let ten = warehouse[index].name
            let thuoctinh = "nhập"
            let soluong = productNhap
            let history1 = new History(date,ten,thuoctinh,soluong);
            history.push(history1)
    
        } else if((productNhap + warehouse[index].quantity) >= 10000) {
            alert('số lượng tối đa 1 mặt hàng là 10000!')
    
        }
    }else{
        alert('bạn nhập không đúng!')
    }
    displayProducts(warehouse)
    displayHistory()
}
//hàm search
function searchProduct(){
    let searchKeyword = document.getElementById('timkiem').value;
    searchKeyword = searchKeyword.toLowerCase();

    let filterList = [];

    for(i = 0; i < warehouse.length;i++ ){
        const productName = warehouse[i].name.toLowerCase();
        if(productName.includes(searchKeyword)){
            filterList.push(warehouse[i]);
        }
    }
    displayProducts(filterList)
}

//edit
function editProduct(index){
    let changePrice = parseInt(prompt("nhập số tiền bạn muốn đổi"));
    if(changePrice){
    warehouse[index].price = changePrice;
    displayProducts(warehouse)
    }else{
        alert('bạn nhập không đúng !')
    }
}
function addProduct(){
    let addwarehouse = new Warehouse
    addwarehouse.id = warehouse.length + 1
    addwarehouse.name = prompt("nhập tên")
    addwarehouse.price = parseInt(prompt("nhập giá"))
    addwarehouse.quantity = parseInt(prompt("nhập số lượng"))
    addwarehouse.delivery = 0;
    addwarehouse.nhap = 0;
    if(addwarehouse.name && addwarehouse.quantity){
        a += addwarehouse.quantity
        warehouse.push(addwarehouse)
        displayProducts(warehouse)
    }else{
        alert('điền cho đủ')
        displayProducts(warehouse)
    }

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
