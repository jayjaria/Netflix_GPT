export const ValidateFormData = (email, password) => {
  const isEmailCorrect = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);

  const isPassCorrect =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!isEmailCorrect) {
    return "Email address is invalid !";
  }
  if (!isPassCorrect) {
    return "Set a strong password !";
  }

  return null;
};
