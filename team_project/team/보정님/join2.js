function validate() {


    let f = document.forms.item(0);
    f.action ="completion.html"
    var re = /^[a-zA-Z0-9]{5,15}$/;// 아이디 적합한지 검사할 정규식

    var re2 = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
    // 이메일이 적합한지 검사할 정규식

    var id = document.getElementById("uid");
    var upas = document.getElementById("upas");
    var upas1 = document.getElementById("upas1").value;
    var email = document.getElementById("uemail").value;
    var uname = document.getElementById("uname");
    var num1 = document.getElementById("unum");
    // var num2 = document.getElementById("unum");

    var upas3 = document.getElementById("upas").value;

    var p1 = upas3.search(/[0-9]/g);
    var p2 = upas3.search(/[a-z]/ig);
    var p3 = upas3.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);
    var reg = /^010-[0-9]{3,4}-[0-9]{4}$/;
    if (!re.test(id.value)) {
        alert("ID는 5~15자의 영문 대소문자와 숫자로만 입력하세요");
        setTimeout(function () {
            id.focus();
        }, 0);

        return false;
    } else if (upas.length < 8 || upas.length > 20) {
        alert("비밀번호는 8~20자 이내로 입력하세요");
        setTimeout(function () {
            upas.focus();
        }, 0);
        return false;
    } else if ((p1 < 0 && p2 < 0) || (p2 < 0 && p3 < 0) || (p1 < 0 && p3 < 0) || (p1 < 0 && p2 < 0 && p3 < 0)) {
        alert("비밀번호는 영문, 숫자, 특수문자 중 2가지 이상을 혼합하여 입력하세요");
        setTimeout(function () {
            upas.focus();
        }, 0);
        return false;
    } else if (upas.value != upas1) {
        alert("비밀번호가 틀립니다. 다시 입력하세요");
        setTimeout(function () {
            upas.focus();
        }, 0);
        return false;
    }
    else if (uname.value == "") {
        alert("이름을 입력하세요");
        setTimeout(function () {
            uname.focus();
        }, 0);
        return false;
    }
    else if (num1.value.length < 8) {
        // alert("전화번호 형식과 일치하지 않습니다.");
        // setTimeout(function () {
        //     num1.focus();
        //
        // }, 0);
        return false;
    }
    else if (id.value == upas1) {
        alert("아이디와 동일한 비밀번호는 사용할 수 없습니다.")
        setTimeout(function () {
            upas.focus();
        }, 0);
        return false;
    }

// else if (!reg.test(num1)) {
//     alert("010-1234-5678 형식으로 쓰세요");
//     setTimeout(function(){
//         num1.focus();},0);
//     return false ;
// }
else if(!re2.test(email)){
    alert("이메일 형식에 맞춰서 입력하세요");
    setTimeout(function(){
        email.focus();},0);
    return false;
}else{
    // f.submit();
    // return true;
}


    alert("회원가입 오나료")

}



