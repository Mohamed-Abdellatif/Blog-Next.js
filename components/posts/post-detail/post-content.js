

import Markdown from "react-markdown";
import classes from "./post-content.module.css"
import PostHeader from "./post-header";

const DUMMY_POST = {
    title: "Getting Started with NextJS",
    image: "getting-started-nextjs.png",
    date: "2022-02-10",
    slug: "getting-started-with-nextjs",
    content: "# This is a first post",
  };

const PostContent = () => {
    const {content,date,image,slug,title} = DUMMY_POST;

    const imagePath=`/images/posts/${slug}/${image}`
    return (
        <article className={classes.content}>
            <PostHeader title={title} image={imagePath}/>
            <Markdown>{content}</Markdown>
        </article>
    );
};

export default PostContent;