 /*
<!--
Name: Avnii Vaish
Name of the file: homework1.html
Date created: 09/20/2024
Description: Homework: JS
Date last updated: 10/19/2024
-->
*/
//dynamic date js code//
const d = new Date();
let text = d.toLocaleDateString()
document.getElementById("today").innerHTML = text;

//range slider js code//
let slider = document.getElementById("health_scale")
let output = document.getElementById("health_scale-slider")
output.innerHTML = slider.value;

slider.oninput = function () {output.innerHTML = this.value;};
