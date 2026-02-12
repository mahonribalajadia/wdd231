const membership = [
    {
        name: 'Non Profit Membership',
        benefits: [
            'No membership fee', 'Designed for registered non-profit organizations', 'Listing in the online member directory', 'Access to select networking events', 'Community partnership and collaboration opportunities', 'Support local economic and community development'
        ]
    },
    {
        name: 'Bronze Membership',
        benefits: [
            'Affordable annual membership fee', 'Member directory listing', 'Access to all regular networking events', 'Basic business training workshops', 'Discounted tickets to chamber events', 'Newsletter recognition and business mention'
        ]
    },
    {
        name: 'Silver Membership',
        benefits: [
            'Includes all Bronze benefits', 'Priority invitations to exclusive networking events', 'Advanced business training sessions', 'Spotlight feature on Chamber website or social media', 'Discounted sponsorship opportunities', 'Enhanced directory listing visibility'
        ]
    },
    {
        name: 'Gold Membership',
        benefits: [
            'Includes all Silver benefits', 'Premium homepage spotlight placement', 'Featured business posts and promotions', 'Highlighted directory listing (top placement)', 'Complimentary or heavily discounted major event admission', 'VIP access to business forums and special events', 'Priority sponsorship and advertising placement'
        ]
    }
]

const npLink = document.getElementById('np-link');
const bronzeLink = document.getElementById('bronze-link');
const silverLink = document.getElementById('silver-link');
const goldLink = document.getElementById('gold-link');


// Button Links
npLink.addEventListener('click', () => {
    const nonProfit = membership.find(level => level.name === 'Non Profit Membership');
    displayMembershipDetails(nonProfit);
});

bronzeLink.addEventListener('click', () => {
    const bronze = membership.find(level => level.name === 'Bronze Membership');
    displayMembershipDetails(bronze);
});

silverLink.addEventListener('click', () => {
    const silver = membership.find(level => level.name === 'Silver Membership');
    displayMembershipDetails(silver);
});

goldLink.addEventListener('click', () => {
    const gold = membership.find(level => level.name === 'Gold Membership');
    displayMembershipDetails(gold);
});



function displayMembershipDetails(level) {
    const modal = document.querySelector('#membership-details');

    modal.innerHTML = '';
    modal.innerHTML = `
    <div>
    <h2>${level.name}</h2>
    <button id="closeModal">✕</button>
    </div>
    <ul>
        ${level.benefits.map(benefit => `<li>${benefit}</li>`).join('')}
    </ul>
    `;
    modal.showModal();

    const closeModal = document.getElementById('closeModal');

    closeModal.addEventListener("click", () => {
        modal.close();
    });
}