# 탄생화 앱 제작
## 과제 내용
1. 태어난 달 입력 가능하도록 수정 o 
2. '나의 꽃과 꽃말 만나기' 버튼 클릭 시 팝업창 띄우기 o
3. 팝업창 띄울 시 배경 어둡게 하기 o
4. 입력칸 클릭시 12로 값 변경하기 
5. 배경 클릭시 팝업창, 배경 숨기기 o
6. 깃허브 업로드 및 과제 제출
## 작업 순서 
### 26/07/12
1. 입력 및 버튼 태그 수정
    * div.contents -> 서버 저장이 가능하도록 form 태그로 변경
    * input -> type, name, autofocus 속성 추가
    * button -> type 속성 추가
    * 태그 수정에 따른 css 선택자 수정
2. 팝업창, 팝업창 배경 html + css 작성
    * div.birthday_result_popup -> 팝업창 생성 
    * 위 태그의 자식으로 내용 작성
    * div.popup_bg로 팝업창 배경 태그 생성 
    * position으로 위치 지정 
    * z-index로 순서 지정
3. 팝업창, 팝업창 배경 숨기기 및 띄우기 js 작성
    * popup, popup_bg 객체 생성 및 태그 대입
    * popupShow, popupHide 함수 생성 및 적용
