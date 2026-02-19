let datas = [10, 20, "RAM", "XYZ", "sita"];
// console.log(datas);
// console.log(datas[2]);
// console.log(datas.length);

// let length=datas.length;
// for(let i=0;i<length;i++){
//     console.log(datas[i]);
// }

// datas.forEach(data => {
//     console.log(data);
// });

// arrayname.push(value);

// datas.push(30);
// datas.push("ANUBHAV");
// console.log(datas);
// data=unshift("first");
// console.log(datas);
// Array.Push("value");
// array.unshift("first");

// datas[1]="manual";
// console.log(datas);

// array.pop();
// let poppedValue=datas.pop();
// console.log(poppedValue);
// console.log(datas);

// array.shift();
// let poppedValue=datas.shift();
// console.log(poppedValue);
// console.log(datas);

// let newdatas=datas.slice(1,3);
// console.log(newdatas);
// console.log(datas);

// Array.splice(start index / no of element)
// datas.splice(1,3);

// let poppedValue=datas.splice(1,3);
// console.log(poppedValue);
// console.log(datas);

// Array.indexof("element");

// let indexvalue=datas.indexOf("RAM");
// console.log(indexvalue);

// Array.lastindexof("element");
// let indexvalue=datas.lastIndexOf("RAM");
// console.log(indexvalue);

// array.includes("element");
// let checkvalue = datas.includes("RAM");
// console.log(checkvalue);
// console.log(datas);

// array.reverse()
// datas.reverse();
// console.log(datas);

// let newdatas=["orange","apple"];
// datas=datas.concat(newdatas);
// console.log(datas);

// let newdatas=["orange","apple"];
// let newarr=datas.concat(newdatas,datas);
// console.log(newarr);

// let fruits=["orange","apple","mango","banana"];
// console.log(fruits.sort());

// let numbers = [1, 55, 60, 3, 4, 7];
// console.log(numbers.sort());

// ascending order
// console.log(
//   numbers.sort(function (a, b) {
//     return a-b;
//   }));

//   descending order
// console.log(
//   numbers.sort(function (a, b) {
//     return b-a;
//   }));

//   let allnums=[1,2,3,4,5,6,7,8,9,10];
//   let evennums=allnums.filter((num)=> num%2==0);
//   console.log(evennums);
// let total=allnums.reduce((sum,num)=> sum+=num);
// console.log(total);

// syntax:
// array.map((element, index, array) => { ... });

// let salaries = [100, 200, 300,1000]
// console.log(salary.map((element)=> element+10));

//  one step up salaries increment by 10
// let salaries = [100, 200, 300,1000]
// console.log(salaries.map((element)=>{
//   let increment=(10/100)*element;
//   let newelement=element+increment;
//   return newelement;
// }));
// console.log(typeof 200);

// let obj=new Object();
// let obj1={key:"value"};
// let emp={
//     name:"RAM",
//     age:20,
//     faculty:"BIM",
//     salary:50000,
// }
// console.log(emp["name"]);
// console.log(emp.name);
// console.log(emp.age);
// console.log(emp.faculty);
// console.log(emp.salary);

// let employee =[{
//     name:"RAM",
//     salary:2000
// },
// {
//     name:"SITA",
//     salary:60000
// }
// ];

// let students = { name: "RAM", faculty: "BIM", sem: 3 };
// for (let key in students) {
//   console.log(students[key]);
// }

// let name="anubhav";
// for (let key in name) {
//   console.log(name[key]);
// }

// let names ="anubhav";
// console.log(names.toUpperCase());
// console.log(names.toLowerCase());

// let name = "anubhav";
// count=0;
// for(let key in name){
//     alphabet=name[key];
//     alphabet=alphabet.toLowerCase();
//     if
//     (alphabet!="a" || alphabet!="e" || alphabet!="i" || alphabet!="o" || alphabet!="u")
//         {
//         count=count+1;
//     }
// }
//     let msg=`The no of vowel character in ${name} is ${count}`;
//     console.log(msg);

// let num=5;
// let square= Math.pow(num,2);
// console.log(square);

// let num=5.2;
// console.log(Math.floor(num));
// console.log(Math.ceil(num));
// console.log(Math.floor(num));
// console.log(Math.ceil(num));
// console.log(Math.round(num));

// let num= 25
// console.log(Math.abs(num));
// console.log(Math.sign(num));
// console.log(Math.sqrt(num));
// console.log(Math.cbrt(num));
// console.log(Math.max(1,2,3,4));
// console.log(Math.min(1,2,3,4));

// let nums = [1, 2, 3, 4];
// console.log(Math.max(nums));
// console.log(Math.max(...nums)); spread operator(desturcture an operator)
// console.log(Math.max({ nums }));
// console.log(Math.random(...nums));
// console.log(Math.max(nums));
// console.log(Math.random()*10);
// let random=Math.floor(Math.random()*100);
// console.log(random);

// let computer =["rock","paper","scissors"];
// let arraylength = computer.length;
// let randomindex = Math.floor(Math.random() * arraylength);
// console.log(computer[randomindex]);

// date Object()
// let dataobj=new Date();
// console.log(dataobj);
// console.log(dataobj.getDate());
// let day=dataobj.getDay();
// console.log(day);
// console.log(dataobj.getFullYear());
// console.log(dataobj.getMonth());
// console.log(dataobj.getHours());
// console.log(dataobj.getMilliseconds());
// console.log(dataobj.getSeconds());
// console.log(dataobj.getMinutes());

// let clock = document.querySelector("#clock");

// let time = `${hours}:${minutes}:${seconds}`;
// clock.innerText = time;

// setInterval(() => {
//   let dateobj = new Date();
//   let hours = dateobj.getHours();
//   let minutes = dateobj.getMinutes();
//   let seconds = dateobj.getSeconds();
//   let time = `${hours}:${minutes}:${seconds}`;
//   clock.innerText = time;
// }, 1000);
