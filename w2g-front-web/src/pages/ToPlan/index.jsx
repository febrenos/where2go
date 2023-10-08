import React, { useState } from 'react'
import { Menu, TitlePage, NavTab, SearchInput } from '../../components/index'
// import * as Styled from './style.jsx'
import { StyledContentLogged } from '../../style';

export default function ToPlan() {
    const [isOpen, setIsOpen] = useState(false);
    const [getNavTab, setNavTab] = useState(1);

    return(
        <>
            <Menu isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}/> 
            <div className={isOpen ? 'contentClose' : 'contentOpen'}>
            <TitlePage text={"Planejar"}/>
            <StyledContentLogged>
                        <NavTab tabs={['Cadastrar', 'Criadas', 'Meus Planos']} activeTab={getNavTab} onTabClick={setNavTab}/>
                        {getNavTab === 1 &&
                            <>
                                <SearchInput searchType="travel" placeholder="Buscar" />
                            </>
                        }
                        {getNavTab === 2 &&
                            <>
                                <SearchInput searchType="travel" placeholder="Buscar" />
                            </>
                        }
                        {getNavTab === 3 &&
                            <>
                                <SearchInput searchType="travel" placeholder="Buscar" />
                            </>
                        }
                        
            </StyledContentLogged>
            </div>
        </>
    )
}