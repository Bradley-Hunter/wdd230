const currentDate = new Date();
document.querySelector('#year').textContent = currentDate.getFullYear();

let lastDateModified = new Date(document.lastModified);
document.querySelector('#update').textContent = lastDateModified.toLocaleDateString('en-US') + " " + lastDateModified.getHours() + ":" + lastDateModified.getMinutes() + ":" + lastDateModified.getSeconds();