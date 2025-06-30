import Modal from "./Modal";

export default Modal;
export type {
  ModalProps,
  ModalHeaderProps,
  ModalBodyProps,
  ModalFooterProps,
} from "./Modal";

// Export modal sub-components as named exports
export const ModalHeader = Modal.Header;
export const ModalBody = Modal.Body;
export const ModalFooter = Modal.Footer;
