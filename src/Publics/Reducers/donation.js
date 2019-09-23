const initialStategenre = {
    Donation: [],
    isLoading: false,
    isFulfilled: false,
    isRejected: false,
  };
  
  const donation = (state = initialStategenre, action) => {
    switch (action.type) {
      case 'GET_DONATION_PENDING':
        return {
          ...state,
          isLoading: true,
          isFulfilled: false,
          isRejected: false,
        };
      case 'GET_DONATION_REJECTED':
        return {
          ...state,
          isLoading: false,
          isRejected: true,
        };
      case 'GET_DONATION_FULFILLED':
        return {
          ...state,
          isLoading: false,
          isFulfilled: true,
          Donation: action.payload.data.data,
        };
      default:
        return state;
    }
  };
  export default donation;