/*
작성자 : 김호식
작성일 : 240509
사용 페이지 :   memberLogin.jsp
함수 설명 : 로그인시 유효성 체크 및 ID 기억하기 함수
 */
function loginCheck(){
    if(document.getElementById('login_id').value.length == 0){
        alert("아이디를 입력해주세요.");
        document.getElementById('login_id').focus();
        return false;
    }

    if(document.getElementById('login_pw').value.length == 0){
        alert("비밀번호를 입력해주세요.");
        document.getElementById('login_pw').focus();
        return false;
    }

    function setCookie(name, value, expiredays) //쿠키 저장함수
    {
        var todayDate = new Date();
        todayDate.setDate(todayDate.getDate() + expiredays);
        document.cookie = name + "=" + escape(value) + "; path=/; expires="
            + todayDate.toGMTString() + ";"
    }

    if(document.getElementById('remember_id').checked == true){
        setCookie("id", document.getElementById('login_id').value,7);
    }else{
        setCookie("id", document.getElementById('login_id').value,0);
    }
    return true;
}

/*
작성자 : 김호식
작성일 : 240509
사용 페이지 :   memberJoin.jsp
함수 설명 : 비밀번호 유효성 검사 함수
 */

function pwCheck(){
    var pw = document.joinFrm.password.value;
    var num = /[0-9]/;
    var eng = /[a-zA-Z]/;
    var spe = /[~!@\#$%<>^&*]/;

    if(num.test(pw) && eng.test(pw) && spe.test(pw) && pw.length >7 && pw.length <= 20) {
        document.joinFrm.check_pw.value = "y";
        document.joinFrm.password.style.backgroundImage = "url('_image/member/lock/lock_blue.png')";
        document.getElementById('validate_pw').innerText = "";
    }else{
        document.joinFrm.check_pw.value = "";
        document.joinFrm.password.style.backgroundImage = "url('_image/member/lock/lock_red.png')"
        document.getElementById('validate_pw').innerText = "8~20자 영문, 숫자, 특수문자를 사용하세요.";
    }
}
/*
작성자 : 김호식
작성일 : 240509
사용 페이지 :   memberJoin.jsp
함수 설명 : 비밀번호 재입력 일치하는지 확인하는 함수
 */

function pw2Check(){
    var pw = document.joinFrm.password.value;
    var re_pw = document.joinFrm.password2.value;
    if(pw == re_pw){
        document.joinFrm.check_pw2.value = "y";
        document.joinFrm.password2.style.backgroundImage = "url('_image/member/lock/lock_blue.png')";
        document.getElementById('validate_pw2').innerText = "";
    }else{
        document.joinFrm.check_pw2.value = "";
        document.joinFrm.password2.style.backgroundImage = "url('_image/member/lock/lock_red.png')"
        document.getElementById('validate_pw2').innerText = "비밀번호가 일치하지 않습니다. ";
    }
}
/*
작성자 : 김호식
작성일 : 240509
사용 페이지 :   memberJoin.jsp
함수 설명 : 회원가입시 모든 입력 정보 유효성 검사하는 함수
 */

function joinCheck(){
    var id = document.joinFrm.id;
    var pw = document.joinFrm.password;
    var pw2 = document.joinFrm.password2;
    var name = document.joinFrm.name;
    var nickname = document.joinFrm.nickname;
    var year = document.joinFrm.yy;
    var month = document.joinFrm.mm;
    var date = document.joinFrm.dd;
    var gender = document.joinFrm.gender;
    var email = document.joinFrm.email;
    // var check = document.joinFrm.check_rule;

    if(id.value.length ==0 || document.joinFrm.check_id.value.length ==0){
        document.getElementById('validate_id').innerText = "아이디를 다시 입력해주세요.";
        id.focus();
        return false;
    }else if(pw.value.length ==0 || document.joinFrm.check_pw.value.length ==0){
        document.getElementById('validate_pw').innerText = "8~20자 영문, 숫자, 특수문자를 사용하세요.";
        pw.focus();
        return false;
    }else if(pw2.value.length ==0 || document.joinFrm.check_pw2.value.length ==0){
        document.getElementById('validate_pw2').innerText = "비밀번호가 일치하지 않습니다.";
        pw2.focus();
        return false;
    }else if(name.value.length ==0){
        document.getElementById('validate_name').innerText = "이름을 입력해주세요.";
        name.focus();
        return false;
    }else if(nickname.value.length ==0 || document.joinFrm.check_nickname.value.length ==0){
        document.getElementById('validate_nickname').innerText = "닉네임을 다시 입력해주세요.";
        nickname.focus();
        return false;
    }else if(year.value.length != 4 || isNaN(year.value) || year.value > 2021){
        document.getElementById('validate_birth').innerText = "생년월일을 입력해주세요.";
        year.focus();
        return false;
    }else if(month.value.length == 0){
        document.getElementById('validate_birth').innerText = "생년월일을 입력해주세요.";
        month.focus();
        return false;
    }else if(date.value.length != 2 || isNaN(date.value) || parseInt(date.value) <1 || 31 < parseInt(date.value)){
        document.getElementById('validate_birth').innerText = "생년월일을 입력해주세요.";
        date.focus();
        return false;
    }else if(gender.value.length == 0){
        document.getElementById('validate_gender').innerText = "성별을 선택해주세요.";
        gender.focus();
        return false;
    }else if(email.value == ""){
        document.getElementById('validate_email').innerText = "이메일을 입력해주세요";
        email.focus();
        return false;
    }else if(check.checked != true){
        document.getElementById('validate_check_rule').innerText = "이용약관을 체크해주세요.";
        check.focus();
        return false;
    }else{
        var birth_string = year.value + "/" + month.value + "/" + date.value;
        var birth_date = new Date(birth_string);
        var birth_form = document.getElementById('birth');
        birth_form.valueAsDate = birth_date;
        return true;
    }
}
