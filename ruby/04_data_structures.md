# Ruby

## Data Structures

### dimensional array (다차원 배열) : 배열내에 배열이 있는 경우  

### Hashes : index name을 가진 배열 

- Hashes are sort of like JavaScript objects or Python dictionaries.
- key-value 로 되어 있다. 
```
hash = {
  key1 => value1,
  key2 => value2,
  key3 => value3
}
```

#### Hash 다른 방법으로 정의하기 

- `my_hash = Hash.new` : empty hash, {} 와 같다. 

```
pets = Hash.new
pets["Jenny"] = "dog"
```

#### each 메소드로 배열값 출력 

```
s = [["ham", "swiss"], ["turkey", "cheddar"], ["roast beef", "gruyere"]]

s.each do |sub_array|
    sub_array.each do |el|
        puts el
    end
end
```

#### each 메소드로 hash값 출력

```
secret_identities = {
  "The Batman" => "Bruce Wayne",
  "Superman" => "Clark Kent",
  "Wonder Woman" => "Diana Prince",
  "Freakazoid" => "Dexter Douglas"
}
  
secret_identities.each do |secretname, realname|
    puts "#{secretname}: #{realname}"
end
```

### 실습 : 막대그래프. 입력한 단어가 몇 번 나오는지 나타내는 프로그램

1. 입력받기 

 ```
 puts "input your text"
 text = gets.chomp
 ```

2. 입력받은 값을 공백기준으로 나눠 배열로 저장하기 

 ```
 words = text.split(" ")
 ```

3. hash 데이터타입으로 counting 할 변수 정의 

 ```
 frequencies = Hash.new(0)      #(0)은 default vlaue = 0 이라는 뜻 
 ``` 

4. frequencies 값을 활용하여, 같은 값일 경우 1 더하기 

 ```
 words.each do |x|            # x는 입력받은(변수words) 배열의 각 값 
    frequencies[x] += 1       # frequencies = {"입력받은 배열의 각 값": "value + 1"}
 end
 ```

5. 많은 순서대로 정렬하기 

 ```
 frequencies = frequencies.sort_by do |x, count|
    count
 end
 frequencies.reverse!
 ```
 - `.sort_by`     : 정렬 메소드 
 - `|x, count|`   : frequencies 값을 x, count로 받아서 
 - `count`        : count 값을 기준으로 정렬한다. 
 - `.reverse!`    : 많은 순서여야 하므로 반대 

6. 출력하기 

 ```
  frequencies.each do |word, count|
    puts word + " " + count.to_s
 end
 ```
 - `.to_s`      : 숫자 -> 문자 