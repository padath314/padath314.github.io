import React, { useEffect, useState } from "react";
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import cong from "../../configuration"; 
import { getDatabase, ref, onValue } from "firebase/database";
import { NavBar } from '../NavBar';
//import BlogEntry from './BlogEntry'; // Ensure correct path
import './Blog.css';


const Blog = () => {
  
  const [data, setData] = useState([]);

  useEffect(() => {

    const database = getDatabase(cong);
    const collectionRef = ref(database, "Blogs");
    
    const fetchData = () => {
      onValue(collectionRef, (snapshot) => {
        const dataItem = snapshot.val();
        if(dataItem)
        {
          const displayItem = Object.values(dataItem);
          setData(displayItem);
        }
      });
    };

    fetchData();
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
