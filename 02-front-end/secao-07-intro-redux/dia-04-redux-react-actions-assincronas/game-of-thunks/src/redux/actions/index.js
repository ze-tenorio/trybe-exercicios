export const requestAPI = () => ({ type: 'API_REQUISITION' });

export const getCharacter = (data) => ({
  type: 'API_SUCCESSFUL',
  data,
})

export const fetchAPI = (character) => {
  const searchParam = character;
  return async (dispatch, _getState) => {
    try {
      dispatch(requestAPI());
      const response = await fetch(`https://anapioficeandfire.com/api/characters?name=${searchParam}`, {
        method: 'GET',
        mode: 'cors',
        headers: {
        'Content-Type': 'application/json',
        }
      });
      const data = await response.json();
      console.log(data);
      dispatch(getCharacter(data));
    } catch (error) {
      console.log(error);
    }
  }
}