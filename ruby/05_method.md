# Ruby

## Methods, Blocks, & Sorting
자체 메서드 정의, 블럭을 사용하여 강력한 정렬 알고리즘 개발하기 

### Method

메서드는 프로그램에서 특정 작업을 수행하도록 작성된, 코드의 재사용 가능한 섹션이다. 
- 프로그램을 잘 구성한 경우 버그를 찾기 쉽다. 
- 프로그램을 중복하지 않고 코드를 재사용하게 해준다. 
- 다른 프로그램 작성시에도 재사용할 수 있다. 

```
def methodName arguments 		# 메서드 header
	# Do something! 			# 메서드 body
end 							# 메서드 end 

methodName						# 메서드 호출 
```

#### splat arguments

- argument가 몇 개 들어올지 모를 때 (적어도 한개 이상)
- argument앞에 `*` 를 붙인다. 

```
def what_up(greeting, *bros)
  bros.each { |bro| puts "#{greeting}, #{bro}!" }
end
 
what_up("What up", "Justin", "Ben", "Kevin Sorbo")

# 결과
What up, Justin!
What up, Ben!
What up, Kevin Sorbo!
```

#### return 

```
def double(n)
  return n * 2
end

output = double(6)
output += 2
puts output
```

### Blocks

- 이름없는 메소드와 비슷하다. 
- `{}` or `do ... end` 

- Block와 Method의 차이점 
```
# Method
def capitalize(string) 
  puts "#{string[0].upcase}#{string[1..-1]}" 	# [1..-1] : 두번째 배열값부터 모두. [1..string.length] 로 해도 된다.  
end

capitalize("ryan") 		# prints "Ryan"
capitalize("jane") 		# prints "Jane"

# Block
["ryan", "jane"].each {|string| puts "#{string[0].upcase}#{string[1..-1]}"} 	# prints "Ryan", then "Jane"
```