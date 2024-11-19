import { ProductI } from "../interface/productInterface";

export const handlerSearch = (
  listProducts: ProductI[],
  renderElement: (products: ProductI[]) => void
): void => {
  const searchInput = document.querySelector(
    "#search-input"
  ) as HTMLInputElement;
  searchInput.addEventListener("input", (text) => {
    const searchText = text.target as HTMLInputElement;
    const filteredProducts = listProducts.filter((product) =>
      product.title.toLowerCase().startsWith(searchText.value.toLowerCase())
    );
    const footer = document.querySelector(".footer") as HTMLElement;
    if (filteredProducts.length === 0) {
      footer.classList.add("no-content");
    } else {
      footer.classList.remove("no-content");
    }

    renderElement(filteredProducts);
  });
};
