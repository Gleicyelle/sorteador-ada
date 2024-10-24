import { useState } from "react"
import { Flex, Card, Button } from "antd"

function Home() {
    const [numeroSorteado, setNumeroSorteado] = useState(null);

    const sortearNumero = () => {
        const numero = Math.floor(Math.random() * 10) + 1;
        setNumeroSorteado(numero);
    };

    return (
        <Flex 
            gap='middle' 
            vertical 
            align="center" 
            justify="center" 
            style={{ minHeight: '100vh' }}
        >
            <h1 
                style={{ color: '#ffb3be', margin: 0, fontSize: '60px', fontFamily: 'Sofia' }}
            >
                Sorteador de Algoritmos
            </h1>
            <Card 
                hoverable 
                bordered={false}
                style={{ width: '35%', cursor: 'default', borderRadius: '30px', backgroundColor:'#ffb3be' }}
            >
                <Flex vertical align="center">
                    <p style={{ color: '#6b004f', fontSize: '20px', textAlign: 'center' }}>
                        Olá, seja bem-vindo(a) ao nosso espaço da estação <b>Ada Lovelace</b>! Com esse programa, iremos sortear o algoritmo que você irá organizar.
                    </p>
                    <Button 
                        type="primary"
                        size="large"
                        style={{ width: '150px' }}
                        onClick={sortearNumero}
                    >
                        <p style={{ fontSize: '18px', fontWeight: 'bold' }}>SORTEAR</p>
                    </Button>
                </Flex>
                <p style={{ color: '#6b004f', fontSize: '20px', textAlign: 'center', fontWeight: 'bold' }}>
                    {numeroSorteado !== null && `O número sorteado é: ${numeroSorteado}.`}
                </p>
            </Card>
        </Flex>
    )
}

export default Home