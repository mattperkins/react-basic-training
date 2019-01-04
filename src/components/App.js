import * as React from 'react'
import './app.css'
import Memo from './Memo'

export default class App extends React.Component {
  state = {
    memos: [
      {
        id: 1,
        title: 'Book boardroom',
        status: false
      },
      {
        id: 2,
        title: 'Order office supplies',
        status: true
      },
      {
        id: 3,
        title: 'Xmas party 2019',
        status: false
      }
    ]
  }
  toggleStatus = (id) => {
    this.setState({
      memos: this.state.memos.map(memo => {
        if (memo.id === id) {
          memo.status = !memo.status
        }
        return memo
      })
    })
  }
  render() {
    // console.log(this.state.memos)
    return <Memo memos={this.state.memos} toggleStatus={this.toggleStatus} />
  }
}
