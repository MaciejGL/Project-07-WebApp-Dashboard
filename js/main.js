// Alert Banner

const alertBanner = document.getElementById('alert');

alertBanner.innerHTML =
    `
    <div class="alert-banner">
    <p><strong>Alert</strong> You have <strong>6</strong> overdue tasks to complete</p>      
    <p class="alert-banner-close">x</p>
    </div>
    `;

alertBanner.addEventListener('click', (e) => {
    const element = e.target;
    if (element.classList.contains("alert-banner-close")) {
        alertBanner.style.display = "none";
    }
});




const user = document.getElementById('userField');
const message = document.getElementById('messageField');
const send = document.getElementById('send');
// FORM


send.addEventListener('click', (e) => {
    e.preventDefault();
    if (!user.value && !message.value) {
        alert('Please fill out user and message fields before sending');
    } else if (!user.value) {
        alert('Please fill out user field before sending');
    } else if (!message.value) {
        alert('Please fill out message field before sending');
    } else {
        alert(`Message successfully send to: ${user.value}`);
        message.value = "";
        user.value = "";
    }
});


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
    modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};




// LocalStorage SETTINGS SECTION



const sectionSettings = document.querySelector('#settings');
const onOffEmail = document.querySelector('#email');
const onOffPublic = document.querySelector('#public');
const selectTimezone = document.querySelector('#timezone');
const save = document.querySelector('#save');
const cancel = document.querySelector('#cancel');

let emailNotification = localStorage.getItem('emailNotification');
let publicProfile = localStorage.getItem('publicProfile');
let timeZone = localStorage.getItem('timeZone');



const getSwitcherData = (localData, switcher) => {
    if (localData == 'true') {
        switcher.checked = true;
    } else {
        switcher.checked = false;
    }
};

const getSelectData = (localData, select) => {
    if (localData) {
        select.value = timeZone;
    }
};

window.addEventListener('load', () => {
    getSwitcherData(emailNotification, onOffEmail);
    getSwitcherData(publicProfile, onOffPublic);
    getSelectData(timeZone, selectTimezone);
});


const setSettings = () => {
    if (onOffEmail.checked) {
        emailNotification = true;
    }
    if (!onOffEmail.checked) {
        emailNotification = false;
    }
    if (onOffPublic.checked) {
        publicProfile = true;
    }
    if (!onOffPublic.checked) {
        publicProfile = false;
    }
    if (selectTimezone) {
        timeZone = selectTimezone.value;
    }

    if (publicProfile.toString() !== localStorage.getItem('publicProfile') || emailNotification.toString() !== localStorage.getItem('emailNotification') || timeZone.toString() !== localStorage.getItem('timeZone')) {
        cancel.disabled = false;
    } else {
        cancel.disabled = true;
    }
};


sectionSettings.addEventListener('click', setSettings);

save.addEventListener('click', () => {
    localStorage.setItem('emailNotification', emailNotification);
    localStorage.setItem('publicProfile', publicProfile);
    localStorage.setItem('timeZone', timeZone);
});

cancel.addEventListener('click', () => {
    emailNotification = localStorage.getItem('emailNotification');
    publicProfile = localStorage.getItem('publicProfile');
    timeZone = localStorage.getItem('timeZone');
    getSwitcherData(emailNotification, onOffEmail);
    getSwitcherData(publicProfile, onOffPublic);
    getSelectData(timeZone, selectTimezone);
});