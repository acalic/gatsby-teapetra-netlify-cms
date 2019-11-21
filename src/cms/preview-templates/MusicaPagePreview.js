import React from 'react'
import PropTypes from 'prop-types'
import { MusicaPageTemplate } from '../../templates/musica-page'

const MusicaPagePreview = ({ entry, widgetFor }) => (
  <MusicaPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

MusicaPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default MusicaPagePreview
