import axios from 'axios';

const token = localStorage.getItem("token");
const config = {
  headers: {
    authorization: `Bearer ${token}`,
  },
};

export async function list () {
  const response = await axios.get('http://localhost:4000/transactions', config);
  return response;
}

export async function makeTransaction (value, comment) {
  const response = await axios.post('http://localhost:4000/transactions', {
    value,
    comment
  }, config);
  console.log(response)
  if (response.status === 201){
    return true
  }
  else {
    return false
  }
}