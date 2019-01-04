import * as React from 'react'
import './app.css'
import Memo from './Memo'

export default class App extends React.Component {
  state = {
    memos: [
      {
        id:1,
        title: 'Book boardroom',
        seen: false
      },
      {
        id:2,
        title: 'Order office supplies',
        seen: true
      },
      {
        id:3,
        title: 'Xmas party 2019',
        seen: false
      },
    ]
  }
  render () {
    return (
      <Memo />
    )
  }
}
