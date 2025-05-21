const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");
const btnPopup = document.querySelector(".btnlogin-popup");
const iconClose = document.querySelector(".icon-close");

registerLink.addEventListener("click", () => {
    wrapper.classList.add("active");
});

loginLink.addEventListener("click", () => {
    wrapper.classList.remove("active");
});

btnPopup.addEventListener("click", () => {
    wrapper.classList.add("active-popup");
});

iconClose.addEventListener("click", () => {
    wrapper.classList.remove("active-popup");
});

// */-------------start-------------------*/

// Navigation link click - show relevant section
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        // Remove active class from all nav links
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));

        // Add active to clicked nav link
        link.classList.add('active');

        // Hide all sections
        document.querySelectorAll('.section').forEach(section => {
            section.classList.remove('active');
        });

        // Get target section by link's href or data-target
        const target = link.getAttribute('href')?.substring(1) || link.dataset.target;

        if (target) {
            const sectionToShow = document.getElementById(target);
            if (sectionToShow) sectionToShow.classList.add('active');
        }
    });
});

// Add Button Logic
document.querySelectorAll('.btn-add').forEach(btn => {
    btn.addEventListener('click', () => {
        alert('Add button clicked! Implement your add logic here.');
        // e.g., open modal, collect form data, etc.
    });
});

// Update Button Logic
document.querySelectorAll('.btn-update').forEach(btn => {
    btn.addEventListener('click', () => {
        alert('Update button clicked! Implement your update logic here.');
    });
});

// Delete Button Logic
document.querySelectorAll('.btn-delete').forEach(btn => {
    btn.addEventListener('click', () => {
        const confirmed = confirm('Are you sure you want to delete this item?');
        if (confirmed) {
            alert('Item deleted! Implement delete logic here.');
        }
    });
});

// View All Button Logic (if needed)
document.querySelectorAll('.btn-view-all').forEach(btn => {
    btn.addEventListener('click', () => {
        alert('Viewing all records...');
        // Logic to display all data
    });
});

