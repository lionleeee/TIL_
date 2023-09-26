# 여러개의 요소 구하기 Take

## Take

조건을 만족하는 요소를 지정된 개수만큼 배열에서 구할 때 사용

```cpp
var numbers =new List<int> {9, 7,-5,-4,-2,5,4,0};
var results = numbers.Where(n => n>0).Take(5);
```

Take 메서드는 요소가 지정된 개수만큼 없어도 오류를 발생시키지 않고, 구할 수 있는 만큼만 구함

## TakeWhile

조건을 만족하는 동안만 요소를 구한다.
조건을 만족하지 않는 요소가 발견된 시점에서 멈춘다.

```cpp
var selected = books.TakeWhile(x =>x.Price < 6000);
```

위 코드는 book 리스트를 첫 요소부터 시작하여 서적의 가격이 6000원 미만인 동안에만 책 객체를 구함.
가격이 6000원 이상인 책이 발견된 시점에서 작업을 끝냄

## SkipWhile

조건을 만족하는 동안에만 요소를 건너뛰는 메서드

```cpp
var numbers= new List<int> {9, 7,-5,-4,-2,5,4,0,-4,7,4};
var results = numbers.SkipWhile(n => n >= 0).ToList();
```

위 코드는 값이 0이상인 동안에는 건너뛰고 그 이후에 나오는 요소를 구함
그럼 위 값은 {-4, 7, 4}가 된다.

그 외 알면 좋은 메소드

### Select

모든 요소에 어떤 가공을 가해서 새로운 컬렉션을 만들 때 사용

```cpp
var numbers =new List<int> {8,20,15,48,2};
var strings = numbers.Select( n=> n.ToString("0000")).toArray();
```

strings에는 {"0008","0020","0015"...}이 담긴다.

### Distinct

컬렉션에 중복된 요소를 제거하는데 사용

```cpp
var numbers= new List<int> {8,20,15,48,2,2,10,52,1,8};
var result = numbers.Distinct().ToList();
```

### Concat

두 컬렉션을 연결한다

```cpp
string[] str1 = new List<string>{"하나","둘"};
string[] str2 = new List<string>{"셋","넷"};
var string3 = str1.Concat(str2);
```
