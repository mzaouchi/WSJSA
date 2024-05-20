https://jsitor.com

console.log("Hello Javascript")
console.log(5)


var djeja = "Achref"

console.log(djeja)

console.log(typeof (djeja))

var a = 10

console.log(a)

console.log(typeof(a))

var mariem = true

console.log(mariem)

console.log(typeof(mariem))

var t = [2,88,66,4,3,0]

console.log(t)

console.log(t[2])

console.log(t[6])

console.log(typeof(t))

var user = {name : "Achref",age : 50}

console.log(user)

console.log(user.name)
console.log(user.age)

console.log(typeof(user))

console.log(Object.keys(user))
console.log(Object.values(user))
console.log(Object.entries(user))

var a


console.log(typeof(a))


var a = null

console.log(typeof(a))


var a = 5
var b = 2
var c = a+b

console.log(a+b)
console.log(c)

console.log(a-b)

console.log(a*b)

console.log(a/b)

console.log(a%b)

console.log(a**b)



var a = 5
var b = 2

console.log(a)

a = 10

console.log(a)

a = a + 1

console.log(a)

a = a + 3

console.log(a)

// a = a + 1
a++

console.log(a)

console.log(a+1)

console.log(a)

a--

console.log(a)


var a = 5
var b = 10
var c = "5"

console.log(a == b)
console.log(a == c)
console.log(a === c)

console.log(a != b)
console.log(a != c)
console.log(a !== c)


var a = 5
var b = 6

console.log(a == b && a != b)
console.log(a == b || a != b)


var age = 70


if(age<18){
  console.log("Enfant")
}else if( age<60){
  console.log("Adulte")
}else{
  console.log("Vieux")
}

var age = 40


if(age<18){
  console.log("Enfant")
}else if(age>= 18 && age<60){
  console.log("Adulte")
}else{
  console.log("Vieux")
}


var mois = 2

switch (mois){
  case 1 : console.log("Janvier")
          break
  case 2: console.log("Fev")
          break
  default : console.log("Undefined") 
}



var i = 0

while (i<3) {
  console.log("Bonjour")
  i++
}



var i = 0

do {
console.log("Bonjour")
i++
} while (i<=3);


function Somme(djeja,kalb){
  var c = djeja + kalb
  return c
}


console.log(Somme(3,45))

console.log(Somme(63, 5))

console.log(Somme(2, 5))
