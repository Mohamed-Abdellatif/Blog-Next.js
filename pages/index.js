import Head from "next/head";
import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";
import { getFeaturedPosts } from "../lib/post-utils";


const DUMMY_POSTS = [
  {
    slug: "getting-started-with-nextjs",
    title: "Getting started with NextJS",
    image:"getting-started-nextjs.png",
    excerpt:"NextJs is a react framework for production- it makes building fullstack React apps and sites a breeze and ships with built-in SSR",
    date :"2022-02-10",
  },{
    slug: "getting-started-with-nextjs2",
    title: "Getting started with NextJS",
    image:"getting-started-nextjs.png",
    excerpt:"NextJs is a react framework for production- it makes building fullstack React apps and sites a breeze and ships with built-in SSR",
    date :"2022-02-10",
  },{
    slug: "getting-started-with-nextjs3",
    title: "Getting started with NextJS",
    image:"getting-started-nextjs.png",
    excerpt:"NextJs is a react framework for production- it makes building fullstack React apps and sites a breeze and ships with built-in SSR",
    date :"2022-02-10",
  },{
    slug: "getting-started-with-nextjs4",
    title: "Getting started with NextJS",
    image:"getting-started-nextjs.png",
    excerpt:"NextJs is a react framework for production- it makes building fullstack React apps and sites a breeze and ships with built-in SSR",
    date :"2022-02-10",
  },
];

const HomePage = (props) => {
  return (
    <>
    <Head>
      <title>
        Mohamed' Blog
      </title>
      <meta name="description" content='I post about programming and web development'/>
    </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </>
  );
};

export const getStaticProps = () => {
  const featuredPosts = getFeaturedPosts()
  return {
    props:{
      posts:featuredPosts
    }
  }
}

export default HomePage;
