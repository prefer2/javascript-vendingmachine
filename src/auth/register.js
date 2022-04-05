const baseURL = 'https://dory-vending-machine.herokuapp.com';

export const registerUser = async (userInfo) => {
  const response = await fetch(`${baseURL}/register`, {
    method: 'POST',
    body: JSON.stringify(userInfo),
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