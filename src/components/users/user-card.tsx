import React from "react"
import {chakra, Heading, Image, Text, HStack,Button, Flex,PropsOf,Box, Avatar, VStack, propNames, Tag} from "@chakra-ui/react"
import moment from 'moment'
import { FaGithub } from "react-icons/fa"
import { useRouter } from "next/router"
import { User } from "src/types/user"
import { getUserName } from "utils/user"
import Follow from "components/interaction/follow"
import Highlighter from 'react-highlight-words';
import Count from "components/count"

type Props = PropsOf<typeof chakra.div> & {
    user : User
    highlight?: string
    displayFollow?: boolean
    displayRole?:boolean
}

export const UserCard= ({user,highlight,displayFollow=true,displayRole=false}:Props) =>{
    const router = useRouter()
    return (
        <Flex alignItems="center" justifyContent="space-between">
            <HStack spacing="4" p="2">
                <Image width="40px" src={user.avatar} onClick={() => router.push(`/${user.username}`)} cursor="pointer"/>
                <VStack alignItems="left" spacing="1">
                    <HStack>
                        <Heading size="sm" onClick={() => router.push(`/${user.username}`)} cursor="pointer">
                        <Highlighter
                            highlightClassName="highlight-search-match"
                            textToHighlight={getUserName(user)}
                            searchWords={[highlight]}
                        /> 
                        </Heading>
                        <Text layerStyle="textSecondary">@
                        <Highlighter
                            highlightClassName="highlight-search-match"
                            textToHighlight={user.username}
                            searchWords={[highlight]}
                        /> </Text>
                    </HStack>
                    {user.tagline && <Text fontSize=".95rem">
                        <Highlighter
                            highlightClassName="highlight-search-match"
                            textToHighlight={user.tagline}
                            searchWords={[highlight]}
                        /> 
                    </Text>}
                </VStack>
            </HStack>
            <HStack>
                {displayRole && <Tag colorScheme="cyan">{user.role}</Tag>}
                <Text fontWeight="600" fontSize=".9rem"><Count count={user.follows??0}/> followers</Text>
                {displayFollow && <Follow followed={user.followed} targetID={user.id} size="sm"/>}
            </HStack>

        </Flex>
    )
} 

export default UserCard
