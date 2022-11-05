const pokemonsList = document.querySelector('#pokemonList')
const buttonMore = document.querySelector('#btnMore')
const maxRecords = 151
const limit = 4
let offset = 0


function loadPokemons(offset, limit) {
  pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
    const newHtml = pokemons.map((pokemon) =>

      `
    <li class="pokemon ${pokemon.type}">

    <span class="number">${`#${pokemon.number}`}</span>
    <span class="name">${pokemon.name}</span>

        <div class="detail">
          <ol class="types">
            ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
         
          </ol>
          <img src="${pokemon.photo}" alt="${pokemon.name}">
       </div>

    </li>
    
    `
    ).join('')
    pokemonsList.innerHTML += newHtml
  })
}

loadPokemons(offset, limit)

buttonMore.addEventListener('click', () => {
  
  offset += limit
  const qtdRecords = offset + limit

  if (qtdRecords >= maxRecords) {

    const newLimit =  maxRecords - offset
    loadPokemons(offset, newLimit)
    buttonMore.parentElement.remove()

  } else {
    loadPokemons(offset, limit)
  }

})

const buttonTheme = document.querySelector('#theme')
buttonTheme.addEventListener('click', changeTheme)

function changeTheme() {

  const body = document.querySelector('#body')
  body.classList.toggle('changeThemeBody')

  const content = document.querySelector('.content')
  content.classList.toggle('changeThemeContent')
}
