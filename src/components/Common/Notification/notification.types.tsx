import { ViewStyle } from 'react-native';

export interface INotificationProviderProps {
  message: string;
  style?: ViewStyle;
}

export interface INotificationProvider {
  showNotification: (props: INotificationProviderProps) => void;
}
