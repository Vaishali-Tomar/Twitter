import React, { useEffect, useState } from 'react';
import { getNotifications } from '../../services/notificationService';

const NotificationList = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      const response = await getNotifications();
      setNotifications(response.data);
    };

    fetchNotifications();
  }, []);

  return (
    <div className="bg-white p-4 rounded shadow-md">
      <h2 className="text-2xl mb-4">Notifications</h2>
      {notifications.map((notification) => (
        <div key={notification._id} className="mb-4">
          <p>{notification.message}</p>
        </div>
      ))}
    </div>
  );
};

export default NotificationList;
