const link = document.querySelector(".endereco")



function apareca() {
    const modal = document.querySelector(".modal")
    const masc = document.querySelector(".mascara-modal")


    modal.style.left = "50%"
    
    masc.style.visibility= "visible"
}

function esconderForm() {
    const modal = document.querySelector(".modal")
    const masc = document.querySelector(".mascara-modal")
   
    modal.style.left = "-30%"
    
    masc.style.visibility = "hidden"
}


link.addEventListener('click',apareca)