// -----------------for responsive menuslider----------------


let menubtn = document.getElementById('res');
let menu0 = document.getElementById('menu0');
menubtn.addEventListener('click', function kgf() {
    if (menu0.style.display == 'block') {
        menu0.style.display = 'none';
    }
    else {
        menu0.style.display = 'block';
    }
})

// ---------------------for search baar-------------------------
let searchbtn = document.getElementById('search');
let searchinput0 = document.getElementById('searchinput');
searchbtn.addEventListener('click', function searchbaar() {
    if (searchinput0.style.display == 'inline') {
        searchinput0.style.display = 'none';
    }
    else {
        searchinput0.style.display = 'inline';
    }
})

// ------------------------for register------------------------
let rergisterbtn = document.getElementById('register');
let userpage = document.getElementById('userid');
rergisterbtn.addEventListener('click', function rer() {
    if (userpage.style.display == 'block') {
        userpage.style.display = 'none';
    } else {
        userpage.style.display = 'block';
    }
})

let loginbtn = document.getElementById('forlogin');
let signupbtn = document.getElementById('forsignup');
let useridheight = document.getElementById('userid');
let loginpage = document.getElementById('login');
let signuppage = document.getElementById('signup');

signupbtn.addEventListener('click', function log0() {
    if (loginpage.style.display == 'block') {
        loginpage.style.display = 'none';
        signuppage.style.display = 'block';

    } else {
        loginpage.style.display = 'none';
        signuppage.style.display = 'block';
        useridheight.style.height = '480px';
    }
})
loginbtn.addEventListener('click', function log1() {
    if (signuppage.style.display == 'block') {
        signuppage.style.display = 'none';
        loginpage.style.display = 'block';
    } else {
        signuppage.style.display = 'none';
        loginpage.style.display = 'block';
        useridheight.style.height = '400px';
    }
})


// ---------------addtocart--------------------------------

let products = [
    {
        name: "Pineapple",
        price: 200,
        tag: "Tagpineapple",
        inCart: 0,
    },
    {
        name: "Watermelon",
        price: 50,
        tag: "Tagwatermelon",
        inCart: 0,
    },
    {
        name: "Apple",
        price: 170,
        tag: "Tagapple",
        inCart: 0,
    },
    {
        name: "Orange",
        price: 70,
        tag: "Tagorange1",
        inCart: 0,
    },
    {
        name: "Stroberi",
        price: 200,
        tag: "Tagstroberi1",
        inCart: 0,
    },
    {
        name: "Stroberi2",
        price: 200,
        tag: "Tagstroberi2",
        inCart: 0,
    },
    {
        name: "Orange",
        price: 40,
        tag: "Tagorange2",
        inCart: 0,
    },
    {
        name: "Banana",
        price: 50,
        tag: "Tagbanana",
        inCart: 0,
    },
    {
        name: "Pineapple",
        price: 200,
        tag: "Tagpineapple2",
        inCart: 0,
    },
    {
        name: "Pineapple",
        price: 200,
        tag: "Tagpineapple3",
        inCart: 0,
    },

]

let cartbtn = document.querySelectorAll('.addtocartdisplay');

for (let i = 0; i < cartbtn.length; i++) {
    // console.log('running');
    cartbtn[i].addEventListener('click', () => {
        cartNumber(products[i]);
        cartCost(products[i]);
    })
}

// function loadcartnumber() {
//     let productNumber = localStorage.getItem('cartNumber');
//     if (productNumber) {
//         document.querySelector('#number').textContent = productNumber;
//     }
// }



function cartNumber(product) {
    let productNumber = localStorage.getItem('cartNumber');
    productNumber = parseInt(productNumber);

    console.log(typeof productNumber);
    if (productNumber) {
        localStorage.setItem('cartNumber', productNumber + 1);
        document.querySelector('#addtocart').textContent = productNumber + 1;
        document.getElementById('addtocart').style.backgroundColor = 'yellowgreen';
    } else {
        localStorage.setItem('cartNumber', 1);
        document.querySelector('#addtocart').textContent = 1;
        document.getElementById('addtocart').style.backgroundColor = 'yellowgreen';
    }
    setProduct(product);
}

function cartCost(product) {
    let cartCost = localStorage.getItem('cartCost');
    console.log('running');
    if (cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem('cartCost', cartCost + product.price);
    } else {
        localStorage.setItem('cartCost', product.price);
    }
}

function setProduct(product) {
    let productinCart = localStorage.getItem('productinCart');
    productinCart = JSON.parse(productinCart);
    console.log(productinCart);

    if (productinCart != null) {

        if (productinCart[product.tag] == undefined) {
            productinCart = {
                ...productinCart,
                [product.tag]: product
            }
        }
        productinCart[product.tag].inCart += 1;
    } else {
        product.inCart = 1;
        productinCart = {
            [product.tag]: product
        }
    }

    localStorage.setItem('productinCart', JSON.stringify(productinCart));
}

function displayCartProduct() {
    let gettital = localStorage.getItem('productinCart');
    gettital = JSON.parse(gettital);
    let displayCartproduct = document.querySelector('.displayProducts');

    if (gettital && displayCartproduct) {
        displayCartproduct.innerHTML = '';
        Object.values(gettital).map(item => {
            console.log("running hard");
            displayCartproduct.innerHTML += `
                <div class="fullcart">
                    <div class="displayProduct">
                        ${item.name}
                    </div>
                    <div class="displayprice">$${item.price}</div>
                    <div class="displayquentity">${item.inCart}</div>
                    <div class="displaytotal">
                        $${item.price * item.inCart}.00
                    </div> 
                    <div id="removeicon">
                        <i class="fa fa-remove"></i>
                    </div>
                </div>
                
                `
        })
        const total = localStorage.getItem('cartCost');
        document.querySelector('.cartfooter').innerHTML = `
            <div id="grandtotal"><h3>TOTAL: $ ${total}</h3>
            </div>
            <div id="proceedbtn">
                <button>Proceed to buy</button>
            </div>  
            <div id="clrbtn">
                <button id="clearbtn">Clear All</button>
            </div>`
    }

}
displayCartProduct();



// ------------click and display cart-------------------

const cartbtnshow = document.getElementById('basket');


cartbtnshow.addEventListener('click', () => {
    let cartarea = document.getElementById('displayCart');
    if (cartarea.style.display == 'block') {
        cartarea.style.display = 'none';
    } else {
        cartarea.style.display = 'block';
    }
})

const clearcart = document.getElementById('clearbtn');
const afterclr = document.getElementById('displayCart');

clearcart.addEventListener('click', () => {
    localStorage.clear();
    location.reload();
    
    afterclr.innerHTML = `<div class="emptytext">
                    <h1> Your cart is empty </h1>
                </div>`

})

