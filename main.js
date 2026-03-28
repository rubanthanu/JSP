const x=document.getElementById("view1");
console.log(x);
const y=document.querySelector("#view1");
console.log(y);
const z=document.querySelectorAll(".view2");
console.log(z);
const divs=view1.querySelectorAll("div");
console.log(divs);
const divs2=view1.getElementsByTagName("div");
console.log(divs2);
const dosome =() => {
    alert("Hello World");

};
function dosome2(){
    alert("Hello World");
}
divs2[0].addEventListener("click",dosome2);


document.addEventListener
("readystatechange", (event) => {
if (event.target.readyState ===
"complete") {
console.log("complete");
initApp();
})
const initApp = () => {
    console.log("App initialized");
};
