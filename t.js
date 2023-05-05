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

// function copyToClipboard() {
//   var textToCopy = document.getElementById("text-to-copy");
//   var range = document.createRange();
//   range.selectNode(textToCopy);
//   window.getSelection().removeAllRanges();
//   window.getSelection().addRange(range);
//   document.execCommand("copy");
//   window.getSelection().removeAllRanges();
// }




let form2 = document.getElementById("form2")
let result = document.getElementById("result")
let reset = document.getElementById("reset")
// let inpnew = document.

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
navigator.clipboard?.writeText && navigator.clipboard.writeText(reset);