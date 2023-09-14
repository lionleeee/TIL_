## [일일코딩]이어 붙인 수

#### 문제

---

정수가 담긴 리스트 num_list가 주어집니다. num_list의 홀수만 순서대로 이어 붙인 수와 짝수만 순서대로 이어 붙인 수의 합을 return하도록 solution 함수를 완성해주세요.

#### 제한사항

제한사항

- 2 ≤ num_list의 길이 ≤ 10
- 1 ≤ num_list의 원소 ≤ 9
- num_list에는 적어도 한 개씩의 짝수와 홀수가 있습니다.

#### 입출력 예

| num_list        | result |
| --------------- | ------ |
| [3, 4, 5, 2, 1] | 393    |
| [5, 7, 8, 3]    | 581    |

#### 입출력 예 설명

입출력 예 #1<br>

- 홀수만 이어 붙인 수는 351이고 짝수만 이어 붙인 수는 42입니다. 두 수의 합은 393입니다.

입출력 예 #2<br>

- 홀수만 이어 붙인 수는 573이고 짝수만 이어 붙인 수는 8입니다. 두 수의 합은 581입니다.

---

#### 내 풀이

```JS
function solution(num_list) {
  let even = num_list.filter(a => a%2 ==0)
                      .reduce((acc, cur) => acc + String(cur));
  let odd = num_list.filter(a => a%2 ==1)
                    .reduce((acc, cur) => acc + String(cur));

  return Number(even) + Number(odd);

}
```

> 일단 문제를 보자마자 홀수,짝수를 나눠야 한다고 생각이 들었다.
> 그래서 filter를 사용하여 홀수, 짝수를 분리하였다
> 그 다음 reduce를 사용해서 각 짝수, 홀수의 합을 구하고 합쳐진 수를 리턴했다.
