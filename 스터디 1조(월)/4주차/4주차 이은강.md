chapter 9
01. 자바스크립트 기본 용어와 출력 방법
1. 자바스크립트 기본 용어
표현식: 값을 만들어 내는 간단한 코드

문장: 프로그래밍 언어에 실행할 수 있는 코드의 최소 단위

키워드: 자바스크립트를 처음 만들때 정해진 특별한 의미가 부여된 단어

식별자: 변수, 함수 등에 이름을 붙일 때 사용하는 단어

변수 input
속성 Array.length :객체에 소속된 변수
함수 prompt('Message', 'Defstr')
메소드 Math.abs(-273) : 어떤 객체가 가지고 있는 어떤 동작,
                        객체에 소속된 함수
2. 자바스크립트 출력
alert() 함수를 사용하여 출력
<scropt>
    alret('Hellow JavaScript')
</scropt>

02. 자료형과 변수
1.자료형
비교 연산자 bool(참, 거짓)
->논리 연산자 사용
! : 논리 부정(참이면 거짓, 거짓이면 참)
&& : 논리곱(둘다 참이어야 참)
|| : 논리합(둘 중 하나만 참이어도 참)

2.변수
: 값을 저장할 때 사용하는 식별자
var + 식별자
변수 선언 후 처음 값 할당 = 변수를 초기화한다

<DOCTYPE html>
    <html>
<title>JavaScript Basic</title>
<script>
 var radius = 10;
 var pi = 3.14;
 alert(2 * radius * pi);

</script>
    </html>
</DOCTYPE> 

03. 조건문과 반복분
1. 조건문
<!--if문-->
<!DOCTYPE html>
    <html>
<title>JavaScript Basic2</title>
<script>
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth()+1;
    var day = date.getDate();
    var hours = date.getHours();
    var minites = date.getMinutes();
    var seconds = date.getSeconds();
    if (hours < 12) {
        alert('오전입니다');
    }
    if (12<=hours) { 
        alert('오후입니다');
    }
</script>
</html>
<!--if else문(중첩 상관x)-->

2.반복문

3.배열

4.while문

04.함수
1. 선언과 호출, 실행 우선순위
익명 함수:                  function(){  } ->함수명 존재x
선언적 함수: <!--선언형식--> function 함수(){  

} 
-> 함수명 존재, 마지막에 선언된 함수가 호출(함수 덮어쓰기)
<!--호출형식--> 함수명(); 

**익명함수, 선언적 함수 동시 사용 시 선언적 함수 먼저 읽음
quiz1
<script>
 var 함수 = function () { alert('함수_A');};
 var 함수 = function () { alert('함수_B');};

 함수();
</script>

quiz2
<script>
var 함수 = function () { alert('함수_B');};
function 함수 () {alert('함수_A');};

함수()
</script>

2.매개변수와 반환 값
alert('매개변수')
매개변수-> 함수에 추가적인 정보를 전달하는 것

function 함수이름(매개변수, 매개변수, 매개변수) 
{
    //함수 코드
    return 반환값;
}

quiz3
<script>
function f(x) {
    return 2*x + 1;
}
alert(f(5));
</script>

3.콜백 함수
:매개변수로 전달되는 함수, 함수 자체를 출력하는 함수
매개변수에 함수를 전달해 일회용으로 사용하기 때문에 굳이 함수의 이름을 명시할 필요가 없어 보통 콜백 함수 형태로 함수를 넘겨줄때 함수의 이름이 없는 '익명 함수' 형태로 넣어주게 된다.


// 버튼에 클릭 이벤트 리스너를 추가
button.addEventListener("click", function () { 
  console.log("Button clicked!"); 
});

05.객체
1.객체 개요
:key를 기반으로 자료형 여러개를 저장

2.속성과 메소드
요소: 배열에 있는 값들
속성: 객체에 있는 값들
메서드: 자료형이 함수인 속성
<script>
    var person = {
        name: ' 이은강',
        eat: function (food) {
            alert(this.name + '이' + food + '을 먹는다');
        }
    }
    person.eat('국밥 세그릇');
</script>
this: person 객체를 가르킴 -> this.name = person.name

01. 문서 객체 모델의 기본 용어와 개념
1.문서 객체 모델 기본 용어
문서객체 : html에서의 요소와 같은 개념

노드:트리의 각 요소
요소노드: 요소를 생성하는 노드
텍스트노드: 화면에 출력되는 문자열
동적 생성 : 웹 피이지 실행 중 자바스크립트를 사용해 문서 객체 생성하는 법
DOM(문서 객체 모델) : HTML 파일 분석, 출력 방식

웹 페이지 실행 순서
위->아래
1.문서 객체 사용 오류
2.해결방법
(1)script 태그 위치 옮기기 : 요소 아래에 삽입
-> HTML 페이지가 방대해서 유지 보수하기 어려움

(2)이벤트 활용하기 

02. 문서 객체 선택
         메서드
document.getElementByld(아이디)
document.querySelector(선택자)
document.getElementByName(이름)-여러개선택
document.getElementByClassName(클래스)-여러개선택
document.querySelectorAll(선택자)-여러개선택

03. 문서 객체 조작
1.글자 조작
textContent : 문서 객체 내부 글자 순수 텍스트 형식으로 가져옴
innerHTML : 문서 객체 내부 글자의 HTML 태그를 반영하여 가져옴

2.스타일 조작
*자바스크립트는 '-' 빼고 스타일 지정해야함

3. 속성 조작
setAttribute(속성 이름, 속성 값) : 속성 지정
getAttribute(속성 이름) : 속성 추출

document.body.setAttribute('data-custom', 'value') //속성 지정

var dataCustom = document.body.getAttribute('data-custom');
alert(dataCustom); // 속성 추출

04.이벤트

window.onload = function () { };
onload : 이벤트 속성
on+이벤트 타입 = 이벤트 속성

1. 이벤트 연결
이벤트 모델: 문서 객체에 이벤트를 연결하는 방식
DOM 레벨 0 - 인라인, 고전 이벤트 모델
DOM 레벨 2 - 마이크로소프트 , 표준 이벤트 모델
