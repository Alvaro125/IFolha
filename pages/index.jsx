import Head from 'next/head'
import styles from '../styles/Home.module.css'

import { fromImageToUrl, API_URL } from '../utils/urls'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>IFolha</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous"></link>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>
      </Head>
      <div class="list-group">
        <button type="button" class="list-group-item list-group-item-action"><a href="/posts">POSTS</a></button>
      </div>

    </div>
  )
}
