// POPULATE NAME FROM URL
document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const firstName = urlParams.get('fname');
    const lastName = urlParams.get('lname');
    const email = urlParams.get('email');
    const phoneNum = urlParams.get('phonenum');
    const orgName = urlParams.get('orgname');
    const membership = urlParams.get('membership');
    const timestamp = urlParams.get('timestamp');

    // Element IDs
    const fNameSpan = document.getElementById('first-name');
    const lNameSpan = document.getElementById('last-name');
    const emailSpan = document.getElementById('email');
    const phoneNumSpan = document.getElementById('phone-num');
    const orgNameSpan = document.getElementById('org-name');
    const membershipSpan = document.getElementById('membership');
    const timestampSpan = document.getElementById('timestamp');

    if (fNameSpan) {
        fNameSpan.textContent = firstName;
    }
    if (lNameSpan) {
        lNameSpan.textContent = lastName;
    }
    if (emailSpan) {
        emailSpan.textContent = email;
    }
    if (phoneNumSpan) {
        phoneNumSpan.textContent = phoneNum;
    }
    if (orgNameSpan) {
        orgNameSpan.textContent = orgName;
    }
    if (membershipSpan) {
        membershipSpan.textContent = membership;
    }
    if (timestampSpan) {
        timestampSpan.textContent = timestamp;
    }
});
