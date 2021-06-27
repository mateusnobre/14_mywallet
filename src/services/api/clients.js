import api from './api';

export function list () {
  return api.get('/clients');
}

export function create (name, email, password) {
  return api.post('/clients', {
    name,
    email,
    password
  });
}
