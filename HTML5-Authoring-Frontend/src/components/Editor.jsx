// ToDo: When user selects core component and edit it with some styling or data and again selects new 
// data, components array is not getting updated.

import React, { useState, useEffect, useRef } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles
import ReactDOMServer from 'react-dom/server'; // Import ReactDOMServer
import PropTypes from 'prop-types';
import Heading from './core/Heading';
import Paragraph from './core/Paragraph';
import he from 'he';
import DOMPurify from 'dompurify'; // Import DOMPurify for sanitizing HTML content
const modules = {
  toolbar: [
    [{ 'header': [1, 2, false] }],
    ['bold', 'italic', 'underline', 'strike'], // Font styles
    [{ 'color': [] }, { 'background': [] }], // Font color and background
    [{ 'size': ['small', false, 'large', 'huge'] }], // Font size
    ['link'],
    ['clean'] // Remove formatting
  ],
};

const formats = [
  'header',
  'bold', 'italic', 'underline', 'strike',
  'color', 'background',
  'size',
  'link',
];


const Editor = ({ components }) => {
  
  const [editedComponents, setEditedComponents] = useState([]);
  const [generatedSchema, setGeneratedSchema] = useState('');

  const editorRefs = useRef([]);

  useEffect(() => {
    if (components.length > 0) {
      setEditedComponents(components); // Update editedComponents with new components
      editorRefs.current = Array(components.length).fill().map(() => React.createRef());
    }
  }, [components]);

  // console.log(components);
  // console.log(editedComponents);
  

  const handleSave = () => {
    const xmlSchema = generateJsonStructure();
    setGeneratedSchema(xmlSchema);
    setEditedComponents([]);
    // console.log('Generated XML Schema:', xmlSchema);
  };

  const generateJsonStructure = () => {
    const jsonStructure = {local: { orientation: 'flex-row', text: []}};
  
    editedComponents.forEach((componentData, index) => {
      const { type, level, text } = componentData;
      const isHeading = type === 'Heading';
      const tagname = isHeading ? `h${level || 1}` : 'p';
  
      const editorElement = editorRefs.current[index].current;
      if (editorElement) {
        const editorHtml = editorElement.editingArea.querySelector('.ql-editor').innerHTML;
        const sanitizedHtml = DOMPurify.sanitize(editorHtml);
        const contentWithoutFirstTag = removeFirstEnclosingTag(sanitizedHtml);
  
        const styledContent = processHtmlWithStyling(contentWithoutFirstTag);
  
        const node = {
          tagname: tagname,
          textcontent: styledContent
        };
  
        if (isHeading && level === 1) {
          jsonStructure.local.heading = {
            textcontent: styledContent,
            tagname: tagname,
            attributes: {}
          };
        } else {
          jsonStructure.local.text.push(node);
        }
      }
    });
  
    return jsonStructure;
  };
  
  const processHtmlWithStyling = (htmlContent) => {
    // Process the HTML content to replace inline styles with classes or other attributes
    // Implement your logic here to handle inline styles uniformly
    return htmlContent;
  };
  
  // Helper function to remove the first enclosing tag
function removeFirstEnclosingTag(htmlContent) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlContent, 'text/html');
  const firstChild = doc.body.firstChild;
  return firstChild.innerHTML; // Extract inner HTML of the first child
}

// Helper function to replace inline styles with classes
function replaceInlineStylesWithClasses(htmlContent) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlContent, 'text/html');
  let classList = '' // Use an array to collect unique classes

  // Traverse all elements with inline styles
  Array.from(doc.body.querySelectorAll('[style]')).forEach(element => {
    const inlineStyles = element.getAttribute('style');
    const computedClassName = mapInlineStylesToClassName(inlineStyles);
    element.removeAttribute('style'); // Remove inline styles
    if (computedClassName) {
      classList = classList + computedClassName // Add class to the array if not empty
    }
  });

  return {
    content: doc.body.innerHTML, // Return modified HTML content
    classList: classList // Convert Set to Array of unique classes
  };
}

