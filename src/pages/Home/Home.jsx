import { imovel } from "../../Datas";
import { Card } from "../../components/Cards/Card";
import { Navbar } from "../../components/Navbar/Navbar";
import { HomeBody } from "./HomeStyled";

export default function Home() {
    return (
        <>
        <Navbar/>
        <HomeBody>
           {imovel.map((item, index) => {
            return <Card key={index} imovel={item}/>
        })} 
        </HomeBody>
        
        
        </>
    )
}