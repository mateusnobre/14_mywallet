import api from './api';

export function list (id) {
  return api.get(`/transactions/${id}`);
}

export function rent (customerId, gameId, daysRented) {
  return api.post('/rentals', {
    customerId,
    gameId,
    daysRented
  });
}

export function returnRental (rentalId) {
  return api.post(`/rentals/${rentalId}/return`);
}

export function destroy (rentalId) {
  return api.delete(`/rentals/${rentalId}`);
}
