import axios from 'axios';

export const removeItem = (itemType, id) => {
  return {
    type: 'REMOVE_ITEM',
    payload: {
      itemType,
      id,
    },
  };
};

export const addItem = (itemType, itemContent) => {
  const getId = () =>
    `${Math.random()
      .toString(36)
      .substr(2, 9)}`;

  return {
    type: 'ADD_ITEM',
    payload: {
      itemType,
      item: {
        id: getId(),
        ...itemContent,
      },
    },
  };
};

export const authenticate = (username, password) => {
  return dispatch => {
    dispatch({ type: 'AUTHENTICATE_REQUEST' });

    return axios
      .post('http://localhost:9000/api/user/login', {
        username,
        password,
      })
      .then(payload => dispatch({ type: 'AUTHENTICATE_SUCCES', payload }))
      .catch(err => {
        console.log(err);
        dispatch({ type: 'AUTHENTICATE_FAILURE' });
      });
  };
};
