import * as React from 'react'
import PropTypes from 'prop-types'

class MemoItem extends React.Component {
  getStatus = () => {
    console.log('hello')

  }
  getStatus = () => {
    return {
      borderBottom: '1px dotted #ccc',
      padding: '30px',
      textDecoration: this.props.memo.status ? 'line-through' : 'none',
      color: this.props.memo.status ? '#f33' : 'null'
    }
  }



  render() {
    console.log(this.props.memo)
    const { id, title } = this.props.memo
    return (
      <div style={this.getStatus()}>
        <p style={txtStyle}>{id}:{title}</p>
      </div>
    )
  }
}

const txtStyle = {
  fontSize: '10vw'
}
MemoItem.propTypes = {
  memo: PropTypes.object.isRequired
}
export default MemoItem
