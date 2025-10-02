import React from 'react';
import { MessageContainer } from './Common.styles.js';

const Message = ({ type = 'info', children }) => {
  return (
    <MessageContainer $type={type}>
      {children}
    </MessageContainer>
  );
};

export default Message;