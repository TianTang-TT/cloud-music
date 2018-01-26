import './index.css'
function component() {
  var element = document.createElement('div');

  element.innerHTML = 'hello'

  return element;
}

document.body.appendChild(component());