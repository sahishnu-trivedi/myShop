import React from 'react'

function Button({useClass, fontSize}) {
  return (
    <a href='#' className={useClass}>Clear All</a>
  )
}

export default Button