let arr=[1,2,3,4,5]

//1.배열 구조 분해 할당
let [one, two,three]=arr;

//2.객체 구조 분해 할당
let student={
    name:'gildong',
    age: 30,
    hobby:"piano",
}
let {name, age, hobby}=student;

//3. ...연산자 -spread 연산자
let arr1=[1,2,3];
let arr2=[4,5, ...arr1,6];

console.log(arr2);

let obj1={
    a:1,
    b:2,
}

let obj2={
    ...obg1, //a:1,b:2(obj1.a/obj1.b)
    c:3,
}
console.log(obj2);

function fun(p1,p2,p3){
    console.log(p1,p2,p3);
}
fun(...arr1);
//객체 배열 함수