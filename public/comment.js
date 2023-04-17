async function commentFormHandler(event) {
  event.preventDefault();

  const comment_text = document.querySelector("#comment-text").value;
  const poll_id = document.querySelector("#poll-id").value;


  if (comment_text) {
    const response = await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({
        poll_id,
        comment_text
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      document.location.reload();
      console.log(comment_text);
    } else {
      alert(response.statusText);
    }
  }
}

document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);