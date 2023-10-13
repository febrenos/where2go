import React, { useState } from 'react'
import { Menu, TitlePage, NavTab, SearchInput, Input, Button, Switch, Radio } from '../../components/index'
// import * as Styled from './style.jsx'
import { BackgroundCard, Gap, StyledContentLogged } from '../../style';

const options = [
    { label: 'Viagem', value: 'option1', name: 'options' },
    { label: 'Evento', value: 'option2', name: 'options' },
    { label: 'Local', value: 'option3', name: 'options' },
  ];

export default function ToPlan() {
    const [isOpen, setIsOpen] = useState(false);
    const [getNavTab, setNavTab] = useState(1);
    const [selectedOption, setSelectedOption] = useState('option1');

    const handleOptionChange = (value) => {
      setSelectedOption(value);
    };

    return(
        <>
            <Menu isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}/> 
            <div className={isOpen ? 'contentClose' : 'contentOpen'}>
            <TitlePage text={"Planejar"}/>
            <StyledContentLogged>
                        <NavTab tabs={['Cadastrar', 'Criadas', 'Meus Planos']} activeTab={getNavTab} onTabClick={setNavTab}/>
                        {getNavTab === 1 &&
                            <>
                                <BackgroundCard>
                                    <Switch enabled={['IA Neurotrix','IA Chat GPT']} size={'sm'}/>
                                    <Button text="Gerar inputs" size={'lg'}/>
                                    <Input text={"Título"}/>
                                    <Input text={"Local"}/>
                                    <Input text={"Preço estimado"}/>
                                    <Input text={"Data inicio"}/>
                                    <Input text={"Data fim"}/>
                                    <Input text={"Transporte"}/>
                                    <Input text={"Tempo de Distancia"}/>
                                    <Input text={"Documentos"}/>
                                    <Input text={"Duração"}/>
                                    <Input text={"Links"}/>
                                    <Input text={"Descrição"}/>
                                    <Radio title={'Tipo trajeto'}
                                        options={options}
                                        selectedValue={selectedOption}
                                        onValueChange={handleOptionChange}
                                    />
                                        <Button text="Criar com IA" />
                                    <Gap>
                                        <Button text="Cancelar"/>
                                        <Button text="Salvar" solid={true} />
                                    </Gap>
                                </BackgroundCard>
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