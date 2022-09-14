import { REGISTER_CUSTOMER } from '../actions/index';

const INITIAL_STATE = [{
  email: '',
  password: '',
}];

function registeredCustomersReducer(state = INITIAL_STATE, action) {
  console.log('State: ', state);
  switch (action.type) {
  case REGISTER_CUSTOMER:
    return { state: [...state, action.email, action.password] };
  default:
    return state;
  }
}

export default registeredCustomersReducer;
