## HTML5 구성
요소(객체): HTML 페이지 구성하는 각 부품 **<요소이름>내용</요소이름>**
태그: 요소를 만들 때 사용하는 작성 방법
속성: 태그에 추가 정보를 부여할 때 사용 . **속성블록=<요소이름 속성이름=속성 값>**
## HTML5 페이지의 구조와 작성
<!DOCTYPE html>
<head>
  <title>Hello</title>
</head>
<body>
  
</body>
</html>
html태그의 lang속성: ko, en, ja, ru, zh, de (해당 웹페이지에 작성된 언어)
head태그 내부에 넣을 수 있는 태그: meta, title, script, link, style, base
외부 스타일시트: link태그의 href속성 사용
외부 자바스크립트: script태그의 src속성 사용

## HTML5 기본 태그
### 글자 태그
제목 글자 생성: h1~h6(heading) 
본문 생성: p(paragraph),br(break rule),hr(horizontal rule) 
하이퍼링크 생성: a(anchor) 
  사용자 선택에 따라 관련한 특정 정보로 이동할 수 있도록 조직된 문서, href(hyper reference)속성을 이용함
 **1. 특정 웹 페이지에 연결: <a href="이동할 웹 페이지"출력글자</a>**
 **2. 웹 페이지 내부의 특정 위치에 연결: <a href="#id"출력글자</a>**
### 글자 모양 태그
글자 모양 태그 내부에 제목 글자와 본문 글자 태그를 넣을 수는 없
b(bold),i(italic),small,sub(subscript),sup(superscript),ins(insert),del(delete)
 *특수 문자 표기: &nbsp; 공백, &lt; <, &gt; >, &amp; &
### 목록 태그
ul(unordered list)/ol(ordered list),li(list item) 순서가 없는/있는 목록 생성, 목록 요소 생성
### 테이블 태그
-table: 표 삽입/ border 속성(표의 테두리 두께 지정)
-tr(table row): 표에 행 삽입
-th(table heading): 표의 제목 셀 생성 / colspan 속성(셀의 너비 지정), rowspan 속성(셀의 높이 지정)
-td(table data): 표의 일반 셀 생성 / colspan 속성(셀의 너비 지정), rowspan 속성(셀의 높이 지정)
### 미디어 태그
-img 태그: src 속성(이미지의 경로 지정), alt 속성(이미지가 없을 때 나오는 글자 지정), width 속성(이미지의 너비 지정), height 속성(이미지의 높이 지정)
-audio,video 태그: src 속성(음악, 비디오 파일의 경로 지정), preload 속성(음악, 비디오를 준비 중일 때 데이터를 모두 불러올지 여부 지정), autoplay 속성(음악, 비디오의 자동 재생 여부 지정), controls 속성(음악, 비디오, 재생 도구 출력 여부 지정)
-video 태그: width 속성(비디오의 너비 지정), height(비디오의 높이 지정)
 
