# 두 컬렉션이 같은지 검사 SequenceEqual

두 컬렉션(리스트나 배열 등)에 있는 요소가 같은지 조사 할 때 사용

```cpp
var numbers1 = new List<int> {9,7,5,4};
var numbers2 = new List<int> {9,7,5,4};
bool equal = numbers1.SequenceEqual(numbers2);
```

두개가 가진 모든 요소가 같으면 true, 하나라도 다르면 false를 반환한다.
