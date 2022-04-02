//const header = document.querySelector('h1')
//console.log(header.innerHTML)

//header.innerHTML += "Javascript in PinguCoder"

//const headers = document.querySelectorAll('h2');

//headers.forEach((pingu, index) => {
   // pingu.innerText = "Mon titre " + (index + 1)
//})

//const division = document.querySelector('.myContent')
//console.log(division.innerHTML)
//division.innerHTML += "<a href='https://Pingucoder.com'> PinguCoder </a>"




//const para = document.querySelector('p');

//para.classList.add('success')
//para.classList.remove('success')
///para.classList.add('error')

const paras = document.querySelectorAll('p')

paras.forEach(para => {
   if(para.innerText.includes('success')) {
      para.classList.add('success')
   }
   
   if(para.innerText.includes('error')) {
      para.classList.add('error')
   }

})