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

### 실습 : 막대그래프. 단어가 몇 번 나오는지 나타내는 프로그램