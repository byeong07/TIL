# Ruby

## Control Flow 

### If / elsif / else / end

```
print "Integer please: "
user_num = Integer(gets.chomp)

if user_num < 0
  puts "You picked a negative integer!"
elsif user_num > 0
  puts "You picked a positive integer!"
else
  puts "You picked zero!"
end
```

### unless : false일 때
 
```
hungry = false

unless hungry
  puts "I'm writing Ruby programs!"
else
  puts "Time to eat!"
end

#결과
I'm writing Ruby programs!
```

### 실습 

```
print "Thtring, pleathe!: "
user_input = gets.chomp 			# input받기 
user_input.downcase! 				# 소문자로 변환하여 저장 

if user_input.include? "s" 			# "s" 가 있으면 true 
  user_input.gsub!(/s/, "th") 		# s를 th로 바꾼다.
else
  puts "Nothing to do here!"
end
  
puts "Your string is: #{user_input}"
```

- `include?` 메소드
- `.gsub!` 메소드 : global substitution