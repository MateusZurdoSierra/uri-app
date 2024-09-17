import React, { useState } from 'react';
import { Container, Title, Subtitle, ContentText, RowContainer, NumberContainer , NeighborhoodContainer } from './styles';
import Input from '../../../../modules/global/components/Input';
import Footer from '../../../../modules/global/components/Footer';

const AddressScreen: React.FC = () => {
    const [zipCode, setzipCode] = useState<string>(''); 
    const [street, setStreet] = useState<string>('');
    const [number, setNumber] = useState<string>('');
    const [neighborhood, setNeighborhood] = useState<string>('');
    const [city, setCity] = useState<string>('');

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
                value={zipCode}
                onChangeText={number => setzipCode(number)}
            />

            <Input
                description="Rua"
                value={street}
                onChangeText={text => setStreet(text)}
            />

            <RowContainer>
                <NumberContainer>
                    <Input
                        description="Número"
                        value={number}
                        onChangeText={number => setNumber(number)}
                    />
                </NumberContainer>

                <NeighborhoodContainer>
                    <Input
                        description="Bairro"
                        value={neighborhood}
                        onChangeText={text => setNeighborhood(text)}
                    />
                </NeighborhoodContainer>
            </RowContainer>

            <Input
                description="Cidade"
                value={city}
                onChangeText={text => setCity(text)}
            />

            <Footer
                textButton="Proximo"
                onPress={() => {}}
            />
        </Container>
    );
};

export default AddressScreen;
