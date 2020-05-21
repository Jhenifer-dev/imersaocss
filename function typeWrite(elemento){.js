
function typewriter(element) {
  
    let letters = element.innerHTML.split('')
    element.innerHTML = ''
    
    letters.forEach(( letter, index, letters ) => {
      setTimeout(() => element.innerHTML += letter, 100 * index);
    });
  }
  
  const text = document.querySelector('.descricao');
  typewriter(text);
