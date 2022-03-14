import { useState, useEffect } from 'react'

const SocialIcon = ({ elem, setPayForSocial, isBonusActive }) => {
  const [isActive, setActive] = useState(false)
  useEffect(() => {
    if (elem.name === 'facebook' && isBonusActive && !isActive) {
      addExtra(elem)
    }
    if (elem.name === 'facebook' && !isBonusActive && isActive) {
      setActive(false)
      setPayForSocial((prev) => prev - Number(elem.price))
    }
  }, [isBonusActive])

  const addExtra = (elem, elem2 = null) => {
    setActive((prev) => !prev)
    isActive
      ? setPayForSocial((prev) => prev - Number(elem.price))
      : setPayForSocial((prev) => prev + Number(elem.price))
  }

  return (
    <div className="iconMapsDiv" key={elem.name}>
      <div className={isActive ? 'socialIconsActive' : 'socialIconsDeactive'}>
        <img
          src={elem.icon}
          alt={elem.name}
          onClick={() => {
            addExtra(elem)
          }}
        />
      </div>
      <div className="socialPrice">
        <p>{elem.price}</p>
      </div>
    </div>
  )
}

const SocialApps = ({ type, icons, setPayForSocial, isBonusActive }) => {
  const iconsMap = icons.map((elem) => {
    return (
      <SocialIcon
        key={elem.name}
        elem={elem}
        setPayForSocial={setPayForSocial}
        isBonusActive={isBonusActive}
      />
    )
  })

  return (
    <>
      <div className="socialMainDiv">
        <div className="leftColumn">
          <h1>{type}</h1>
          <h2>Выберите пожалуйста желаемые {type}</h2>
        </div>
        <div className="socialSecondaryDiv">{iconsMap}</div>
      </div>
    </>
  )
}

export default SocialApps
