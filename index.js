const addCardForm = document.getElementById('add-card-form');
const todoContainer = document.getElementById('todo');

function addCard(e) {
  e.preventDefault();

  const cardTitle = document.getElementById('card-title').value;
  const cardDescription = document.getElementById('card-description').value;

  const card = {
    title: cardTitle,
    description: cardDescription,
    state: 'todo'
  };

  // Agregar la tarjeta al localstorage
  let cards = JSON.parse(localStorage.getItem('cards')) || [];
  cards.push(card);
  localStorage.setItem('cards', JSON.stringify(cards));

  // Agregar la tarjeta a la sección To Do
  const cardElement = createCardElement(card);
  todoContainer.appendChild(cardElement);

  // Limpiar el formulario
  addCardForm.reset();
}

addCardForm.addEventListener('submit', addCard);
