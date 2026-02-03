
// Modal for image zoom
const modal = document.createElement('div');
modal.id = 'image-modal';
modal.innerHTML = `
    <span id="close-modal">&times;</span>
    <div id="zoom-controls">
        <button id="zoom-in">+</button>
        <button id="zoom-out">-</button>
    </div>
    <img id="modal-image" src="" alt="Zoomed Image">
`;
modal.style.display = 'none';
modal.style.position = 'fixed';
modal.style.zIndex = '1000';
modal.style.left = '0';
modal.style.top = '0';
modal.style.width = '100%';
modal.style.height = '100%';
modal.style.overflow = 'auto';
modal.style.backgroundColor = 'rgba(0,0,0,0.9)';
modal.style.justifyContent = 'center';
modal.style.alignItems = 'center';
document.body.appendChild(modal);

const modalImg = document.getElementById('modal-image');
const closeModal = document.getElementById('close-modal');
const zoomInBtn = document.getElementById('zoom-in');
const zoomOutBtn = document.getElementById('zoom-out');

let currentZoom = 1;
const maxZoom = 2.0;

closeModal.onclick = function() {
    modal.style.display = 'none';
    currentZoom = 1;
    modalImg.style.transform = 'scale(1)';
};

modal.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
        currentZoom = 1;
        modalImg.style.transform = 'scale(1)';
    }
};

zoomInBtn.onclick = function() {
    if (currentZoom < maxZoom) {
        currentZoom += 0.1;
        modalImg.style.transform = `scale(${currentZoom})`;
    }
};

zoomOutBtn.onclick = function() {
    if (currentZoom > 0.5) {
        currentZoom -= 0.1;
        modalImg.style.transform = `scale(${currentZoom})`;
    }
};

// Add click event to all images for zoom
document.querySelectorAll('img').forEach(img => {
    img.style.cursor = 'pointer';
    img.onclick = function() {
        modal.style.display = 'flex';
        modalImg.src = this.src;
        modalImg.alt = this.alt;
        // Set initial zoom based on section
        if (this.closest('#services')) {
            currentZoom = 1.0;
        } else {
            currentZoom = 1;
        }
        modalImg.style.transform = `scale(${currentZoom})`;
    };
});

// Button functionalities
document.querySelectorAll('.btn').forEach(btn => {
    btn.onclick = function(event) {
        const text = this.textContent.trim();
        if (text === 'Book Appointment') {
            event.preventDefault();
            // Send notification to owner's WhatsApp
            const ownerNumber = '9693135841'; // Rajendra's number
            const message = 'Hi, Rk Repairing Centre. I want to chat with you';
            window.open(`https://wa.me/${ownerNumber}?text=${encodeURIComponent(message)}`, '_blank');
        } else if (text === 'Get Quote') {
            event.preventDefault();
            // Send notification for bulk quote
            const ownerNumber = '9693135841';
            const message = 'Hi Rk Repairing Centre, I want to buy blades in bulk amount';
            window.open(`https://wa.me/${ownerNumber}?text=${encodeURIComponent(message)}`, '_blank');
        } else if (text === 'Contact for Bulk Orders') {
            event.preventDefault();
            // Send notification for bulk orders
            const ownerNumber = '9693135841';
            const message = 'Hi, Rk Repairing Centre, I am interested in bulk orders.';
            window.open(`https://wa.me/${ownerNumber}?text=${encodeURIComponent(message)}`, '_blank');
        }
        // Other buttons like Call Now, Send Photo, View on Map are already links
    };
});


// ===== New Arrivals Popup =====
window.addEventListener("load", () => {
    setTimeout(() => {
        const popup = document.getElementById("newArrivalsPopup");
        if (popup) {
            popup.style.display = "flex";
        }
    }, 2000); // opens after 2 seconds
});

function closeNewArrivals() {
    const popup = document.getElementById("newArrivalsPopup");
    if (popup) {
        popup.style.display = "none";
    }
}
