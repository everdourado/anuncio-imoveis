import logo from '../../images/LogoAM.png'
import { Button, ImageLogo, InputSpace, Nav } from './NavbarStyled';

export function Navbar() {
    return (
        <>
            <Nav>
                <InputSpace className="input-search-space">
                    <i className="bi bi-search"></i>
                    <input type="text" placeholder='Pesquise por uma cidade' />
                </InputSpace>
                <ImageLogo src={logo} alt="Logo Aúncios de Imóveis" />

                <Button>ENTRAR</Button>
            </Nav>
        </>
    )
}

