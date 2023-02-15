let text = document.getElementById('text');

document.getElementById('bold').addEventListener('click',function(){
   text.classList.toggle('bold')    
})
document.getElementById('italic').addEventListener('click',function(){
   text.classList.toggle('italic')    
})
document.getElementById('inderLine').addEventListener('click',function(){
   text.classList.toggle('inderLine')    
})


function align(id) {
   text.style.textAlign=id;
}


document.getElementById('font_size').addEventListener('change',function(e){
   let size = parseInt(e.target.value)
   text.style.fontSize = size+"px"
})


document.getElementById('select_color').addEventListener('change',function(e){
   let color = e.target.value
   text.style.color = color
})