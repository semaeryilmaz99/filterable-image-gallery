// select all filter buttons and filterable cards
const filterButtons = document.querySelectorAll(".filter_buttons button");

const filterableCards = document.querySelectorAll(".filterable_cards card");

// define the filtercards function
const filterCards = e => {
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");

    // iterate over each filterable card
    filterableCards.forEach(card => {
        // add hide class to hide the card initially
        card.classList.add("hide");

        if (card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all") {
            card.classList.remove("hide");
        }
    });
};



// add click event listener to each button
filterButtons.forEach(button => button.addEventListener("click", filterCards));