const comment_text = document.querySelector('#comment-text').value.trim();
    const poll_id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];

const commentFormHandler = async (event) => {

  if (event.target.hasAttribute('data-id')){
    const id = event.target.getAttribute('data-id');

    if (comment_text && poll_id) {
      const response = await fetch(`/api/polls/${id}`, {
        method: 'POST',
        body: JSON.stringify({
          comment_text,
          poll_id
        }),
        headers: {
          'Content-Type': 'application/json'
        }        
      });} 
    if (response.ok) {
    document.location.reload();
  } else {
  alert('Sorry, comment submission failed. Please try again in a moment.');
}}
};

console.log('button is clicked')
document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);



// async function commentFormHandler(event) {
//     event.preventDefault();
  
//     const comment_text = document.querySelector('#comment-text').value.trim();
//     const poll_id = window.location.toString().split('/')[
//       window.location.toString().split('/').length - 1
//     ];
  
//     if (comment_text && poll_id) {
//       const response = await fetch('/api/comments', {
//         method: 'POST',
//         body: JSON.stringify({
//           comment_text,
//           poll_id
//         }),
//         headers: {
//           'Content-Type': 'application/json'
//         }

        
//       });
//       console.log(comment_text && poll_id);
  
//       // if (response.ok) {
//       //   document.location.reload();
//       // } else {
//       //   alert(response.statusText);
//       // }
//       if (response.ok) {
//            document.location.reload();
//     } else {
//         alert('Sorry, comment submission failed. Please try again in a moment.');
//     }
//     }
//   }
  
//   document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);