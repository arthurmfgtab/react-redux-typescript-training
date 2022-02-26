export const depositMoney = (amount) => (dispatch) => {
  dispatch({
    type: "deposit",
    payload: amount,
  });
};

export const withdrawMoney = (amount) => (dispatch) => {
  dispatch({
    type: "withdraw",
    payload: amount,
  });
};

export const goBankrupt = () => (dispatch) => {
  dispatch({
    type: "bankrupt",
    payload: 0,
  });
};
