const button = document.querySelector(".new-colors");
const colorNames = document.querySelectorAll(".name");
const colorBoxes = document.querySelectorAll(".box");
let colors = [];
let index = 0;

button.addEventListener('click', function(){
    let color1 = Math.floor(Math.random()*256);
    let color2 = Math.floor(Math.random()*256);
    let color3 = Math.floor(Math.random()*256);
    colorBoxes.forEach((colorBox)=>{
        if (!$(colorBox).hasClass("dontChangeColor")){
            if (color1>200){
                color1 -= 20;
            }
            else if (color1<100){
                color1 +=20;
            }
            else if (100<color1<200){
                color1 += 30;
            }
            if (color2>200){
                color2 -= 20;
            }
            else if (color2<100){
                color2 +=20;
            }
            else if (100<color2<200){
                color2 += 30;
            }
            if (color3>200){
                color3 -= 20;
            }
            else if (color3<100){
                color3 +=20;
            }
            else if (100<color3<200){
                color3 += 30;
            }
            const color = `rgb(${color1}, ${color2}, ${color3})`;
            colorBox.style.background = color;
        }
        colors.push(colorBox.style.background);
    })
    colorNames.forEach((colorName)=>{
        colorName.textContent = colors[index];
        index ++
    })
})