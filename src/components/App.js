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
  render() {
    // console.log(this.state.memos)
    return <Memo memos={this.state.memos} />
  }
}
