import * as React from 'react'
import PropTypes from 'prop-types'

class MemoItem extends React.Component {
  getStatus = () => {
    console.log('hello')

  }
  getStatus = () => {
    if (this.props.memo.status) {
      return {
        textDecoration: 'line-through',
        color: '#f33'
      }
    } else {
      return {
        textDecoration: 'none'
      }
    }
  }

  render() {
    console.log(this.props.memo)
    const { id, title } = this.props.memo
    return (
      <div style={this.getStatus()}>
        <p style={itemStyle}>{id}:{title}</p>
      </div>
    )
  }
}

const itemStyle = {
  borderBottom: '1px solid #ccc',
  padding: '30px',
  fontSize: '10vw'
}
MemoItem.propTypes = {
  memo: PropTypes.object.isRequired
}
export default MemoItem
