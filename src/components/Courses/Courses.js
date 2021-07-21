import React, {useState} from 'react'
import Course from '../Course/Course';
import Modal from '../CourseModal/Modal';
import "./Courses.css"

const Courses = () => {
    const courses = [
        {
          "id": "1",
          "title": "DataStructures",
          "thumbnailURL": "https://s3-ap-southeast-1.amazonaws.com/he-public-data/index6f535cc.jpeg",
          "price": "999",
          "videoLink": [
            "RBSGKlAvoiM",
            "zg9ih6SVACc"
          ]
        },
        {
          "id": "2",
          "title": "Algorithms",
          "thumbnailURL": "https://s3-ap-southeast-1.amazonaws.com/he-public-data/algofeadb8b.jpeg",
          "price": "999",
          "videoLink": [
            "0JUN9aDxVmI",
            "3_o0-zPRQqw"
          ]
        },
        {
          "id": "3",
          "title": "Digital Marketing",
          "thumbnailURL": "https://s3-ap-southeast-1.amazonaws.com/he-public-data/dm1986125.png",
          "price": "499",
          "videoLink": [
            "nU-IIXBWlS4"
          ]
        },
        {
          "id": "4",
          "title": "SEO",
          "thumbnailURL": "https://s3-ap-southeast-1.amazonaws.com/he-public-data/seo41a0f56.png",
          "price": "499",
          "videoLink": [
            "OYRkIGaP80M"
          ]
        },
        {
          "id": "5",
          "title": "Social Media Marketing",
          "thumbnailURL": "https://s3-ap-southeast-1.amazonaws.com/he-public-data/smm639744e.png",
          "price": "499",
          "videoLink": [
            "q5ASe_sxRYI"
          ]
        },
        {
          "id": "6",
          "title": "Sales",
          "thumbnailURL": "https://s3-ap-southeast-1.amazonaws.com/he-public-data/sales87feef5.jpeg",
          "price": "9999",
          "videoLink": [
            "5mJkKGqj-rU",
            "PwwgGOBw1oE",
            "MCpi7xZz8bg",
            "k060uGd5TH4",
            "1AXeGQ3yYPA",
            "BaDGqm4rEzY"
          ]
        },
        {
          "id": "7",
          "title": "Copywriting",
          "thumbnailURL": "https://s3-ap-southeast-1.amazonaws.com/he-public-data/copyaaf50e4.png",
          "price": "299",
          "videoLink": [
            "https://youtu.be/9qZcT9I8W4g"
          ]
        },
        {
          "id": "8",
          "title": "MERN Stack",
          "thumbnailURL": "https://s3-ap-southeast-1.amazonaws.com/he-public-data/merne99004a.jpeg",
          "price": "4999",
          "videoLink": [
            "https://youtu.be/ktjafK4SgWM"
          ]
        },
        {
          "id": "9",
          "title": "MEAN Stack",
          "thumbnailURL": "https://s3-ap-southeast-1.amazonaws.com/he-public-data/Mean0687f08.jpeg",
          "price": "4999",
          "videoLink": [
            "https://youtu.be/k0iGvadr_Cc"
          ]
        }
      ];

    const [CourseList, setCourseList] = useState({courses: [...courses], filteredCourses:[...courses]});
    const [courseItem, setCourseItem] = useState({choosenCourse:[], showModal: false});
    const onSearch = ( e ) =>{
        const newCourses = CourseList.courses.filter((item)=>{
            if(e.target.length === 0){
                return true;
            }
            return item.title.toUpperCase().includes(e.target.value.toUpperCase());
        });
        setCourseList({...courseItem, filteredCourses: [...newCourses]});
    }

    const getCourse = (id) =>{
      setCourseItem({...courseItem, choosenCourse: {...courses[id]}, showModal: true});
    }

    const closeModal = () =>{
      setCourseItem({...courseItem, showModal:!courseItem.showModal});
    }
    
    return (
        <div>
            <div className="searchContainer">
                <div className="searchBar">
                    <input type="text" onChange={onSearch} className="searchInput" placeholder="Search for courses"/>
                </div>
            </div>
            <Course courses = {CourseList.filteredCourses} course = {getCourse}/>
            {
              courseItem.showModal && (
                <Modal course = {courseItem.choosenCourse} closeModal={closeModal}/>
              )
            }
        </div>
    )
}

export default Courses
