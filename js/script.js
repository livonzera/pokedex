const form = document.querySelector('.form');
const input = document.querySelector('.pesquisa');

const buttonPrev = document.querySelector('.prev');
const buttonNext = document.querySelector('.next');

let searchPokemon = 1;

const pokemonName = document.querySelector('.nomepokemon');
const pokemonNumber = document.querySelector('.nupokemon');

const pokemonHp = document.querySelector('.hp');
const pokemonType1 = document.querySelector('.tipo1');
const pokemonAbility = document.querySelector('.habilidade');

const pokemonAttack = document.querySelector('.ataque');
const pokemonDefense = document.querySelector('.defesa');
const pokemonSattack = document.querySelector('.s-ataque');
const pokemonSdefense = document.querySelector('.s-defesa');
const pokemonSpeed = document.querySelector('.speed');

const pokemonBasedEXP = document.querySelector('.bxp');

const pokemonImage = document.querySelector('.pokemonimagem');

const fetchPokemon = async (pokemon) => {
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    
    if (APIResponse.status = 200) {
        const data = await APIResponse.json();
        return data;
    }
    
}

const renderPokemon = async (pokemon) => {

    const data = await fetchPokemon(pokemon);
    if (data) {
    pokemonName.innerHTML = data.name;
    pokemonNumber.innerHTML = data.id;
    pokemonImage.src = data ['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
    pokemonHp.innerHTML = data ['stats']['0']['base_stat'];
    pokemonAttack.innerHTML = data ['stats']['1']['base_stat'];
    pokemonDefense.innerHTML = data ['stats']['2']['base_stat'];
    pokemonSattack.innerHTML = data ['stats']['3']['base_stat'];
    pokemonSdefense.innerHTML = data ['stats']['4']['base_stat'];
    pokemonSpeed.innerHTML = data ['stats']['5']['base_stat'];
    pokemonBasedEXP.innerHTML = data.base_experience;
    pokemonType1.innerHTML = data ['types']['0']['type']['name'];
    pokemonAbility.innerHTML = data ['abilities']['0']['ability']['name'];
searchPokemon = data.id
}
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    renderPokemon(input.value.toLowerCase());
    input.value = '';
});

buttonPrev.addEventListener('click', () => {
    if (searchPokemon > 1) {
    searchPokemon -= 1;
    renderPokemon(searchPokemon);
    }
});

buttonNext.addEventListener('click', () => {
    searchPokemon += 1;
    renderPokemon(searchPokemon);
});

  renderPokemon(searchPokemon);
