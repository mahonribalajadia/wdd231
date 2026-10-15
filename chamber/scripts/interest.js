import { interest } from "../data/interest.mjs";

console.log(interest)

const interestContainer = document.querySelector('#interest-container')

function displayItems(interest) {
    interest.forEach(item => {
        // Create a Card Element
        const card = document.createElement('div')

        // Create the Image Element
        const image = document.createElement('img')
        image.src = `data/images/${item.image}`
        image.alt = item.name
        image.setAttribute('loading', 'lazy');
        card.appendChild(image)

        // Create the Title Element
        const title = document.createElement('h2')
        title.innerText = item.name
        card.appendChild(title)

        // Add a Divider Element
        const divider = document.createElement("div");
        divider.classList.add("divider");
        card.appendChild(divider)

        // Create the Address Element
        const address = document.createElement('address')
        address.innerText = item.address
        card.appendChild(address)

        // Create the Description Element
        const desc = document.createElement('p')
        desc.innerText = item.description
        card.appendChild(desc)

        // Create the Button Element
        const btn = document.createElement('button')
        btn.innerText = "Learn More"
        card.appendChild(btn)

        // Event listener for the button
        btn.addEventListener("click", () => {
            window.open(item.link, "_blank", "noopener,noreferrer");
        });


        interestContainer.appendChild(card)
    });
}

displayItems(interest);