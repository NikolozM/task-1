export const GET_BIRTHDAYS = 'GET_BIRTHDAYS';
export const SET_BIRTHDAYS = 'SET_BIRTHDAYS';

export const getBirthdays = () => ({
  type: GET_BIRTHDAYS,
});
export const setBirthdays = (birthdays) => ({
  type: SET_BIRTHDAYS,
  birthdays,
});
const initialState = {
  birthdays: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_BIRTHDAYS:
      const { birthdays } = action;
      return { ...state, birthdays: birthdays };
    default:
      return state;
  }
};
