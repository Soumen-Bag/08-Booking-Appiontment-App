document.addEventListener('DOMContentLoaded', function () {
    // Replace 'YOUR_CRUDCRUD_API_URL' with the actual URL from crudcrud.com
    const apiUrl = 'YOUR_CRUDCRUD_API_URL/users';
  
    // Make a GET request to crudcrud.com using Axios
    axios.get(apiUrl)
      .then(response => {
        const userData = response.data;
  
        // Check if there is any data to display
        if (userData && userData.length > 0) {
          // Assuming you have a container with the id 'user-list' to display user details
          const userListContainer = document.getElementById('user-list');
  
          // Clear previous content (optional)
          userListContainer.innerHTML = '';
  
          // Iterate through the user data and display it
          userData.forEach(user => {
            const userElement = document.createElement('div');
            userElement.innerHTML = `<strong>Name:</strong> ${user.name}, <strong>Email:</strong> ${user.email}`;
            userListContainer.appendChild(userElement);
          });
        } else {
          console.log('No user data found.');
        }
      })
      .catch(error => {
        console.error('Error making GET request:', error);
      });
  });
  
//   // Your existing form submission logic goes here
//   document.getElementById('user-form').addEventListener('submit', function (event) {
//     event.preventDefault();
//     // ... (your existing code for handling form submission)
//   });
  