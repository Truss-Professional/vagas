import React from 'react'
import { useHistory } from 'react-router-dom'
import { Header , HomeFlexBox , ContainerHomePage } from '../styled/styled'
import LogoHomeCentro from '../../assets/logohomecentro.png'
import Logo from '../../assets/logo.png'
import { goToListPage } from '../../router/coordinator'

export default function HomePage() {
    const history = useHistory();

    return (
        <div>
            <Header>
                <button 
                onClick={()=>goToListPage(history)}
                >
                Ver Lista
                </button>
                <h2>App Mobile Truss</h2>
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

/* import {Header , HomeFlexBox , ContainerHomePage , ButtonPaginacao, Footer} from '../styled/styled'
import Logo from '../../assets/logo.png'
import LogoHomeCentro from '../../assets/logohomecentro.png'
import { goToListPage } from '../../Router/Coordinator';

export default function HomePage() {
    const history = useHistory();

    return (
        <div>
            <Header>
                <button 
                onClick={()=>goToListPage(history)}
                >
                Ver Lista
                </button>
                <h2>App Mobile Truss</h2>
                <img src={Logo} />
            </Header>
            <ContainerHomePage>
                <HomeFlexBox>
                    <img src={LogoHomeCentro} />
                </HomeFlexBox>
            </ContainerHomePage>
        </div>
    );
} */
