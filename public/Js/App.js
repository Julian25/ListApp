const addBtn = document.querySelector('.round-btn');
const productsModal = document.getElementById('form');
const img = document.getElementById('img');
const homeTitle = document.getElementById('home-title');
const closeBtn = document.querySelector('.close-btn');
const form = document.getElementById('form');
const title = document.getElementById('title');
const category = document.getElementById('category');
const list = document.getElementById('list-container');
const description = document.getElementById('description');
const addProductBtn = document.getElementById('add');
const ul = document.getElementById('ul');
const descriptionBox = document.getElementById('description-box');
const li = document.getElementById('list-item');
const deleteBtn = document.getElementById('delete');
const productMessage = document.getElementById('product-message');
const categoryMessage = document.getElementById('category-message');
let listAmount = 0;

let letters = ["a","b","c","d","e","f","g","h","i","j","k",
"l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", 
"A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P",
"Q","R","S","T","U","V","W","X","Y","Z"];

// Function to get only letters and its number
function lettersNumbers (input) {
    var inputValue = input;
    var numberOfLetters = 0
    for(var i= 0; i < inputValue.length; i++) {
        var inputName = inputValue[i];
        if (letters.indexOf(inputName) != -1) {
            numberOfLetters++;
        } else  {
            return false;
        }
    }
    return numberOfLetters;        
}

// Open pop up form to add products
addBtn.addEventListener('click', () => {
    productsModal.classList.add('display-form');
    img.classList.add('off');
    homeTitle.classList.add('off');
    list.classList.add('off')
    productsModal.classList.remove('off');
    list.classList.add('off');
});

//Close pop up form
closeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    productsModal.classList.remove('display-form');
    productsModal.classList.add('off');
    list.classList.remove('off');
    if (listAmount === 0 ) {
        img.classList.remove('off');
        homeTitle.classList.remove('off');
    } else {
        list.classList.add('list-container');
    }
})


//Back to list function 
const backToList = () => {
    list.classList.add('list-container');
    list.classList.remove('off');
    descriptionBox.classList.add('off');
    descriptionBox.classList.add('off2');
    addBtn.classList.remove('off');
    list.classList.remove('off2');

}

//Create description function
const openDescription = (productCategory, title, description) =>  {
    list.classList.remove('list-container');
    list.classList.add('off');
    list.classList.add('off2')
    descriptionBox.classList.remove('off');
    descriptionBox.classList.add('description-container');
    descriptionBox.classList.remove('off2');
    addBtn.classList.add('off');
    addBtn.classList.add('off2');
    let productDescription =   `<div class="description-box">
                                    <img src="${productCategory}" alt="${productCategory}"/>
                                    <h2>${title}</h2>
                                    <p>${description}</p>
                                    <button class="back-btn" onclick="backToList()">Volver</button>
                                </div>`
    descriptionBox.innerHTML = productDescription;
    console.log(descriptionBox);
};




// Add products to list 
addProductBtn.addEventListener('click', (e) => {
    if ( title.value !== "" && category.value !== "" ) {
        console.log('pepe')
        e.preventDefault();
        list.classList.remove('off');
        list.classList.add('list-container')
        productsModal.classList.remove('display-form');
        productsModal.classList.add('off');
        img.classList.add('off2');
        homeTitle.classList.add('off2');
        productMessage.classList.remove('message-error');
        categoryMessage.classList.remove('message-error');
        let productCategory = category.value;
        let productTitle = title.value;
        let productDescription = description.value;
        let li = document.createElement('li');
        li.innerHTML = `<img src="${productCategory}" alt="${productCategory}"/>
                        <h3>${productTitle}</h3>
                        <button onclick="openDescription('${productCategory}', '${productTitle}', '${productDescription}')">></button>`
        li.appendChild(addDeleteBtn());
        ul.appendChild(li);
        listAmount += 1;
        form.reset();
    } else {
        e.preventDefault();
        productMessage.classList.add('message-error');
        categoryMessage.classList.add('message-error');
    }
    
})

// delete function

function addDeleteBtn() {
    const deleteBtn = document.createElement("button");

    deleteBtn.textContent = "x";
    deleteBtn.className = "btn-delete";

    deleteBtn.addEventListener("click", (e) => {
        const item = e.target.parentElement;
        ul.removeChild(item);
        listAmount -= 1;
        if (listAmount === 0 ) {
            img.classList.remove('off');
            homeTitle.classList.remove('off');
            list.classList.add('off');
            list.classList.add('off2');
        }
        console.log(listAmount)
    });
  
    return deleteBtn;
}

