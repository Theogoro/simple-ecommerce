const initialState = {
  array: [],
};

const ADD_NOTIFICATION = "ADD_NOTIFICATION";

const notificationReducer = (state = initialState, action) => {
  if (action.type === ADD_NOTIFICATION) {
    return { array: [...state.array, action.payload] };
  }

  return state;
};

export default notificationReducer;

export const addNotification = (notification) => (dispatch, getState) => {
  dispatch({ type: ADD_NOTIFICATION, payload: notification });
};
