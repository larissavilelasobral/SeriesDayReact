import React from 'react';
import './button.scss'

export default function Button({
 children, className, onClick
}) {
  return (
    <button
    type="button"
    className={className}
    onClick={onClick}
  >
    {children}
  </button>
  )
}