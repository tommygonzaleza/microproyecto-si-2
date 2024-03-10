const fs = require("fs");

const convertGenero = (videojuegos) => {
  let newVideojuegos = videojuegos.map(item => {
    item['genero'] = item.genero.split('/');
    return item
  })
  return newVideojuegos
}

// Read the JSON file
fs.readFile("./src/assets/videojuegos.json", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }

  try {
    // Parse the JSON data
    const jsonData = JSON.parse(data);

    if (!Array.isArray(jsonData)) {
      throw new Error("JSON data is not an array.");
    }
    // addElementToDB()
    // Now you have an array of objects
    console.log("Array of objects:", convertGenero(jsonData));
  } catch (error) {
    console.error("Error parsing JSON:", error);
  }
});
