# JavaScript Basics
udacity 과정 

## 목표
- JSON 객체에 이력서 내용을 담고, 웹페이지에 보여주는 방식. 
- html 하드코딩 하지 않고 템플릿을 불러오는 방식을 쓴다. 


#### 내용이 없으면 각 파트가 보이지 않도록 설정한 코드 (display: none)

```
if(document.getElementsByClassName('flex-item').length === 0) {
  document.getElementById('topContacts').style.display = 'none';
}
if(document.getElementsByTagName('h1').length === 0) {
  document.getElementById('header').style.display = 'none';
}
if(document.getElementsByClassName('work-entry').length === 0) {
  document.getElementById('workExperience').style.display = 'none';
}
if(document.getElementById('map') === null) {
  document.getElementById('mapDiv').style.display = 'none';
}
```

#### jQuery library를 사용해서 내용을 넣어보자. 

```
$("#main").append("Hong HS"); // id가 main인 요소에 첨부하기
```
#### String.Replace()

```
var email = "kshopzoa15@nate.com";
var newEmail = email.replace("nate", "gmail");

결과 
console.log(email);
VM651:1 kshopzoa15@nate.com
console.log(newEmail);
VM652:1 kshopzoa15@gmail.com
```