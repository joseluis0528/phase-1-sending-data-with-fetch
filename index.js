// Add your code here

function submitData(userName, userEmail) {
    
    const configUsers = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            name: userName,
            email: userEmail,
        })
    }
    
    return fetch('http://localhost:3000/users', configUsers)
    .then(response => response.json())
    .then(data => {
        document.body.append(data.id);
    })
    .catch(error => {
        alert('Not valid!');
        document.body.append(error.message);
    })
}