import './style.css'
import { Link } from 'react-router-dom';
import logo from '../../imagens/logo.png';
function Header(){
    return(
            <header>
            <Link className='logo' to="/"><img src= {logo}/></Link>
            <Link className='logo-texto' to="/">Sua fonte de sinopses cinematográficas!</Link>
            <Link className='favoritos' to="/favoritos">Meus filmes</Link>
            </header>
    )
}
export default Header;