async function editFormHandler(event) {
    event.preventDefault();
  
    const poll_text = document.querySelector('input[name="poll-text"]').value;
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
      ];

    const response = await fetch(`/api/polls/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            poll_text
        }),
        headers: {
            'Content-Type': 'application/json'
        }
      });
      
      if (response.ok) {
        document.location.replace('/profile/');
      } else {
        alert(response.statusText);
      }
  }
  
  document.querySelector('.edit-poll-form').addEventListener('submit', editFormHandler);