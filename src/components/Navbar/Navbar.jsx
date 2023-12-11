import logo from '../../images/LogoAM.png'
import "./Navbar.css"

export function Navbar() {
    return (
        <>
            <nav>
                <div className="input-search-space">
                    <i className="bi bi-search"></i>
                    <input type="text" placeholder='Pesquise por uma cidade' />
                </div>
                <img src={logo} alt="Logo Aúncios de Imóveis" />

                <button>ENTRAR</button>
            </nav>
        </>
    )
}