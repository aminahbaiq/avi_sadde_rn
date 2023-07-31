import styled from '@emotion/native';
import { Colors, Fonts } from '../../../res';

export const ComponentContainer = styled.View({
  position: 'absolute',
  bottom: 0,
  marginBottom: 20
});

export const ContentContainer = styled.View({
  minHeight: 40,
  backgroundColor: Colors.mediumPurple,
  paddingHorizontal: 16,
  paddingVertical: 8,
  flex: 1,
  start: 0,
  end: 0,
  position: 'absolute',
  bottom: 0
});

export const MessageText = styled.Text({
  fontFamily: Fonts.simplerBold,
  fontWeight: '700',
  fontSize: 14,
  color: Colors.woodSmoke,
  marginStart: 14
});
