// UC-12
window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHTML();
});

const createInnerHTML = () => {
    const headerHtml = "<th></th><th>Full Name</th><th>Address</th><th>City</th><th>State</th><th>Zip-Code</th><th>Phone Number</th><th>Actions</th>";
    let innerHtml = `${headerHtml}`;
    let addressBookList = createAddressBookJSON();
    for(const addressBookData of addressBookList) {
        innerHtml = `${innerHtml}
        <tr>
            <td></td>
            <td>${addressBookData._name}</td>
            <td>${addressBookData._address}</td>
            <td>${addressBookData._city}</td>
            <td>${addressBookData._state}</td>
            <td>${addressBookData._zip}</td>
            <td>${addressBookData._phone}</td>
            <td>
            <img id="1" onclick="remove(this)" src="../assets/delete-black-18dp.svg" alt="delete">
            <img id="1" onclick="update(this)" src="../assets/create-black-18dp.svg" alt="edit">
            </td>
        </tr>`;
    }
    document.querySelector('#table-display').innerHTML = innerHtml;
}

const createAddressBookJSON = () => {
    let addressBookLocal = [
        {
            _name: 'Gagan S R',
            _address: 'Heelalige',
            _city: 'Bangalore',
            _state: 'Karnataka',
            _zip: '560099',
            _phone: '8722289619',
        },
        {
            _name: 'Shravya Reddy',
            _address: 'Shanthapuram',
            _city: 'Hosur',
            _state: 'Tamil Nadu',
            _zip: '653241',
            _phone: '7894561230',
        }
    ];
    return addressBookLocal;
}