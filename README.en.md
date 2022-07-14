# Welcome to the Shopping Cart project repository!

### README Translations:

-   [English](/README.en.md)
-   [Portuguese](/README.md)

* * *

## 👨‍💻 What was developed:

-   A developed**shopping cart**fully dynamic, consuming data directly from the**API**Mercado Libre to search for products for sale. 🏷
-   TDD (Test Driven Development) was also used, which is a practice widely used in the job market to ensure that the code is implemented correctly. That is, first the tests for a function are written and then the logic of the function is implemented.

:bulb:**See a sample below:**

![project sample](./sample.gif)

### test coverage

To assess whether your tests are covering the entire function, you will use the**test coverage**, which evaluates the effectiveness of tests implemented according to requirements, determining whether they cover what was requested or not.

<details>
<summary><strong>⚙️ API do Mercado Livre</strong></summary><br />

O[Free Market API Manual](https://developers.mercadolivre.com.br/pt_br/itens-e-buscas)contains all the information about the API (return, structure).

</details>

# Mandatory Requirements

## 1. (TDD) Develop tests of at least 25% of full coverage and 100% of the function`fetchProducts`

<details>
  <summary>
    Implemente os testes necessários na função <code>fetchProducts</code>
  </summary> <br />

The file to implement the test is already created, it is called`fetchProducts.test.js`and it is inside the folder`tests`.

**What you should test:**

-   Test yourself`fetchProducts`is a function;

-   run the function`fetchProducts`with the argument`'computador'`and test if`fetch`was called;

-   Test whether, when calling the function`fetchProducts`with the argument`'computador'`, the function`fetch`use the endpoint`'https://api.mercadolibre.com/sites/MLB/search?q=computador'`;

-   Test if the function return`fetchProducts`with the argument`'computador'`is a data structure equal to the object`computadorSearch`, which is already imported into the file.

-   Test whether, when calling the function`fetchProducts`with no argument, returns an error with the message:`'You must provide an url'`.

> **Keeping an eye on the tip 👀:**Remember to use the`new Error('mensagem esperada aqui')`to compare with the object returned from the API.
> Read carefully what is being asked and implement one test at a time!

⚠️**Heads up:**You must implement all of the tests above, regardless of what is sufficient for test coverage.

**What will be tested:**

-   It will be evaluated if the implemented tests reach at least 25% of the total coverage and 100% of the function`fetchProducts`.

</details>

## 2. Create a product listing

<details>
  <summary>
    Utilize a função <code>fetchProducts</code> para criar uma listagem de produtos através da API do Mercado Livre.
  </summary> <br />

the function file`fetchProducts`is already created and is inside the folder`helpers`and is imported inside the HTML file.

-   implement the function`fetchProducts`to return the product listing;

-   Utilize o_endpoint_`https://api.mercadolibre.com/sites/MLB/search?q=$QUERY`, Where:

    -   The value of`$QUERY`must be**necessarily**the term`computador`;

    -   The return of products is found in the array`results`;

-   Use the function`createProductItemElement()`to create the components_HTML_pertaining to a product:

    -   Add each element returned from the function`createProductItemElement(product)`as child of element`<section class="items">`.

**Obs:**Use the variables provided in the code, they must refer to the following fields:

-   `sku`: is the field`id`returned by the API;
-   `name`: is the field`title`returned by the API;
-   `image`: is the field`thumbnail`returned by the API.

To perform your function`fetchProducts`just call in your file`script.js`;

<details>
<summary>Clique aqui para ver o retorno da API</summary>

```json
{
  "site_id": "MLB",
  "country_default_time_zone": "GMT-03:00",
  "query": "$computador",
  "paging": {...},
  "results": [
    {
      "id": "MLB2025368730",
      "site_id": "MLB",
      "title": "Computador Completo Fácil Intel Core I3 8gb Ssd 240gb ",
      "seller": {},
      "price": 1859.07,
      "prices": {},
      "sale_price": null,
      "currency_id": "BRL",
      "available_quantity": 100,
      "sold_quantity": 500,
      "buying_mode": "buy_it_now",
      "listing_type_id": "gold_pro",
      "stop_time": "2041-09-12T04:00:00.000Z",
      "condition": "new",
      "permalink": "https://produto.mercadolivre.com.br/MLB-2025368730-computador-completo-facil-intel-core-i3-8gb-ssd-240gb-_JM",
      "thumbnail": "http://http2.mlstatic.com/D_704139-MLB47542929423_092021-I.jpg",
      "thumbnail_id": "704139-MLB47542929423_092021",
      "accepts_mercadopago": true,
      "installments": {},
      "address": {},
      "shipping": {},
      "seller_address": {},
      "attributes": [],
      "differential_pricing": {},
      "original_price": 1999,
      "category_id": "MLB1649",
      "official_store_id": 3807,
      "domain_id": "MLB-DESKTOP_COMPUTERS",
      "catalog_product_id": null,
      "tags": [],
      "order_backend": 1,
      "use_thumbnail_id": true,
      "offer_score": null,
      "offer_share": null,
      "match_score": null,
      "winner_item_id": null,
      "melicoin": null,
      "discounts": null
    },
    // {...} restante da lista de produtos
  ],
  "sort": {...},
  "available_sorts": {...},
  "filters": {...},
  "available_filters": {...}
}

```

</details>

**What will be tested:**

-   The element with class`.item`should be each item in the product list.

</details>

## 3. (TDD) Develop tests of at least 50% full coverage and 100% of the function`fetchItem`

<details>
  <summary>
    Implemente os testes necessários na função <code>fetchItem</code>
  </summary> <br />

**What you should test:**

-   Test yourself`fetchItem`is a function;

-   run the function`fetchItem`with the argument of the item "MLB1615760527" and test if`fetch`was called;

-   Test whether, when calling the function`fetchItem`with the argument of the item "MLB1615760527", the function`fetch`use the endpoint "<https://api.mercadolibre.com/items/MLB1615760527">;

-   Test if the function return`fetchItem`with the item argument "MLB1615760527" is a data structure equal to the object`item`which is already imported into the file.

-   Test whether, when calling the function`fetchItem`with no argument, returns an error with the message:`'You must provide an url'`.

> **Keeping an eye on the tip 👀:**Remember to use the`new Error('mensagem esperada aqui')`to compare with the object returned from the API.
> Read carefully what is being asked and implement one test at a time!

**What will be tested:**

-   It will be evaluated if the implemented tests reach at least 50% of the total coverage and 100% of the function`fetchItem`.

</details>

## 4. Add the product to the shopping cart

<details>
  <summary>
    Implemente a função <code>fetchItems</code> para retornar dados de um produto e adicioná-lo ao carrinho.
  </summary> <br />

Every product on the page_HTML_has a button named`Adicionar ao carrinho`and, by clicking on this button, you must make a request that will return all the details of a product.

-   implement the function`fetchItems`to request the details of just**a**product;

-   Utilize o_endpoint_`https://api.mercadolibre.com/items/$ItemID`, Where`$ItemID`and the`id`of the product to be searched;

-   Use the function`createCartItemElement()`to create the components_HTML_referring to an item in the cart;

**Obs:**`salePrice`it's the field`price`returned by the API.

-   Add the element returned from the function`createCartItemElement(product)`as child of element`<ol class="cart__items">`.

For example, if the`id`of the product is`MLB1341706310`, the return of_endpoint_will be something not formatted:

<details>
<summary><strong>Clique aqui para ver o retorno da API</strong></summary>

```json
{
    "id": "MLB1341706310",
    "site_id": "MLB",
    "title": "Processador Amd Ryzen 5 2600 6 Núcleos 64 Gb",
    "subtitle": null,
    "seller_id": 245718870,
    "category_id": "MLB1693",
    "official_store_id": 1929,
    "price": 879,
    "base_price": 879,
    "original_price": null,
    "currency_id": "BRL",
    "initial_quantity": 0,
    "available_quantity": 0,
    "sold_quantity": 0,
    //[...]
    "warranty": "Garantia de fábrica: 3 anos",
    "catalog_product_id": "MLB9196241",
    "domain_id": "MLB-COMPUTER_PROCESSORS",
    "parent_item_id": null,
    "differential_pricing": null,
    "deal_ids": [],
    "automatic_relist": false,
    "date_created": "2019-10-15T18:13:00.000Z",
    "last_updated": "2019-12-20T18:06:54.000Z",
    "health": null,
    "catalog_listing": true
}
```

</details>

**What will be tested:**

-   The element with class`.cart__items`must add the chosen item, correctly presenting its id, title and price information.

</details>

## 5. Remove the item from the shopping cart by clicking on it

<details>
  <summary>
    Ao clicar no <strong>produto no carrinho de compra</strong>, ele deve ser removido da lista.
  </summary> <br />

When clicking on one of the items in the shopping cart, that item must be removed from the list. For that:

-   Use the function`cartItemClickListener(event)`to implement the logic needed to remove the item from the cart.

**What will be tested:**

-   Remove the item from the shopping cart by clicking on it;

</details>

## 6. (TDD) Develop tests of at least 75% of full coverage and 100% of the function`saveCartItems`

<details>
  <summary>
    Implemente os testes necessários na função <code>saveCartItems</code>
  </summary> <br />

The file to implement the test is already created, it is called`saveCartItems.test.js`and it is inside the folder`tests`.

⚠️**Heads up:**Do not change the structure already implemented in the test files, just add the tests inside the block`describe`.

**What you should test:**

-   Test whether, when running`saveCartItems`with the argument`<ol><li>Item</li></ol>`, the method`localStorage.setItem`is called;

-   Test whether, when running`saveCartItems`with the argument`<ol><li>Item</li></ol>`, the method`localStorage.setItem`is called with two parameters, the first being 'cartItems' and the second being the value passed as an argument to`saveCartItems`.

> **Keeping an eye on the tip 👀:**Remember to use the`new Error('mensagem esperada aqui')`to compare with the object returned from the API.
> Read carefully what is being asked and implement one test at a time!

⚠️**Heads up:**You must implement all of the tests above, regardless of what is sufficient for test coverage.

**What will be tested:**

-   It will be evaluated if the implemented tests reach at least 75% of the total coverage and 100% of the function`saveCartItems`.

</details>

## 7. (TDD) Develop tests to achieve 100% full coverage and 100% function`getSavedCartItems`

<details>
  <summary>
    Implemente os testes necessários na função <code>getSavedCartItems</code>
  </summary> <br />

The file to implement the test is already created, it is called`getSavedCartItems.test.js`and it is inside the folder`tests`.

⚠️**Heads up:**Do not change the structure already implemented in the test files, just add the tests inside the block`describe`.

**What you test:**

-   Test whether, when running`getSavedCartItems`, the method`localStorage.getItem`is called;

-   Test whether, when running`getSavedCartItems`, the method`localStorage.getItem`is called with 'cartItems' as a parameter.

> **Keeping an eye on the tip 👀:**Remember to use the`new Error('mensagem esperada aqui')`to compare with the object returned from the API.
> Read carefully what is being asked and implement one test at a time!

⚠️**Heads up:**You must implement all of the tests above, regardless of what is sufficient for test coverage.

**What will be tested:**

-   It will be evaluated if the implemented tests reach 100% of the total coverage and 100% of the function`getSavedCartItems`.

</details>

## 8. Load the shopping cart when starting the page

<details>
  <summary>
    Salve os itens adicionados no carrinho de compras no <code>localStorage</code>
  </summary> <br />

When loading the page, the current state of the shopping cart must be loaded from the**LocalStorage**. For this to work, shopping cart items must be saved to the**LocalStorage**, that is, the**addition**e**removal**of a product must be addressed so that the list is always up to date.

For that, you will have to implement the functions`saveCartItems`e`getSavedCartItems`that are already created with the name`saveCartItems.js`e`getSavedCartItems.js`, respectively, inside the folder`helpers`.

-   implement the function`saveCartItems`which must possess the logic to just**add**o item no`localStorage`in a key called`cartItems`;

-   implement the function`getSavedCartItems`which must possess the logic to just**turn back**o item do`localStorage`.

⚠️ The function`saveCartItems`**no**must retrieve the items from`localStorage`. The function`getSavedCartItems`**no**must add an item in`localStorage`.

**What will be tested:**

-   When the page is refreshed, it should remain with all the items in the cart previously added.

</details>

## 9. Calculate the total value of the items in the shopping cart

<details>
  <summary>
    O elemento com o valor <strong>total</strong> dos produtos deve possuir a classe <code>total-price</code>
  </summary> <br />

Each time the shopping cart is modified, it will be necessary to calculate the total value of the products and present them on the main page of the project. For that:

-   Implement a logic to add up all products in the cart;

-   Create an element with the class`total-price`and add the text with the total value of the products;

> **Remember 💭:**When adding a product to the cart, a request is made to the API. Make sure that the API has already returned the information before performing the sum of the products.

> **Keeping an eye on the tip 👀:**do not use the`toFixed()`, find other alternatives to round values.

**What will be tested:**

-   Calculate the total value of shopping cart items asynchronously;

</details>

## 10. Clear the shopping cart

<details>
  <summary>
    Implemente a lógica no botão <code>Esvaziar carrinho</code> para limpar o carrinho de compras
  </summary> <br />

The empty cart button is already implemented, but it still doesn't fulfill its purpose. For that:

-   Make sure the button has**necessarily**the class`empty-cart`;

-   Implement logic to remove**all**shopping cart items;

**What will be tested:**

-   Check the button to clear shopping cart;

</details>

## 11. Add a text of`carregando`during an API request

<details>
  <summary>
    Adicione um elemento com o texto <code>carregando...</code> durante a requisição à API
  </summary> <br />

A request to the API takes a certain amount of time and during this process the person using the page has no way of knowing if the request was successful or not. Therefore, some form is usually used to show that the request is still in progress. For that:

-   Create an element that contains the text`carregando...`, which should appear somewhere on the page;

-   add the class`loading`to the element that has the text`carregando...`;

-   Display this element only**during**the API request.

> **Keeping an eye on the tip 👀:**You can create a function that adds the element with the text to the DOM`carregando...`and another to remove it, what do you think?

**What will be tested:**

-   Checks whether to add "loading" text during an API request.

</details>
