import React, { useEffect, useState } from "react";
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { NavBar } from '../NavBar';
import './Blog.css';


const Blog = () => {
  
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/blogs/blog-entries.json')
      .then(response => response.json())
      .then(data => {
        console.log('Fetched data:', data);
        if (Array.isArray(data.Blogs)) {
          setData(data.Blogs);
        } else {
          console.error('Fetched data is not an array:', data.Blogs);
        }
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);


  return (
    <section>
    <NavBar/>
    <div className="blog-page">
        <h1>Blogs</h1>
        <div className="image-card-grid">
        {data.map((item, index) => (
        <Link
        to={`/blog/${index}`}
        key={index}
        state={{ blogPost: item }}
        className="image-card-link"
        >
        <Card className='image-card'>
          <Card.Img src={'/img/'+item.Image} alt="No image found" className="image-card-img" />
          <Card.ImgOverlay className="image-card-overlay">
            <Card.Title className="image-card-title">{item.Title}</Card.Title>
            <Card.Subtitle className="image-card-date">{item.Date}</Card.Subtitle>
          </Card.ImgOverlay>
        </Card>
        </Link>
        ))}     
      </div>
    </div>
    </section>
  );
};

export default Blog;
