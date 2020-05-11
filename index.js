//Number

//Math.round() rounds an integer
console.log(Math.round(0.99))
console.log(Math.round(0.5))
console.log(Math.round(0.01))

//Math.floor() rounds down
console.log(Math.floor(0.99))
console.log(Math.floor(0.5))
console.log(Math.floor(0.01))

//Math.ceil() always rounds up
console.log(Math.ceil(0.99))
console.log(Math.ceil(0.5))
console.log(Math.ceil(0.01))

//Math.random() generates a random decimal number 
console.log(Math.random())

//by using round and multiplying by 100 we can generate a random integer between 1-100
console.log(Math.round(Math.random()*100))


//String

//.charAT() will output character at the specificed index 
console.log('text'.charAt(1))

//.substring() will return characters between the specified index's, substring will not return end index
console.log('More Text'.substring(1,6))

//.Substr() is like sub string but the second param sets the number of characters to print indead of where to end
console.log('More Text'.substr(1,6))

//.length is not always needed
let a = 'aaa'; let b = 'ab'
console.log( a < b )

//.indexOf() can find a string of characters in a string and output the start index of the filtered string
console.log('text is a string'.indexOf('string'))

//the filter is case sensitive
console.log('text is a string'.indexOf('String'))

//example funcs
//find sigle char or string
function findStr(str,find) {
    return str.indexOf(find) !== -1
}

console.log(findStr('text is a string','string'))
//find all char or string
function findManyStr(str,find) {
    let result = []
    result.push(str.indexOf(find))
    return result
}

console.log(findManyStr('text is a string','i'))

//.startsWith()
console.log('text example'.startsWith('text'))
console.log('text example'.startsWith('example'))

//.endsWith()
console.log('text example'.endsWith('text'))
console.log('text example'.endsWith('example'))

//.replace
let strEg = 'text'
strEg = strEg.replace('text','string')
console.log(strEg)


//Objects

//making an object
let obj = {}

//adding propertys
obj.addedProp = 'contents'
console.log(obj)

//this is another useful way of adding properties to objects
obj['altAddedProp'] = 'alt contents'
console.log(obj)

//this alt way of adding props allows you to add the contents of a var as the property name
let newProp = 'addViaVar'
obj[newProp] = 'thats handy'
console.log(obj)


//Arrays

//manipluating arrays
let arr = [0]
console.log(arr)
//adding to end
arr.push(2)
console.log(arr)
//adding to start
arr.unshift(1)
console.log(arr)
//adding anywhere
arr.splice(1,0,5)
console.log(arr)
//deleting anywhere
arr.splice(1,1)
console.log(arr)
//deleting end
arr.pop()
console.log(arr)
//deleting start
arr.shift()
console.log(arr)

//diffrence between var and let

//You can declare var after setting its value, once var is declared it hoisted to the top of its scope
egVar = 'example'
var egVar

//let needs to be set before it is used
let egLet
egLet = 'example'
