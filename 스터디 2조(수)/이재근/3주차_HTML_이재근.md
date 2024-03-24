CHAPTER 07. 다양한 레이아웃의 구성과 기능

01. 수평, 중앙, One True 정렬 레이아웃

수평으로 요소 정렬 
-> 자손에게 float 속성을 지정하고, 부모의 overflow 속성에는 hidden 키워드 적용
--> overflow 속성 이외에도 clear 속성 활용 가능 / 수평 정렬하고 싶은 대상의 양쪽 아래에
div 태그를 배치하고, 이 div 태그의 속성을 both로 지정 

중앙 정렬 레이아웃 
-> 중앙 정렬하고 싶은 태그에 width 속성을 부여하고 margin 속성을 '0 auto'로 입력

그리드 시스템 / 화면을 쪼개서 레이아웃을 구성하는 방식 

One True 레이아웃 / 국내 모든 포털 사이트의 메인 페이지에서 사용
-> 행을 독립적으로 생각해서 공간을 나눔 
--> 자손에 float 속성 적용 -> 부모의 overflow 속성에 hidden을 적용

02. 요소 배치 

절대 위치 
-> 자손의 position 속성에 absolute를 적용하려면 부모 position 속성에 relative를 적용
-> 자손의 position 속성에 absolute를 적용하려면 부모에 height 속성을 입력 

원 / div 태그에 border-radius 속성을 적용 

요소를 중앙에 배치
-> 중앙 정렬하려는 div 태그의 position 속성을 absolute로 지정
-> lefr 속성과 top 속성을 50%로
-> 중앙에 정렬하려는 div 태그의 margin-left 속성과 margin-top 속성에 음수를 입력(입력하는 값은 div 태그와 높이의 정확히 반)

고정바 만드는 방법
-> position 스타일 속성에 fixed 적용 left, top, right, bottom 속성에 값을 입력해 위치 설정
-> width 속성과 height 속성으로 크기를 설정 

글자 생략 -> ellipsis 클래스를 만들면 쉽게 구현 가능

CHAPTER 08. 반응형 웹

현대 웹 브라우저는 '미디어 쿼리'기능을 지원 / 미디어 쿼리는 미디어 타입에 따라 CSS를 적용할 수 있는 기능

1. 반응형 웹 소개 
반응형 웹은 웹 페이지 하나로도 기기에 맞게 디자인이 자동으로 반응해서 변경되는 웹 페이지
-> 반응형 웹 페이지는 미디어 쿼리를 사용해 개발 

2. 반응형 웹을 위한 설정 

뷰포트 설정 
meta 태그는 웹 페이지에 추가 정보를 제공할 때 사용 / 검색 엔진이 이 웹 페이지를 읽을 때 제목과 내용을 뽑아 검색되게 함
-> 대부분 서버와 연동해서 처리하는 경우가 많음 
-> name 속성에 viewport가 입력된 meta 태그를 viewport meta 태그라 함
viewport meta 태그 / width, height, initial-scale(초기 확대 비율), user-scalable(확대 및 축소 가능 여부), minimum-scale, maximum-scale, target-densitydpi(DPI지정) 입력 가능  

미디어 쿼리 설정 
@media 규칙과 media 속성으로 사용 가능 
@-규칙 @-rule이란 스타일시트 내부의 특정한 규칙을 표현하는데 사용 
media 속성은 link 태그에 입력해 해당 미디어 쿼리 조건에 맞는 장치에서만 CSS 파일을 불러올 때 사용 

HTML은 all, aural(음성장치), braille(표시 전용 점자 장치), handheld, print, projection, screen,
tty(터미널 등 그림을 띄울 수 없는 장치), tv, enbossed(인쇄 전용 점자 장치)와 같이 다양한 미디어 타입 지원 / only연산자, not 연산자와 함께 사용 가능 

미디어 특징 / width, height, device-width, device-height, orientation(장치 방향), 
device-aspect-ratio(화면 비율), color(장치 색상 비트), color-index, monochrome(흑백 장치의 픽셀당 비트 개수), resolution(장치 해상도) 

빈응형 웹 패턴
1. 너비가 큰 화면 메뉴 왼쪽, 너비가 좁은 화면에선 메뉴가 위쪽
2. 너비가 큰 화면 메뉴 오른쪽, 너비 좁은 화면에선 메뉴 위쪽
3. 너비 큰 화면 메뉴 왼쪽, 너비 좁은 화면 메뉴 아래쪽
4. 너비 큰 화면 메뉴 오른쪽, 너비 좁은 화면 메뉴 아래쪽
-> 모두 모바일 사이트에서 width속성과 float 속성 등 스타일을 해제하는 형태 / 실질적 차이는 float속성 값과 HTML 태그 순서

CHAPTER 09. 자바스크립트 기본 문법

표현식 / 값을 만들어 내는 간단한 코드
문장 / 프로그래밍 언어에 실행할 수 있는 코드의 최소 단위
문장 마지막엔 세미콜론 또는 줄바꿈

키워드 / 특별한 의미가 부여된 단어
식별자 / 변수나 함수 등 이름을 붙일 때 사용하는 단어
-> 대문자 시작 / 변수, 인스턴스, 함수, 메서드의 이름은 항상 소문자 시작 / 여러 단어로 된 식별자는 각 단어의 첫 글자 대문자로

주석 -> 한 행(//) 여러행(/* */)

자바스크립트의 가장 기본적 출력 방법은 alert()함수

함수
익명 함수 / function(){}
선억적 함수/ function 함수(){}
매개변수 -> 함수 괄호 안에 집ㅈ어넣어 함수 쪽에 추가적인 정보를 전달하는 것 
매개변수를 전달되는 함수를 콜백 함수라고 함 

배열은 요소에 접근할 때 인덱스를 사용하지만, 객체는 키를 사용 

배열에 있는 값 하나하나를 요소, 객체에 있는 값은 속성이라고 함 
