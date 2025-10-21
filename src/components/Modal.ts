import { createPortal } from 'react-dom';

export const Modal = ({ children }: { children: any }) => {
    return createPortal(children, document.body);
}