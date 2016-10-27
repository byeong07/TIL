# server - 생활코딩 이고잉님 수업 

## 수업 내용
- Web Server
- PHP
- MySql

#### 웹 기술이 복잡해지는 이유
- 생산성 : 많은 페이지 개발 
- 소비, 규모 : 많은 사람이 접속해도 괜찮도록 

#### html
- 웹이 폭발적으로 성장하면서 html기술의 의미도 달라졌다. 인간의 사상 등도 담아내는 그릇. 
- 검색엔진 -> html 분석 -> .. 따라서 html을 시멘틱하게 잘 만들어야 한다. 
- 예: header, footer, 본문은 article

#### css

```
#content {
  display: flex;
}

nav { // 브라우저창, 글자 등에 상관없이 nav쪽 고정 
  flex-basis: 200px; 
  flex-grow: 0; // 커질 때 여백 
  flex-shrink: 0; // 작아질 때 여백 
  border-right: 1px solid black;
}
article{ // 브라우저창, 글자 등에 상관없이 article부분 늘어나고 줄어들고 
  flex-grow: 1;
  flex-shrink: 1;
  padding:1rem;
}
```

## 개념 
- 인터넷은 하나
- 웹은 대박을 친 것. 대일밴드처럼.. :) 

- 인터넷을 크게 두개로 나누면 : Client(고객, 갑), Server(을) 
- 웹에서 : Web Client(= 웹 브라우저), Web Server
 - web server 소프트웨어 : Apache(오픈소스. 항상 1등) 등

## server 테스트
- Bitnami : `C:\Bitnami\wampstack-5.6.27-0\manager-windows.exe` -> Manage Servers에서 초록색 -> 웹브라우저가 ip(internet protocol)주소  http://127.0.0.1:81 에 접속(내 컴퓨터 접속)
 - `C:\Bitnami\wampstack-5.6.27-0\apache2\htdocs`가 root
- [관련 개발자 유머 ㅋㅋ](https://opentutorials.org/module/2326/13125)
- 서버는 항상 켜져있다.(안정성이 생명) 예를들어 125.209.222.142는 naver 서버에 접속  
- 웹 브라우저도 ip주소가 필요하다. 

- 같은 와이파이에 접속해있을 경우.. IPv4주소로 들어가면 된다. 
 - 이 주소로 스마트폰(같은 와이파이 접속)으로 테스트할 수 있다.  

## 그 외
- <http://audiotool.com/> 음악 리믹스  
- <http://www.deezer.com/> 목소리 등 
- [이고잉님 꺼](http://www.deezer.com/profile/657636712/loved)