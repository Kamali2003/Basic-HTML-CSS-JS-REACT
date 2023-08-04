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

f=10
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
e=10
for(i=0;i<e;i++){
    console.log(i)
}

//array
array=[10,20]
array.forEach(element => console.log(element)) 

//object and class
m=() => console.log("Hello, World")
m()
class key{
    abcd="alphabet";
    diff(){
        console.log("believe in god")
    }
    sum(){
        console.log("mithul")
    }

}
m=new Object()
m.name="vidhya"
console.log(m)
object1=new key()
console.log(object1.abcd)
object1.sum()
