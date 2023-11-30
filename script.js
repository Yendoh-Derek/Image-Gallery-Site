const buttonButton = document.getElementById("button");
const gallery = document.querySelector(".gallery");

buttonButton.addEventListener("click", async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/photos?_limit=10"
    );
    const data = await response.json();

    data.forEach((image) => {
      const imgElement = document.createElement("img");
      imgElement.src = image.url;
      imgElement.alt = image.title || "Image";
      gallery.appendChild(imgElement);
    });
  } catch (error) {
    console.error("Error fetching images:", error);
  }
});
