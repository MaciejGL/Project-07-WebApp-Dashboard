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
        alertBanner.style.display = "none"
    }
})




const user = document.getElementById('userField');
const message = document.getElementById('messageField');
const send = document.getElementById('send');
// FORM


send.addEventListener('click', (e) => {
    e.preventDefault()
    if (!user.value && !message.value) {
        alert('Please fill out user and message fields before sending')
    } else if (!user.value) {
        alert('Please fill out user field before sending')
    } else if (!message.value) {
        alert('Please fill out message field before sending')
    } else {
        alert(`Message successfully send to: ${user.value}`)
        message.value = "";
        user.value = ""
    }
});