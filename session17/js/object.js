// truy xuất 1 thuộc tính
let obj = {
    id: "SP001",
    productName:"Quần kaki nam",
    price : 150,
    description : "quần nam cao cấp chuẩn châu Âu",
    status  : true,
    discount:10,
    calPrice: function(){
        return this.price*(1-this.discount/100);
    }
}

console.log(obj["price"]);
console.log(obj.calPrice());