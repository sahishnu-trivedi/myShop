import React from 'react'

function Button({useClass, buttonText}) {
  return (
    <a href='#' className={useClass}>{buttonText}</a>
  )
}

export default Button