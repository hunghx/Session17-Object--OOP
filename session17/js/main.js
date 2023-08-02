// Cú pháp khởi tạo đối tượng :
// cách 1  ;
let tuanAnh = {
    name :"Lê Tuấn Anh",
    age : 18,
    class: "HN-JV230630" ,
    move : ()=>{
        console.log("di chuyển chậm");
    }
};
// truy cập 1 thuộc tính hoặc phương thức sử dụng dấu .
console.log(tuanAnh.move());
tuanAnh.maSV ="SV001";
console.log(tuanAnh);

// cách thứ 2 : định nghĩa giôngs như hàm để định nghĩa 1 lớp
function students(name, age, className,maSV){
    // console.log(this); // this đại diện cho đối tượng  sinh ra từ lớp / hàm dó
    this.fullName = name; // gán giá trị tham số name cho thuộc tính fullname 
    this.age =age;
    this.className = className;
    this.maSV = maSV;
    this.move = ()=>{
        console.log("di chuyển chậm");
    }
}

// cách thứ 3 sử dụng class trong es6
class Student {
    // khai báo các thuộc tính
    // fullname="Nguyễn Văn A";
    // age=18;
    // className="JV06";
    // maSV="SV001";
    // tạo constructor để gán giá trị ban đầu lúc khởi tạo
    constructor(fullName,age,className,maSV){
        this.fullname=fullName;
        this.age = age;
        this.className =className;
        this.maSV= maSV;
        this.move = ()=>{
        console.log("di chuyển chậm");
    }
    }
    // định nghĩa các phương thức
    
}


// khởi tạo đối tượng
let student1 = new Student("Nguyễn Văn B",22,"JV10","SV004");
console.log(student1);


let hung =new students("Hồ Xuân Hùng",24,"JV06","SV004");
console.log(hung);
let tuanAnh1 =new students("Lê Tuấn Anh",18,"JV06","SV001");
console.log(tuanAnh1);

let obj = {"màu mũ" : "xanh lá cây"};
console.log(obj["màu mũ"]); //  xanh lá cây
console.log(obj);
// duyệt dối tượng 
for (const key in tuanAnh1) {
    console.log(tuanAnh1[key]);
}

// tạo lớp hình học
class Shape {
    constructor(color){
        this.color = color;
        this.area = 0;
        this.perimeter = 0;
    }
}

//  tạo lớp hình tam giác 
class Triangle extends Shape{
    constructor(a,b,c,color){
        super(color); // gọi đến constructor của lớp Shape
        this.a = a;
        this.b = b;
        this.c = c;
        // tính chu vi và diện tích
        this.perimeter = this.a+this.b+this.c;
        this.area = Math.sqrt(this.perimeter/2*(this.perimeter/2-a)*(this.perimeter/2-b)*(this.perimeter/2-c));
        // this.getPerimeter=()=>{
        //     console.log(this.perimeter);
        // }
        // this.getArea=()=>{
        //     // công thức heron 
        //     // tính nửa chu vi
        //     console.log(this.area)
        // } 
    }
}
// tạo lớp hinh tròn Circle
class Circle extends Shape{
    constructor(radius,color){
        super(color); // gọi đến constructor của lớp Shape
        this.radius = radius;
        this.perimeter = Math.PI *2 *this.radius;
        this.area = Math.PI  * this.radius*this.radius
        
    }
}
// tạo lớp hình chữ nhật Rectangle

class Rectangle extends Shape{
    constructor(a,b,color){
        super(color); // gọi đến constructor của lớp Shape
        this.a = a;
        this.b = b; 
        // tính diện tích  va chu vi
        this.perimeter = 2*(this.a+this.b);
        this.area = this.a * this.b 
        // this.getArea=()=>{
        //     return this.a*this.b
        // }  
    }
}
// lớp hình vuông Square
class Square extends Rectangle{
    constructor(a,color){
        super(a,a,color); // gọi đến constructor của lớp Shape       
    }
}

let triangle1= new Triangle(3,4,5,"Red"); 
// triangle1.getArea();
// triangle1.getPerimeter();


let square1 = new Square(5,"Blue");
console.log(square1);