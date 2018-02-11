import React from 'react'
import ReactDom from 'react-dom'
const test = async function() {
  let result = await fetch('test')
  return result
}

ReactDom.render(
  <h1>hello world</h1>,
  document.querySelector('#app')
)