import React from 'react'

import { Content, Overlay, StyledReactModal } from './styles'

interface IProps {
  isOpen: boolean
  onClose?: () => void
  triggerClose?: boolean
  children: React.ReactNode
}

const Modal: React.FC<IProps> = ({ isOpen, onClose, triggerClose = false, children }) => {
  return (
    <StyledReactModal
      bodyOpenClassName="modal"
      isOpen={isOpen}
      onRequestClose={onClose}
      appElement={document.getElementById('root') || undefined}
      overlayElement={(props, contentEl) => <Overlay {...props}>{contentEl}</Overlay>}
      contentElement={(props, children) => <Content {...props}>{children}</Content>}
      shouldFocusAfterRender
      shouldCloseOnEsc={triggerClose}
      shouldCloseOnOverlayClick={triggerClose}
    >
      {children}
    </StyledReactModal>
  )
}

export default React.memo(Modal)
