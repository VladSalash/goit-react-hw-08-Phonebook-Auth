const getUserEmail = state => state.auth.user.email;

const getIsLoggedIn = state => state.auth.isLoggedIn;

const getToken = state => state.auth.token;

const authSelectors = {
  getUserEmail,
  getIsLoggedIn,
  getToken,
};

export default authSelectors;

export const selectIsRefreshing = state => state.auth.isRefreshing;
