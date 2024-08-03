import { Card } from 'react-bootstrap';
import './Blog.css';

const BlogCard = ({ title, date, body, imageName }) => {
  return (
    <Card className='image-card'>
      <Card.Img src={'../../img/'+imageName} alt="No image found" className="image-card-img" />
      <Card.ImgOverlay className="image-card-overlay">
        <Card.Title className="image-card-title">{title}</Card.Title>
        <Card.Subtitle className="image-card-date">{date}</Card.Subtitle>
      </Card.ImgOverlay>
      <Card.Body>
        <Card.Text className="blog-body">
          {body}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default BlogCard;
