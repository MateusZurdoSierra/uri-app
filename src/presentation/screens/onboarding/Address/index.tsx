import React, { useState } from 'react';
import { Container, Title, Subtitle, ContentText, RowContainer, NumeroContainer, BairroContainer } from './styles';
import Input from '../../../../modules/global/components/Input';
import Footer from '../../../../modules/global/components/Footer';

const AddressScreen: React.FC = () => {
    const [cep, setCep] = useState<string>(''); 
    const [rua, setRua] = useState<string>('');
    const [numero, setNumero] = useState<string>('');
    const [bairro, setBairro] = useState<string>('');
    const [cidade, setCidade] = useState<string>('');

    return (
        <Container>
            <ContentText>
                <Title>Endereço</Title>
                <Subtitle>
                    Para garantir a segurança da vizinhança e
                    permitir seu acesso ao seu bairro dentro do Uri precisamos de algumas informações suas.
                </Subtitle>
            </ContentText>

            <Input
                description="CEP"
                value={cep}
                onChangeText={numero => setCep(numero)}
            />

            <Input
                description="Rua"
                value={rua}
                onChangeText={text => setRua(text)}
            />

            <RowContainer>
                <NumeroContainer>
                    <Input
                        description="Número"
                        value={numero}
                        onChangeText={numero => setNumero(numero)}
                    />
                </NumeroContainer>

                <BairroContainer>
                    <Input
                        description="Bairro"
                        value={bairro}
                        onChangeText={text => setBairro(text)}
                    />
                </BairroContainer>
            </RowContainer>

            <Input
                description="Cidade"
                value={cidade}
                onChangeText={text => setCidade(text)}
            />

            <Footer
                textButton="Proximo"
                onPress={() => {}}
            />
        </Container>
    );
};

export default AddressScreen;
