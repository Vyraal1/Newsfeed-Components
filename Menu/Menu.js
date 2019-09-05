/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  "Students",
  "Faculty",
  "What's New",
  "Tech Trends",
  "Music",
  "Log Out"
];

/* Step 1: Write a function that will create a menu component as seen below:
  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>
  The function takes an array as its only argument.*/
function createMenu(menu) {
  const container = document.createElement("div");
  container.classList.add("menu");

  const list = document.createElement("ul");
  container.appendChild(list);

  /* Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array.  Add those items to the <ul> */
  let li = {};
  for (item of menuItems) {
    li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  }

  /* Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM. */
  const button = document.querySelector(".menu-button");
  /* Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class). */
  button.addEventListener("click", e => {
    container.classList.toggle("menu--open");
  });

  /* Step 5: return the menu component. */
  return container;
}
/* Step 6: add the menu component to the DOM. */
console.log(createMenu(menuItems));
document.querySelector(".header").appendChild(createMenu(menuItems));

// * Is it better to use a forEach?
