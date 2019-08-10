import React from 'react'

const Header = class extends React.Component {
  render() {
    return (
      <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('`+ this.props.backgroundImgUrl +`')`,
          }}
        >
          <h1 className="title has-text-weight-bold is-size-1">
            {this.props.title}
          </h1>
        </div>
    )
  }
}

export default Header
