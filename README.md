# Disney+ 반응형 웹 사이트
HTML, CSS, JavaScript, React를 이용한 Disney+ 반응형 웹 사이트입니다.

![Disney+](https://github.com/sehyeongcho/react-disney-plus-app/assets/124948262/5c19259e-7059-4486-8051-eafbbb4204e0)

- Demo: <a href="https://react-disney-plus-app-b3aa3.web.app/" target="_blank">https://react-disney-plus-app-b3aa3.web.app/</a>

## 프로젝트 목표
Disney+ 웹 사이트 클론을 통해 아래 내용을 수행해 보면서 이해도를 높이는 것이 이 프로젝트의 목표입니다.
- 웹의 구조를 담당하는 HTML
- 콘텐츠를 꾸며주는 시각적인 표현을 담당하는 CSS
- 페이지를 동작시키는 동적 처리를 담당하는 JavaScript
- 사용자 인터페이스를 만들기 위한 JavaScript 라이브러리인 React
- Redux 라이브러리를 이용한 상태 관리
- Firebase 플랫폼을 이용한 Google 로그인 및 프로젝트 배포

## 사용 기술
- HTML
- CSS
- JavaScript
- React

## 학습 내용
- `useEffect`의 의존성 배열이 비어 있으면 이 `useEffect`는 컴포넌트가 렌더링 된 후 한 번만 실행됩니다. `return`은 이 컴포넌트가 더 이상 사용되지 않을 때 호출됩니다.
- `padding-top: 56.25%`를 사용하게 되면 부모 요소의 `width`를 기준으로 측정되기 때문에 16:9 비율이 유지됩니다.
- 렌더링이 될 때마다 함수도 새로 생성되기 때문에 이를 방지하려면 `useCallback`을 사용해야 합니다.
- `BrowserRouter`는 URL과 UI의 동기화를 유지해 줍니다.
- `left: 50%`는 요소를 부모 요소의 가로 너비를 기준으로 왼쪽에서 50% 떨어진 위치에 배치하라는 의미입니다. `transform: translate(-50%, 0)`은 요소를 자신의 가로 너비를 기준으로 왼쪽으로 50% 이동하라는 의미입니다. 따라서, `left: 50%`, `transform: translate(-50%, 0)`을 함께 사용하면 요소를 수평 가운데 정렬할 수 있습니다.
- `URLSearchParams` 인터페이스는 URL의 쿼리 문자열을 대상으로 작업할 수 있는 유틸리티 메소드를 정의합니다.
- Redux와 같은 상태 관리 라이브러리를 사용하는 이유는 state와 props를 사용해서 컴포넌트 간에 전달하는 방법에 단점이 존재하기 때문입니다. 자녀 컴포넌트가 1개인 경우에는 props를 사용해서 한 번 내려주는 것에서 그치므로 괜찮은데, A 컴포넌트의 자녀 컴포넌트 B, B 컴포넌트의 자녀 컴포넌트 C, 이런 식으로 컴포넌트가 10개인 경우에는 props를 사용해서 열 번 내려줘야 하고, state가 변경되는 순간 다시 열 번 내려줘야 합니다. 이러한 과정을 개선하기 위해 상태 관리 라이브러리를 사용하는 것입니다.
- Redux에서 state는 store에 저장되어 있으며 action을 통해서만 state를 변경할 수 있습니다. 사용자가 state를 변경하고자 하는 경우 dispatch 함수를 통해 action을 reducer에게 전달해야 state가 변경되고 컴포넌트가 렌더링 됩니다.
- 사용자가 새로고침을 하더라도 계정 데이터가 사라지지 않고 유지되게 하기 위해서 redux-persist를 사용합니다.
