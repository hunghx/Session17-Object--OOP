// khái niệm về closure
// khi xây dựng 1 hàm 
let count = 0;
function increase() {
    let count = 0;
    return function(){
        count++;
        document.getElementById("count").innerText= count;
    }
}
 let rs = increase();



function getTime() {
    let time = new Date().toLocaleTimeString();
 document.getElementById("time").innerText =time;
}
 

setInterval(getTime,1000)



// let btn = document.getElementById("button");
// btn.click = increase