import chibiImg from '../assets/chibi.png';
import { useNavigate } from 'react-router-dom';

function Navbar(){
    const navigate = useNavigate();

    return(
        <nav className="flex items-center font-custom justify-around bg-transparent py-2 ">
            <img src={chibiImg} alt="a chibi image." width={120} height={100}/>
            <span className='text-white text-2xl font-medium'>Nerv: Project</span>
            <ul className="flex gap-3">
                <li className="text-gray-600 transition-all ease cursor-pointer hover:text-slate-100" onClick={() => navigate('/pilots')}>Pilots</li>
                <li className="text-gray-600 transition-all ease hover:text-slate-100"><a href="#">Eva's Projects</a></li>
                <li className="text-gray-600 transition-all ease hover:text-slate-100"><a href="#">About us</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;