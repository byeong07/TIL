# Ruby
Back-end 개념 이해를 위해 [코드카데미](https://www.codecademy.com) 공부 

## Introduction to Ruby

- Ruby is a powerful, flexible programming language you can use in web/Internet development, to process text, to create games, and as part of the popular Ruby on Rails web framework. Ruby is: <br>
루비는 강력하고 유연한 프로그래밍 언어로서 웹, 인터넷 개발, 게임 개발 등을 할 수 있으며 인기있는 프레임워크인 루비 온 레일즈가 있다.<br><br>

- High-level, meaning reading and writing Ruby is really easy—it looks a lot like regular English!<br>
하이레벨.<br><br>

- Object-oriented, meaning it allows users to manipulate data structures called objects in order to build and execute programs. We'll learn more about objects later, but for now, all you need to know is everything in Ruby is an object.<br>
객체지향.<br><br>

- Easy to use. Ruby was designed by Yukihiro Matsumoto (often just called "Matz") in 1995. Matz set out to design a language that emphasized human needs over those of the computer, which is why Ruby is so easy to pick up.<br>
사용하기 쉽다. <br><br>

### Variables & Data types (변수, 데이터 타입)

#### Data Types: Numbers, Strings, Booleans

#### Variables

#### Math
- Addition (+)
- Subtraction (-)
- Multiplication (*)
- Division (/)
- Exponentiation (**)  `2**3 은 2의 3승 = 2*2*2 = 8`
- Modulo (%)

#### 'puts' and 'print'
- print : 화면에 출력하라
- puts : new line에 출력하라 
```
print "Oxnard Montalvo1"
print "Oxnard Montalvo2"

puts "What's up?"
print "Oxnard Montalvo3"

# 결과
Oxnard Montalvo1Oxnard Montalvo2What's up?
Oxnard Montalvo3nil
```

#### Everything in Ruby is an Object 모든 것은 객체이다. 
- Because everything in Ruby is an object (more on this later), everything in Ruby has certain built-in abilities called methods. <br>
모든 것은 객체이기 때문에, 메소드라 부르는 기본 능력을 가지고 있다. 

##### `.length` Method 문자열의 길이 반환 
- `"sharry Hong".length` 결과 `11`

##### `.reverse` Method 문자열을 거꾸로 
- `"sharry Hong".reverse` 결과 `"gnoH yrrahs"`
- list 정렬을 거꾸로 할 때 등에 쓰인다. 

##### `.upcase` & `.downcase` Method 대문자로 소문자로 
```
puts "sharry Hong".upcase
puts "sharry Hong".downcase

# 결과 
SHARRY HONG
sharry hong
```

#### Single-Line Comments 한줄 주석 `#`

#### Multi-Line Comments 
```
=begin
I'm a comment!
I don't need any # symbols.
=end
```

#### Naming Conventions 네이밍 규칙 
- 소문자로 시작한다. 
- `_`를 사용한다. 