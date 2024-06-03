import { useState } from 'react';
import PropTypes from 'prop-types';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Heading from '../components/core/Heading';
import Paragraph from '../components/core/Paragraph';

const EditorCopy = ({ components }) => {
    const [draftComponents, setDraftComponents] = useState([...components]);

    const handleSaveDraft = () => {
        // Generate XML schema with the edited components and their styles
        const xmlData = generateXMLSchema(components);
        console.log('XML Schema:', xmlData);
    };

    const handleComponentChange = (index, newData) => {
        const updatedComponents = [...draftComponents];
        updatedComponents[index] = { ...updatedComponents[index], ...newData };
        setDraftComponents(updatedComponents);
    };

    const generateXMLSchema = (components) => {
        // Example XML structure based on components data (customize as needed)
        let xmlString = '<?xml version="1.0" encoding="UTF-8"?>';
        xmlString += '<document>';

        components.forEach((component) => {
            const { type, text, level } = component;
            if (type === 'Heading') {
                xmlString += `<heading level="${level || 1}">${text}</heading>`;
            } else if (type === 'Paragraph') {
                xmlString += `<paragraph>${text}</paragraph>`;
            }
        });

        xmlString += '</document>';
        return xmlString;
    };

    return (
      <div>
      <h2>EditorCopy</h2>
      <div>
          {components.map((componentData, index) => {
              const { type, text, level } = componentData;

              return (
                  <div key={index}>
                      {type === 'Heading' ? (
                          <CKEditor
                              editor={ClassicEditor}
                              data={text}
                              onChange={(event, editor) => {
                                  handleComponentChange(index, {
                                      text: editor.getData(),
                                      level: level // Preserve heading level
                                  });
                              }}
                          />
                      ) : (
                          <CKEditor
                              editor={ClassicEditor}
                              data={text}
                              onChange={(event, editor) => {
                                  handleComponentChange(index, {
                                      text: editor.getData()
                                  });
                              }}
                          />
                      )}
                  </div>
              );
          })}
      </div>
      <div>
          <button onClick={handleSaveDraft}>Save</button>
      </div>
  </div>
    );
};

EditorCopy.propTypes = {
    components: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default EditorCopy;
