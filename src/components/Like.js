import { Box, HStack } from '@chakra-ui/react';
import { LikeButton, Provider  } from '@lyket/react';
								
const Like = () => {
	return (
		<>
            <Provider apiKey="pt_b0b1bda0f9571ef3c7fcd6b855a5bf">
                <Box 
                    width='25%' 
                    style={{display: 'flex', justifyContent:'center'}}
                >
                    <LikeButton
                        id="do-you-like-pizza"
                        namespace="faq"
                        hideCounterIfLessThan={1}
                    >
                        {({
                            handlePress,
                            totalLikes,
                            userLiked,
                            isLoading,
                            isCounterVisible
                        }) => (
                            <>
                                <HStack align = 'center'>
                                <Box >
                                <button onClick={handlePress} disabled={isLoading}>
                                    ❤
                                </button>
                                </Box>
                                <Box>
                                {isCounterVisible && <div style={{color:'white'}}>{totalLikes}</div>}
                                </Box>
                                </HStack>
                            </>
                        )}
                    </LikeButton>
                </Box>
            </Provider>
		</>
	)
};

export default Like;