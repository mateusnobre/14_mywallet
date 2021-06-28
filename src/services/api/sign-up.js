import api from './api';

export default function signUp (name, email, password) {
  return api.post('/sign-up', {
    name,
    email,
    password
  });
}