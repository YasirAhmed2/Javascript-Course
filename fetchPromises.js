async function getData(url) {
  fetch(url)
    .then((data) => {
      //   const result = await response.json();
      data
        .json()
        .then((extractedData) => {
          console.log("Extracted data: ", extractedData);
        })
        .catch((error) => {
          console.log("Data cannot be converted into readable json", error);
        });
    })
    .catch((error) => {
      console.log("Error occured", error);
    });

  // try {
  //   const response = await fetch(url);
  //   if (!response.ok) {
  //     throw new Error(`Response status: ${response.status}`);
  //   }

  //   const result = await response.json();
  //   console.log(result);
  // } catch (error) {
  //   console.error(error.message);
  // }
}

async function main() {
  await getData("https://pokeapi.co/api/v2/pokemon/pikachu");
}
main();