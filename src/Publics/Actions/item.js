import axios from 'axios';

export const getBook = () => {
  return {
    type: 'GET_BOOK',
    payload: axios.get ('http://localhost:3030/bookrent/book'),
  };
};
export const updateBook=(id, Title, Description, Image, Date_Released)=>{
  return{
    type: 'UPDATE_BOOK',
    payload: axios.patch(`http://localhost:3030/bookrent/book?id=${id}&Title=${Title}&Description=${Description}&Image=${Image}&Date_Released=${Date_Released}`)
  }
};
export const deleteBook=(id)=>{
  return{
    type: 'DELETE_BOOK',
    payload: axios.delete(`http://localhost:3030/bookrent/book?id=${id}`)
  }
};
export const addBook=(data)=>{
  return{
    type: 'ADD_BOOK',
    payload: axios.post('http://localhost:3030/bookrent/book',data)
  }
}
export const borrowBook=(data)=>{
  return{
    type: 'BORROW_BOOK',
    payload: axios.post('http://localhost:3030/bookrent/rent',data)
  }
}
export const returnBook=(id)=>{
  console.log(id)
  return{
    type: 'RETURN_BOOK',
    payload: axios.patch('http://localhost:3030/bookrent/return', id)
  }
}