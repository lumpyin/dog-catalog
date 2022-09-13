import React from 'react';
import { Flex, Text } from '@adobe/react-spectrum';

const Header: React.FC = () => {
    return <Flex height={70} justifyContent="center" alignItems="center"><Text>Dog Catalog</Text></Flex>;
};

export default Header;