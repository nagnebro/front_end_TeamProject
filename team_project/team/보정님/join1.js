function validate(){
    var re = /^[a-zA-Z0-9]{5,15}$/ ;// 아이디 적합한지 검사할 정규식
    var p1 = upas.search(/^[0-9]$/);
    var p2 = upas.search(/^[a-z]$/);
    var p3 = upas.search(/^[`~!@@#$%^&*|₩₩₩'₩";:₩/?]$/);
    var re2 = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
    // 이메일이 적합한지 검사할 정규식

    var id = document.getElementById("uid");
    var upas = document.getElementById("upas").value;
    var upas1 = document.getElementById("upas1").value;
    var email = document.getElementById("uemail").value;
    var uname = document.getElementById("uname");
    var num1 = document.getElementById("unum").value;
    var num2 = document.getElementById("unum");


if(!re.test(id.value)){
    alert("ID는 5~15자의 영문 대소문자와 숫자로만 입력하세요");
    return false;
}

/*
if(!re.test(upas.value)){
    alert("password는 5~15자의 영문 대소문자와 숫자로만 입력하세요");
    return false;
} 
*/
if(upas.length< 8 || upas.length > 20){
    alert("비밀번호는 8~20자 이내로 입력하세요");
    upas.focus();
    return false;
}else if(p1 <0 || p2 <0 || p3< 0){
    alert("영문, 숫자, 특수문자 2가지 이상 사용하세요");
    upas.focus();
    return false;
}else if((p1<0 && p2<0)||(p2<0 && p3<0)||(p1<0 && p3<0)){
    alert("영문, 숫자, 특수문자 중 2가지 이상을 혼합하여 입력하세요");
    upas.focus();
    return false;
}

if(upas!=upas1){
    alert("비밀번호가 틀립니다. 다시 입력하세요");
    upas.focus();
    return false;
}

if(!re2.test(email)){
    alert("이메일 형식에 맞춰서 입력하세요");
    email.focus();
    return false;
}

if(num1.length<8){
    alert("전화번호 형식과 일치하지 않습니다.");
    num2.focus();
    return false;
}

if(id.value == upas){
    alert("아이디와 동일한 비밀번호는 사용할 수 없습니다.")
    upas.focus();
    return false;
}

var reg = /^(010)-[0-9]{3,4}-[0-9]{4}$/;

if (!reg.test(num1)) {
    alert("010-1234-5678 형식으로 쓰세요");
    num2.focus();
    return false;
}

document.join1.submit();

}



