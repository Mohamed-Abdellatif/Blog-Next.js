import PostItem from "./post-item";
import classes from "./posts-grid.module.css"

const PostsGrid = (props) => {
    const {posts} = props;
    return (
        <ul className={classes.grid}>
            {posts && posts.map(post=><PostItem key={post.slug} post={post}/>)}
        </ul>
    );
};

export default PostsGrid;