import * as React from 'react'
import { Link } from 'react-router-dom'
import * as S from './about.style'

function About() {

  return (
    <div style={S.spacing(null, 30)}>

      <Link
        style={S.txt('red', 55)}
        to="/memo">
        Create a memo
      </Link>

      <h3
        style={crd(20, 40)}>Create, Read, Delete
      </h3>

      <p style={crd(20, '1rem')}>Instructions:</p>

      <p style={S.txt(null, '1.3rem')}>
        Create a new memo via the input box<br />
        Click any Memo to cross it off<br />
        Delete all with the big red button<br />
      </p>

    </div>
  )
}

function crd(marginTop, fontSize) {
  return {
    marginTop,
    fontSize
  }
}

export default About