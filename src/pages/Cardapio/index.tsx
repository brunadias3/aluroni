import style from './Cardapio.module.scss'
import logo from '../../assets/logo.svg'
export default function Cardapio() {
    return (
        <main>
            <nav className={style.menu}>
                <img src={logo} alt='logo do aluroni' />
            </nav>
        </main>
    )
}