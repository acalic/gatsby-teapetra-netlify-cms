import React from "react"
import Layout from '../../components/Layout'
import Header from '../../components/Header'
import './styles.scss';

export default class Portfolio extends React.Component {
    render() {
      return (
        <Layout>
          {/* <Header
            title={'Portfolio'}
            backgroundImgUrl={'https://www.pinnaclepierhotel.com/Content/images/weddingrpf_slider.jpg'}>
          </Header> */}
          <section className="section">
            <div className="container">
              <div className="content"></div>
            </div>
          </section>
        </Layout>
      )
    }
  }