import PropTypes from 'prop-types';

const Heading = ({level, text}) => {
const Tag = `h${level}`;
return(
    <Tag> {text} </Tag>
)
}
Heading.propTypes = {
    level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired, // Level should be one of 1 to 6
    text: PropTypes.string.isRequired, // Text should be a string and is required
};

export default Heading;