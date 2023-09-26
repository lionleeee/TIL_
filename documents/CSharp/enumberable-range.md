# 배열 반복 데이터 채우기

### Enumerable.Repeat

배열에 같은 값을 연속적으로 채울 때 사용

```cpp
var myArray = Enumerable.Repeat(-1, 10).ToList();
//-1로 10개를 채운다
```

### Enumerable.Range

배열에 1,2,3,4...20과 같이 연속되는 숫자값을 채울 때 사용

```cpp
var myArray = Enumerable.Range(1,20).ToList();
```

### [결론]

컬렉션에 연속된 숫자값을 설정하는 코드를 쓸 일은 많이 없을 것 같다.
하지만 테스트 코드를 작성하거나 확인하는 용도로 쓰기에는 좋을 것 같다.
저걸 사용하지 않으면 반복문을 사용해야하니...
