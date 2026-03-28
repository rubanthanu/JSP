document.addEventListener("readystatechange", (event) => {
    if(event.target.readyState === "complete") {
        console.log("DOM fully loaded and parsed");
        initApp();

}});

function initApp() {
    console.log("Initializing application...");
    // Add your initialization code here
    const myContent = ["Earn", "Grow", "Give"];
const myObject = {
name: "Dhuddu",
myContent: ["Earn", "Grow", "Give"],
logName: function() {
console.log(this.name);
}
};

window.localStorage.setItem("myLocalStore", JSON.stringify(myObject));

const myLocalData = JSON.parse(localStorage.getItem("myLocalStore"));
console.log(myLocalData);
}
