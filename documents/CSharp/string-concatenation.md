# 문자열 연결

```cs
var s1 = "abc";
s1 = s1 + "xyz";
//abc는 더이상 사용하지 않음
//6자 만큼 영역이 확보되고 거기에 abc가 복사된 후 xyz가 복사됨
```

C#에서 문자열은 불면객체로 변하지 않는 객체.
다시 말해 ㅎ나번 생성된 문자열은 두 번 다시 수정 할 수 없다는 것.

위와 같은 코드는 인스턴스가 새로 생성되서 s1에 저장되는 방식으로 동작되며 위와 같이 코드를 작성하면 인스턴스가 엄청나게 생성이 됨

그렇기에 StringBuilder를 사용함.
이건 문자열 인스턴스를 생성하느 특수한 클래스로 문자열을 효율적으로 연결 할 수 있게 도와줌

```cs
using System.Text;

...
//StringBuilder에서 인수를 안넣으면 자동으로 영역이 16으로 생성됨
//확보된 영역을 초과했을 경우 자동으로 늘어남
var sb = new StringBuilder();
foreach(var work in GetWorks()){
  sb.Append(word);
}
var text = sb.ToString();
return text;
```

### 왜 string은 불변객체일까?

값을 수정 할 수 없다는 것은 불편한 일이지만 안전성을 높이기 위해서는 중요한 일

```cs
var target = "안녕하세요";
DoSomething(target);
return target;
```

문자열이 수정 가능한 객체라고 하면 DoSomething 메서드를 호출하고 돌아왔을 때, target에 들어 있는 문자열이 수정 됐을 수도 있음
<br>
프로그래머는 당연히 안에 값이 그대로 일 것이라고 생각 하고 이후 처리 할 내용을 처리했는데, 값이 수정되면 정상 작동이 안될 수도 있다는 뜻

<br><br><br>
