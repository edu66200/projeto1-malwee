import { Link } from 'react-router-dom';  // Importando o Link
import style from './navbar.module.css'


export function Navbar () {
    return(
        <nav>
            <div className={style.principal}>               
                <img src="src/assets/img/Frame 168.svg" alt="Logo" />
                <ul className={style.nav}>
                    <li className={style.escrita}><Link to="/">Home</Link></li>
                    <li className={style.escrita}><Link to="/shop">Shop</Link></li>
                    <li className={style.escrita}><Link to="/about">About</Link></li>
                    <li className={style.escrita}><Link to="/contato">Contato</Link></li>
                </ul>
                <ul className={style.nav1}>
                    
                    <li>
                        <Link to="/carrinho">
                            <img src='src/assets/img/ant-design_shopping-cart-outlined.svg'></img>
                        </Link>
                    </li>
                    <li>
                        <Link to="/carrinho">
                            <img src='src/assets/img/ant-design_shopping-cart-outlined.svg'></img>
                        </Link>
                    </li>
                    <li>
                        <Link to="/carrinho">
                            <img src='src/assets/img/ant-design_shopping-cart-outlined.svg'></img>
                        </Link>
                    </li>
                    <li>
                        <Link to="/carrinho">
                            <img src='src/assets/img/ant-design_shopping-cart-outlined.svg'></img>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}