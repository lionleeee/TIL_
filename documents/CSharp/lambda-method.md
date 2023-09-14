# 람다식을 사용하는 메소드

List<T>클래스와 람다식의 조합하는 메소드
즉, List<T> 클래스에는 델리게이트를 인수로 받는 메서드가 있음.

다음과 같이 저장된 List<string> 객체가 있따고 가정

```csharp
var list = new List<string>{
  "Seoul","New Delihi", "Bangkok", "London", "Paris"
}
```

이 객체에 대해 람다식을 사용하는 메서드

1. Exists 메서드
   Exists 메서드는 인수로 지정한 조건에 일치하는 요소가 존재하는지 조사하고 true나 false를 반환

```csharp
var exists = list.Exists(s => s[0] =='A');
```

2. Find 메서드
   Find 메서드는 인수로 지정한 조건과 일치하는 요소를 검사하고 처음 발견된 요소를 반환

```csharp
var name = list.Find(s => s.Length == 6);
```

3. FindIndex 메서드
   FindIndex 메서드는 Find와 비슷함, 발견된 요소는 인덱스를 반환

```csharp
int idx = list.FindIndex(s => s == "London");
```

4. FindAll 메서드
   FindAll 메서드는 인수로 지정한 조건과 일치하는 모든 요소를 찾음

- 이 메서드의 반환값은 List<T>임

```csharp
var names = list.FindAll(s => s.Length <=5);
```

5.RemoveAll 메서드
인수로 지정한 조건과 일치하는 요소를 리스트에서 삭제.
반환값은 삭제한 요소의 개수

```csharp
var removeCnt = list.RemoveAll(s => s.Contains("on"));
```

6.  ForEach 메서드
    인수로 지정한 처리 내용을 리스트의 각 요소를 대상으로 실행

- 이전 메서드는 Predicate<T> 델리게이트를 인수로 받는 메서드지만, Foreach는 Action<T> 델리게이트를 인수로 받음

```csharp
list.ForEact(s => console.WriteLine(s));
foreact(var s in list){
  ...
}
```

7. ConvertAll 메서드
   리스트 안에 있는 요소를 다른 형으로 변환하고 변환된 요소가 저장된 리스트를 반환

```csharp
var lowerList = list.ConvertAll(s => s.ToLower());
```
