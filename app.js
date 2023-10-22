
const form=document.querySelector('#form');
const items=document.querySelector('ul');
const submit_button=document.querySelector('#submit');
const input=document.querySelector('#input');
const  buttonDisable=()=>{
    submit_button.disabled=true;
    submit_button.style.cursor='not-allowed';
    submit_button.style.opacity='0.5';
}
const  buttonEnable=()=>{
    submit_button.disabled=false;
    submit_button.style.cursor='auto';
    submit_button.style.opacity='1';
}


const makeListItem=()=>{
    const newitem=document.createElement('li');
    newitem.id=crypto.randomUUID();
    newitem.innerHTML=`<input type="checkbox"  class="check" id=${crypto.randomUUID()} onclick="toggleCheck(this.id)">`;
    newitem.innerHTML+=`<input type="text" class="itemname" value=${input.value}>`;
    newitem.innerHTML+=`<i class='fa fa-trash del' onclick='this.parentElement.remove()'></i>`;
    return newitem;
}

function toggleCheck(id){
   const check=document.getElementById(`${id}`);
   if(check.checked){
    check.parentElement.childNodes[1].style.textDecoration='line-through';
   }
   else{
    check.parentElement.childNodes[1].style.textDecoration='none';
   }
}

input.addEventListener('input',()=>{
    if(input.value=='')buttonDisable(); 
    else buttonEnable();
})
form.addEventListener('submit',(event)=>{
    event.preventDefault();
    items.append(makeListItem());
    input.value='';
    buttonDisable();
   
})
