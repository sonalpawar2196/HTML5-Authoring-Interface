import { useState } from 'react';
import axios from 'axios';
import './CourseConfigForm.css';
const CourseConfigForm = () => {
  const [courseName, setCourseName] = useState('');
  const [formData, setFormData] = useState({
    learnerName: '',
    multiLingual: false,
    linear: false,
    resetMultilingual: false,
    singlePage: false,
    reloadSinglePageOnScroll: false,
    microLearning: false,
    accessibility: false,
    defaultLanguage: 'eng',
    pageTabIndexStart: 25,
    assessmentRetry: 1,
    iAnimation: false,
    scormVersion: '1.2',
    xapi: false,
    cmi5: false,
    tinCan: false,
    useLocalStorage: false,
  });

  const handleCreateCourse = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/courses', {
        courseName,
        ...formData,
      });
      console.log('Course created:', response.data);
    } catch (error) {
      console.error('Error creating course:', error);
    }
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: checked }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };


  return (
    <div className="formContainer">
    <h2>Create Course</h2>
    <div className="formGroup">
      <label className="formLabel">
        Course Name:
        <input
          type="text"
          name="courseName"
          value={courseName}
          onChange={(e) => setCourseName(e.target.value)}
          className="formInput"
          placeholder='course name'
          required
        />
      </label>
    </div>
    <div className="formGroup">
      <label className="formLabel">
        Learner Name:
        <input
          type="text"
          name="learnerName"
          value={formData.learnerName}
          onChange={handleInputChange}
          className="formInput"
          placeholder='Learner name'
        />
      </label>
    </div>
    <div className="formGroup">
      <label className="formCheckboxLabel">
        Multi-lingual:
        <input
          type="checkbox"
          name="multiLingual"
          checked={formData.multiLingual}
          onChange={handleCheckboxChange}
        />
      </label>
    </div>
    {/* Add more configuration options as needed */}
    <button onClick={handleCreateCourse} className="formSubmitButton">
      Create Course
    </button>
  </div>
  );
};

export default CourseConfigForm;
