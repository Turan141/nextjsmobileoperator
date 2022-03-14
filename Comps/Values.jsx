import { useState } from 'react'

const Values = ({ value, type }) => {
  const [isActive, setActive] = useState(false)
  return (
    <>
      <p className={isActive ? 'selectedType' : ''}>
        {isActive ? value + type : value}
      </p>
    </>
  )
}

export default Values
