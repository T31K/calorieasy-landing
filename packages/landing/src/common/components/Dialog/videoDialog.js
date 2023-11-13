import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { styled, keyframes } from '@stitches/react';
import { violet, blackA } from '@radix-ui/colors';
import { Cross2Icon } from '@radix-ui/react-icons';

const VideoDialog = ({ label, content, contentClassName, closeIcon }) => (
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
  position: 'fixed',
  inset: '0',
  width: '100%',
  maxWidth: '850px',
  margin: '1.25rem auto',
  display: 'flex',
  placeContent: 'center',
  animation: `${contentShow} 200ms ease-in`,
  '&:focus': { outline: 'none' },
  zIndex: 9999,

  'iframe': {
    maxWidth: '100%',
    maxHeight: '100%',
  }
});

const IconButton = styled('button', {
  all: 'unset',
  fontFamily: 'inherit',
  borderRadius: '100%',
  height: 25,
  width: 25,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: violet.violet11,
  position: 'absolute',
  top: 10,
  right: 10,

  '&:hover': { backgroundColor: violet.violet4 },
  '&:focus': { boxShadow: `0 0 0 2px ${violet.violet7}` },
});

export default VideoDialog;