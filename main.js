const obj={
    name:"John",
    age:30,
    city:"New York"
};
 
console.log(obj.name); // Output: John
const sendJson=JSON.stringify(obj);
console.log(sendJson); // Output: {"name":"John","age":30,"city":"New York"}
const recive =JSON.parse(sendJson);
console.log(typeof recive); // Output: string