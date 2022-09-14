// Types
export const REGISTER_CUSTOMER = 'REGISTER_CUSTOMER';

// Actions
export const minhaAction = (email, password) => ({
  type: REGISTER_CUSTOMER, email, password,
});
