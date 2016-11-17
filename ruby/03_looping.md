# Ruby

## Looping 

### while loop

- true인 동안, 몇 번 반복할지 모를 때  
- Infinite loops(무한 루프)를 조심하라!

```
# 1 ~ 10
counter = 1
while counter < 11
  puts counter
  counter = counter + 1
end
```

### until loop 

- while반복문의 반대개념 
- false인 동안 반복 

```
# 1 ~ 10
counter = 1
until counter > 10
  puts counter
  counter += 1
end
```

### for loop 

```
for num in 1...10  			# 변수 num 범위 : 1부터 10 전 까지 puts num 반복 
  puts num
end
```

- `...` 은 마지막 숫자 포함하지 않는다. 
- `..` 은 마지막 숫자를 포함한다. 

### loop 메소드 

```
i = 0
loop do
  i += 1
  print "#{i}"
  break if i > 5
end
```

- ruby에서 `{ }` 는 do, end로 대체할 수 있다. 

### next 키워드 

```
for i in 1..5
  next if i % 2 == 0 		# skip(건너뛴다)
  print i
end

# 결과 
135
```

```
i = 20
loop do
  i -= 1   					    # 첫줄에 해줘야 무한루프에 안빠지는 것 같다. 
  next if i % 2 == 1		# 홀수는 skip한다. 
  print i
  break if i <= 0
end
```

### .each 반복 메소드

> `object.each { |item| # Do something }` <br>
> `object.each do |item| # Do something end`

```
array = [1,2,3,4,5]

array.each do |x|
  x += 10
  print "#{x}"          # 각 배열의 값을 10씩 곱한 것을 출력
end
```

### .times 반복 메소드

- 지정된 횟수만큼 반복 수행
- `10.times { print "Chunky bacon!" }` : Chunky bacon! 10번 출력 

#### 실습 : 1 ~ 50까지 숫자 출력 

- while 
```
i = 1
while i <= 50 do
    print i
    i += 1
end
```

- until
```
i = 1
until i > 50 do
    print i
    i += 1
end
```

- for
```
for i in 1..50
    print i
end
```

#### 실습 : 30번 출력하기 

- loop
```
i = 0
loop do
    i += 1
    print "Ruby!"
    break if i == 30
end
```

- times
```
30.times { print "Ruby!" }
```

#### 실습 : string의 일부 문자를 바꾸기 
```
redactWord = "REDACTED"
puts "text"
text = gets.chomp           # 처음입력받은 문자
puts "redact"
redact = gets.chomp         # 두번째 입력받은 문자

words = text.split(" ")     # 처음 입력받은 문자 간격이 있으면 배열 값으로 받는다. 

words.each do |word|        # 배열값만큼 반복 
    if word.downcase == redact.downcase       # 배열값과 두번째 입력받은 문자가 같다면 (대소문자 구분하지 않고)
        print "#{redactWord} "   # 출력 
    else
        print word + " "
    end
end
```