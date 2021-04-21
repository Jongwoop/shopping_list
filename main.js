const items = document.querySelector('.items')
const addBtn = document.querySelector('.footer__addBtn')
const input = document.querySelector('.footer__input')


function onAdd() {
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

let id = 0; // UUID
function createItem(text) {
    const itemRow = document.createElement("li");
    itemRow.setAttribute('class', 'item__row')
    itemRow.setAttribute('data-id', id)
    itemRow.innerHTML = `
      <div class="item">
        <span class="item__name">${text}</span>
        <button class="item__delete">
          <i class="far fa-trash-alt" data-id=${id}></i>
        </button>
      </div>
      <div class="item__divider"></div>
      `
    id++;
  return itemRow;
}

addBtn.addEventListener('click', () =>{
  onAdd();
})

input.addEventListener('keypress', () => {
  if (event.keyCode === 13) {
    onAdd();
  }
})

items.addEventListener('click', event => {
  const id = event.target.dataset.id
  if (id) { 
    const toBeDeleted = document.querySelector(`.item__row[data-id="${id}"]`);
    toBeDeleted.remove();
  }
})


 // const itemRow = document.createElement("li");
  // itemRow.setAttribute("class", "item__row");
  
  // const item = document.createElement("div");
  // item.setAttribute("class", "item");

  // const name = document.createElement('span');
  // name.setAttribute("class", "item__name" );
  // name.innerText = text;

  // const deleteBtn = document.createElement('button');
  // deleteBtn.setAttribute("class", "item__delete")
  // deleteBtn.innerHTML = `<i class="far fa-trash-alt"></i>`
  // deleteBtn.addEventListener('click', ()=>{
  //   items.removeChild(itemRow);
  // })

  // const divider = document.createElement("div");
  // divider.setAttribute("class", "item__divider");

  // itemRow.appendChild(item);
  // itemRow.appendChild(divider);  
  
  // item.appendChild(name);
  // item.appendChild(deleteBtn);