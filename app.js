document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript loaded');
  
    const form = document.querySelector('#new-item-form')
    form.addEventListener('submit', handleFormSubmit)
  
    const deleteAllButton = document.querySelector('#delete');
    deleteAllButton.addEventListener('click', handleDeleteButton);
  })
  
  const handleFormSubmit = function(evt) {
    evt.preventDefault()
  
  
    const newAnimal = document.createElement('li')
    newAnimal.textContent = `${evt.target.name.value} ${evt.target.species.value} ${evt.target.continent.value}`
  
    const animalList = document.querySelector('#endangered-species-list') 
    animalList.appendChild(newAnimal)
    newAnimal.classList.add('animal-item')
    
    const form = document.querySelector('#new-item-form')
    form.reset()
  
  }

  const handleDeleteButton = function (event) {
    const readingList = document.querySelector('#endangered-species-list');
    readingList.textContent = '';
  }