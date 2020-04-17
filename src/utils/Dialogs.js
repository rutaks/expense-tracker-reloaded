import toast from 'cogo-toast';

export class Dialogs {
  static displaySuccessMessage(message) {
    toast.success(message, {
      position: 'bottom-right',
    });
  }

  static displayErrorMessage(message) {
    toast.error(message, {
      position: 'bottom-right',
    });
  }
}
