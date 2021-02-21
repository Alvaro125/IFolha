import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import axios from 'axios';

import { fromImageToUrl, API_URL } from '../../utils/urls'

function Posts({ posts }) {
    return (
        <body>
            <Head>
                <title>Post</title>
                <link rel="icon" href="/favicon.ico" />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous"></link>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>
            </Head>
            <div class="row row-cols-1 row-cols-md-3 g-4">
                {posts.map(post => (
                    <div class="col">
                        <div class="card text-center text-white bg-primary mb-3">
                            <img src={fromImageToUrl(post.capa)} class="card-img-top"></img>
                            <div class="card-body">
                                <h5 class="card-title">{post.titulo}</h5>
                                <p class="card-text">{post.descricao}</p>
                                <a href={`/posts/${post._id}`} class="btn btn-success">Ler Post</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </body>
            )
  }

  // This function gets called at build time
  export async function getStaticProps() {
    // Call an external API endpoint to get posts
    const res = await fetch(`${API_URL}/posts`)
    const posts = await res.json()

    // By returning {props: { posts} }, the Posts component
    // will receive `posts` as a prop at build time
    return {
                props: {
                posts,
      },
    }
  }

  export default Posts