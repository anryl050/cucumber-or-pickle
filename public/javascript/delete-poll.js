async function deleteFormHandler(event) {
    event.preventDefault();
    
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
      ];

    const response = await fetch(`/api/polls/${id}`, {
        method: 'DELETE',
        body: JSON.stringify({
          poll_id: id
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
  
  document.querySelector('.delete-poll-btn').addEventListener('click', deleteFormHandler);