// array
const array=[10,20,"kamali",23.0,Date()]

for (var ele  in array){
    console.log(array[ele])
}
console.log("after change:")
/* array[0]=Date.UTC() */
array.push("3rd Years")

array.pop()
array.pop()
array.pop()
array.pop()

if(array.length > 0){
    console.log("elements are present")
    for (var ele  in array){
        console.log(array[ele])
    }
}
else{
    console.log("no elements")
}


for (var ele of array){
    console.log(ele)
}

//objects

a={
    car:"audi",
    model:"AB",
    airbags: '0',
    wheels: '5',
    color:"grey"
}
console.log(a.car)
console.log(a.model)
console.log(a.airbags)
console.log(a.wheels)
console.log(a.color)

var d="America"
console.log(a[d])
console.log(a)
a.car="nano"
console.log(a)
a.sunproof={ispresent:"yes" , shape :"circle"}
console.log(a.sunproof.shape)
for (var ele in a){
    console.log(ele+":" +a[ele])
    if(typeof a[ele] === "object"){
        for (var val in a[ele]){

            console.log(val+ ":" + a [ele][val])
        }
    }
}

//function
function fun_name(){
    console.log(a+ b+5 +"ksp" +5+5)
    return a+ b+5 +"ksp" +5+5
}
fun_name(5,5)


//fib

