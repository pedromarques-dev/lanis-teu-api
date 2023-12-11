// Importando as bibliotecas necessárias
import React from 'react';
import { Card, CardHeader, Icon, useColorMode } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

// Definindo o tipo para as propriedades do componente
interface HeaderProps {
  title: string;
}

// Definindo o componente Header
const Header: React.FC<HeaderProps> = ({ title }) => {
  // Utilizando o hook useColorMode para alternar entre os modos claro e escuro
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Card p={4} align="center">
      <CardHeader fontSize={24}>{title}</CardHeader>
      {
        colorMode === 'light' ? 
            (
                <MoonIcon  aria-label="Toggle color mode" onClick={toggleColorMode} /> 
            )
            :
            (
                <SunIcon  aria-label="Toggle color mode" />
            )
      }
    </Card>
  );
};

export default Header;
