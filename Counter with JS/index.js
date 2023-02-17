let count=0
const result = document.getElementById("count")
result.innerText = count

const countAddBtn = document.getElementById("add")
countAddBtn.addEventListener("click", ()=>{
    count++
    result.innerText = count
})

const countSubBtn = document.getElementById("sub")
countSubBtn.addEventListener ("click", ()=>{
    count--
    result.innerText = count
})
