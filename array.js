//Example

var our_array = ["John", 23];
var array_in_array = [['the universe', 42], ['everything', 1101010101]]
//

var my_array = ["One", 1]
var my_array_in_array = [["Bulls", 27], ["White Sox", 45]]

console.log(our_array[0], our_array[1])
console.log(array_in_array[0], array_in_array[1])
console.log(array_in_array[0][0], array_in_array[0][1])
console.log(array_in_array[1][0], array_in_array[1][1])

//we can modify values inside arrays

my_array[0] = "eno"
console.log(my_array[0])

//push appends a value into an array
my_array.push("two")
console.log(my_array)
my_array.push(2)
console.log(my_array)

//pop removes the last value from an array and return the value
var container = my_array.pop()
console.log(container)
console.log(my_array)
console.log(my_array.pop())
console.log(my_array)

//shift removes the fist value from an array and return the value
my_array.push("two")
my_array.push(2)
container = my_array.shift()
console.log(container)
console.log(my_array)
console.log(my_array.shift())
console.log(my_array)

//unshift puts a value on the first index and moves the existing ones one index up
my_array.unshift(1)
my_array.unshift("one")
console.log(my_array)

var my_shopping_list = [["cereal", 3], ['milk', 2], ['eggs', 12]]