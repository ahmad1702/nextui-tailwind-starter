import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useTheme as useNextTheme } from 'next-themes'
import { Switch, useTheme, Button } from '@nextui-org/react'

const Home: NextPage = () => {
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();
  return (
    <>
      <Head>
        <title>NextUi Tailwind Starter</title>
      </Head>
      <div>
        <div className='text-red-800 dark:text-green-500'>
          The current theme is: {type}
        </div>
        <Switch
          checked={isDark}
          onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
        />
      </div>
    </>
  )
}

export default Home
