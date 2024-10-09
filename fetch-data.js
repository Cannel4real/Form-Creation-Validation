async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users'
    
    const dataContainer = document.getElementById('api-data');

    try {   
      const response = await fetch (apiUrl);
      const users = await response.json();
      dataContainer.innerHTML = '';

      userList = document.createElement('ul');
        users.forEach(user => {
        let listItemContent = document.createElement('li');
        listItemContent.textContent = `${user.name} `;
    });
    
    dataContainer.appendChild(userList);
    console.log(userList);
        
    } catch (error) {
        dataContainer.textContent ='Failed to load user data.'
    }
    
}

// Call the function to fetch user data when the page loads

window.addEventListener('DOMContentLoaded', fetchUserData());

fetchUserData();