import {useState, createContext} from 'react';

// eslint-disable-next-line react-refresh/only-export-components
export const NotificationContext = createContext();
let timeoutID1;
let timeoutID2;

export default function NotificationProvider({children}) {

   const [notification, setNotification] = useState('');
   const [classes, setClasses] = useState('');
   const [moveBackToRight, setMoveBackToRight] = useState(false);
   // const [exitToLeft, setExitToLeft] = useState(false);


   const updateNotification = (type, value) => {
      if (timeoutID1) {
         clearTimeout(timeoutID1);
         clearTimeout(timeoutID2);
      }

      switch (type) {
         case 'error':
            setClasses('bg-semantic-a-400');
            break;
         case 'inform':
            setClasses('bg-semantic-i-400');
            break;
         case 'success':
            setClasses('bg-semantic-s-400');
            break;
         case 'warning':
            setClasses('bg-semantic-w-400');
            break;
         default:
            setClasses('bg-semantic-a-400');
      }
      setNotification(value);

      timeoutID1 = setTimeout(() => {
         // setExitToLeft(true);
         setMoveBackToRight(true);

         timeoutID2 = setTimeout(() => {
            setNotification('');
            // setExitToLeft(false);
            setMoveBackToRight(false);
         }, 1500);

      }, 3500);
   };

   return (
      <NotificationContext.Provider value={{updateNotification}}>
         {children}
         {notification && (<div className='utils-fixed'>
            <div
               className={`${moveBackToRight ? 'move-back-to-right' : 'move-in-from-right'}` + ' utils-notification-container utils-center-vertically'}>
               <p className={classes + ' utils-notification-paragraph utils-notify utils-center-text'}>
                  {notification}
               </p>
            </div>
         </div>)}
      </NotificationContext.Provider>
   );
}