// var woowahan = require('woowahan');
// node.js의 common js 구문
// requireJS 기반

import woowahan from 'woowahan';
// ES2015의 import 구문
// 브라우저 지원율이 아주 낮음
// 우리는 다 import를 갖다 쓸거다.

// 컴파일러를 사용해 특정 언어를 OS에서 이해할 수 있게 하는 것 => 컴파일언어
// 한줄 한줄 해석하는 것 => 인터프리터(스크립트 언어)
// A 언어를 B로 만드는 것 => 트랜스파일러
// -> 브라우저에서 표준 구동 가능한 다이나믹 언어가 JS뿐인데,
// -> JS가 마음에 안드니 내가 마음에 드는 언어로 만들어서,
// -> 그걸 JS로 변환하고 싶어서 트랜스파일러의 탄생
// 대표주자: coffeescript, typescript, babel

let app = woowahan();
// woowahan은 함수다.

app.start({
  // 필수 (라우팅 테이블을 받는다)
  // 라우팅
  // 서버사이드 라우팅
  // - 특정 path에 접근하여 요청했을 때 해당 path의 리소스를 제공하는 것
  // 프론트엔드 라우팅 (단일 페이지 앱, Single Page Application)
  // - 첫번째 요청일 때만 HTML을 서버에 요청함.
  // - 서버에서 index.html을 내려주고, 나머지 요청은 JS로 요청(Ajax)
  // - 프론트엔드에서 화면이 바뀌는걸 라우팅이라고 한다.
  // - 프론트엔드에서 서버에 요청보내는 걸 막아야하기 때문에, HTML 스펙의 해시뱅을 사용한다.

}, {
  // 옵션

});
// woowahan app을 실행시킬 때는 start 메서드를 호출한다.
// 두개의 객체 파라미터를 받는다.

// bundling
// 여러개로 분산된 코드를 하나로 번들해주며,
// 트랜스파일도 해주고, 복사도 해주고, 이것저것 해주는 아이
// 대표주자 : webpack, browserify

// export 가능함
// 이름에 대한 의존성을 없애고싶다면 default 구문을 추가할 수 있다.
// export 할 때는 뭐든 다 꺼낼 수 있음
// export let x = 10;
// export let y = 20;

// 중계할 수도 있음.
// resource.js
// export var x = function() { }
// export var y = function() { }

// index.js
// export * from 'resource';

// app.js
// export { x, y } from 'index';