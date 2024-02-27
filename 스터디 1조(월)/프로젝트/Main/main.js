// 캘린더 일정 수정은 74번줄 코드 참고할 것

//갤러리

const slides = document.querySelector('.slides'); //전체 슬라이드 컨테이너
const slideImg = document.querySelectorAll('.slides li'); //모든 슬라이드들
let currentIdx = 0; //현재 슬라이드 index
const slideCount = slideImg.length; // 슬라이드 개수
const prev = document.querySelector('.prev'); //이전 버튼
const next = document.querySelector('.next'); //다음 버튼
const slideWidth = 500; //한개의 슬라이드 넓이
const slideMargin = 500; //슬라이드간의 margin 값

//전체 슬라이드 컨테이너 넓이 설정
slides.style.width = (slideWidth + slideMargin) * slideCount + 'px';

function moveSlide(num) {
  slides.style.left = -num * 550 + 'px';
  currentIdx = num;
}

prev.addEventListener('click', function () {
  /*첫 번째 슬라이드로 표시 됐을때는 
  이전 버튼 눌러도 아무런 반응 없게 하기 위해 
  currentIdx !==0일때만 moveSlide 함수 불러옴 */

  if (currentIdx !== 0) moveSlide(currentIdx - 1);
});

next.addEventListener('click', function () {
  /* 마지막 슬라이드로 표시 됐을때는 
  다음 버튼 눌러도 아무런 반응 없게 하기 위해
  currentIdx !==slideCount - 1 일때만 
  moveSlide 함수 불러옴 */
  if (currentIdx !== slideCount - 1) {
    moveSlide(currentIdx + 1);
  }
});


(function(){
  $(function(){
    // calendar element 취득
    var calendarEl = $('#calendar')[0];
    // full-calendar 생성하기
    var calendar = new FullCalendar.Calendar(calendarEl, {
      height: '700px', // calendar 높이 설정
      expandRows: true, // 화면에 맞게 높이 재설정
      slotMinTime: '08:00', // Day 캘린더에서 시작 시간
      slotMaxTime: '20:00', // Day 캘린더에서 종료 시간

      // 해더에 표시할 툴바
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
      },
      initialView: 'dayGridMonth', // 초기 로드 될때 보이는 캘린더 화면(기본 설정: 달)
      initialDate: '2024-02-19', // 초기 날짜 설정 (설정하지 않으면 오늘 날짜가 보인다.)
      navLinks: true, // 날짜를 선택하면 Day 캘린더나 Week 캘린더로 링크
      editable: false, // 수정 가능하게 or 못 하게
      selectable: false, // 달력 일자 드래그 설정가능
      nowIndicator: true, // 현재 시간 마크
      dayMaxEvents: true, // 이벤트가 오버되면 높이 제한 (+ 몇 개식으로 표현)
      locale: 'ko', // 한국어 설정
      eventAdd: function(obj) { // 이벤트가 추가되면 발생하는 이벤트
        console.log(obj);
      },
      eventChange: function(obj) { // 이벤트가 수정되면 발생하는 이벤트
        console.log(obj);
      },
      eventRemove: function(obj){ // 이벤트가 삭제되면 발생하는 이벤트
        console.log(obj);
      },
      
      // !!!!!중요!!!!! 이벤트 수정
      events: [


        /*
        작성 예시
        {
          title: 'Long Event',
          start: '2024-02-10',
          end: '2024-02-12',
        },
        */


        {
          title: 'CHIC Orientation',
          start: '2024-01-08',
        },
        {
          title: '제1회 아이디어톤',
          start: '2024-01-18'
        },
        {
          title: 'TECH Seminar',
          start: '2024-02-21',
        },
        {
          title: '스터디 회고 & 개강 미팅',
          start: '2024-03-04'
        }
      ]
    });

    // FullCalendar에서 일정을 클릭했을 때의 동작
    calendar.setOption('eventClick', function(info) {
      // 이벤트를 클릭하면 모달에 이벤트의 상세 정보 표시
      const endText = info.event.end ? info.event.end : '~midnight';
      $('#eventDetails').html('📅' + info.event.title + '📅' + '<br><br>Start: ' + info.event.start + '<br>End: ' + endText);
      $('#eventModal').modal('show');
    });

  // X 버튼을 눌렀을 때 이벤트 디테일을 초기화하고 모달을 닫기
  $('#eventModal .close').on('click', function() {
    $('#eventDetails').html('');  // 이벤트 디테일 초기화
    $('#eventModal').modal('hide');  // 모달 닫기
  });

    // 캘린더 랜더링
    calendar.render();
  });
})();
