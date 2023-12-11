import logo from '../../images/LogoAM.png'
//import "./Navbar.css";
import styled from "styled-components";

export function Navbar() {
    return (
        <>
            <nav>
                <div className="input-search-space">
                    <i className="bi bi-search"></i>
                    <input type="text" placeholder='Pesquise por uma cidade' />
                </div>
                <img src={logo} alt="Logo Aúncios de Imóveis" />

                <Button>ENTRAR</Button>
            </nav>
        </>
    )
}

const Button = styled.button`
    background-color: #0bade3;
    border: none;
    outline: none;
    font-size: 0.9rem;
    padding: 0.4rem 1rem;
    color: #fff;
    transition: all 0.4s ease-in-out;
    cursor: pointer;
    border-radius: 0.3rem;
    font-family: Roboto, arial;
    /* width: 5%; */
    font-weight: 500;
    letter-spacing: 0.1rem;

    &:hover {
    background-color: #0a86af;
}
`