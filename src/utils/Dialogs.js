import toast from 'cogo-toast';

export class Dialogs {
  static displaySuccessMessage(message) {
    toast.success(message, {
      position: 'top-center',
    });
  }

  static displayErrorMessage(message) {
    toast.error(message, {
      position: 'top-center',
    });
  }
}
