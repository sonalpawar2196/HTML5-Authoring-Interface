import propTypes from "prop-types";
import { BsTypeH1, BsTypeH2, BsTypeH3, BsTypeH4, BsTypeH5, BsTypeH6, BsParagraph } from 'react-icons/bs'
import '../components/CoreComponentsPanel.css';

const CoreComponentsPanel = ({ template, onSelectComponent }) => {
  const handleSelectComponentByType = (component) => {
    let componentData = { type: component.type};

    if (component.type === "Heading") {
      // Validate and set level (default to 1 if not provided)
      const level =
        component.level &&
        Number(component.level) >= 1 &&
        Number(component.level) <= 6
          ? Number(component.level)
          : 1;
      componentData.level = level;
      componentData.text = component.placeholder || "";
      componentData.icon = component.icon;
    } else if (component.type === "Paragraph") {
      // Set text (default to empty string if not provided)
      componentData.text = component.placeholder || "";
    }
    onSelectComponent(componentData);
  };
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'headingOne':
        return <BsTypeH1 size={20}/>;
      case 'headingTwo':
        return <BsTypeH2 size={20}/>;
      case 'headingThree':
        return <BsTypeH3 size={20}/>;
      case 'headingFour':
        return <BsTypeH4 size={20}/>;
      case 'headingFive':
        return <BsTypeH5 size={20}/>;
      case 'headingSix':
        return <BsTypeH6 size={20}/>;      
      case 'Paragraph':
        return <BsParagraph size={20}/>;
      default:
        return null;
    }
  };
  return (
    <div className="templates-panel-main">
      <h2>Core Components for Template: {template.name}</h2>
      <div className="templates-panel-area">
        {template.coreComponents.map((component, index) => (
          <button
            key={index}
            onClick={() => handleSelectComponentByType(component)}
          >
            {getIcon(component.icon)}
          </button>
        ))}
        {/* <button
          onClick={() =>
            handleSelectComponentByType("Heading", {
              level: 1,
              text: "New Heading level 1",
            })
          }
        >
          Add Heading (Level 1)
        </button>
        <button
          onClick={() =>
            handleSelectComponentByType("Heading", {
              level: 2,
              text: "New Heading level 2",
            })
          }
        >
          Add Heading (Level 2)
        </button>
        <button
          onClick={() =>
            handleSelectComponentByType("Paragraph", { text: "New Paragraph" })
          }
        >
          Add Paragraph
        </button> */}
      </div>
    </div>
  );
};

CoreComponentsPanel.propTypes = {
  template: propTypes.shape({
    id: propTypes.number.isRequired,
    name: propTypes.string.isRequired,
    coreComponents: propTypes.arrayOf(
      propTypes.shape({
        type: propTypes.string.isRequired,
        buttonText: propTypes.string.isRequired,
        placeholder: propTypes.string.isRequired,
        icon: propTypes.string.isRequired
      })
    ).isRequired,
  }).isRequired,
  onSelectComponent: propTypes.func.isRequired,
};

export default CoreComponentsPanel;
