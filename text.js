//P1: Gioi thieu
    //B1: Lời khuyên trước khóa học
    //B2: Cài đặt môi trường
//P2: Biến,coments,bult-in
    //B3: Sử dụng JavaScript với HTML
    //B4: Làm quen với màn thử thách
    //B5: Thử thách đầu tiên
        alert("Hello world")
    //B6: Lưu ý khi học lập trình tại F8
    //B7: Khái niệm biến và cách sử dụng biến
    //B8: Thực hành sử dụng biến 
        var weght = 11;
        alert("Can nặng của tui là"+ weght)
    //B9: Cú pháp comments
    //B10: Ví dụ sử dụng thuật ngữ cmt
    //B11: Thuật ngữ Built-in
        /*Một số hàm cơ bản
            1.Alert
            2.Confirm
            3.Prompt
            4.Set timeout
            5.Set interval
        */
    //B12: Thực hành sử dụng console log
        //1.Alert
        //     var fullname = 'Do Huy Hoang'; 
        //     alert("hi"+" " + fullname);
        //     console.log(fullname);
        // //2.Confirm
        //     confirm("hi"+" " + fullname);
        // //3.Prompt
        //     prompt(fullname+" " +"Bao nhiêu tuổi");
        // //4.setTimeout
        //     setTimeout(function() {
        //         alert("hi"+" " + fullname);
        //     }, 2000)
        //     console.log(setTimeout);
        // //5.Set Interval
        //     setInterval (function() {
        //     alert("hi"+" " + fullname);
        //         console.log(setInterval);
        //     }, 1000);
//P3: Toán tử kiểu dữ liệu
    //B14: Làm quen với toán tử
        /*Giới thiệu về toán tử trong javascript
            1: Toán tử số học-Arithmetic
            2: Toán tử gán-asignment
            3: Toán tử so sánh-Comparison
            4: Toán tử logical
        */
    //B15: Toán tử số học
        //1: Cộng +
            var a = 1
            var b = 2
            var tong = a + b;
            console.log(tong);
        //2: Trừ -
            var a = 1
            var b = 2
            var hieu = a - b;
            console.log(hieu);
        //3: Nhân *
            var a = 1
            var b = 2
            var tich = a * b;
            console.log(tich);
        //4: Lũy thừa
            var a = 1
            var b = 2
            var exponential = a ** b;
            console.log(exponential);
        //4: Chia /
            var a = 1
            var b = 2
            var thuong = a / b;
            console.log(thuong);
        //5: Chia lấy số dư
            var gt1 = 10
            var gt2 = 4
            var residual = gt1 % gt2;
            console.log(residual);
            alert(residual);
        //6: Tăng 1 giá trị 
            var gt3= 5;
            gt3++;
            var gt4 = 6;
            gt4++;
            var up = gt3;
            alert("Số cần tìm là" + up);
			
            console.log(up);
        //7: giảm 1 giá trị
            var gt5 = 7;
            gt5--;
            var down  = gt5;
            alert("Số cần tìm là " + down);
            console.log(down);
	//B16: Thực hành toán tử số học
            var gt7 = 6;
            gt6--;
            var down  = gt6;
    //B17: Toán tử gán
        //1: Toán tử =
            var a = 1;
            a1 = a;
            console.log(a1);
            
        //2: Toán tử +=
            a = a + 1;
            console.log(a);
        //3: Toán tử -=
            b = 4;
            b = b - 1;
            console.log(b);
        //4: Toán tử *=
            c = 4;
            c = c * 2;
            console.log(c);
        //5: Toán tử /=
            d = 8;
            d = d / 2;
            console.log(d);
        //6: Toán tử **=
            e = 10;
            square = e ** 3;
            console.log(square);
        //7: Toán tử %=
            DIVIDE = 26
            RESIDUAL = DIVIDE % 6
    //19:Toán tử ++ -- 

        





