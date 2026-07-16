//팝업 숨기기
const popup = document.querySelector('.birthday_result_popup')
const popup_bg = document.querySelector('.popup_bg')
console.log(popup);
console.log(popup_bg);
popup.style.display = 'none';
popup_bg.style.display = 'none';
// 자바스크립트에서 display=none으로 숨겼다가 특정 이벤트에 따라 다시 보이고 싶을때
// 무조건 block이 아닌 그 선택자가 원래 가졌던 display 속성으로 되돌리기
//display:flex가 선택자에 원래 있었다면 자바스크립트도 display=flex
//display가 선택자에 없다면? 원래 태그 고유속성에 따라 block 또는 inline

//버튼 클릭 시 팝업 띄우기
function popupShow() {
    popup.style.display = 'flex';
    popup_bg.style.display = 'block';
}

// 배경 클릭 시 팝업 닫기
function popupHide() {
    popup.style.display = 'none';
    popup_bg.style.display = 'none';
}

//입력창 선택 시 12로 출력
const user_birthday = document.querySelector('#user_birthday');
console.log(user_birthday);
function userBirthdayOutput(){
    user_birthday.value='12';
};