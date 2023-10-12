# 지정한 날이 몇 주차인지 구하기

월 별 달력에는 첫 행에 1주, 두번 째에는 2주...이런식으로 표시가 되어있음
그리고 일주일은 일요일부터 시작하는 것으로 정해져 있음

```cs
public static int NthWeek(DateTime date){
  var firstDay = new DateTime(date.Year, date.Month, 1);
  var firstDayOfWeek = (int)(firstDay.DayOfWeek);
  return (date.Day + firstDayOfWeeki -1) / 7+1;
}
```

월별 달력의 왼쪽 가장 위 (1일이 일요일이 아니면 전 월의 마지막 일요일)을 기점으로 몇일째인지를 구하고 그것을 7로 나누면 몇 주차인지 알 수 있다.

1. 첫 날을 구하고나서 그 날이 무슨 요일인지를 int로 변환
2. 변환한 값이 해당 일을 더하고 1을 뺀 값이 달력의 왼쪽 가장 위를 기점으로 해서 며칠째인지를 나타냄
3. 이 값을 7로 나누면 몇주차인지 알수 있음
4. 첫 주를 1주차로 지정하기위해 마지막에 1을 더했음
