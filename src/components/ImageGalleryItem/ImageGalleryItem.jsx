import { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from 'components/Modal/Modal';
import css from './ImageGalleryItem.module.css';

export class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  render() {
    const { src, alt, modalSrc } = this.props;
    return (
      <>
      <li className={css.ImageGalleryItem}>
        <img
          className={css['ImageGalleryItem-image']}
          src={src}
          alt={alt}
          onClick={this.toggleModal}
        />
      </li>
      {this.state.showModal && <Modal src={modalSrc} alt={alt} toggleModal={this.toggleModal}/> }
      </>
    );
  }
}

ImageGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  modalSrc: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};