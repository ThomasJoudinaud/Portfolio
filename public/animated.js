const bgAnimation = document.getElementById("bgAnimation")
const numberOfColorsBoxes = 400

for (let i = 0; i < numberOfColorsBoxes; i++) {
    const colorBox = document.createElement("div")
    colorBox.classList.add("colorBox")
    bgAnimation.append(colorBox)
}
