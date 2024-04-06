(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{324:function(_,v,t){"use strict";t.r(v);var l=t(14),r=Object(l.a)({},(function(){var _=this,v=_._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h1",{attrs:{id:"아키텍처-1"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#아키텍처-1"}},[_._v("#")]),_._v(" 아키텍처_1")]),_._v(" "),v("h2",{attrs:{id:"트레이드-오프"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#트레이드-오프"}},[_._v("#")]),_._v(" 트레이드 오프")]),_._v(" "),v("ul",[v("li",[_._v("아키텍처처럼 생각하는 것은 기술 여부와 상관없이 모든 솔루션의 트레이드오프를 분석하고 결정하는 것\n(아키텍처는 구글링해도 안된다)")])]),_._v(" "),v("p",[_._v('아키텍처는 질문마다 "경우에 따라 다르다"라는 대답이 많다.'),v("br"),_._v("\n듣는 사람 입장에서는 짜증나지만 사실이다. REST와 메시징 중 어느게 더 나을지, MAS가 딱 맞는 아키텍처 스타일일지 "),v("strong",[_._v("상황에 따라 다르다는 것")]),_._v("이다.")]),_._v(" "),v("br"),_._v(" "),v("br"),_._v("\n아키텍처가 어렵다는 말이 나오는건, 환경, 상황, 문제를 안고 있기 때문이다.\n"),v("blockquote",[v("p",[_._v("아키텍처는 정답도, 오답도 없다.")])]),_._v(" "),v("h2",{attrs:{id:"모듈성"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#모듈성"}},[_._v("#")]),_._v(" 모듈성")]),_._v(" "),v("h4",{attrs:{id:"응집"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#응집"}},[_._v("#")]),_._v(" 응집")]),_._v(" "),v("ul",[v("li",[_._v("한 모듈의 구성요소가 동일한 모듈 안에 얼마나 포함되어 있는지는 나타냄")]),_._v(" "),v("li",[_._v("이상적으로 응집되면 모든 구성요소가 함께 패키징 되어있음")])]),_._v(" "),v("p",[_._v("응집도의 측점 범위")]),_._v(" "),v("blockquote",[v("p",[_._v("좋은 응집부터 안좋은 응집 순차적")])]),_._v(" "),v("ul",[v("li",[v("p",[_._v("기능적 응집")]),_._v(" "),v("ul",[v("li",[_._v("모듈의 각 파트는 다른 파트와 연관되어 있고 기능상 꼭 필요한 모든 것이 모듈이 포함")])])]),_._v(" "),v("li",[v("p",[_._v("순차적 응집")]),_._v(" "),v("ul",[v("li",[_._v("두 모듈이,한쪽이 데이터를 출력하면 다른 한쪽이 그것을 입력받는 형태의 상호작용")])])]),_._v(" "),v("li",[v("p",[_._v("소통적 응집")]),_._v(" "),v("ul",[v("li",[_._v("두 모듈이, 각자 정보에 따라 작동하고 어떤 출력을 내는 형태로 통신체인을 형성")])])]),_._v(" "),v("li",[v("p",[_._v("절차적 응집")]),_._v(" "),v("ul",[v("li",[_._v("두 묘듈은 정해진 순서대로 실행되어야 함")])])]),_._v(" "),v("li",[v("p",[_._v("일시적 응집")]),_._v(" "),v("ul",[v("li",[_._v("모듈은 시점 의존성에 따라 연관됨")]),_._v(" "),v("li",[_._v("많은 시스템들이 시동 할 때 관련이 없어 보이는 것들까지 초기화과 되는 것")])])]),_._v(" "),v("li",[v("p",[_._v("논리적 응집")]),_._v(" "),v("ul",[v("li",[_._v("모듈의 내부 데이터는 기능적 뿐만 아니라 논리적으로도 연관 되어있음")])])]),_._v(" "),v("li",[v("p",[_._v("동시적 응집")]),_._v(" "),v("ul",[v("li",[_._v("같은 소스 파일에 들어있찌만 아무 연관성이 없음")])])])]),_._v(" "),v("br"),_._v(" "),v("br"),v("br"),_._v(" "),v("blockquote",[v("p",[_._v("아키텍처에서 가장 흔한 안티패턴, 모든 아키텍처 특성을 지원하는 제네릭 아키텍처를 설계하려는 것")])]),_._v(" "),v("p",[_._v("아키텍처 특성 하나하나가 전체 시스템 설계를 복잡하게 만드는 요인이기에, 너무 많은 특서을 수용하면 의도했떤 문제 영역을 해결하기 전에 너무 복잡해 짐\n-> 가급적 설계를 단순화하는게 좋음")]),_._v(" "),v("p",[_._v("아키텍처 특성은 핵심 도메인 이해관계자의 의견을 듣고 도메인 관점에서 무엇이 중요한지 의견을 교환하며 정리하게 됨\n"),v("br"),_._v("\n아키텍트와 이해관계자들이 서로 다른 언어로 말하는게 문제가 됨")]),_._v(" "),v("ul",[v("li",[_._v("아키텍처는 확장성, 상호운용성, 학슴성, 가용성을 생각함")]),_._v(" "),v("li",[_._v("이해관계자는 인수병합, 고객만족, 출시 시점, 경쟁우위 등을 생각함")])]),_._v(" "),v("p",[_._v("말이 안통하니 서로 답답한 문제가 생김.\n"),v("br")]),_._v(" "),v("p",[_._v("도메인 관심사를 아키텍처 특성으로 옮겨야하는데, 아래는 일반적인 관심사와 특성을 정리 한 표")]),_._v(" "),v("table",[v("thead",[v("tr",[v("th",[_._v("도메인관심사")]),_._v(" "),v("th",[_._v("아키텍처 특성")])])]),_._v(" "),v("tbody",[v("tr",[v("td",[_._v("인수 합병")]),_._v(" "),v("td",[_._v("상호운용성, 확장성, 적응성, 신장성")])]),_._v(" "),v("tr",[v("td",[_._v("출시 시기")]),_._v(" "),v("td",[_._v("민첩성, 시험성, 배포성")])]),_._v(" "),v("tr",[v("td",[_._v("유저 만족")]),_._v(" "),v("td",[_._v("성능, 가용성, 내고장성, 시험성, 배포성, 민첩성, 보안")])]),_._v(" "),v("tr",[v("td",[_._v("경쟁 우위")]),_._v(" "),v("td",[_._v("민첩성, 시험성, 배포성, 확장성, 가용성, 내고장성")])]),_._v(" "),v("tr",[v("td",[_._v("시간 및 예산")]),_._v(" "),v("td",[_._v("단순성, 실행성")])])])])])}),[],!1,null,null,null);v.default=r.exports}}]);