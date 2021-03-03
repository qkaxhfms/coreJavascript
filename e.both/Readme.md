# RequestAnimationFrame

-   setInterval, keyFramed과 다른 애니메이션 구현 방법

## 사용방법

-   웹 브라우저에게 수행하기를 원하는 애니메이션을 알리고 다음 리페인트가 진행되기 전에 해당 애니메이션을 업데이트하는 함수를 호출하게 한다.
-   이 메소드는 리페인트 이전에 실행할 콜백을 인자로 받습니다.

## Parameter

-   performance.now()

---

### 추가지식: 모니터 화면 주사율 : Hz, FPS(Frams Per Second)

모니터 화면에 1초에 몇번의 프레임을 출력하는 지에 대한 단위 기준
일반적인 모니터의 화면 주사율 60hz (1초에 60프레임)

-   웹 브라우저에서 최대 보여줄수 있는 FPS는 60

## 개발자 👨‍💻

### 👨‍💻 [곽민상](https://github.com/qkaxhfms)
