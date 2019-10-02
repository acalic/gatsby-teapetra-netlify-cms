import React from "react"

import Layout from '../../../components/Layout'
import PortfolioGallery from '../../../templates/portfolio-gallery'

export default class PortfolioGalleryIndex extends React.Component {

    render() {
    
    let galleryName = this.props.location.pathname.split("\/"); // Splits on a single slash
    galleryName = galleryName[2];

      return (
        <Layout>
          <section className="section">
            <div className="container">
              <div className="content">
                <PortfolioGallery galleryName={galleryName}/>
              </div>
            </div>
          </section>
        </Layout>
      )
    }
  }