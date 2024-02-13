# 챕터5__교재 HTML5 웹프로그래밍 입문 3판

### 후손 선택자
: 후손 선택자는 특정한 태그의 후손을 선택할 때 사용  

```
<!DOCTYPE html>
<html lang="en">
<head>
    <title>CSS3 Selector Basic</title>
    <style>
        #header h1 {color : red;}
        #section h1 { color : orange;}
    </style>
</head>
<body>
    <div id = "header">
        <h1 class = "title">Lorem ipsum</h1>
        <div id = "nav">
            <h1>Navigation</h1>
        </div>
    </div>
    <div id = "section">
        <h1 class = "title">Lorem ipsum</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
</body>
</html>
```
위 코드처럼, 후손 선택자를 사용해 특정한 대상의 후손이라는 것을 구별.  
#header 태그 아래에 위치한 h1 태그에는 빨간색을 적용하고, #section 태그 아래에 위치한 h1태그에는 주황색을 적용


### 자손 선택자
: 자손 선택자는 특정한 태그의 자손을 선택할 때 사용  
형태 : 선택자A > 선택자B
설명 : 선택자A의 자손인 선택자B 선택

```
<!DOCTYPE html>
<html lang="en">
<head>
    <title>CSS3 Selector Basic</title>
    <style>
        #header > h1 {color : red;}
        #section > h1 { color : orange;}
    </style>
</head>
<body>
    <div id = "header">
        <h1 class = "title">Lorem ipsum</h1>
        <div id = "nav">
            <h1>Navigation</h1>
        </div>
    </div>
    <div id = "section">
        <h1 class = "title">Lorem ipsum</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
</body>
</html>
```

### 반응 선택자
: 반응 선택자는 사용자 반응으로 생성되는 특정한 상태를 선택한다.  
사용자가 특정 태그 위에 마우스 커서를 올리면 hover 상태고, 특정 태그를 마우스로 클릭하면 active 상태이다.  

- :active 사용자가 마우스로 클릭한 태그 선택
- :hover 사용자가 마우스 커서를 올린 태그 선택

```
<!DOCTYPE html>
<html lang="en">
<head>
    <title>CSS3 Selector Basic</title>
    <style>
        h1:hover {color : red;}   /*  h1 : hover, h1 :hover 처럼 글자가 떨어지면 안됨 */
        h1:active {color : blue;}
    </style>
</head>
<body>
    <h1>반응 선택자</h1>
</body>
</html>
```


### 상태 선택자
: 상태 선택자는 입력 양식의 상태를 선택할때 사용한다.  
선택자가 어떤 상태인지 알아야 상태 선택자를 쉽게 사용할 수 있다.  

- :checked  : 체크 상태의 input 태그 선택
- :focus : 포커스를 맞춘 input 태그 선택
- :enabled : 사용 가능한 input 태그 선택
- :disabled : 사용 불가능한 input 태그 선택

```
<!DOCTYPE html>
<html lang="en">
<head>
    <title>CSS3 Selector Basic</title>
    <style>
        /* input 태그가 사용 가능할 때
            background-color 속성에 white 키워드를 적용합니다. */
        input:enabled { background-color : white}
        /* input 태그가 사용 불가능할 때
            backgound-color 속성에 gray 키워드를 적용합니다. */
        input:disabled { background-color : gray}
        /* input 태그에 포커스를 맞출 때
            background-color 속성에 orange 키워드를 적용합니다. */
        input:focus { background-color : orange}
    </style>
</head>
<body>
    <h2>사용 가능</h2>
    <input>
    <h2>사용 불가능</h2>
    <input disabled = "disabled">
</body>
</html>
```

- 추가적으로 HTML5 에서 주석을 <!-- 주석 --> 형태로 작성했지만, 스타일시트에서는 /* 주석 */ 형태로 작성한다
- 하지만, 자바스크립트의 한 줄 주석은 스타일시트에서 사용할 수 없으므로 주의한다.
