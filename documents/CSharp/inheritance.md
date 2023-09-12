# 상속

상속은 쉽게 is a관계가 성럽될 때 사용할 수 있음
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
