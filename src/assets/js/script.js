const btnList = document.querySelectorAll(".btn-comprar");

btnList.forEach(btn => {

    btn.addEventListener("click", (produto) => {
        console.warn({ produto })
    })

})

function addProduto(produto) {  
    console.log({ produto})
}


console.warn("import script")