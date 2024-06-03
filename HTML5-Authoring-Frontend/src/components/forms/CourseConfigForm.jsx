import { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import './CourseConfigForm.css';
const CourseConfigForm = () => {
  
  const [formData, setFormData] = useState({
    multiLingual: 'False',
    linear: 'False',
    resetMultilingual: 'False',
    singlePage: 'False',
    reloadSinglePageOnScroll: 'False',
    microLearning: 'False',
    accessibility: 'False',
    defaultLanguage: 'english',
    assessmentRetry: 1,
    iAnimation: 'False',
    scormVersion: '1.2',
    xapi: 'False',
    cmi5: 'False',
    tinCan: 'False',
    useLocalStorage: 'False',
  });


  const handleCourseConfiguration = (event) => {
   event.preventDefault();
   console.log(formData);
  };

  const handleChange = (event) => {
setFormData({...formData, [event.target.name]: event.target.value})
  }

  return (
    <div className="formContainer">
    <h2>Create Course</h2>
    <form onSubmit={handleCourseConfiguration}> 
    <div className="formGroup">
      <label className="formLabel">
        Course Name:
        <input
          type="text"
          name="courseName"
          value={formData.courseName}
          onChange={handleChange}
          className="formInput"
          placeholder='course name'
          required
        />
      </label>
    </div>
   
    <div className="formGroup">
        Multi-lingual:
        <input style={{ marginLeft: '10px' }}
          type="radio"
          name="multiLingual"
          value="True"
          checked={formData.multiLingual === 'True'}
          onChange={handleChange}
            /> True

            <input style={{ marginLeft: '10px' }}
                type="radio"
                name="multiLingual"
                value="False"
                checked={formData.multiLingual === 'False'}
                onChange={handleChange}
            /> False
      </div>

    <div className="formGroup">
        Linear:
        <input style={{ marginLeft: '10px' }}
          type="radio"
          name="linear"
          value="True"
          checked={formData.linear === 'True'}
          onChange={handleChange}
            /> True

            <input style={{ marginLeft: '10px' }}
                type="radio"
                name="linear"
                value="False"
                checked={formData.linear === 'False'}
                onChange={handleChange}
            /> False
    </div>
    <div className="formGroup">
      Reset Multilingual:
      <input style={{ marginLeft: '10px' }}
          type="radio"
          name="resetMultilingual"
          value="True"
          checked={formData.resetMultilingual === 'True'}
                onChange={handleChange}
            /> True

            <input style={{ marginLeft: '10px' }}
                type="radio"
                name="resetMultilingual"
                value="False"
                checked={formData.resetMultilingual === 'False'}
                onChange={handleChange}
            /> False
                
    </div>
    <div className="formGroup">
      Single Page:
      <input style={{ marginLeft: '10px' }}
          type="radio"
          name="singlePage"
          value="True"
          checked={formData.singlePage === 'True'}
          onChange={handleChange}
            /> True

            <input style={{ marginLeft: '10px' }}
                type="radio"
                name="singlePage"
                value="False"
                checked={formData.singlePage === 'False'}
          onChange={handleChange}
            /> False
    </div>
    <div className="formGroup">
      Reload Single Page On Scroll:
      <input style={{ marginLeft: '10px' }}
          type="radio"
          name="reloadSinglePageOnScroll"
          value="True"
          checked={formData.reloadSinglePageOnScroll === 'True'}
          onChange={handleChange}
       /> True

      <input style={{ marginLeft: '10px' }}
          type="radio"   
          name="reloadSinglePageOnScroll"
          value="False"
          checked={formData.reloadSinglePageOnScroll === 'False'}
          onChange={handleChange}
      /> False
    </div>
    <div className="formGroup">
        Micro Learning:
        <input style={{ marginLeft: '10px' }}
          type="radio"
          name="microLearning"
          value="True"
          checked={formData.microLearning === 'True'}
          onChange={handleChange}
    /> True

            <input style={{ marginLeft: '10px' }}
                type="radio"
                name="microLearning"
                value="False"
                checked={formData.microLearning === 'False'}
                onChange={handleChange}
      /> False
    </div>
    <div className="formGroup">
        Do you want this course to be accessible:
        <input style={{ marginLeft: '10px' }}
          type="radio"
          name="accessibility"
          value="True"
          checked={formData.accessibility === 'True'}
          onChange={handleChange}
    /> True

            <input style={{ marginLeft: '10px' }}
                type="radio"
                name="accessibility"
                value="False"
                checked={formData.accessibility === 'False'}
                onChange={handleChange}
      /> False
    </div>
    <div className="formGroup">
      Select Default Language:
        <select 
        name="defaultLanguage" 
        value={formData.defaultLanguage} 
        onChange={handleChange} 
        style={{ marginLeft: '10px' }}>

          <option value="">Select</option>
          <option value="english">English</option>
          <option value="german">German</option>
          <option value="french">French</option>
        </select>
    </div>

    <div className="formGroup">
      iAnimation:
        <input style={{ marginLeft: '10px' }}
          type="radio"
          name="iAnimation"
          value="True"
          checked={formData.iAnimation === 'True'}
          onChange={handleChange}
        /> True

        <input style={{ marginLeft: '10px' }}
          type="radio"
          name="iAnimation"
          value="False"
          checked={formData.iAnimation === 'False'}
          onChange={handleChange}
        /> False
      </div>

    <div className="formGroup">
    <div style={{ display: 'inline-block', marginRight: '10px' }}>
    Select Number of Assessment Retry:
    </div>
    <input
      type="number"
      name="assessmentRetry"
      value={formData.assessmentRetry}
      onChange={handleChange}
      style={{ display: 'inline-block' }}
      />
    </div>

    <div className="formGroup">
    Scorm Version:
    <select 
      name="scormVersion" 
      value={formData.scormVersion}
      onChange={handleChange} 
      style={{ marginLeft: '10px' }}>
        <option value="">Select</option>
        <option value="1.2">SCORM 1.2</option>
        <option value="2024">SCORM 2024</option>
    </select>
    </div>

    <div className="formGroup">
      xapi:
        <input style={{ marginLeft: '10px' }}
          type="radio"
          name="xapi"
          value="True"
          checked={formData.xapi === 'True'}
          onChange={handleChange}
        /> True

        <input style={{ marginLeft: '10px' }}
          type="radio"
          name="xapi"
          value="False"
          checked={formData.xapi === 'False'}
          onChange={handleChange}
        /> False
      </div>

      <div className="formGroup">
      cmi5:
        <input style={{ marginLeft: '10px' }}
          type="radio"
          name="cmi5"
          value="True"
          checked={formData.cmi5 === 'True'}
          onChange={handleChange}
        /> True

        <input style={{ marginLeft: '10px' }}
          type="radio"
          name="cmi5"
          value="False"
          checked={formData.cmi5 === 'False'}
          onChange={handleChange}
        /> False
      </div>

      <div className="formGroup">
      tinCan:
        <input style={{ marginLeft: '10px' }}
          type="radio"
          name="tinCan"
          value="True"
          checked={formData.tinCan === 'True'}
          onChange={handleChange}
        /> True

        <input style={{ marginLeft: '10px' }}
          type="radio"
          name="tinCan"
          value="False"
          checked={formData.tinCan === 'False'}
          onChange={handleChange}
        /> False
      </div>

      <div className="formGroup">
      Use Local Storage:
        <input style={{ marginLeft: '10px' }}
          type="radio"
          name="useLocalStorage"
          value="True"
          checked={formData.useLocalStorage === 'True'}
          onChange={handleChange}
        /> True

        <input style={{ marginLeft: '10px' }}
          type="radio"
          name="useLocalStorage"
          value="False"
          checked={formData.useLocalStorage === 'False'}
          onChange={handleChange}
        /> False
      </div>

    <button type='submit' className="formSubmitButton">
      Create Course
    </button>
    </form>

  </div>
  );
};

export default CourseConfigForm;
