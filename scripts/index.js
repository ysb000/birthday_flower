//팝업 숨기기
const popup = document.querySelector('.birthday_result_popup')
const popup_bg = document.querySelector('.popup_bg')
console.log(popup);
console.log(popup_bg);
popup.style.display = 'none';
popup_bg.style.display = 'none';
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