import * as React from 'react'
import MemoItem from './MemoItem'
import PropTypes from 'prop-types'

class Memos extends React.Component {

  render() {
    return (
      <div>{this.props.memos.map(memo =>
        <MemoItem key={memo.id}
          memo={memo}
          toggleStatus={this.props.toggleStatus} />)}</div>
    )
  }
}

Memos.propTypes = {
  memos: PropTypes.array.isRequired
}
export default Memos
