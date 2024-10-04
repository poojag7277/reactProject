import React from 'react';

const handleDelete = () => {
 
  const API_URL=process.env.REACT_APP_API_URL

return (
 <h1> this is the output in delete person</h1 >

  );
};

  export default DeletePerson;
// import React from 'react';

// const DeletePerson = ({ id, onDelete }) => {
//   const handleDelete = () => {
//     if (window.confirm('Are you sure you want to delete this person?')) {
//       onDelete(id);
//     }
//   };

//   return (
//     <button className="btn btn-delete" onClick={handleDelete}>
//       Delete done 
//     </button>
//   );
// };
// export default DeletePerson;

