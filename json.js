//Importing user infos:
fetch('https://jsonplaceholder.typicode.com/users')
  .then(got => got.json())
  .then(rcv => user(rcv))

let nameUl = document.querySelector('.name')
let emailUl = document.querySelector('.email')
let phoneUl = document.querySelector('.phone')
let websiteUl = document.querySelector('.website')

function user(bitch) {
  for (son of bitch) {
    let nameli = document.createElement('li')
    nameli.innerText = son.name
    nameUl.append(nameli)

    let emailli = document.createElement('li')
    emailli.innerText = son.email
    emailUl.append(emailli)

    let phoneli = document.createElement('li')
    phoneli.innerText = son.phone
    phoneUl.append(phoneli)

    let websiteli = document.createElement('li')
    websiteli.innerText = son.website
    websiteUl.append(websiteli)
  }
}
