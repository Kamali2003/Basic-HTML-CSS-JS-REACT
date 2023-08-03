var a=120;
console.log("this is the value declared for before altering the  type:",a)
{
    var a=7;
    console.log("This is after altering the type "+" " +a)
}
console.log("This is the value declaredced in block altering the type",a)
let b=128;
{
    let b=7
   console.log("the value inside the block" ,b)
}
console.log("this is the value declared in the let type:",b)
const r=20;
console.log("this is the value declared in the const :",r)

a=10
if( a === 0 ){
    console.log("the number is zero, we are adding one to it",a)
    a=a+1
}
else if(a > 0){
    console.log("the number is positive",a)
}
else{
    console.log('the number is negative',a)
}

//while loop
i=0
while(i< a){
    console.log(i)
    i++
}

//for loop
a=10
for(i=0;i<a;i++){
    console.log(i)
}

//array
array=[10,20]
array.forEach(element => console.log(element))
