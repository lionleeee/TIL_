## [일일코딩] 잃어버린 괄호

#### 문제

https://www.acmicpc.net/problem/1541

세준이는 양수와 +, -, 그리고 괄호를 가지고 식을 만들었다. 그리고 나서 세준이는 괄호를 모두 지웠다.

그리고 나서 세준이는 괄호를 적절히 쳐서 이 식의 값을 최소로 만들려고 한다.

괄호를 적절히 쳐서 이 식의 값을 최소로 만드는 프로그램을 작성하시오.

#### 입출력 예

55-50+40
<br>
-35

---

#### 내 풀이

```js
require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", (line) => {
    sol(line);
  })
  .on("close", () => {
    process.exit();
  });

function sol(line) {
  var sum = line
    .split("-") // - 연산자 기준으로 나누고 배열을 새로 생성
    .map((str) =>
      str
        .split("+") // + 연산자 기준으로 한번 더 나누고 배열을 새로 생성
        .map(Number) //생성된 배열을 숫자로 변환
        .reduce((a, b) => a + b, 0)
    ); // 값 누적

  //배열의 첫 요소 * 2 하고 모든 요소 더한 후 뺀다
  //reduce에 첫 요소가 포함되기에 *2를 함
  var result = sum[0] * 2 - sum.reduce((a, b) => a + b, 0);
  console.log(result);
}
```

[풀이]
식이 0~9까지의 숫자와 +, - 를 조합한 문자열로 주어진다.
값을 최소로 만들기 위해 적절하게 괄호를 추가해야하는데
여기서 괄호는 실행의 우선순위를 의미한다.
값이 최소가 되는 방법은 + 연산자를 먼저 처리하고 - 연산자를 처리하면 한다.

1. split을 이용해서 - 연산자를 기준으로 나눈다.
2. 나뉜 배열을 + 연산자 기준으로 나눈 후 더한다
3. 그리고 - 연산자를 계산한다
