# 문자열에서 일부 추출하기

> 개발을 하다보면 string 에서 일부를 추출해서 사용 해야 할 때가 있습니다.

```cs
var target = "Novelist= 김만중, BestWork=구운몽, Born=1687";

var value ="BestWork=";
var startIndex = target.IndexOf(value) + value.Length;
var endIndex = target.IndexOf(",", startIndex);
var bestWork =  target.Substring(startIndex,endIndex - startIndex);

return bestwork;
```

위와 같은 코드를 작성하면 '구운몽'이라는 값이 반환됩니다.
