var color = document.getElementsByTagName("body")[0].style;


function changeBackground() {
   var arr_color = ["green" , "red", "blue"];
   color.backgroundColor = arr_color[Math.floor(Math.random() * arr_color.length)];
   console.log(color.backgroundColor)
}