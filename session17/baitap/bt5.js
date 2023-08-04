// Cho người dùng nhập vào 5 chữ cái C/R/U/D/E

// C – Cho người dùng nhập vào tên sản phẩm muốn mua. Nếu có thêm chúng vào carts khi đó
// count trong stores của sản phẩn đó giảm đi 1

// R – In ra toàn bộ các sản phẩm trong stores và carts

// U – Hỏi người dùng vị trí update trong carts. Nếu tồn tại cho người dùng nhập vào số
// lượng muốn thay đổi và khi đó count trong stores cũng cập nhật theo. Update xong in lại stores và carts

// D – Hỏi người dùng vị trị của sản phẩm muốn xóa trong carts. Tiến hành xóa và in ra lại

// E – Biến chương trình thành vòng lặp vĩnh cứu và khi người dùng nhập vào E thì sẽ thoát
// khỏi chương trình và thông báo “Cảm ơn bạn đã đến với Rikkei Stores”

let stores = [
  { id: 1, name: "Milk", count: 100 },
  { id: 2, name: "Yakult", count: 100 },
  { id: 3, name: "Butter", count: 100 },
];

// ví dụ findIndex

let indexProduct = stores.findIndex((value) => value.name === "Yakult");
console.log(indexProduct);
let carts = [];
let cartItem = { id: 1, name: "Milk", quantity: 10 };
// {
//     id:1,
//     product: {id: 1, name: "Milk", count: 100 },
//     quantity: 10
// }

// hàm thêm mới sp vào giỏ hàm
function addToCart() {
  let productName = prompt("nhập tên sp muốn mua");
  let index = stores.findIndex((value) => value.name == productName);
  if (index < 0) {
    console.warn("sp không có trong cửa hàng");
    return;
  }
  // kiểm tra xem số lượng đã hết chưa
  if (stores[index].count <= 0) {
    console.warn("sp đã bán hết , vui lòng quay lại sau");
    return;
  }

  // kiểm tra sp đã có trong giỏ hàng hay chưa
  let indexCartItem = carts.findIndex((value) => value.name == productName);
  if (indexCartItem < 0) {
    // chưa tồn tại sp trong giỏ hàng
    let idNew = getNewId(); // tạo giá trị id tư tăng
    let cartItem = {
      id: idNew,
      name: productName,
      quantity: 1,
    };
    // thêm vào mảng carts
    carts.push(cartItem);
  } else {
    // đã có trong giỏ hàng, cập nhật số lượng
    carts[indexCartItem].quantity += 1;
  }
  // cạp nhật lại số lượng sp trong cửa hảng
  stores[index].count -= 1;
}
function getNewId() {
  // giả sử idmax là của ptu đầu tiên

  let idMax = 0;
  for (let i = 0; i < carts.length; i++) {
    if (idMax < carts[i].id) {
      idMax = carts[i].id;
    }
  }
  return idMax + 1;
}
function showStoresAndCarts() {
  console.log("Danh sách sp trong cửa hàng");
  console.log(stores);
  console.log("Giỏ hàng của bạn ");
  console.log(carts);
}

function deleteCartItem() {
  // nhập vào id muốn xóa
  let idDel = +prompt("Nhập id muốn xóa");
  let indexDelete = carts.findIndex((value) => value.id == idDel);

  let index = stores.findIndex(
    (value) => value.name == carts[indexDelete].name
  );
  let quantity = carts[indexDelete].quantity;

  carts.splice(indexDelete, 1);
  // trả lại số lượng sp ban đầu
  stores[index].count += quantity;
  console.log(carts);
  //
}

function updateQuantity() {
  let idE = +prompt("Nhập id muốn cập nhật");
  let indexEdit = carts.findIndex((value) => value.id == idE);
  if (indexEdit >= 0) {
    // cho phép nhập số lượng lượng thay đổi
    let quantity = +prompt("Nhập vào số lượng muốn cạp nhật");
    if (quantity > 0 && quantity <= 100) {
     
      let index = stores.findIndex(
        (value) => value.name == carts[indexEdit].name
      );
   
      console.log(index);
      stores[index].count += carts[indexEdit].quantity - quantity;
        carts[indexEdit].quantity = quantity;

      console.log(carts);
    } else {
      console.log("số lượng không phù hợp");
      return;
    }
  } else {
    console.log("Không tồn tại");
  }
}
while (true) {
  let choice = prompt("Nhập vào chức năng (C,R,U,D,E)");

  // so sánh lựa chọn người dùng nhạp vào
  switch (choice) {
    case "C":
      // thêm mới vào giỏ hàng
      addToCart();
      break;
    case "R":
      // hiển thị
      showStoresAndCarts();
      break;
    case "U":
        updateQuantity()
      break;
    case "D":
      deleteCartItem();
      break;
    case "E":
      break;
    default:
      console.warn("Lựa chọn không phù hơp, vui lòng nhập lại");
      break;
  }

  if (choice == "E") {
    console.log("Cảm ơn bạn đã đến với Rikkei Stores");
    break;
  }
}
