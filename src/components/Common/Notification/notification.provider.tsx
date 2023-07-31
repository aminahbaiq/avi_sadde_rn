import React, { FC, useEffect, useState } from 'react';
import { INotificationProvider, INotificationProviderProps } from './notification.types';
import NotificationView from './notification.component';

export let NotificationActionProvider: INotificationProvider = {
  showNotification: (_: INotificationProviderProps) => {}
};

const NotificationProvider: FC = () => {
  const [notificationProps, setNotificationProps] = useState<
    INotificationProviderProps | undefined
  >();

  useEffect(() => {
    NotificationActionProvider.showNotification = props => setNotificationProps(props);
  }, [setNotificationProps]);

  useEffect(() => {
    const timer = setTimeout(() => setNotificationProps(undefined), 3000);
    return () => clearTimeout(timer);
  }, [notificationProps]);

  return notificationProps !== undefined ? (
    <NotificationView message={notificationProps.message} style={notificationProps.style} />
  ) : null;
};

export default NotificationProvider;
