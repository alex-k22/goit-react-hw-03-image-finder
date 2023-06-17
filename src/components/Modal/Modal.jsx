import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Modal.module.css';
import { AiOutlineCloseCircle } from 'react-icons/ai';


export default class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleEscPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleEscPress);
  }

  handleEscPress = (event) => {
    if (event.code === 'Escape') {
      this.props.toggleModal();
    }
  }

  handleOverlayClick = event => {
    if (event.currentTarget === event.target) {
      this.props.toggleModal();
    }
  };

  render() {
    const { src, alt } = this.props;
    console.log(src)
    return (
      <div className={css.overlay} onClick={this.handleOverlayClick}>
        <div className={css.modal}>
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
    );
  }
}

Modal.propTypes = {
  scr: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  toggleModal: PropTypes.func.isRequired,
};