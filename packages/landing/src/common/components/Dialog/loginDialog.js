import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { styled, keyframes } from '@stitches/react';
import { violet, blackA } from '@radix-ui/colors';
import { Cross2Icon } from '@radix-ui/react-icons';

const LoginDialog = ({ label, content, contentClassName, closeIcon }) => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      {label}
    </Dialog.Trigger>
    <Dialog.Portal>
      <DialogOverlay />
      <DialogContent className={contentClassName}>
        {content}
        <Dialog.Close asChild>
          {closeIcon || <IconButton aria-label="Close">
            <Cross2Icon />
          </IconButton>}
        </Dialog.Close>
      </DialogContent>
    </Dialog.Portal>
  </Dialog.Root>
);

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
});

const contentShow = keyframes({
  '0%': { opacity: 0 },
  '60%': { opacity: 0.75 },
  '100%': { opacity: 1 },
});

const DialogOverlay = styled(Dialog.Overlay, {
  backgroundColor: blackA.blackA9,
  position: 'fixed',
  inset: 0,
  animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  zIndex: 9999,
});

const DialogContent = styled(Dialog.Content, {
  backgroundColor: 'transparent',
  borderRadius: 6,
  boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  position: 'fixed',
  inset: '0',
  width: '100%',
  maxWidth: '1170px',
  margin: '1.25rem auto',
  animation: `${contentShow} 200ms ease-in`,
  '&:focus': { outline: 'none' },
  zIndex: 9999,
});

const IconButton = styled('button', {
  all: 'unset',
  fontFamily: 'inherit',
  borderRadius: '100%',
  backgroundColor: 'rgb(16, 172, 132) !important',
  boxShadow: 'rgba(16, 172, 132, 0.5) 0px 8px 38px !important',
  height: 40,
  width: 40,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#fff',
  position: 'absolute',
  top: 15,
  right: 15,
  cursor: 'pointer',

  '&:hover': {
    backgroundColor: violet.violet4,
    opacity: 0.88,
  },
  '&:focus': { boxShadow: `0 0 0 2px ${violet.violet7}` },
});

export default LoginDialog;