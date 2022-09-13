const numbers = [1,2,3,4,5];

const  result = numbers.reduce((total,number)=>{
    return total + number
},10) // '10' truyền giá trị khởi tạo,khi đó total =10,number là phần tử đầu tiên trong mảng là 1,10+1=11...liên tục =>kq=25
console.log(result); // 15//
// Chú thích//
/* total: biến tích trữ
* +Khi thằng reduce hoạt động thì nó lại calback sẽ trả về 4 đối số    */
// đầu tiên total có gtri là 1, numbers co giá trị là 2, return 1+2=3//
// Sau đó 3 được lưu vào biến tích trữ,khi đó number có giá trị là 3 nên trả vể 3+3=6//
//.. 6+4=10,  10+5 = 15//