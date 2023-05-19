function log(){
    f = document.forms.login_form;
    f.action = "#"

    var id = "5team";
    var pas = "12345kh"

    var uid = document.getElementById("id");
    var upas = document.getElementById("password");

    if(id != uid.value){
        alert("아이디가 일치하지 않습니다.")
        setTimeout(function(){
            uid.focus();},0);
        return false;
    }else if(pas != upas.value){
        alert("비밀번호가 일치하지 않습니다.")
        setTimeout(function(){
            upas.focus();},0);
        return false;
    }else{
        alert("로그인 성공")
        f.submit();
        return true;
    }
}