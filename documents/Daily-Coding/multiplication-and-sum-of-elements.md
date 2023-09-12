## [일일코딩]원소들의 곱과 합

#### 문제

---

정수가 담긴 리스트 num_list가 주어질 때, 모든 원소들의 곱이 모든 원소들의 합의 제곱보다 작으면 1을 크면 0을 return하도록 solution 함수를 완성해주세요.

#### 제한사항

2 ≤ num_list의 길이 ≤ 10
1 ≤ num_list의 원소 ≤ 9

#### 입출력 예

num_list result
[3, 4, 5, 2, 1] 1
[5, 7, 8, 3] 0

#### 입출력 예 설명

입출력 예 #1
모든 원소의 곱은 120, 합의 제곱은 225이므로 1을 return합니다.

입출력 예 #2
모든 원소의 곱은 840, 합의 제곱은 529이므로 0을 return합니다.

---

#### 내 풀이

```JS
function solution(num_list) {
    var sum = num_list.reduce((acc, curr) =>{return  acc +curr;});

    var mul = num_list.reduce((acc, curr) =>{return acc * curr;} );

    return (sum * sum) > mul ? 1 : 0;

}
```

> 나는 reduce를 사용해서 풀었다.
> 배열.reduce((누적값, 현잿값, 인덱스, 요소) => { return 결과 }, 초깃값);
> 리덕스는 이러한 형태로 사용이 되고 나는 누적값, 현재값을 이용해서 합, 곱을 구했다;
> 그리고 개인적으로 간단한 조건문은 if문 보다는 삼항 연산자를 좋아해서 삼항 연산자르 사용했다
