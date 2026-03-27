const myobj={
    name:"John",
    age:30,
    city:"New York"};
console.log(Object.keys(myobj)  );

for (let x in myobj) {
    console.log(x);
}
console.log(myobj.hasOwnProperty("name")  );