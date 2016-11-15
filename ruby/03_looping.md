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
  # Add code to update 'counter' here!
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
  i -= 1   					# 첫줄에 해줘야 무한루프에 안빠지는 것 같다. 
  next if i % 2 == 1		# 홀수는 skip한다. 
  print i
  break if i <= 0
end
```