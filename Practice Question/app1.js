
const BASE_URL ="https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const amountInput = document.querySelector(".amount input");
const msg = document.querySelector(".msg");

for (let select of dropdowns) {
  for (let currCode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;

    if (select.name === "from" && currCode === "USD") {
      newOption.selected = true;
    }
    if (select.name === "to" && currCode === "INR") {
      newOption.selected = true;
    }

    select.append(newOption);
  }

  select.addEventListener("change", (evt) => {
    updateFlag(evt.target);
  });
}


const updateFlag = (element) => {
  const currCode = element.value; // e.g., "INR"
  const countryCode = countryList[currCode]; // e.g., "IN"
  const newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;

  const img = element.parentElement.querySelector("img");
  if (img) {
    img.src = newSrc;
  }
};


const getExchangeRate = async () => {
  let amtVal = amountInput.value;

  if (amtVal === "" || amtVal < 1) {
    amtVal = 1;
    amountInput.value = "1";
  }

  const from = fromCurr.value.toLowerCase(); // API expects lowercase codes
  const to = toCurr.value.toLowerCase();

  const url = `${BASE_URL}/currencies/${from}.json`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    const rate = data[from][to];

    if (!rate) {
      if (msg) {
        msg.innerText = "Rate is not available for this currency pair.";
      }
      console.log("Rate not available for:", from, "to", to);
      return;
    }

    const finalAmount = (amtVal * rate).toFixed(2);

    if (msg) {
      msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
    }

    console.log(
      `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`
    );
  } catch (error) {
    console.error("Error while fetching exchange rate:", error);
    if (msg) {
      msg.innerText = "Something went wrong. Please try again.";
    }
  }
};

btn.addEventListener("click", (evt) => {
  evt.preventDefault();
  getExchangeRate();
});


window.addEventListener("load", () => {
  updateFlag(fromCurr);
  updateFlag(toCurr);
  getExchangeRate();
});
