import * as React from 'react'
import AddMemo from './AddMemo'
import Button from './Button'
import Memo from './Memo'

class MemoApp extends React.Component {
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

  // Add Memo
  addMemo = (title) => {
    const createNewMemo = {
      id: Math.random() * 10,
      title,
      status: false
    }
    this.setState({
      memos: [...this.state.memos, createNewMemo]
    })
  }



  // POST via axios < add memo

  // const ENDPOINT_URL=''

  // addMemo = (title) => {
  //   axios.post(ENDPOINT_URL. {
  //     title,
  //     status: false
  //   }).then(res => this.setState({
  //     memos: [...this.state.memos, res.data]
  //   }))
  // }

  // DELETE via axios < delete a single memo

  // delTodo = (id) => {
  //   axios.delete(`ENDPOINT_URL/${id}`)
  //   .then(res => this.setState({
  //     memos: [...this.state.memos.filter(memo => memo.id !== id)]
  //   }))
  // }




  toggleStatus = (id) => {
    this.setState({
      memos: this.state.memos.map(memo => {
        if (memo.id === id) {
          memo.status = !memo.status
        }
        return memo
      })
      // ,
      // Delete Single Memo 
      // memos: [...this.state.memos.filter(memo => memo.id !== id)]
    })
  }

  deleteAll = () => {
    this.setState({
      memos: []
    })
  }

  btnMsg = () => {
    if (this.state.memos.length !== 0) {
      return "Delete All"
    } else {
      return "..."
    }
  }

  btnStyle = () => {
    return {
      width: '100%',
      height: 100,
      backgroundColor: '#f33',
      fontSize: '3rem',
      cursor: 'pointer',
      position: 'fixed',
      bottom: 0
    }
  }

  render() {

    // console.log(this.state.memos)
    return (
      <>
        <AddMemo addMemo={this.addMemo} />
        <Memo
          memos={this.state.memos}
          toggleStatus={this.toggleStatus} />
        <div style={{ height: 200 }}></div>
        <Button
          btnStyle={this.btnStyle()}
          deleteAll={this.deleteAll}
          btnMsg={this.btnMsg()}
        />

      </>

    )
  }
}

export default MemoApp