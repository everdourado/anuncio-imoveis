import logo from "../../images/LogoAM.png"

export function Navbar() {

    return (
        <>
            <nav>
                <div className="input-search-space">
                    <i></i>
                </div>
                <img src={logo} alt="Logo do Anúncios de Imóveis" />

                <button>Entrar</button>
            </nav>
        </>
    )
}