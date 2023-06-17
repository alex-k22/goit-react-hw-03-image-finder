import { Component } from 'react';
import { Notify } from 'notiflix';
import Searchbar from './Searchbar/Searchbar';
import Button from './Button/Button';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import { fetchPhotos } from 'services/images-api';

export class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    status: 'idle',
  };

  onFormSubmit = ({ query }) => {
    if (this.state.query === query) {
      return;
    }
    this.setState({ query, page: 1, images: [] });
  };

  onShowMoreButtonClick = () => {
    if (this.state.images.length >= 500) {
      Notify.failure('The end of collection');
      return;
    }

    this.setState(({ page }) => ({
      page: page + 1,
    }));
  };

  async componentDidUpdate(prevProps, prevState) {
    const { page, query, images } = this.state;

    if (prevState.query !== query || prevState.page !== page) {
      try {
        this.setState({ status: 'pending' });
        const { data } = await fetchPhotos(this.state.query, this.state.page);

        if (data.hits.length === 0) {
          Notify.failure('Sorry, but nothing found');
          this.setState({ status: 'rejected' });
        }
        if (data.hits.length > 0) {
          this.setState({ status: 'resolved' });
        }

        this.setState({ images: [...images, ...data.hits] });
      } catch (error) {
        console.log(error);
        Notify.failure(error.message);
        this.setState({ status: 'rejected' });
      }
    }
  }

  render() {
    const { images, status } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.onFormSubmit} />
        {images && <ImageGallery images={images} />}
        {status === 'pending' && <Loader />}
        {status === 'resolved' && <Button onClick={this.onShowMoreButtonClick} />}
      </>
    );
  }
}
