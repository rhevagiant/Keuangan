function tambahCatatan() {
    var nominal = document.getElementById('nominal').value;
    var tipeTransaksi = document.getElementById('tipeTransaksi').value;
    var deskripsi = document.getElementById('deskripsi').value;

    var tableRef = document.getElementById('outputData');

    var newRow = tableRef.insertRow(tableRef.rows.length);
    var newCell1 = newRow.insertCell(0);
    var newCell2 = newRow.insertCell(1);
    var newCell3 = newRow.insertCell(2);

    newCell1.appendChild(document.createTextNode(nominal));
    newCell2.appendChild(document.createTextNode(tipeTransaksi));
    newCell3.appendChild(document.createTextNode(deskripsi));
}