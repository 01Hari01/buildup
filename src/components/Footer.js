import {Box, Stack, Typography} from "@mui/material";
import Logo from '../Assets/Logo_Icons/logo.png'

const Footer=()=>{
    return(<>
        <Box mt="80px" bgColor="#FFF3F4">
            <Stack px="40px" alignItems="center" gap={"40px"} pt={"24px"}>
                <img src={Logo} alt="logo" style={{width:'200px',height:'41px'}}/>
            </Stack>
            <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="41px" textAlign="center" pb="40px">Developed By Hari Krishna Thoka</Typography>
        </Box>



    </>)
}
export default Footer