let contacts = [];

function addContact() {
  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const address = document.getElementById("address").value.trim();
  const phone = document.getElementById("phone").value.trim();

  if (!firstName || !lastName || !address || !phone) {
    alert("Please fill in all fields");
    return;
  }

  const contact = {
    firstName,
    lastName,
    address,
    phone,
  };

  contacts.push(contact);

  displayContacts();

  document.getElementById("firstName").value = "";
  document.getElementById("lastName").value = "";
  document.getElementById("address").value = "";
  document.getElementById("phone").value = "";
}

function displayContacts() {
  const contactList = document.getElementById("contactList");
  contactList.innerHTML = "";

  contacts.forEach((contact, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
            <strong>${contact.firstName} ${contact.lastName}</strong> <br>
            📍 ${contact.address} <br>
            📞 ${contact.phone} <br>
            <button onclick="deleteContact(${index})">Delete</button>
        `;
    contactList.appendChild(li);
  });
}

function deleteContact(index) {
  contacts.splice(index, 1);
  displayContacts();
}
