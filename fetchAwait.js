async function getData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    console.log(response);
  } catch (error) {
    console.error(error.message);
  }
}

getData("https://pokeapi.co/api/v2/pokemon/pikachu");