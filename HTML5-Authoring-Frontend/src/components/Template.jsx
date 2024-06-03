import PropTypes from 'prop-types';
import CoreComponentsPanel from './CoreComponentsPanel';

const Template = ({ template }) => {
  const handleSelectComponent = (componentData) => {
    console.log('Selected component:', componentData);
  };

  return (
    <div>
      <h2>{template.name}</h2>
      <ul>
        {template.coreComponents.map((component, index) => (
          <li key={index}>{component}</li>
        ))}
      </ul>
      <CoreComponentsPanel coreComponents={template.coreComponents} onSelectComponent={handleSelectComponent} />
    </div>
  );
};

Template.propTypes = {
  template: PropTypes.shape({
    name: PropTypes.string.isRequired,
    coreComponents: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default Template;
