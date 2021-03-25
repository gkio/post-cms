const POST_API = process.env.REACT_APP_API_HOST;

function handleErrors(response) {
    if (!response.ok) {
        throw response.statusText;
    }
    return response.json();
}

const fetchPost = (id) => {
  return new Promise((resolve, reject) => {
    fetch(`${POST_API}/posts/${id}`)
    .then(handleErrors)
    .then((response) => resolve(response))
    .catch((err) => reject(err))
  })
}

export {
  fetchPost,
}