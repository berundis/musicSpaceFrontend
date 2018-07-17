export function loginAction(email, password, callback) {
  return (dispatch) => {
    dispatch({ type: 'START_FETCH_LOGIN' })
    return fetch('http://localhost:3000/api/v1/sessions', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({ email, password })
    })
      .then(res => res.json())
      .then(json => {
        localStorage.setItem('token', json.token);
        localStorage.setItem('user_id', json.user_id);
        localStorage.setItem('email', json.email);
        localStorage.setItem('profile_type', json.profile_type)
        if (json.token) {
          callback('/profile')
        } else {
          localStorage.removeItem('token')
          localStorage.removeItem('user_id')
          localStorage.removeItem('profile_type')
          alert("Invalid Login!")
          callback('/login')
        }
      })
  }
}
