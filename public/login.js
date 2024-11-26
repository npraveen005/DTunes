const loginForm = document.getElementById('loginForm');
const DAuthBtn = document.getElementById('DAuth');

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: document.getElementById('usernameInput').value,
            password: document.getElementById('passwordInput').value
        }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // Redirect to home page
            window.location.href = '/';
        } else {
            console.log('Login failed');
            alert(data.message);
        }
    })
    .catch((error) => {
        console.log('Error:', error);
    });
})

DAuthBtn.onclick = () => {
    fetch('/dAuth/get-url')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        if (data.success) {
            window.location.href = data.url; //redirecting to dAuth
        } else {
            console.log('Login failed');
            alert(data.message);
        }
    })
    .catch((error) => {console.log('Error:', error)});
}