import { Flex } from '@chakra-ui/react';

import { NotificationsNav } from './NotificationsNav';
import { SearchBox } from './SearchBox';
import { Profile } from './Profile';
import { Logo } from './Logo';

export function Header() {
  return (
    <Flex
      as="header"
      align="center"
      h="20"
      maxWidth={1480}
      mx="auto"
      mt="4"
      px="6"
      w="100%"
    >
      <Logo />

      <SearchBox />
        
      <Flex
        align="center"
        ml="auto"
      >
        <NotificationsNav />
      
        <Profile />
      </Flex>  
    </Flex>
  )
}