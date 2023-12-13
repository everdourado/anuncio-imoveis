import PropTypes from "prop-types";  // Importe PropTypes do pacote prop-types

import { CardBody, CardContainer } from "./CardStyled";

// Destruture as propriedades que você está usando
export function Card({ imoveis }) {
    const {
        cidade,
        bairro,
        rua,
        numero,
        tipoDeImovel,
        tipoDeNegocio,
        atualDisponibilidade,
        telefoneContato,
        dataAnuncio,
        imagemImovel
    } = imoveis;

    return (
        <CardContainer>
            <CardBody>
                <div>
                    <h2>{cidade}</h2>
                    <p>{bairro}</p>
                    <p>{rua}</p>
                    <p>{numero}</p>
                    <p>{tipoDeImovel}</p>
                    <p>{tipoDeNegocio}</p>
                    <p>{atualDisponibilidade}</p>
                    <p>{telefoneContato}</p>
                    <p>{dataAnuncio}</p>
                </div>
                <img src={imagemImovel} alt="Imagem do Imóvel" />
            </CardBody>
        </CardContainer>
    );
}

// Defina as propTypes para evitar avisos do ESLint
Card.propTypes = {
    imoveis: PropTypes.shape({
        cidade: PropTypes.string.isRequired,
        bairro: PropTypes.string.isRequired,
        rua: PropTypes.string.isRequired,
        numero: PropTypes.string.isRequired,
        tipoDeImovel: PropTypes.string.isRequired,
        tipoDeNegocio: PropTypes.string.isRequired,
        atualDisponibilidade: PropTypes.string.isRequired,
        telefoneContato: PropTypes.string.isRequired,
        dataAnuncio: PropTypes.string.isRequired,
        imagemImovel: PropTypes.string.isRequired,
    }).isRequired,
};
