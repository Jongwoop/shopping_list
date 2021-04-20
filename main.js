const items = document.querySelector('.items')
const addBtn = document.querySelector('.footer__addBtn')
const input = document.querySelector('.footer__input')


function add() {
  const text = input.value
  if (text.length < 1) {
    input.focus()
    return;
  }
  item = createItem(text);
  items.appendChild(item);
  item.scrollIntoView({block: 'center'});

  input.value = '';
  input.focus();
}

function createItem(text) {
  const itemRow = document.createElement("li");
  itemRow.setAttribute("class", "item__row");
  
  const item = document.createElement("div");
  item.setAttribute("class", "item");

  const name = document.createElement('span');
  name.setAttribute("class", "item__name" );
  name.innerText = text;

  const deleteBtn = document.createElement('button');
  deleteBtn.setAttribute("class", "item__delete")
  deleteBtn.innerHTML = `<i class="far fa-trash-alt"></i>`
  deleteBtn.addEventListener('click', ()=>{
    items.removeChild(itemRow);
  })

  const divider = document.createElement("div");
  divider.setAttribute("class", "item__divider");

  itemRow.appendChild(item);
  itemRow.appendChild(divider);  
  
  item.appendChild(name);
  item.appendChild(deleteBtn);

  return itemRow;
}

addBtn.addEventListener('click', () =>{
  add();
})

input.addEventListener('keypress', () => {
  if (event.keyCode === 13) {
    add();
  }
})