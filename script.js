let names =document.getElementById("name")
let month =document.getElementById("month")
let year =document.getElementById("year")
let number =document.getElementById("number")
let cvv =document.getElementById("cvc")
let confirm=document.getElementsByClassName("confirmed")
let p=document.querySelector(".back p")
let namee=/[0-9]/ig
let exm=/\d{4}\s\d{4}/
let numbers=/[a-z]/ig
function check() {
    if (namee.test(names.value) === true || names.value === ""){
        names =document.getElementById("name")
        console.log("jchsdjhd")
        names.style.borderColor="red"
        names.value=""
        names.nextElementSibling.style.display="block"
      
    }else{
        names =document.getElementById("name")
        
        names.style.borderColor="black"
        names=true
    }
    if (numbers.test(number.value) === true || number.value == "" || number.value.match(exm) === null) {
        number =document.getElementById("number")
        console.log("kjjvkfd")
        number.style.borderColor="red"
        number.value=""
        number.nextElementSibling.style.display="block"

    }else{
        number =document.getElementById("number")
        number.style.borderColor="black"

        number=true
    }
    if (numbers.test(month.value) === true || month.value == "" || month.value.match(/\d{2}/) === null) {
        month =document.getElementById("month")
        console.log("kjjvkfd")
        month.style.borderColor="red"
        month.value=""
        month.nextElementSibling.style.display="block"

    }else{
        month =document.getElementById("month")
        month.style.borderColor="black"
        month=true
    }
    if (numbers.test(cvv.value) === true || cvv.value == "" || cvv.value.match(/\d{3}/) === null  ) {
        cvv =document.getElementById("cvc")
        console.log("kjjvkfd")
        cvv.style.borderColor="red"
        cvv.value=""
        cvv.nextElementSibling.style.display="block"

    }else{
        cvv =document.getElementById("cvc")
        p.innerHTML=cvv.value
        cvv.style.borderColor="black"
        cvv=true
    }
    if (numbers.test(year.value) === true || year.value == "" || year.value.match(/\d{2}/) === null) {
        year =document.getElementById("year")
        console.log("kjjvkfd")
        year.style.borderColor="red"
        year.value=""
        year.nextElementSibling.style.display="block"

    }else{
        year =document.getElementById("year")
        year.style.borderColor="black"
        year=true
    }
    if (year===true && cvv===true && month===true && number===true && names===true) {
        confirm[0].style.display="block"
        confirm[0].style.backgroundColor="white"
    }

}
