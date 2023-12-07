import { Card } from "../../components/Cards/Card";
import { Navbar } from "../../components/Navbar/Navbar";
import { imovel } from "../../Datas.js"
import { HomeBody } from "./HomeStyled.jsx"


export default function Home() {
    return (
        <>
            <Navbar />
            <HomeBody>
            {imovel.map((item, index) => {
             return <Card key={index} imovel={item} />; 
            })}
            </HomeBody>
            
        </>
    )       
}