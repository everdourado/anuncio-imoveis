import PropTypes from 'prop-types';
import { CardContener, CardBody } from './CardStyled';

export function Card({ imovel }) {
    return (
        <CardContener>
            <CardBody>
                <div>
                    <h2>{imovel.cidade}</h2>
                    <p>{imovel.bairro}</p>
                    <p>{imovel.rua}</p>
                    <p>{imovel.numero}</p>
                    <p>{imovel.tipoDeImovel}</p>
                    <p>{imovel.tipoDeNegocio}</p>
                    <p>{imovel.atualDisponibilidade}</p>
                    <p>{imovel.telefoneContato}</p>
                </div>
                <img src={imovel.image} alt="Imagem" />
            </CardBody>
        </CardContener>
    );
}

Card.propTypes = {
    imovel: PropTypes.shape({
        cidade: PropTypes.string,
        bairro: PropTypes.string,
        rua: PropTypes.string,
        numero: PropTypes.string,
        tipoDeImovel: PropTypes.string,
        tipoDeNegocio: PropTypes.string,
        atualDisponibilidade: PropTypes.string,
        telefoneContato: PropTypes.string,
        image: PropTypes.string,
    }).isRequired,
};
