import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import ReactMarkdown from "react-markdown";

import { fromImageToUrl, API_URL } from '../../utils/urls'

function Post({ post }) {
    return(
        <div>
            <Head>
                <title>{post.Titulo}</title>
                <link rel="icon" href="/favicon.ico" />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous"></link>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>
        </Head>
        <body class="text-center">
            <div class="text-center">
                <img src={fromImageToUrl(post.capa)} />
            </div>
            <h1>{post.titulo}</h1>
            <h3>{post.descricao}</h3>
            <ReactMarkdown source={post.conteudo} escapeHtml={false} />
            <h5>{post.data}</h5>
        </body>
        </div>
        
    )
  }
  
  export async function getStaticPaths() {
    // Call an external API endpoint to get posts
    const res = await fetch(`${API_URL}/posts`)
    const posts = await res.json()
  
    // Get the paths we want to pre-render based on posts
    const paths = posts.map((post) => `/posts/${post._id}`)
  
    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
  }
  
  // This also gets called at build time
  export async function getStaticProps({ params }) {
    // params contains the post `id`.
    // If the route is like /posts/1, then params.id is 1
    const res = await fetch(`${API_URL}/posts/${params.id}`)
    const post = await res.json()
  
    // Pass post data to the page via props
    return { props: { post } }
  }
  
  export default Post