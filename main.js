/*const ul = document.querySelector('.listVal');

ul.firstElementChild.textContent = 'hello';
ul.firstElementChild.style.color = 'green';
ul.children[1].style.color = 'yellow';*/
const btn = document.querySelector('.btn');
btn.addEventListener('mouseout', e => {
    e.preventDefault();
   console.log(e.target.className);
    document.getElementById('my-form').style.background = '#cec';
    document.querySelector('body').classList.add('bg-green');
    ul.lastElementChild.innerHTML = '<h1>Changed</h1>';
 });
 
btn.addEventListener('mouseover', e => {
    e.preventDefault();
   console.log(e.target.className);
    document.getElementById('my-form').style.background = '#ccc';
    document.querySelector('body').classList.add('bg-dark');
    ul.lastElementChild.innerHTML = '<h1>Changed</h1>';
 });
  
const myform = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput= document.querySelector('#email');
const msg= document.querySelector('.msg');
const userList = document.querySelector('#users');
myform.addEventListener('submit', onSubmit);
function onSubmit(e){
    e.preventDefault();
    if(nameInput.value ==='' || emailInput.value ==='')
    {
        msg.classList.add('error');
        msg.innerHTML='PLEASE ENTER ALL FIELDS';
        setTimeout(()=>msg.remove() , 3000);

    }
    else{
        const li = document.createElement('li');

    li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));
    userList.appendChild(li);
    nameInput.value = '';
    emailInput.value = '';
  }
}

btn.addEventListener('click', e => {
    e.preventDefault();
   console.log(e.target.className);
    document.getElementById('my-form').style.background = '#ecc';
    document.querySelector('body').classList.add('bg-dark');
    ul.lastElementChild.innerHTML = '<h1>Changed</h1>';
 });
    
