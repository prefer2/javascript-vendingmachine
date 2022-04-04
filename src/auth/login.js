import { showSnackBar } from '../utils/domUtil';

export const loginUser = async ({ email, password }) => {
  const response = await fetch('http://localhost:3000/login', {
    method: 'POST',
    body: JSON.stringify({
      email,
      password,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .catch(({ message }) => {
      window.alert(message);
    });

  return response;
};
