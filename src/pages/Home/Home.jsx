//import { imoveis } from "../../Datas";
import { Card } from "../../components/Cards/Card";
import { Navbar } from "../../components/Navbar/Navbar";
import { getAllImoveis } from "../../services/imoveisServices";
import { HomeBody } from "./HomeStyled";
import { useState, useEffect } from "react";



export default function Home() {
    const [imoveis, setImoveis] = useState([]);

    async function findAllImoveis() {
        try {
            const response = await getAllImoveis();
            setImoveis(response.data.results);
        } catch (error) {
            console.error("Erro ao buscar imóveis:", error);
            // Trate o erro de acordo com sua lógica de UI
        }
    }

    useEffect(() => {
        findAllImoveis();
    }, []);

    return (
        <>
        <Navbar/>
        <HomeBody>
           {imoveis.map((item, index) => {
            return <Card key={index} imoveis={item}/>
        })} 
        </HomeBody>
        
        
        </>
    )
}