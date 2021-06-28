import api from './api';

export default async function Login (email, password) {
  const response =  await api.post('/login', {
    email,
    password
  });
  if (response.token && response.name){
    localStorage.setItem('token', response.token);
    localStorage.setItem('user', JSON.stringify(response.name));
  }
  return false;
}