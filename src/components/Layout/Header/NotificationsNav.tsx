import { RiNotificationLine, RiUserAddLine } from "react-icons/ri";
import { HStack, Icon } from "@chakra-ui/react";

export function NotificationsNav(){
  return (
    <HStack
      borderColor="gray.700"
      borderRightWidth={1}
      color="gray.300"
      mx={['6', '8']}
      pr={['6', '8']}
      py="1"
      spacing={['6', '8']}
    >         
      <Icon as={RiNotificationLine} fontSize="20" />
      <Icon as={RiUserAddLine} fontSize="20" />
    </HStack>
  );
}