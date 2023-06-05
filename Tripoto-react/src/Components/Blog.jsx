import React from 'react'
import { Box, Image, Flex, Stack, Text } from '@chakra-ui/react'


const Blog = () => {
    return (
        <Box 
        style={{gap:"10px"}}
        >
            <Flex 
            style={{marginTop:"10px", marginBottom:"10px"}}
            >
                <Stack>
                    <Text
                    style={{fontSize:"25px", color:"black" ,font:"bolder"}}
                    >UPLOAD YOUR BLOG ON TRIPOTO AND BE DISCOVERED BY MILLIONS OF TRAVELLERS</Text>
                    <Text
                    style={{fontSize:"22px",font:"bold"}}
                    >How it works</Text>
                    <Text>Submit the link of the story you want on Tripoto. This should not be the homepage of your blog, but a link to a specific story.</Text>
                    <Text
                    style={{fontSize:"22px",}}
                    >That's it! You're all done.</Text>
                    <Text>Note: All content you submit will remain your own, and will be posted on social media under your name.
                    </Text>

                </Stack>

                <Stack>
                    <Image src='https://cdn.slidesharecdn.com/ss_thumbnails/egypt-tour-package-tripoto-190314095156-thumbnail.jpg?width=600&height=600&fit=bounds'></Image>
                </Stack>
            </Flex>
        </Box>
    )
}

export default Blog