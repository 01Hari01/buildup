import {Box, Stack, Typography} from "@mui/material";
import Heroimage from '../Assets/onur-binay-bwFW9PTJZx8-unsplash.jpg'
const HeroImage=()=>{
    return(<>
        <Box sx={{
            mt: { lg: '212px', xs: '70px' },
             ml: { sm: '50px' }
        }} position="relative" p='200px'
        >
            <Typography color="#FF2625" fontWeight={'600'} fontSize="26px">
                Body building Club
            </Typography>
            <Typography fontWeight={'700'} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb='23px' mt='30px'>
                Hustle, Smile <br /> and Repeat
            </Typography>
            <Typography fontSize={'22px'} lineHeight='35px' mb={4}>
                We bring out here the most effective exercises
            </Typography>
            <Stack>
                <a href="#exercises" style={{ marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#FF2625', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px' }}>Explore Exercises</a>
            </Stack>
            <Typography fontWeight={600} color='#FF2625' sx={{ opacity: 0.1, display: { lg: 'block', xs: 'none' } }} fontSize='200px'>
                Exercise
            </Typography>
            <img src={Heroimage} alt="banner" className="hero-banner-img"/>
        </Box>


    </>)
}
export default HeroImage;
