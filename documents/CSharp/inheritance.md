# 상속

상속은 쉽게 is a관계가 성립될 때 사용할 수 있음
<br>
is a 관계란?

```
OOO은 XXX이다
```

가 성립 되는 관계를 말한다.

```cpp
public class Person{
  public string Name{get;set;}
}
public class Employee : Person{
  public int Id{get;set;}
}
```

위와 같이 "사원은 사람이다"라는 관계를 말한다

ia a관계가 성립되지 않을 때는 잘못된 설계이므로 한번 더 확인 해보길 바란다.

사원은 사람이므로 사람취급하는 것이라고 생각하면 편하다.
반대로, 사람은 사원이 아닐 수도 있으므로(고객 일 수도 있음) 사원으로 취급 할 수 없다.

C#에서 모든 형을 상속해준 클래스를 거슬러 올라가면 최정적을 Object 클래스를 만나게 된다. 다시말해 클래스 계층의 정점에 있는 것은 Object 클래스.

클래스를 정의 할 때 상속할 클래스를 지정하지 않으면 상속되는 부모 클래스는 Object 클래스가 된다.

예를 들어 아래 두개의 클래스 선언은 같다.

```cpp
class Persson{
  ...
}
class Persson : object{
  ...
}
```

이렇게 '모든 클래스는 object다'라고 할 수 있으므로 다음과 같이 대입이 가능하다

```cpp
object person = new Person();
```

이렇게 하면 여러 가지 형의 객체를 저장하는 배열이나 여러 가지 형의 객체를 받는 메서드를 정의 할 수 있다.
