console.info("Hello World!");
document.getElementById("myHeading").innerHTML = "Mohammad Mobeen";

//document.querySelector("nav ul li").setAttribute("class", "currentPage");
//document.querySelector("nav ul li a").setAttribute("href", "https://www.google.com/");
let colourbuttons = document.querySelectorAll(".colPicker");
console.dir(colourbuttons);
for (let i = 0; i < colourbuttons.length; i++) {

    colourbuttons[i].computedStyleMap.backgroundColor = "yellow";

}

document.getElementById("myTestBtn").addEventListener("click", function () {

    console.info("Hi I was clicked ");
})

//colour picker
let