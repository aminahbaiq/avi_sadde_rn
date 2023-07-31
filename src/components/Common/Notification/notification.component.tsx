import React, { FC, PropsWithChildren, useMemo } from 'react';
import { ComponentContainer, ContentContainer, MessageText } from './notification.style';
import { ViewProps, ViewStyle } from 'react-native';
import { EdgeInsets, useSafeAreaInsets } from 'react-native-safe-area-context';

export interface INotificationViewProps extends ViewProps {
  message: string;
}

const NotificationView: FC<INotificationViewProps> = (
  props: PropsWithChildren<INotificationViewProps>
) => {
  const safeAreaEdgeInsets: EdgeInsets = useSafeAreaInsets();

  const containerStyle: ViewStyle = useMemo(
    () => ({
      top: safeAreaEdgeInsets.top,
      end: safeAreaEdgeInsets.right,
      start: safeAreaEdgeInsets.left
    }),
    [safeAreaEdgeInsets]
  );

  return (
    <ComponentContainer style={[containerStyle, props.style]}>
      <ContentContainer>
        <MessageText>{props.message}</MessageText>
      </ContentContainer>
    </ComponentContainer>
  );
};

export default NotificationView;
