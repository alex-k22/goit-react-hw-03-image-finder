import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import Modal from './Modal/Modal';

export class App extends Component {
  state = {
    query: '',
    showModal: true,
  };

  onFormSubmit = ({ query }) => {
    this.setState({ query });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal}))
  }
 
src="https://cdn.pixabay.com/photo/2020/03/10/16/47/moon-4919501_1280.jpg";
alt="basketball";

  render() {
    return (
      <>
        <Searchbar onSubmit={this.onFormSubmit} toggleModal={this.toggleModal}/>
        <Modal showModal={this.state.showModal}
        toggleModal={this.toggleModal}
        src={this.src}
        alt={this.alt}/>
      </>
    );
  }
}
