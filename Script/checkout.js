const products = [
    {
      id: 1,
      image:
        "https://i.postimg.cc/kM64btMV/images-4.jpg",//shotgun
      name: "shotgun",
      desc: "",
      price: 1,
      quantity: 1,
    },
    {
      id: 2,
      image:
        "https://i.postimg.cc/FR3rsj5b/ad468c3f50aa4f27e86ba2d0952e3f34te7as-Gk-V86-IWWNTa-2.jpg",//pistol
      name: "pistol",
      desc: "",
      price: 2,
      quantity: 1,
    },
    {
      id: 3,
      image:
        "https://i.postimg.cc/h4T2tWPQ/79fe6d857d70d8dea4748bbe11bb15c3.jpg",//AR
      name: "AR",
      desc: "",
      price: 3,
      quantity: 1,
    },
    {
      id: 4,
      image:
        "https://i.postimg.cc/43GPpChY/9e75b0fbdd1621ef344e5b75cdd574ae.jpg",//laser
      name: "laser",
      desc: "",
      price: 4,
      quantity: 1,
    },
    {
      id: 5,
      image:
      "https://i.postimg.cc/BnRymgjF/images-7.jpg",//shotgun
      name: "shotgun",
      desc: "",
      price: 5,
      quantity: 1,
    },
    {
      id: 6,
      image: "https://i.postimg.cc/0jzb5cZn/images-2.jpg ",//laser
      name: "laser",
      desc: "",
      price: 6,
      quantity: 1,
    },
    {
      id: 7,
      image: "https://i.postimg.cc/6qFT8nmX/images.jpg",//AR
      name: "AR",
      desc: "",
      price: 7,
      quantity: 1,
    },
    {
      id: 8,
      image: "https://i.postimg.cc/BvDzkKFV/images-9.jpg",//shotgun
      name: "shotgun",
      desc: "",
      price: 8,
      quantity:1,
    },
    {
      id: 9,
      image: "https://i.postimg.cc/rzX7dHV9/images-1.jpg",//pistol
      name: "pistol",
      desc: "",
      price: 9,
      quantity:1,
    },
    {
      id: 10,
      image: "https://i.postimg.cc/y8W5sGMt/download-2.jpg",//AR
      name: "AR",
      desc: "",
      price: 10,
      quantity: 1,
    },
    {
      id: 11,
      image: "https://i.postimg.cc/L8x746WH/6bbb8206e603b767125f7f6465476fee.jpg",//pistol
      name: "pistol",
      desc: "",
      price: 11,
      quantity: 1,
    },
    {
      id: 12,
      image: "https://i.postimg.cc/L87WXTRX/images-10.jpg",//shotgun
      name: "shotgun",
      desc: "",
      price: 12,
      quantity: 1,
    },
    {
      id: 13,
      image: "https://i.postimg.cc/59T1vxnn/images-5.jpg",//laser
      name: "laser",
      desc: "",
      price: 13,
      quantity: 1,
    },
    {
      id: 14,
      image: "https://i.postimg.cc/9Q1GNrM4/download-3.jpg",//AR
      name: "AR",
      desc: "",
      price: 14,
      quantity: 1,
    },
    {
      id: 15,
      image: "https://i.postimg.cc/cC8VLWSH/download.jpg",//pistol
      name: "pistol",
      desc: "",
      price: 15,
      quantity: 1,
    },
    {
      id: 16,
      image: "https://i.postimg.cc/9Q1GNrM4/download-3.jpg",//laser
      name: "laser",
      desc: "",
      price: 16,
      quantity: 1,
    },
  ];
  
 
function displayProducts() {
  const ourProducts = document.getElementById("products");
  products.forEach((product) => {
    const productElement = document.createElement("div");
    productElement.innerHTML = `
       <div class="card">
                <img src="${product.image}" alt="" class="card-img">
            <div class="card-title">${product.name}</div>
            <div class="card-text">
                <p>$ ${product.price}</p></br>
                <button onclick="addToCart(${product.id})">Add To Cart</button>
            </div>`;
    ourProducts.appendChild(productElement);
  });
}

let cart = JSON.parse(localStorage.getItem("Products")) || [];

function addToCart(productId) {
  const product = products.find((product) => product.id === productId);
  if (product && product.quantity > 0) {
    cart.push(product);
    product.quantity--;
    updateCart();
  }
}

function removeFromCart(index) {
  let removedProduct = cart.splice(index, 1)[0];
  removedProduct.quantity++;
  updateCart();
}

function updateCart() {
  const cartContainer = document.getElementById("cart");
  localStorage.setItem("Products", JSON.stringify(cart));
  cartContainer.innerHTML = "";
  cart.forEach((product, index) => {
    const cartItem = document.createElement("div");
    cartItem.innerHTML = `
    <div class="inner-layout">
      <div class="inner-pro">
        <img src="${product.image}" class="inner-img">
        <span>${product.name}</span>
        <span>${product.price}</span>
      </div>
      <div>
      <button onclick="removeFromCart(${index})" class="rembutton">&#128465;</button>
      </div>
    </div>
      <p>Total $ ${product.price}</p>
    `;
    cartContainer.appendChild(cartItem);
  });
    calculateTotal();
}

function calculateTotal() {
  let totalElement = document.getElementById("total");
  let total = 0 
  cart.forEach(item => {
    total +=  eval(item.price)
  })

  totalElement.textContent = `$${total}`;
}
// Cart End
displayProducts();

updateCart();

//   Start Modal
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// End Modal