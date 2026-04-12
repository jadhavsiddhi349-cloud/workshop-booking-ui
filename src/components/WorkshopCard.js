import React from 'react';
import './WorkshopCard.css';
import reactImg from './ReactJS.jfif';
import pythonImg from './Python.jpg';
import CImg from './c.jfif';
import CyberImg from './cybersecurity.jfif';
import dsaImg from './dsa.jfif';
import aimlImg from './aiml.jfif';


export default function WorkshopCard() {
  const workshops = [
    {
      id: 1,
      title: "React Workshop",
      instructor: "FOSSEE Team",
      date: "20 April 2026",
      price: "₹499",
      image: reactImg,
      info: {
      description: "Learn React basics, hooks & projects",
      education: "IIT Bombay",
      experience: "5+ years",
      duration: "3 hours"
    }
    },
    {
      id: 2,
      title: "DSA Workshop",
      instructor: "IIT Bombay",
      date: "25 April 2026",
      price: "₹399",
      image:dsaImg,
      info: {
      description: "DSA from beginner to advanced",
      education: "PhD - IIT Delhi",
      experience: "8+ years",
      duration: "4 hours"
    }
    },
    {
      id: 3,
      title: "AI/ML Workshop",
      instructor: "Expert Team",
      date: "30 April 2026",
      price: "₹999",
      image:aimlImg,
      info:{ 
      description: "Introduction to AI & Machine Learning",
      education: "PhD - IIT Delhi",
      experience: "10+ years",
      duration: "6 hours"
      }
    },
    {
      id: 4,
      title: "Python Workshop",
      instructor: "Coep",
      date: "3 May 2026",
      price: "₹299",
       image: pythonImg,

  
      info:{
      description: "Hands-on Python practice",
      education: "PhD in Computer Science - IIT Delhi",
      experience: "8+ years",
      duration: "5 hours"

      } 
    },
    {
      id: 5,
      title: "C/C++ Workshop",
      instructor: "Sneha Sharma",
      date: "12 May 2026",
      price: "₹199",
      image: CImg,
      info: {
      description: "Master C and C++ fundamentals",
      education: "B.Tech in Computer Engineering - COEP Pune",
      experience: "4+ years",
      duration: "3 hours"
  }
    },
    {
      id: 6,
      title: "Cybersecurity Basics",
      instructor: "Vivek Gupta ",
      date: "12 May 2026",
      price: "₹799",
      image:CyberImg,
      info: {
      description: "Learn hacking basics & security concepts",
      education: "M.Tech in Cybersecurity - IIIT Hyderabad",
      experience: "6+ years",
      duration: "5 hours"
  }
    },
   
    

  ];
  return (
      <div className="card-container">
      {workshops.map((item) => (

        <div className="card" key={item.id}>

  
  <div className="card-left">

    <div className="title-container">
      <h3 className="card-title">{item.title}</h3>

      <div className="course-info">
        <p>{item.info.description}</p>
        <p><strong>Education:</strong> {item.info.education}</p>
        <p><strong>Experience:</strong> {item.info.experience}</p>
        <p><strong>Duration:</strong> {item.info.duration}</p>
      </div>
    </div>

    <p className="card-instructor">By {item.instructor}</p>
    <p className="card-date">Date: {item.date}</p>
    <p className="card-price">{item.price}</p>

    <button className="book-btn">Book Now</button>

  </div> 

 
  <div className="card-right">
    <img src={item.image} alt="workshop" />
  </div>

</div>
         
      ))}
    </div>
  );
}