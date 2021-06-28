import api from './api';

export function login (email, password) {
  const response =  api.post('/login', {
    email,
    password
  });
  localStorage.setItem('token', response.data.token);
  localStorage.setItem('user', JSON.stringify(response.data.user));
}