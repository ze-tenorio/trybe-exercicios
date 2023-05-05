import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

const INITIAL_STATE = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'NEXT_COLOR':
      return { ...state, index: state.index < 7 ? state.index + 1 : state.index };
    case 'PREVIOUS_COLOR':
      return { ...state, index: state.index > 0 ? state.index - 1 : state.index };
    default:
      return state;
  }
}

const store = createStore(reducer, composeWithDevTools());

const nextColor = () => {
  const action = { type: 'NEXT_COLOR' };
  store.dispatch(action)
}

const prevColor = () => {
  const action = { type: 'PREVIOUS_COLOR' };
  store.dispatch(action)
}

const nextColorBtn = document.getElementById('next');
const prevColorBtn = document.querySelector('#previous');
nextColorBtn.addEventListener('click', nextColor);
prevColorBtn.addEventListener('click', prevColor);

store.subscribe(() => {
  const { index, colors } = store.getState();
  const backgroundColor = colors[index];
  document.querySelector('body').style.backgroundColor = backgroundColor;
})
