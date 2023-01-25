function ajax(url) {
  return fetch(url)
    .then((res) => res.json()) //Parse the data to json format
    .catch((error) => console.log(`Error: ${error}`));
}

function render(data) {
  data.forEach((product) =>
    productDivSelector.insertAdjacentHTML(
      "beforeend",
      `
            <h2>${product.name}</h2>
            <h3>$${product.price}</h3>
            <p>${product.description}</p>
            <br></br>
  `
    )
  );
}

const url = "https://appworks-school.github.io/Remote-Assignment-Data/products";
const productDivSelector = document.querySelector(".product");

ajax(url).then((data) => {
  render(data);
});
