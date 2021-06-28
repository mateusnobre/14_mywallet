import api from './api';

export function list (config) {
  return api.get(`/transactions`, config);
}

export function makeTransaction (value, comment, config) {
  return api.post('/transactions', {
    value,
    comment
  }, config);
}