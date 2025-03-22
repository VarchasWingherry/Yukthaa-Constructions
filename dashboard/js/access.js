let currentPage = 1;
const entriesPerPage = 10;

function updateEntries() {
    const entriesSelect = document.getElementById('entries');
    const newEntriesPerPage = parseInt(entriesSelect.value, 10);
    // Update entries per page and re-render table
    renderTable(currentPage, newEntriesPerPage);
}

function searchTable() {
    const input = document.getElementById('search');
    const filter = input.value.toLowerCase();
    const table = document.getElementById('adminTable');
    const tr = table.getElementsByTagName('tr');

    for (let i = 1; i < tr.length; i++) {
        const tds = tr[i].getElementsByTagName('td');
        let display = false;
        for (let j = 0; j < tds.length - 1; j++) { // Ignore the action buttons column
            if (tds[j].innerText.toLowerCase().includes(filter)) {
                display = true;
                break;
            }
        }
        tr[i].style.display = display ? '' : 'none';
    }
}

let sortOrder = Array.from({ length: 5 }, () => true);

function sortTable(columnIndex) {
    const table = document.getElementById('adminTable');
    const rows = Array.from(table.rows).slice(1);
    const sortedRows = rows.sort((a, b) => {
        const aText = a.cells[columnIndex].innerText;
        const bText = b.cells[columnIndex].innerText;
        return sortOrder[columnIndex] ? aText.localeCompare(bText) : bText.localeCompare(aText);
    });

    sortedRows.forEach(row => table.appendChild(row));
    sortOrder[columnIndex] = !sortOrder[columnIndex];
}

function renderTable(page, entriesPerPage) {
    const table = document.getElementById('adminTable');
    const tr = table.getElementsByTagName('tr');
    const start = (page - 1) * entriesPerPage + 1;
    const end = start + entriesPerPage;

    for (let i = 1; i < tr.length; i++) {
        tr[i].style.display = i >= start && i < end ? '' : 'none';
    }

    updatePaginationControls(page, entriesPerPage, tr.length - 1);
}

function updatePaginationControls(page, entriesPerPage, totalEntries) {
    const paginationControls = document.querySelector('.pagination-controls');
    const prevButton = paginationControls.querySelector('button:first-child');
    const nextButton = paginationControls.querySelector('button:last-child');
    const currentPageSpan = paginationControls.querySelector('span');

    prevButton.disabled = page === 1;
    nextButton.disabled = page >= Math.ceil(totalEntries / entriesPerPage);
    currentPageSpan.textContent = page;
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        renderTable(currentPage, entriesPerPage);
    }
}

function nextPage() {
    const totalEntries = document.getElementById('adminTable').getElementsByTagName('tr').length - 1;
    if (currentPage * entriesPerPage < totalEntries) {
        currentPage++;
        renderTable(currentPage, entriesPerPage);
    }
}

// Initial render
renderTable(currentPage, entriesPerPage);
