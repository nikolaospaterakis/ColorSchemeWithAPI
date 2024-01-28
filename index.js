
const bodyEl = document.querySelector('body')

bodyEl.addEventListener("click",function(e){
    if(e.target.id === "btn"){
        fetchData()
    } else if
        (
            e.target.id === "tc1" 
            || e.target.id === "tc2" 
            || e.target.id === "tc3"
            || e.target.id === "tc4"
            || e.target.id === "tc5"
            ) {
        copyHex(e.target.id)
    } else if (e.target.id === "sun") {
        document.getElementById("sun").classList.add("hidden")
        document.getElementById("moon").classList.remove("hidden") 
        bodyEl.style.backgroundColor = "black"
        bodyEl.style.color = "#D1D5DB"
        document.getElementById("menu").style.backgroundColor = "white"
    } else if (e.target.id === "moon") {
        document.getElementById("sun").classList.remove("hidden")
        document.getElementById("moon").classList.add("hidden") 
        bodyEl.style.backgroundColor = "white"
        bodyEl.style.color ="black"
        document.getElementById("sun").style.color = "black"
    }
})

function fetchData() {
    const color = document.getElementById("get-color").value
    const mode = document.getElementById("slc-mode").value
    const colorArr = color.split("#")
    fetch(`https://www.thecolorapi.com/scheme?hex=${colorArr[1]}&mode=${mode}`)
        .then(res => res.json())
        .then(data => {
            colorColumns(data)
        })
}

function colorColumns(colorsData) {
    let changeColor =  ``
    for(let i=0; i<5; i++){
        changeColor = `rgb(${colorsData.colors[i].rgb.r},` + `${colorsData.colors[i].rgb.g},` + `${colorsData.colors[i].rgb.b})`
        document.getElementById(`c${i+1}`).style.backgroundColor = `${changeColor}`
        document.getElementById(`tc${i+1}`).innerHTML = `${colorsData.colors[i].hex.value}`
    }
    
}

function copyHex(hex) {
    let copiedColor = document.getElementById(`${hex}`)
    navigator.clipboard.writeText(copiedColor.textContent)
    alert("Copied the color: " + copiedColor.textContent);
}