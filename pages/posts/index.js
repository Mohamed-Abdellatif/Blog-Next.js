import Head from "next/head";
import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/post-utils";




const AllPostsPage = (props)=> {
    return (
      <>
      <Head>
        <title>All Posts</title>
        <meta name="description" content="A list of all programing-related tutorials and posts!"/>
      </Head>
      <AllPosts posts={props.posts}/>
      </>
    )
  }

export const getStaticProps=()=>{
  const allPosts = getAllPosts();
  return {
    props:{
      posts:allPosts
    }
  }
}
  
  export default AllPostsPage;