import actions from './actions';
import _ from 'lodash';

const initialState = {
  cheap: {
    loading: false,
    payload: [],
    error: ''
  },
  business: {
    loading: false,
    payload: [],
    error: ''
  },
  create: {
    loading: false,
    error: ''
  }
};

const Flight = (state = initialState, action) => {
  switch (action.type) {
    case actions.CHEAP_SUCCESS:
      return { ...state, cheap: { ...state.cheap, payload: action.payload } };
    case actions.CHEAP_LOADING:
      return { ...state, business: { ...state.cheap, loading: action.loading } };
    case actions.CHEAP_ERROR:
      return { ...state, business: { ...state.cheap, error: action.error } };
    case actions.BUSINESS_SUCCESS:
      return { ...state, business: { ...state.business, payload: action.payload } };
    case actions.BUSINESS_LOADING:
      return { ...state, business: { ...state.business, loading: action.loading } };
    case actions.BUSINESS_ERROR:
      return { ...state, business: { ...state.business, error: action.error } };
    case actions.CREATE_FLIGHT_SUCCESS:
      if (action.payload.type === 0) {
        return {
          ...state,
          cheap: { ...state.cheap, payload: _.concat(state.cheap.payload, action.payload.params) }
        };
      }
      return {
        ...state,
        business: {
          ...state.business,
          payload: _.concat(state.business.payload, action.payload.params)
        }
      };
    case actions.CREATE_FLIGHT_LOADING:
      return { ...state, business: { ...state.business, loading: action.loading } };
    case actions.FLIGHT_RESET:
      return initialState;
    default:
      return state;
  }
};

export default Flight;
