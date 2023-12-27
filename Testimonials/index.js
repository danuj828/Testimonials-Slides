const customerImage = document.querySelector("#customer-img");
const customerName = document.querySelector("#customer-name");
const customerText = document.querySelector("#customer-text");

const buttons = document.querySelectorAll(".btn");

let index = 0;
const customers = [];

function Customer(img, name, text) {
  this.img = img;
  this.name = name;
  this.text = text;
}

function createCustomer(img, name, text) {
  let Img = `Images/${img}.jpg`;
  let customer = new Customer(Img, name, text);
  customers.push(customer);
}


createCustomer(
  0,
  "John",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus architecto veritatis exercitationem rem temporibus sit rerum minima,nihil sapiente veniam voluptas perspiciatis eligendi aliquam provident blanditiis consequuntur voluptatibus voluptate animi"
);

createCustomer(
  1,
  "Well",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus architecto veritatis exercitationem rem temporibus sit rerum minima,nihil sapiente veniam voluptas perspiciatis eligendi aliquam provident blanditiis consequuntur voluptatibus voluptate animi"
);

createCustomer(
  2,
  "Darrick",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus architecto veritatis exercitationem rem temporibus sit rerum minima,nihil sapiente veniam voluptas perspiciatis eligendi aliquam provident blanditiis consequuntur voluptatibus voluptate animi"
);

buttons.forEach(function (item) {
  item.addEventListener("click", function (event) {
    if (event.target.parentElement.classList.contains("prevBtn")) {
      if (index === 0) {
        index = customers.length;
      }
      index--;
      customerImage.src = customers[index].img;
      customerName.textContent = customers[index].name;
      customerText.textContent = customers[index].text;
    }

    if (event.target.parentElement.classList.contains("nextBtn")) {
      if (index === customers.length - 1) {
        index = 0;
      }
      index++;
      customerImage.src = customers[index].img;
      customerName.textContent = customers[index].name;
      customerText.textContent = customers[index].text;
    }
  });
});