//Các bài tập cơ bản
    //Thực hành với các hàm
        //Kiểm tra chẳn lẽ
			function check() {
				var a = prompt("Vui lòng nhập số cần checkered");   
				if (a % 2 == 0) {
					alert(a + " " + "Là số chẳn");
					res = a + " " + "Là số chẳn";
					
				} else {
					alert("Là số lẽ");
					res = a + " " + "Là số lẽ"
					
				}
				document.getElementById("demo1").innerHTML = res;
			}
			console.log(check);
        //Kiểm tra số nguyên âm,dương
			function check2() {
				var b = prompt("Vui lòng nhập số cần checkered");
				var c = b / 2;
				alert(c);
				if (Number.isInteger(c) && c > 0) {
					
					alert("Là 1 số nguyên dương");
					res = c + " " + "Là 1 số nguyên dương";
					
				}
				if(Number.isInteger(c) && c < 0) {
					
					alert(c + " " + "Là 1 số nguyên âm");
					res = c + " " + "Là 1 số nguyên âm";
					
					
				}
				if(!Number.isInteger(c)) {
					alert("Ko phải là 1 số nguyên");
					res = c + " " + "Ko phải là 1 số nguyên";
					
				}
				document.getElementById("demo2").innerHTML = res;
			}
        //Kiểm tra số dư
			function check3() {
				var gt1 = prompt("Vui lòng nhập số cần checkered");
				var gt = gt1 % 4;
				if (gt) {
					alert(gt + " " + "Là số dư ta tìm đc")
					res = gt + " " + "Là số dư ta tìm đc";	
				}
				else{
					alert("ko có số dư nào ta tìm đc")
					res = "ko có số dư ta nào tìm đc";
				}
				document.getElementById("demo3").innerHTML = res;
				
			}
        //Kiểm tra +- 2 số
            function check4() {
                var a = prompt("Vui lòng nhập giá trị 1");
                var b = prompt("Vui lòng nhập giá trị 2");
                kql = Number(a) + Number(b);
                kql2 = Number(b) - Number(a);
                var c = alert("Số bạn cần tìm là" + " " + kql);
                var d = alert("Số bạn cần tìm là" + " " + kql2);
                res = "Kết quả là " + kql;
                res = "Kết quả là " + kql2;
                document.getElementById("demo4").innerHTML = res;
                document.getElementById("demo4").innerHTML = res;
            }
        //Tính tổng của nhiều phần tử trong 1 mảng
            let mang = [2,5,6,10,20];
            function array(mang) {
                let sum = 0;
                for (let i = 0; i < mang.length; i++) {
                    sum += mang[i];
                }
                // alert(sum+ " "+"ddaay la ket qua");
                 return sum;
            }
            console.log(array(mang));
        //Tổng các số trong mảng chia hết cho 2
            let mang2 = [2,5,6,10,20,11];
            function array2(mang2) {
                let sum2 = 0;
                for (let i = 0; i < mang2.length; i++) {
                    if (mang2[i] % 2 == 0) {
                        sum2 += mang2[i];
                    }
                }
                return sum2;
            }
            console.log(array2(mang2));
            console.log(mang2);
        //Tổng các số trong mảng chia hết cho 3
            let mang3 = [1,3,6,7,10,12,16,21]
            function array3(mang3) {
                let sum3 = 0;
                for (let i = 0; i < mang3.length; i++) {
                    if (mang3[i]%3 == 0){
                        sum3 += mang3[i];
                    }
                }
                return sum3;
            }
            console.log(array3(mang3));
        //Giai phương trường bậc 1
            function dieukien() {
                let a = document.getElementById("a").value;
                let b = document.getElementById("b").value;
                if (a == "" || b == "") {
                    alert("Vui lòng nhập dữ liệu");
                }else{
                    a = Number(a);
                    b = Number(b);
                    giai_pt_bac_nhat(a, b);     
                }
            }
            function giai_pt_bac_nhat(a, b){
                if (a == 0 && b == 0){
                    alert('Phương trình vô số nghiệm');
                    res = "Phương trình vô số nghiệm";
                }
                else if (a != 0 && b == 0){
                    alert('Phương trình có nghiệm x = 0');
                    res = "Phương trình có nghiệm x = 0";
                }
                else if (a == 0 && b != 0){
                    alert("Phương trình vô nghiệm");
                    res = "Phương trình vô nghiệm";
                }
                else {
                    alert('Phương trình có nghiệm x = ' + (-b/a));
                    res = "Phương trình có nghiệm x = " + (-b/a);
                }
                document.getElementById('demo5').innerHTML = res;
            }
        //Giai phương trường bậc 2
            function dieukiengia(){
                /^-?\d*$/.test(value);
                let gt1 = document.getElementById('gt1').value;
                let gt2 = document.getElementById('gt2').value;
                let gt3= document.getElementById('gt3').value;
                if (gt1 == "" && gt2 == "" && gt3 == "") {
                    alert("Vui lòng nhập đầy đủ dữ liệu");
                    return;
                }
                if (gt2 == "" && gt1 != "" && gt3 != "") {
                    alert("Vui lòng nhập giá trị 2 ");
                    return;
                    
                }
                if (gt1 == "" && gt2 != "" && gt3 != "") {
                    alert("Vui lòng nhập giá trị 1");
                    return;
                    
                }
                if (gt1 != "" && gt2 != "" && gt3 == "") {
                    alert("Vui lòng nhập giá trị 3 ");
                    return;
                    
                }
                if (gt1 == "" && gt2 == "" && gt3 != "") {
                    alert("Vui lòng nhập giá trị 1 và giá trị 2");
                    return;
                    
                }
                if (gt1 == "" && gt3 == "" && gt2 != "") {
                    alert("Vui lòng nhập giá trị 1 và giá trị 3");
                    return;
                    
                }
                if (gt1 != "" && gt2 == "" && gt3 == "") {
                    alert("Vui lòng nhập giá trị 2 và giá trị 3");
                    return;
                }
                if(/^-?\d*$/.test(value) == ""){
                    alert("Gía trị nhập vào ko hợp lệ");
                }
                 else {
                    alert("Nhập thành công vui lòng đợi tính toán");    //  
                }
            }
            
            
                
        

            
        