// Helper function to map inline styles to CSS class names
function mapInlineStylesToClassName(styleAttribute) {
  const styleMappings = {};

  // Get all elements with the given style attribute
  const elements = document.querySelectorAll(`[style="${styleAttribute}"]`);

  // Iterate over each element and collect unique inline styles
  elements.forEach(element => {
    const computedStyle = element.getAttribute('style');
    if (computedStyle) {
      styleMappings[computedStyle] = `custom-class-${Object.keys(styleMappings).length + 1}`;
    }
  });

  return styleMappings;
}


  // const getInlineStyles = (htmlContent) => {
  //   const dummyElement = document.createElement('div');
  //   dummyElement.innerHTML = htmlContent;

  //   const inlineStyles = {};
  //   const elements = dummyElement.querySelectorAll('*');
  //   elements.forEach((element) => {
  //     const computedStyles = window.getComputedStyle(element);
  //     const styles = {};
  //     for (let i = 0; i < computedStyles.length; i++) {
  //       const styleName = computedStyles[i];
  //       const styleValue = computedStyles.getPropertyValue(styleName);
  //       styles[styleName] = styleValue;
  //     }
  //     if (Object.keys(styles).length > 0) {
  //       inlineStyles[element.tagName.toLowerCase()] = styles;
  //     }
  //   });

  //   return inlineStyles;
  // };

  // const generateXmlSchema = () => {
  //   let xmlString = '<?xml version="1.0" encoding="UTF-8"?>\n<schema>\n';

  //   editorRefs.current.forEach((editorRef, index) => {
  //     const editorElement = editorRef.current;
  //     if (editorElement) {
  //       const editorHtml = editorElement.editingArea.querySelector('.ql-editor').innerHTML;
  //       const sanitizedHtml = DOMPurify.sanitize(editorHtml);
  //       const componentType = editedComponents[index].type.toLowerCase();
  //       xmlString += `<${componentType}>${sanitizedHtml}</${componentType}>\n`;
  //     }
  //   });
  //   xmlString += '</schema>';
  //   return xmlString;
  // };

  const renderDefaultText = () => {
    return (
      <div>
        <p>Start creating your new template...</p>
        <p>Select components from the panel to add them to the editor.</p>
      </div>
    );
  };
  return (
    <div>
    <h2>Editor</h2>
    {editedComponents.length > 0 ? (

    editedComponents.map((componentData, index) => {
      
      const { type, level, text } = componentData;
      
      let componentHtml = '';
      if (type === 'Heading') {
        componentHtml = ReactDOMServer.renderToStaticMarkup(
          <Heading level={componentData.level || 1} text={componentData.text || 'Heading'} />
        );
      } else if (type === 'Paragraph') {
        componentHtml = ReactDOMServer.renderToStaticMarkup(
          <Paragraph text={componentData.text || 'Paragraph'} />
        );
      }

      componentHtml = he.decode(componentHtml)
      // console.log(componentHtml)
      return (
        <div key={index}>
          {/* {type === 'Heading' && <Heading level={level || 1} text={text || 'Heading'} />}
          {type === 'Paragraph' && <Paragraph text={text || 'Paragraph'} />}  */}
          <ReactQuill
           ref={editorRefs.current[index]}
            theme="snow"
            value={componentHtml || ''}
            modules={modules}
            formats={formats}
            onChange={() => {}}
          />
        </div>
      );
    })
    
  ): (
    renderDefaultText()
  )
}
{editedComponents.length > 0 && <button onClick={handleSave}>Save</button>}
    
    {generatedSchema && (
        <div>
          <h3>Generated XML Schema</h3>
          <div>
          {JSON.stringify(generatedSchema)}
          </div>
        </div>
      )}

  </div>
  );
};

Editor.propTypes = {
  components: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      level: PropTypes.number,
      text: PropTypes.string
    })
  ).isRequired
};

export default Editor;
