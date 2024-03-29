import React, { Component } from "react";
import PropTypes from "prop-types";
import Masonry from "react-masonry-component";

import Carousel, { Modal, ModalGateway } from "react-images";

const masonryOptions = {
  transitionDuration: 0,
  gutter: 10,
  percentPosition: true,
  columnWidth: 360,
  fitWidth: true,
  horizontalOrder: true,
  initLayout: true,
  resize: true
};

export default class ResponsiveGallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lightboxIsOpen: false,
      currentImage: 0,
    };

    this.closeLightbox = this.closeLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
    this.gotoImage = this.gotoImage.bind(this);
    this.handleClickImage = this.handleClickImage.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
  }
  openLightbox(index, event) {
    event.preventDefault();
    this.setState({
      currentImage: index,
      lightboxIsOpen: true,
    });
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }
  gotoImage(index) {
    this.setState({
      currentImage: index,
    });
  }
  handleClickImage() {
    if (this.state.currentImage === this.props.images.length - 1) return;

    this.gotoNext();
  }
  renderGallery() {
    const { images } = this.props;
    if (!images) return;

    const gallery = images.map((obj, i) => {
      return (
        <div key={i} className={`grid-item`}>
          <img
            alt=''
            onClick={(e) => this.openLightbox(i, e)}
            src={obj.thumbnail}
            className={`gallery-img`}
          />
        </div>
      );
    });

    return (
      <Masonry
        className={"grid"} // default ''
        options={masonryOptions}
        disableImagesLoaded={false}
        updateOnEachImageLoad={true}
      >
        {gallery}
      </Masonry>
    );
  }

  render() {
    return (
      <div className={`content container`}>
        {this.renderGallery()}
        <ModalGateway>
          {this.state.lightboxIsOpen ? (
            <Modal onClose={this.closeLightbox}>
              <Carousel
                currentIndex={this.state.currentImage}
                views={this.props.images}
              />
            </Modal>
          ) : null}
        </ModalGateway>
      </div>
    );
  }
}

ResponsiveGallery.propTypes = {
  images: PropTypes.array,
  showThumbnails: PropTypes.bool,
};
