# nullable이 뭘까?

### null 키워드와 nullable 형식(null 허용 형식)

C# 에서는null 키워드를 사용해 null이라는 상태를 표시함
<br>
null은 아무것도 없다라는 것을 의미하는 상수이며 참조형 변수의 기본값.

다음과 같이 참조형 변수를 초기화하지 않고 선언한 경우에도 변수가 null로 초기화 됨

```cpp
Product item;
```

다음과 같이 변수 값이 null 인지 확인 할 수 있음

```cpp
if(item == null){
  ...
}
```

문자열도 참조형이므로 null을 가질 수 있고, null 값을 가진 문자열이라는 것은 길이가 0인 비어있는 문자인 ""을 의미함

값형에는 일반적으로 null을 지정 할 수없다. 값 형이 null을 지정 할 수 있게 하려면 nullable 형을 사용해야한다

```cpp
int? num =null; //형 이름 앞에 ?을 붙이면 nullable 형이 된다

if(num.HasValue) // HasValue 속성으로 null 이외의 값이 지정 됐는지 확인 가능

num.Value // Value 속성으로 값을 가져올 수 있다
```
