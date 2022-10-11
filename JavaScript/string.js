/*1:Cách tạo chuỗi
  2:Các cách tạo chuỗi
  3:Lựa chọn cách tạo chuỗi
  4:Kiểm tra data type
   */
var nameString = "Huy Hoang";
var nameString1 = new String("hoanggh123");
console.log(nameString1);
console.log(nameString);
console.log(typeof nameString);

// 5Một số case sử dụng backslash (\)
var nameString2 = "Huy Hoang là 'siêu nhân'";
console.log(nameString2);
var nameString3 = 'Huy hoanggh123 là "thằng ngu"';
console.log(nameString3);
var nameString4 = "a a a";
//Đếm kí tự chuỗi
console.log(nameString4.length);
var nameString5 =
  "hoanggh123" +
  " " +
  "hoanggh123" +
  " " +
  "hoanggh123" +
  " " +
  "hoanggh123" +
  " " +
  "hoanggh123";
console.log(nameString5);
var nameString6 = "hoanggh123";
var nameString7 = "là thằng ngu";
console.log("Bí danh" + " " + nameString6 + " " + nameString7);
console.log(`Tôi là : ${nameString6} ${nameString7}`);
/*
    Làm việc với chuỗi:
    1.Length
    2.Find index
    3.Cut string
    4.Replace
    5.Convert to upper case
    6.Convert to lower case
    7.Strim
    8.Split
    9.Get a character by index
 */
//1.Length
var nameString8 = "Hoc JS JS JS JS JS  tại F8!";
console.log(nameString8);
console.log(nameString8.length);
//2.Find index
// indexOf lấy kí tự đầu tiên trong chuỗi (trong chuổi có nhiều kí tự giống nhau)
// lastIndexOf lấy kí tự cuối cùng trung chuỗi (trong chuổi có nhiều kí tự giống nhau)

console.log(nameString8.lastIndexOf("J"));
//3.Cut string
console.log(nameString8.slice(4, 6));
//4.Replace strings

console.log(nameString8.replace(/JS/g, "Java Web"));
//5.Convert to upper case
console.log(nameString8.toUpperCase());
//6.Convert to lower case
console.log(nameString8.toLowerCase());
//7.Strim
var nameString9 = ' Học JAVA tại cao đẳng FPT ';
console.log(nameString9);
console.log(nameString9.length);
console.log(nameString9.trim("Học"));
console.log(nameString9.trim().length);
