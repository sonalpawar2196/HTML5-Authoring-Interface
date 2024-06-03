import PropTypes from 'prop-types';

const Paragraph = ({text}) => {
return(
    <p>{text}</p>
)
}

Paragraph.prototype = {
    text: PropTypes.string.isRequired,
}

export default Paragraph;