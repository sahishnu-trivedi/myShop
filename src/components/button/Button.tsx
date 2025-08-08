import React from 'react'

function Button({useClass, buttonText, onClickHandler}) {
  return (
    <a href='#' className={useClass} onClick={onClickHandler ? onClickHandler : ""}>{buttonText}</a>
  )
}

export default Button