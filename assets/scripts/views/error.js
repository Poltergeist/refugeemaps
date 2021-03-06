/**
 * The error
 */
export default class {
  /**
   * Initialize
   */
  constructor() {
    this.$container = document.querySelector('.error');
    this.$cancel = this.$container.querySelector('.error__actions__cancel');
    this.$tryAgain = this.$container
      .querySelector('.error__actions__try-again');

    this.$cancel.addEventListener('click', () => this.hide());
    this.$tryAgain.addEventListener('click', () => this.reload());
  }

  /**
   * Reload the page
   */
  reload() {
    window.location.reload(true);
  }

  /**
   * Show the error
   */
  show() {
    this.$container.classList.remove('overlay--hidden');
  }

  /**
   * Hide the error
   */
  hide() {
    this.$container.classList.add('overlay--hidden');
  }
}
