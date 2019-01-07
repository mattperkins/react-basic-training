import * as React from 'react'

export default ({ btnStyle, btnMsg, deleteAll }) => <input type='button' style={btnStyle} onClick={deleteAll} value={btnMsg} />

