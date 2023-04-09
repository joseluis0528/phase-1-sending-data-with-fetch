// Add your code here

function submitData(userName, userEmail) {
    fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            user: userName,
            email: userEmail,
        })
    })
    .then(response => response.json())
    .then(data => {
        
    })
}