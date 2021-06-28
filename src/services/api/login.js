import api from './api';

export default async function login (email, password) {
  const response =  await api.post('/login', {
    email,
    password
  });
  console.log(response)
  if (response.token && response.name){
    localStorage.setItem('token', response.token);
    localStorage.setItem('user', JSON.stringify(response.name));
    return true;
  }
  return false;
}