fetch("http://localhost:3000/").then((resposta)=>{
        resposta.json().then((data)=>{
        //document.querySelector("#produtos").innerHTML = data
        data.map((item)=>{
            let li = document.createElement('li')
            li.innerText = item
            document.querySelector("#produtos").append(li)
        })
    })    
})


document.querySelector("#procurar").addEventListener("click", ()=>{
    const texto = document.querySelector('#texto').value
    fetch(`http://localhost:3000/${texto.toLowerCase()}`).then((resposta)=>{
        resposta.json().then((data)=>{
            document.querySelector("#produtos").innerHTML = data
})    })
})  