// // Url 
// let a = []

// document.querySelectorAll('.post_name').forEach(item => {
//   a.push(item.innerText) 
// })
// console.log(a);

// // Href

// let b = []


// document.querySelectorAll('a .row-title').forEach(item=>{
//   b.push(item.href)
// })
// console.log(b);


// document.querySelector('a.row-title').innerText






let form2 = document.getElementById("form2")
let form1 = document.getElementById("form1")
let result = document.getElementById("result")
let reset = document.getElementById("reset")

form2.addEventListener('submit',(e)=>{
  e.preventDefault();
   let valuenew = document.querySelector("#new").value
   let valh3 = document.querySelector("#valh3").value
   let content = document.querySelector("#content").value
  
  
  result.value += `
  <h3 class="toc-h3" id="${valuenew}">
  ${valh3}
  </h3>
  <p>
  ${content}
  </p>`
  document.querySelector('#new').value = ""
  document.querySelector("#valh3").value = ""
  document.querySelector("#content").value = ""
})

reset.onclick = () =>{
  result.value=""
}

form1.addEventListener('submit',(e)=>{
  e.preventDefault();
  let h2 = document.querySelector("#h2").value
  let valh2 = document.querySelector("#valh2").value
  let content2 = document.querySelector("#content2").value
 
  result.value += `
  <h2 id="${h2}">${valh2}</h2>
<p>
${content2}
</p>`
  document.querySelector('#h2').value = ""
  document.querySelector("#valh2").value = ""
  document.querySelector("#content2").value = ""

}
  
  )