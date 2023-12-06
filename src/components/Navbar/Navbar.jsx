import logo from "../../images/LogoAM.png";
import { Button, ImageLogo, InputSpace, Nav } from "./NavbarStyled";


export function Navbar() {

    return (
        <>
            <Nav>
                <InputSpace>
                <i className="bi bi-search"></i>
                <input type="text" placeholder="Pesquise por uma cidade"/>
                </InputSpace>

                <ImageLogo src={logo} alt="Logo do Anúncios de Imóveis" />

                <Button>Entrar</Button>
            </Nav>
        </>
    )
}
