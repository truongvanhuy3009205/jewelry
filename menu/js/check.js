 //form đăng ký
 function check(){
    
    let name = document.getElementById("hoten").value;
    let regexName = /^[^\d+]*[\d+]{0}[^\d+]*$/;
    if(name == '' || name == null){
      alert("Họ tên không được để trống !");
      hoten.focus();
      return false;
    }
    else if(!regexName.test(name)){
      alert("Tên không hợp lệ !");
      hoten.focus();
      return false;
    }
  
  
    let phone = document.getElementById("sdt").value;
    let regexPhone = /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/;
    if(phone == ''){
      alert("Số điện thoại không được để trống !");
      sdt.focus();
      return false;
    }
    else if(!regexPhone.test(phone)){
      alert("Số điện thoại không hợp lệ !")
      sdt.focus();
      return false;
    }

    let Gmail = document.getElementById("email").value;
    let regexGmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if(Gmail == ''){
      alert("Email không được để trống !");
      email.focus();
      return false;
    }
    else if(!regexGmail.test(Gmail)){
      alert("Email không hợp lệ !");
      email.focus();
      return false;
    }

    let Songuoi = document.getElementById("songuoi").value;
    if(Songuoi == ''){
      alert("Số người không được để trống");
      songuoi.focus();
      return false;
    }
    else if(Songuoi == 0){
      alert("Số người không hợp lệ");
      songuoi.focus();
      return false;
    }

    let Mota = document.getElementById("desi").value;
    if(Mota == ''){
      alert("Vui lòng nhập địa điểm bạn muốn đến");
      desi.focus();
      return false;
    }
    else if(Mota < 5){
      alert("Vui lòng nhập địa điểm bạn muốn đến và hơn 5 ký tự");
      desi.focus();
      return false;
    }
    alert("Đăng ký thành công, vui lòng chờ trong giây lát để được tư vấn")
  }
     