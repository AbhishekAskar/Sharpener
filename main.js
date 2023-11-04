// localStorage.setItem('Name', 'Abhi');
// console.log(localStorage.getItem('Name'));
// localStorage.removeItem('Name');

// sessionStorage.setItem('Name', 'John');
// sessionStorage.removeItem('Name');

// document.cookie = 'name=Bob; expires=' + new Date(2024, 0, 1).toUTCString(); 

// // This cookie will never expire because of the year
// document.cookie = 'lastName=Smith; expires=' + new Date(9999, 0, 1).toUTCString();
// console.log(document.cookie);

document.getElementById('my-form').addEventListener('submit', function(e){
    e.preventDefault();
    let inputName = document.getElementById('name').value;
    let inputEmail = document.getElementById('email').value;

    localStorage.setItem('Name', inputName);
    localStorage.setItem('Email', inputEmail);

});

