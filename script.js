const purchaseForm = document.getElementById('purchaseForm');

purchaseForm.addEventListener('submit', (event) => {
    event.preventDefault(); 
    const formData = new FormData(purchaseForm);
    const invoiceData = {};
    for (let [key, value] of formData.entries()) {
        invoiceData[key] = value;
    }
    sessionStorage.setItem('invoiceData', JSON.stringify(invoiceData));

    window.location.href = 'invoice.html';
});
