// Script for navigation bar




let sepet = document.querySelector("#sepet")

const sepeteEkle = document.querySelectorAll(".arttir")

console.log(sepeteEkle);


    let sepetA =  0;

    sepeteEkle.forEach((buton)=>{

        buton.addEventListener("click", () =>{
            console.log("is clicked");
        sepetA++;
        // sepet.textContent = sepetA;
        console.log(sepetA);
        sepet.setAttribute('data-content', sepetA);

    })
})
