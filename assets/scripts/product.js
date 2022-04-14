const razorsList = document.querySelector('.extra .products__list');

const products = [
  {
    title: 'Product title',
    price: '$99.00',
    priceOld: '$150.00',
    category: 'razors',
  },
  {
    title: 'Product title',
    price: '$99.00',
    priceOld: '$150.00',
    category: 'razors',
  },
  {
    title: 'Product title',
    price: '$99.00',
    priceOld: '$150.00',
    category: 'razors',
  },
];

document.addEventListener('DOMContentLoaded', () => {
  products.forEach((product) => {
    const html = `
        <li>
            <div class="product">
            <img
                src="/assets/images/plp/product.png"
                alt="product"
                class="product__img"
            />
            <div class="product__swatches">
                <div
                class="product__swatch product__swatch--brown product__swatch--selected"
                ></div>
                <div
                class="product__swatch product__swatch--grey product__swatch--soldout"
                ></div>
                <div class="product__swatch product__swatch--black"></div>
            </div>
            <a href="/product.html">
                <h3 class="product__title">Product title</h3>
            </a>
            <p class="product__price">
                From $99.00 <span class="product__price--old">$150.00</span>
            </p>
            </div>
        </li>
    `;

    if (product.category === 'razors') {
      razorsList.insertAdjacentHTML('beforeend', html);
    } else if (product.category === 'skincare') {
      skincareList.insertAdjacentHTML('beforeend', html);
    } else if (product.category === 'accessories') {
      accessoriesList.insertAdjacentHTML('beforeend', html);
    }
  });
});
