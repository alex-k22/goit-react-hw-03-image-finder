import { Component } from 'react';
// import { createPortal } from 'react-dom';
import css from './Modal.module.css';
import { AiOutlineCloseCircle } from 'react-icons/ai';

// const modalPortal = document.querySelector('#modal-portal');

export default class Modal extends Component {

    componentDidMount() {

}

  render() {
    const { showModal, src, alt } = this.props;
    return (
      <>
        {showModal && (
          <div className={css.overlay}>
            <div class={css.modal}>
              <img src={src} alt={alt} />
              <button
              type="button"
              className={css.closeBtn}
              onClick={() => this.props.toggleModal()}
            >
              <AiOutlineCloseCircle
                style={{ fill: 'white', width: '48px', height: '48px' }}
              />
            </button>
            </div>

          </div>
        )}
      </>
    );
  }
}
