import PropTypes from 'prop-types';

const Header = ({title}) =>{
    return (
        <div>
            {/* inline */}
            {/* <h1 style={{color:'blue'}}>Header {title}</h1> */}
            <h1> {title} - Tasks</h1>
        </div>
    );
}

Header.defaultProps = {
    title: 'Peshala.com'
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header
