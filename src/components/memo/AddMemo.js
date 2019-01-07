import * as React from 'react'

class AddMemo extends React.Component {
  state = {
    title: ''
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.props.addMemo(this.state.title)
    // reset input to blank
    this.setState({
      title: ''
    })
  }
  // component state not app level (shared) state
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          style={input}
          type="text"
          name="title"
          placeholder="Add A New Memo"
          value={this.state.title}
          onChange={this.onChange}
        />
      </form>
    )
  }
}

const input = {
  height: 100,
  width: '100%',
  fontSize: '3rem',
  textAlign: 'center'
}


export default AddMemo