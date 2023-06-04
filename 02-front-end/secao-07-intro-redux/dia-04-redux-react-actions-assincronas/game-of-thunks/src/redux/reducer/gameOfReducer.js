const INITIAL_STATE = {
  isLoading: false,
  data: '',
}

const gameOfReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'API_REQUISITION':
      return {
        ...state,
        isLoading: true,
        data: '',
      }
    case 'API_SUCCESSFUL':
      return {
        ...state,
        isLoading: false,
        data: action.data[0],
      }
    default:
        return state;
  }
}

export default gameOfReducer;