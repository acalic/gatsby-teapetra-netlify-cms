import React from "react"

import Layout from '../../components/Layout'
import PortfolioRoll from '../../components/PortfolioRoll'

//import './styles.scss';

export default class PortfolioIndexPage extends React.Component {
    render() {
      return (
        <Layout>
          {/* <Header
            title={'Portfolio'}
            backgroundImgUrl={'https://www.pinnaclepierhotel.com/Content/images/weddingrpf_slider.jpg'}>
          </Header> */}
          <section className="section">
            <div className="container">
              <div className="content">
                <PortfolioRoll />
              </div>
            </div>
          </section>
        </Layout>
      )
    }
  }