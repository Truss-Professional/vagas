import React from 'react'
import { useHistory } from 'react-router-dom'
import { Header , HomeFlexBox , ContainerHomePage } from '../styled/styled'
import { ButtonContainer } from '../../components/styled/styled'
import LogoHomeCentro from '../../assets/logohomecentro.png'
import Logo from '../../assets/logo.png'
import { goToListPage } from '../../router/coordinator'

export default function HomePage() {
    const history = useHistory();

    return (
        <div>
            <Header>
                <ButtonContainer>
                    <button 
                    onClick={()=>goToListPage(history)}
                    >
                    Go List
                    </button>
                </ButtonContainer>
                <h2>Mobile Truss App</h2>
                <img src={Logo} />
            </Header>
            <ContainerHomePage>
                <HomeFlexBox>
                    <img src={LogoHomeCentro} />
                </HomeFlexBox>
            </ContainerHomePage>
        </div>
    );
}