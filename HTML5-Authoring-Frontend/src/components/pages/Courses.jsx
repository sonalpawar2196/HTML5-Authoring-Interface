import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../auth/AuthContext";
import CourseConfigForm from "../forms/CourseConfigForm";
import Thumbnail from './Thumbnail.jsx'; // Make sure to import Thumbnail
import '../../bootstrap.min.css';
import './Courses.css';
import Carousel from './CarouselThumb';

const Courses = () => {
    const { isLoggedIn } = useAuth(); // Get user authentication state
    const [showCourseForm, setShowCourseForm] = useState();
    const navigate = useNavigate();
    const handleLogin = async (e) => {
      e.preventDefault();
      navigate('/');
    }  
    const images = [
      'https://via.placeholder.com/150',
      'https://dummyimage.com/600x400/000/fff',
      'https://www.shutterstock.com/shutterstock/photos/450966880/display_1500/stock-vector-female-profile-picture-placeholder-vector-illustration-design-social-profile-template-avatar-450966880.jpg',
      // cna add more image
    ];

    return (
      <div>
        {/* COURSE LIST */}
        <div className="row">
        <div className="col-md-9">
        <h3>Course List</h3>
        </div>
        </div>
        <div className="row">
        <div className="course-list col-md-9">
        <div className="course-list-item">
         {/* <div className="col-12 col-md-4"> */}
            <Thumbnail 
              title="Course 1"
              heading="Course Name"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."      
            />
         </div>
         <div className="course-list-item">
            <Thumbnail 
              title="Course 2"
              heading="Course Name"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."      
              imageUrl="https://via.placeholder.com/150"
            />
          </div>  
          <div className="course-list-item">
            <Thumbnail 
              title="Course 3"   
              heading="Course Name"   
              imageUrl="https://via.placeholder.com/150"
            />
          </div>  
          
          <div className="course-list-item">
              <Carousel 
              title="Course 4"
              heading="Course Name"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              images={images} 
              />
            </div>
        {/*</div> */}
        
        <div className="course-list-item">
            <Thumbnail 
              title="Course 5"   
              heading="Course Name"   
              imageUrl="https://via.placeholder.com/150"
            />
          </div> 
          <div className="course-list-item">
            <Thumbnail 
              title="Course 6"
              heading="Course Name"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."      
              imageUrl="https://via.placeholder.com/150"
            />
          </div>
          <div className="course-list-item">
         {/* <div className="col-12 col-md-4"> */}
            <Thumbnail 
              title="Course 7"
              heading="Course Name"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."      
            />
         </div>
            <div className="course-list-item">
              <Carousel 
              title="Course 8"
              heading="Course Name"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              images={images} 
              />
            </div>
         </div>
         <div className="col-md-3 d-flex align-items-center">
         {/* CREATE COURSE BUTTON */}
          <p>Tab on CREATE to start creating your course <br></br><button className="create-button" onClick={() => setShowCourseForm(true)}>CREATE</button></p>
         </div>
         </div>
        
        <hr className="rounded-line" />
        {/* SET CONFIGURATIONS */}
        
        {showCourseForm && <CourseConfigForm />}
      {/* </div> 
      // <div>
      //     {isLoggedIn ? (

      //       // courses list

      //       //------------------------------
      //       // textfield - submit

      //       <button onClick={() => setShowCourseForm(true)}>Create Course</button>

      //     ) : (
      //       <div>
      //         <p>Please log in to create a course.</p>
      //         <button onClick={handleLogin}> Login </button>
      //         </div>
      //     )}
      //    {showCourseForm && <CourseConfigForm />} 
      //   </div> */}
      </div>
    );
}

export default Courses;
