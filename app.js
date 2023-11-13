// Script for navigation bar




let sepet = document.querySelector("#sepet")

const sepeteEkle = document.querySelectorAll(".fa-cart-shopping")
console.log(sepeteEkle);


    let sepetA =  0;

    sepeteEkle.forEach((buton)=>{

        buton.addEventListener("click", () =>{
        sepetA++;
        sepet.textContent = sepetA;
        sepet.setAttribute('data-content', sepetA);

    })
})
