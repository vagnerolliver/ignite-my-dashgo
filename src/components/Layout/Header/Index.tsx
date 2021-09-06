import { Flex, useBreakpointValue, IconButton, Icon } from '@chakra-ui/react';

import { useSidebarDrawer } from '../../../contexts/SidebarDrawerContext';
import { NotificationsNav } from './NotificationsNav';
import { RiMenuLine } from 'react-icons/ri';
import { SearchBox } from './SearchBox';
import { Profile } from './Profile';
import { Logo } from './Logo';

export function Header() {
  const { onOpen } = useSidebarDrawer()

  // versão larga da tela
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

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
      { !isWideVersion && (
        <IconButton
          aria-label="open navigation"
          icon={<Icon as={RiMenuLine} />}
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          mr="2"
        />
      )}
      <Logo />

      {isWideVersion && (
        <SearchBox />
      )}
        
      <Flex
        align="center"
        ml="auto"
      >
        <NotificationsNav />
      
        <Profile showProfileData={isWideVersion}/>
      </Flex>  
    </Flex>
  )
}