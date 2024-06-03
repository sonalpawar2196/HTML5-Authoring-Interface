import { useState } from 'react';
// import Template from './Template';
import CoreComponentsPanel from './CoreComponentsPanel';
import Editor from './Editor';
import './TemplateSelector.css';

const TemplateSelector = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [components, setComponents] = useState([]);
  const addComponentToEditor = (component) => {
    setComponents(prevComponents => [...prevComponents, component]);
  };
  const templateData = {
    templates: [
      {
        id: 1,
        name: 'Simple Text',
        coreComponents: [
          {
            type: 'Heading',
            level: 1,
            buttonText: 'Add Heading (Level 1)',
            icon: 'headingOne',
            placeholder: 'Heading level 1',
          },
          {
            type: 'Heading',
            level: 2,
            buttonText: 'Add Heading (Level 2)',
            icon: 'headingTwo',
            placeholder: 'Heading level 2',
          },
          {
            type: 'Paragraph',
            buttonText: 'Add Paragraph',
            icon: 'Paragraph',
            placeholder: 'Paragraph Text',
          },
        ],
      },
      {
        id: 2,
        name: 'Text and Image',
        coreComponents: [
          {
            type: 'Image',
            buttonText: 'Add Image',
            icon: '',
            placeholder: 'Image URL',
          },
          {
            type: 'Heading',
            level: 1,
            buttonText: 'Add Heading (Level 1)',
            icon: 'faHeading1',
            placeholder: 'Heading Text',
          },
          {
            type: 'Heading',
            level: 2,
            buttonText: 'Add Heading (Level 2)',
            icon: 'faHeading2',
            placeholder: 'Heading Text',
          },
          {
            type: 'Paragraph',
            buttonText: 'Add Paragraph',
            icon: 'faParagraph',
            placeholder: 'Paragraph Text',
          },
          {
            type: 'Video',
            buttonText: 'Add Video',
            icon: '',
            placeholder: 'Video URL',
          },
        ],
      },
    ],
  };
    

  const handleTemplateSelect = (templateId) => {
    const selected = templateData.templates.find((template) => template.id === templateId);
    setSelectedTemplate(selected);
  };

  return (
    <div className="template-container">
      <h2>Select a Template</h2>
      <select className="select-element" onChange={(e) => handleTemplateSelect(parseInt(e.target.value))}>
        <option value="">Select a Template</option>
        {templateData.templates.map((template) => (
          <option key={template.id} value={template.id} className="select-option">
            {template.name}
          </option>
        ))}
      </select>

      {selectedTemplate && <CoreComponentsPanel template={selectedTemplate} onSelectComponent={addComponentToEditor}/>}
      {components.length > 0 && <Editor components={components} />
}
    </div>
  );
};

export default TemplateSelector;
