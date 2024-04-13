
import moment from 'moment';
import logo from '../../assets/logo.png'

const Header = () => {
    return (
        <div className='mx-auto font-poppins '>
            <img src={logo} alt="" />
            <h1 className='text-3xl font-bold'>Journalism Without Fear or Favour</h1>
            <h4 className='text-2xl'>{moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}</h4>

            
        </div>
    );
};

export default Header;