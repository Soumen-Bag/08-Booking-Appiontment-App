document.getElementById('user-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevents the default form submission behavior
  
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
  
    // Create an object with the form data
    const formData = {
      name: name,
      email: email
    };
  
    // Replace 'YOUR_CRUDCRUD_API_URL' with the actual URL from crudcrud.com
    //const apiUrl = 'https://crudcrud.com/api/c71050c824744c9ebadadd234d3c8d6e';
  
    // Make a POST request to crudcrud.com using Axios
    axios.post('https://crudcrud.com/api/c71050c824744c9ebadadd234d3c8d6e/apointmentdata', formData)
      .then(response => {
        console.log('POST request successful:', response.data);
  
        // If you want to perform additional actions or redirect after successful submission, do it here
      })
      .catch(error => {
        console.error('Error making POST request:', error);
      });
  });
  