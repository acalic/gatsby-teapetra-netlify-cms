import React from 'react'
import { navigate } from 'gatsby-link'
import Layout from '../../components/Layout'
//import Header from '../../components/Header'

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isValidated: false }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error))
  }

  render() {
    return (
      <Layout>
        {/* <Header
          title={'Contact'}
          backgroundImgUrl={'/img/blog-index.jpg'}>
        </Header> */}
        <section className="section page-contact">
          <div className="container">
            <div className="columns">
              <div className="content column is-6">
                {/* <h1>Contact</h1> */}
                <form
                  name="contact"
                  method="post"
                  action="/contact/thanks/"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  onSubmit={this.handleSubmit}
                >
                  {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                  <input type="hidden" name="form-name" value="contact" />
                  <div hidden>
                    <label>
                      Don’t fill this out:{' '}
                      <input name="bot-field" onChange={this.handleChange} />
                    </label>
                  </div>
                  <div className="field">
                    <label className="label" htmlFor={'name_surname'}>
                      NAME(S) & SURNAME(S)
                    </label>
                    <div className="control">
                      <input
                        className="input"
                        type={'text'}
                        name={'name_surname'}
                        onChange={this.handleChange}
                        id={'name_surname'}
                        required={true}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label" htmlFor={'email'}>
                      E-MAIL
                    </label>
                    <div className="control">
                      <input
                        className="input"
                        type={'email'}
                        name={'email'}
                        onChange={this.handleChange}
                        id={'email'}
                        required={true}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label" htmlFor={'phone'}>
                      PHONE NUMBER
                    </label>
                    <div className="control">
                      <input
                        className="input"
                        type={'tel'}
                        name={'phone'}
                        onChange={this.handleChange}
                        id={'phone'}
                        required={true}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label" htmlFor={'date'}>
                      DESIRED DATE
                    </label>
                    <div className="control">
                      <input
                        className="input"
                        type={'date'}
                        name={'date'}
                        onChange={this.handleChange}
                        id={'date'}
                        required={true}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label" htmlFor={'location'}>
                      DESIRED LOCATION
                    </label>
                    <div className="control">
                      <input
                        className="input"
                        type={'text'}
                        name={'location'}
                        onChange={this.handleChange}
                        id={'location'}
                        required={true}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label" htmlFor={'services'}>
                      WHAT SERVICES ARE YOU INTERESTED IN
                    </label>
                    <div className="control radio-group">
                      <label className="radio">
                        <input onChange={this.handleChange} type={'radio'} id={'services-1'} name={'services'} value={'music'} defaultChecked checked/>
                        <span>Music</span>
                      </label>
                      <label className="radio">
                        <input onChange={this.handleChange} type={'radio'} id={'services-2'} name={'services'} value={'photography'}/>
                        <span>Photography</span>
                      </label>
                    </div>
                  </div>
                  <div className="field">
                    <label className="label" htmlFor={'find'}>
                      HOW DID YOU FIND ME
                    </label>
                    <div className="control">
                      <input
                        className="input"
                        type={'text'}
                        name={'find'}
                        onChange={this.handleChange}
                        id={'find'}
                        required={true}
                        placeholder={'Instagram, Facebook, Web site, Friend of yours, LinkedIn'}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label" htmlFor={'social'}>
                      YOUR INSTAGRAM OR FACEBOOK
                    </label>
                    <div className="control">
                      <input
                        className="input"
                        type={'text'}
                        name={'social'}
                        onChange={this.handleChange}
                        id={'social'}
                        required={true}
                        placeholder={'Let\'s conect'}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label" htmlFor={'style'}>
                      YOUR DREAM SYLE
                    </label>
                    <div className="control radio-group dream-style">
                      <label className="radio">
                        <input onChange={this.handleChange} type={'radio'} id={'style-1'} name={'style'} value={'boho'}/>
                        <span>Boho</span>
                      </label>
                      <label className="radio">
                        <input onChange={this.handleChange} type={'radio'} id={'style-2'} name={'style'} value={'classic'} defaultChecked checked/>
                        <span>Classic</span>
                      </label>
                      <label className="radio">
                        <input onChange={this.handleChange} type={'radio'} id={'style-3'} name={'style'} value={'adventurous'}/>
                        <span>Adventurous</span>
                      </label>
                      <label className="radio">
                        <input onChange={this.handleChange} type={'radio'} id={'style-4'} name={'style'} value={'romantic'}/>
                        <span>Romantic</span>
                      </label>
                    </div>
                  </div>


                  <div className="field">
                    <label className="label" htmlFor={'message'}>
                      MESSAGE
                    </label>
                    <div className="control">
                      <textarea
                        className="textarea"
                        name={'message'}
                        onChange={this.handleChange}
                        id={'message'}
                        required={true}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <button className="button is-link" type="submit">
                      SEND
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
