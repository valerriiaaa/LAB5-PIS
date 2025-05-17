const axios = require('axios');

async function getAllCharacters() {
  let allCharacters = [];
  let nextPage = 'https://rickandmortyapi.com/api/character';

  try {
    while (nextPage) {
      const response = await axios.get(nextPage);
      const data = response.data;

      allCharacters = allCharacters.concat(data.results);
      nextPage = data.info.next; // посилання на наступну сторінку
    }

    console.log(`Отримано ${allCharacters.length} персонажів.`);

    // Виводимо перші 5 персонажів у консоль як приклад
    allCharacters.slice(0, 5).forEach((char, index) => {
      console.log(`${index + 1}. ${char.name} (${char.species})`);
    });

  } catch (error) {
    console.error('Помилка при отриманні персонажів:', error.message);
  }
}

getAllCharacters();
