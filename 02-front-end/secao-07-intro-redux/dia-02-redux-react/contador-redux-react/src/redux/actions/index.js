export const actionCounter = (increment = 1) => ({
  type: 'INCREMENT_COUNTER',
  payload: increment,
});

export const actionClick = () => ({
  type: 'INCREMENT_CLICK',
})
