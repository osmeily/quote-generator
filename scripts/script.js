let box = document.getElementById("quote-box")
let boton = document.getElementById("new-quote")

document.addEventListener("DOMContentLoaded", async()=>{
    const resp = await fetch('https://api.quotable.io/random');
    const data = await resp.json();
    box.innerHTML=`
            <div class="text">
            ${data.content}
            </div>
            <div class="author">- ${data.author}
            </div>
    `
})

boton.addEventListener("click", async() => {
    const resp = await fetch('https://api.quotable.io/random');
    const data = await resp.json();
    box.innerHTML=`
            <div class="text">
            ${data.content}
            </div>
            <div class="author">- ${data.author}
            </div>
    `
})