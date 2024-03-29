const { VITE_ADMIN_USERNAME, VITE_ADMIN_PASSWORD } = import.meta.env;

const verifyUser = (user) => {
  if (
    VITE_ADMIN_USERNAME === user.email &&
    VITE_ADMIN_PASSWORD === user.password
  ) {
    return true;
  } else {
    return false;
  }
};

export default verifyUser;
