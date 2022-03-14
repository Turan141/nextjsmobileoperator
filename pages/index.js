import MainApp from './MainApp.jsx'

export const getStaticProps = async () => {
  const res = await fetch(
    'https://my-json-server.typicode.com/turan141/fakeapi/db'
  )
  const iconsData = await res.json()

  return {
    props: { iconsData },
  }
}

export default function Home({ iconsData }) {
  return (
    <>
      <MainApp iconsData={iconsData} />
    </>
  )
}
