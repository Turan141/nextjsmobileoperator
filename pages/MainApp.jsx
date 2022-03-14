import React from 'react'
import { useState, useEffect } from 'react'
import TrafficSlider from '../Comps/Sliders/TrafficSlider'
import MinuteSlider from '../Comps/Sliders/MinutesSlider'
import HeaderComponent from '../Comps/Header/Header'
import SMSSlider from '../Comps/Sliders/SMSSlider'
import TotalComponent from '../Comps/TotalComponent.jsx'
import SocialApps from '../Comps/SocialAndMessegners/SocialComponent'

function MainApp({ iconsData }) {
  const [isBonusActive, setBonusActive] = useState(false)
  const [payForTraffic, setPayForTraffic] = useState(0)
  const [payForSMS, setPayForSMS] = useState(0)
  const [payForMinutes, setPayForMinutes] = useState(0)
  const [payForSocial, setPayForSocial] = useState(0)
  const [icons, setIcons] = useState('')
  const [totalSum, setTotalSum] = useState(
    payForMinutes + payForSMS + payForTraffic + payForSocial
  )

//   const [user, setUser] = useState(null)

//   useEffect(() => {
//     async function updatePost() {
//       const requestOptions = {
//         method: 'PUT',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ title: 'React Hooks PUT Request Example' }),
//       }
//       const response = await fetch(
//         'https://jsonplaceholder.typicode.com/posts/1',
//         requestOptions
//       )
//       const data = await response.json()
//       setUser(data)
//     }
//     updatePost()
//   }, [])
  useEffect(() => {
    setIcons(iconsData)
    ;(function totalSumHandler() {
      setTotalSum(payForMinutes + payForSMS + payForTraffic + payForSocial)
    })()
  }, [payForSMS, payForMinutes, payForTraffic, payForSocial])

  return (
    <div className="MainAppDiv">
      <HeaderComponent />
      <MinuteSlider setPayForMinutes={setPayForMinutes} />
      <TrafficSlider
        setPayForTraffic={setPayForTraffic}
        setBonusActive={setBonusActive}
      />
      <SMSSlider setPayForSMS={setPayForSMS} />
      <div className="socialSection">
        {icons && (
          <SocialApps
            type={'Соцсети'}
            icons={icons.social}
            setPayForSocial={setPayForSocial}
            isBonusActive={isBonusActive}
          />
        )}
        {icons && (
          <SocialApps
            type={'Мессенджеры'}
            icons={icons.messengers}
            setPayForSocial={setPayForSocial}
          />
        )}
      </div>
      {/* <button
        onClick={async () => {
          const response = await fetch(
            'https://api.jsonbin.io/b/622b9ff20618276743749675',
            {
              method: 'POST',
              body: JSON.stringify({turan: true}),
              headers: {
                'Content-Type': 'application/json',
              },
            }
          )
          
        }}
      >
        presstofetch
      </button> */}

      <div style={{ height: '50px' }} />
      <TotalComponent totalSum={totalSum} />
    </div>
  )
}

export default MainApp
