import React from 'react';
import axios from 'axios';

const notification = () => {
  
  const API_URL=process.env.REACT_APP_API_URL
  console.log(API_URL);

 return (
        <div>
        <h2>this is the notification page</h2>
        </div>
      );
    };
    
    export default notification;
// // src/components/Notification.js

// import React from 'react';

// const Notification = ({ message, onClose }) => {
//   const notificationClass = `notification ${message.type}`;

//   return (
//     <div className={notificationClass}>
//       {message.text}
//       <button onClick={onClose} className="btn btn-cancel">Close</button>
//     </div>
//   );
// };

// export default Notification;

