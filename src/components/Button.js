import PropTypes from 'prop-types';

const Button = ({name, onClick}) => {
    return (
        <button onClick={onClick} className='btn' >{name}</button>
    );
}

Button.defaultProps ={
    name:'Button'
}

Button.propTypes = {
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func,
}

export default Button;