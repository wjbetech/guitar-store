import React from 'react'

const Button = ({ styles }) => (
    <button
      type="button"
      className={`font-medium text-[18px] outline-none py-4 px-6 button-gradient rounded-full text-gradient ${styles}`}
    >
      View Guitars
    </button>
)

export default Button