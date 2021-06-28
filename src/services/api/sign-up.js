import api from './api';

export function signUp (name, email, password) {
  return api.post('/sign-up', {
    name,
    email,
    password
  });
}