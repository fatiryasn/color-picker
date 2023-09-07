const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
const button = document.getElementById("btn")
const color = document.querySelector(".color")
const history = document.querySelector('.colorHistory')
const menu = document.querySelector('.menu')
const appcon = document.querySelector('.appcon')
const appcon2 = document.querySelector('.appcon2')
const appcon3 = document.querySelector('.appcon3')

button.addEventListener("click", function(){
    let hexColor = "#"
    for(let i = 0; i<6; i++){
    hexColor += hex[getRandomColor()]}

    color.textContent = hexColor
    document.body.style.backgroundColor = hexColor
    
    const newButton = document.createElement('button')
    newButton.classList.add("jsButton")
    newButton.addEventListener('click', function(){
        const range = document.createRange();
        range.selectNode(newLine);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
        document.execCommand("copy");
        window.getSelection().removeAllRanges();

    alert("Hex is already copied to your clipboard!")
    })

    const newColor = document.createElement('p')
    newColor.style.backgroundColor = hexColor
    newColor.style.color = 'rgba(0,0,0,0)'
    newColor.style.borderRadius = '5px'
    newColor.style.marginBottom = '42.8px'
    newColor.style.marginTop = '20px'
    newColor.style.height = '10px'
    newColor.style.userSelect = 'none'

    const newLine = document.createElement('p')
    newLine.style.color = 'white'
    newLine.style.padding = '1.2px'

    newLine.innerHTML = hexColor
    newButton.innerHTML = "Copy"
    newColor.innerHTML = '------'
    appcon.appendChild(newLine)
    appcon2.appendChild(newButton)
    appcon3.appendChild(newColor)
})

const clear = document.querySelector('.clear')
clear.addEventListener('click', function(){
    while(appcon.firstChild){
        appcon.removeChild(appcon.firstChild)
        appcon2.removeChild(appcon2.firstChild)
        appcon3.removeChild(appcon3.firstChild)
    }
})

function getRandomColor(){
    return Math.floor(Math.random() * hex.length)
}

function copy(){
    const range = document.createRange();
    range.selectNode(color);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();

    alert('Hex is already copied to clipboard!')
}
const tombolCopy = document.getElementById("copy");
tombolCopy.addEventListener("click", copy);


var jumlahKlik = 0;

function tambahKlik(){
    jumlahKlik++;
    document.querySelector(".click").textContent = "Click = " + jumlahKlik;
}
function resetClick(){
    jumlahKlik = 0
    document.querySelector(".click").textContent = "Click = " + jumlahKlik
    document.body.style.backgroundColor = "#FFFFFF"
    color.textContent = "#FFFFFF"
}
const bars = document.querySelector('.bars')
bars.addEventListener('click', function(){
    menu.classList.toggle('active')   
    clear.classList.toggle('active')
})