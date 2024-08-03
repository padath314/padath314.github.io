
import { NavBar } from '../NavBar';
import { useLocation, useParams } from 'react-router-dom';
import './Blog.css';
import imga from '../../assets/img/Artist.png'


const BlogEntryPage = () => {
  const { id } = useParams();
  const location = useLocation();
  const blogPost = location.state?.blogPost;

  if (!blogPost) {
    return <div>Blog post not found</div>;
  }

  return (
    <section>
    <NavBar/>
    <div className="blog-page">
      <h1>{blogPost.Title}</h1>
      <p>{blogPost.Body}</p>
    </div>
    </section>
  );
};

export default BlogEntryPage;