import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Nav from '../components/navbar'

import { fromImageToUrl, API_URL } from '../utils/urls'

export default function Home() {
  return (
    <div >
      <Head>
        <title>IFolha</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Nav/>
        <div class="container">
          <h1><a href="/posts">POSTS</a></h1>
        </div>

    </div>
  )
}
