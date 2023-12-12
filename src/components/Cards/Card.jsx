import { imovel } from "../../Datas"

export function Card({imovel}) {
    return (
        <section>
            <h2>{imovel.cidade}</h2>
            <p>{imovel.bairro}</p>
            <p>{imovel.rua}</p>
            <p>{imovel.numero}</p>
            <p>{imovel.tipoDeImovel}</p>
            <p>{imovel.tipoDeNegocio}</p>
            <p>{imovel.atualDisponibilidade}</p>
            <p>{imovel.telefoneContato}</p>
            <p>{imovel.dataAnuncio}</p>
            <img src={imovel.imagemImovel} alt="Imagem do Imóvel" />
        </section>
    )
}