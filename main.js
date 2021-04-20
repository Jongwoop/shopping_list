const items = document.querySelector('.items')
const addBtn = document.querySelector('.addBtn')
const input = document.querySelector('.input')


function add() {
  const text = input.value
  if (text.length < 1) {
    input.focus()
    return;
  }
  createItem(text);
  console.log(text);

  input.value = '';
  input.focus();
}

function createItem(text) {
  const newItem = document.createElement("div");
  newItem.setAttribute("class", "item");

  const name = document.createElement('span');
  name.setAttribute("class", "item__name" );
  name.innerText = text;

  const deleteBtn = document.createElement('button');
  deleteBtn.setAttribute("class", "deleteBtn")
  deleteBtn.innerHTML = `<i class="far fa-trash-alt"></i>`
  deleteBtn.addEventListener('click', ()=>{
    items.removeChild(newItem);
    items.removeChild(divider);
  })

  const divider = document.createElement("div");
  divider.setAttribute("class", "divider");

  items.appendChild(newItem);
  newItem.appendChild(name);
  newItem.appendChild(deleteBtn);
  items.appendChild(divider);  
}

addBtn.addEventListener('click', () =>{
  add();
})

input.addEventListener('keypress', () => {
  if (event.keyCode === 13) {
    add();
  }
})