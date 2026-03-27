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
const evenDivs=view1.querySelectorAll("div:nth-child(even)");
console.log(evenDivs);
const oddDivs=view1.querySelectorAll("div:nth-child(odd)");
console.log(oddDivs);
const text=document.querySelector("nav h1");
text.innerHTML='<h1>JavaScript</h1>';
console.log(evenDivs[0].parentElement);

