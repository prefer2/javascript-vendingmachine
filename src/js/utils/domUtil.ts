export const manageErrors = (response) => {
  if (!response.ok) {
    const responseError = {
      message: `${response.status} ${response.statusText}`,
    };
    throw responseError;
  }

  return response;
};

export const showSnackBar = (message: string) => {
  const snackbar = document.querySelector('.snackbar');
  snackbar.textContent = message;
  snackbar.classList.toggle('show');
  setTimeout(() => {
    snackbar.classList.toggle('show');
  }, 3000);
};