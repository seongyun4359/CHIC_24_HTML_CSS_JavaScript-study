CHAPTER.01 인터넷과 웹 

인터넷: 이메일, 웹, FTP, 텔넷...
웹 브라우저: 웹에 공개된 정보를 탐색할 수 있게 하는 프로그램 

웹은 요청과 응답이라는 간단한 형태로 동작
웹 2.0: 서로 다른 사용자가 함께 새로운 콘텐츠를 창조할 수 있는 시대

URL: 웹에서 어떤 대상을 구분
하는 주소
클라이언트-> 요청하는 쪽 / 서버-> 응답하는 쪽 
-> 서버 프로그램은 벡엔드 프로그램, 클라이언트 프로그램은 프론트엔드 프로그램이라고 함

CHAPTER.02 웹 페이지 기본 구조와 작성 방법

요소: HTML 페이지를 구성하는 각 부품의 요소 / 객체
태그: 요소를 만들 때 사용하는 작성 방법
->요소와 태그 구분하지 않고 사용

내용을 가질 수 있는 요소: <요소 이름>내용</요소 이름> ex) <h1>Hello HTML5</h1>
내용을 가질 수 없는 요소: <요소 이름> ex) <img>

텍스트인 경우 ex)  <h1>Hello HTML5</h1>  

다른 태그인 경우 ex) <div>
		  	                <h1>Hello HTML5</h1>
			                  <p>즐거운 웹 프로그래밍 입문</p>
	                   </div>

내용을 입력하지 않은 경우 ex) <div></div>

HTML표기법: <img>
XHTML표기법: <img />

속성: 태그에 추가 정보를 부여할 때 사용하는 것
ex) <h1 title="header">Hello HTML5</h1>
-> title:속성이름  <h1 title="header">: 속성 블록 Hello HTML5: 내부 문자

주석 <!______>

HTML5 구조
<head></head> -> body 태그에 필요한 스타일시트와 자바스크립트를 제공
<title></title> -> 웹 브라우저에 표시하는 제목 지정
<body></body> -> 사용자에게 실제로 보이는 부분을 작성하는 곳
<html></html> -> 모든 HTML 페이지의 기본 요소, 모든 태그는 이 html 태그 내부에 작성

<html lang="ko">: 언어 선택 / ko는 한국어

<style>
	h1{
		color: white;
		background: black;
	}
</style> -> color는 글자색, background는 글자 배경 색
-> head안에 작성

외부 스타일시트 불러오기 ex) <link rel="sylesheet" href="Style.css">

경고 창 출력
ex)
<script>
	alert('경고');
</script>

오류와 검증
Elements탭: 현재 HTML 페이지의 계층 구조와 각 태그에 적용된 스타일 파악 가능
Console탭: 오류를 확인하거나 자바스크립트 코드를 추가로 입력할 때 사용

HAPTER.03 HTML5 기본 태그

h: 제목 p: 단락 br: 줄바꿈 hr: 수평 줄 

제목 글자: h1 ~ h6 -> 숫자가 커질수록 글자 크기가 작아짐
본문 글자: p, br, hr

특수문자
&nbsp; -> 공백 &lt; -> < &gt; -> > &amp; -> &

a: 하이퍼링크 생성
ex) <a href="http://naver.com/">네이버</a>
-> 웹 페이지 내부에 연결: href 속성에 '#id속성' 형태의 문자열 입력

글자 모양 태그
b: 굵은 글자 i:기울어진 글자 small:작은글자 sub:아래첨자 
sup: 위 첨자 ins: 밑줄 글자 del: 취소선이 그어진 글자

목록 태그
ul: 순서가 없는 목록 생성 ol: 순서가 있는 목록 생성 li: 목록 요소 생성

테이블 태그
table: 표 삽입 tr: 표에 행 삽입 th: 제목 셀 생성 td: 일반 셀 생성
table/border -> 표의 테두리 두께 지정
th, td/colspan -> 셀의 너비 지정 rowspan -> 셀의 높이 지정

미디어 태그
img 태그 src / 이미지 경로, alt -> 이미지가 없을 때 나오는 글자 width -> 이미지의 너비 height -> 이미지의 높이 

audio, video 태그 / src -> 음악 비디오 파일의 경로 preload -> 준비 중 데이터를 모두 불러올지 autoplay -> 재생여부 loop -> 반복 controls -> 재생 도구 출력 여부
video 태그 / width -> 너비 height -> 높이 
