const washBtn = document.getElementById("wash-btn")
const mowBtn = document.getElementById("mow-btn")
const pullBtn = document.getElementById("pull-btn")
const sendBtn = document.getElementById("send-button")
const ulEl = document.getElementById("list")
const priceEl = document.getElementById("price-tag")
let content = []

function render(){
    let total = 0
    ulEl.innerHTML=""
    for(let i = 0; i<content.length;i++){
        ulEl.innerHTML += createLi(content[i][0],content[i][1])
        total += content[i][1]
    }
    priceEl.textContent = "$"+total
}

function createLi(name,price){
    return `
    <li>
        <div class="spread-list">
            <p>${name}</p>
            <p>${"$"+price}</p>
        </div>
    </li>
    
    `
}

sendBtn.addEventListener("click",function(){
    content = []
    render()
})

washBtn.addEventListener("click",function(){
    content.push(["Wash Car",10])
    render()
})
mowBtn.addEventListener("click",function(){
    content.push(["Mow Lawn",20])
    render()
})
pullBtn.addEventListener("click",function(){
    content.push(["Pull Weed",30])
    render()
})