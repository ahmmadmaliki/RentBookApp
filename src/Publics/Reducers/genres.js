const initialStategenre = {
    Genres: [],
    isLoading: false,
    isFulfilled: false,
    isRejected: false,
  };
  
  const genres = (state = initialStategenre, action) => {
    switch (action.type) {
      case 'GET_GENRE_PENDING':
        return {
          ...state,
          isLoading: true,
          isFulfilled: false,
          isRejected: false,
        };
      case 'GET_GENRE_REJECTED':
        return {
          ...state,
          isLoading: false,
          isRejected: true,
        };
      case 'GET_GENRE_FULFILLED':
        return {
          ...state,
          isLoading: false,
          isFulfilled: true,
          Genres: action.payload.data,
        };
      default:
        return state;
    }
  };
  export default genres;