const url = 'data/members.json';
const cards = document.querySelector('#cards');

async function getMemberData() {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.members);
    displayMembers(data.members); // reference the members array of the JSON data object, not just the object
}

const displayMembers = (members) => {
    members.forEach((member) => {
        let card = document.createElement("div");
        let name = document.createElement("p");
        let divider = document.createElement("div");
        let bottomWrapper = document.createElement("div");
        let logo = document.createElement("img");
        let detailsWrapper = document.createElement("div");
        let address = document.createElement("p");
        let contact = document.createElement("p");
        let url = document.createElement("a");

        card.classList.add("card");
        name.classList.add("business-name");
        name.textContent = member.name;
        divider.classList.add("divider");
        bottomWrapper.classList.add("business-info");
        logo.setAttribute("src", member.imageurl);
        logo.setAttribute("alt", `${member.name} Logo`)
        logo.setAttribute("loading", "lazy");
        logo.setAttribute("style", "width:80px; height:80px");
        address.textContent = member.address;
        contact.textContent = member.phonenum;
        url.textContent = "More Details";
        url.setAttribute("href", member.url);

        card.appendChild(name);
        card.appendChild(divider);
        card.appendChild(bottomWrapper);
        bottomWrapper.appendChild(logo);
        bottomWrapper.appendChild(detailsWrapper);
        detailsWrapper.appendChild(address);
        detailsWrapper.appendChild(contact);
        detailsWrapper.appendChild(url);

        cards.appendChild(card);
    });
}

getMemberData();