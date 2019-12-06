import React from "react"
import Layout from '../../components/Layout'
import ImageGallery from 'react-image-gallery';
import './styles.scss';

//export default () => <div>Hello</div>

const images = [
    {
      original: 'https://lorempixel.com/1000/600/nature/1/',
      thumbnail: 'https://lorempixel.com/250/150/nature/1/',
    },
    {
      original: 'https://lorempixel.com/1000/600/nature/2/',
      thumbnail: 'https://lorempixel.com/250/150/nature/2/'
    },
    {
      original: 'https://lorempixel.com/1000/600/nature/3/',
      thumbnail: 'https://lorempixel.com/250/150/nature/3/'
    }
  ]

export default class GalleryPage extends React.Component {
    render() {
      return (
        <Layout>
          <section className="section">
            <div className="container">
              <div className="content">
                <ImageGallery 
                  items={images}
                  showThumbnails={false}
                  showPlayButton={false}
                  showFullscreenButton={true}
                  useBrowserFullscreen={false}
                />
              </div>
            </div>
          </section>
        </Layout>
      )
    }
  }
