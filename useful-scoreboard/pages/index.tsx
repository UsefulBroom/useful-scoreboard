import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div className='flex flex-col text-center'>
      <h1 className='text-3xl text-red-400 font-bold underline'>
        This is the start of the Next.JS app
      </h1>
    </div>
  )
}

export default Home