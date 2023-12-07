import { Card } from "../../components/Cards/Card";
import { Navbar } from "../../components/Navbar/Navbar";
import { imovel } from "../../Datas.js"


export default function Home(){
    return (
        <>
            <Navbar />
            {imovel.map((item, index) => {
             return <Card key={index} imovel={item} />; 
            })}
        </>          
    ) 
}