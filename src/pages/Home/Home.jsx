import { imovel } from "../../Datas";
import { Card } from "../../components/Cards/Card";
import { Navbar } from "../../components/Navbar/Navbar";

export default function Home() {
    return (
        <>
        <Navbar/>
        {imovel.map((item, index) => {
            return <Card key={index} imovel={item}/>
        })}
        
        </>
    )
}