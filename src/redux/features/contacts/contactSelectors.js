const getUserEmail = state => state.contact.user.email;

const getIsLoggedIn = state => state.contact.isLoggedIn;

const getToken = state => state.contact.token;

const authSelectors = {
  getUserEmail,
  getIsLoggedIn,
  getToken,
};

export default authSelectors;

export const selectIsRefreshing = state => state.contact.isRefreshing;
