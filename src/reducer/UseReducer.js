export const initialState = null;

export const reducer = (state, action) => {
  console.log(`state ` + state);
  if (action.type === "USER") {
    console.log(`action payload` + action);
    return action.payload;
  }
  return state;
};
