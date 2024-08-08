const invoiceDetails = document.getElementById('invoiceDetails');
const storedInvoiceData = sessionStorage.getItem('invoiceData');
const invoiceData = storedInvoiceData ? JSON.parse(storedInvoiceData) : {};
invoiceData.invoiceNumber = invoiceData.invoiceNumber || 'INV-001';
invoiceData.date = invoiceData.date || new Date().toLocaleDateString();

const invoiceHTML = `
    <h3>Invoice: ${invoiceData.invoiceNumber}</h3>
    <p><strong>Customer:</strong> ${invoiceData.name}</p>
    <p><strong>Email:</strong> ${invoiceData.email}</p>
    <p><strong>Address:</strong> ${invoiceData.address}</p>
    <table>
        <tr>
            <th>Product</th>

        </tr>
        <tr>
            <td>${invoiceData.product}</td>
        </tr>
    </table>
    <p><strong>Invoice Date:</strong> ${invoiceData.date}</p>
`;

invoiceDetails.innerHTML = invoiceHTML;
