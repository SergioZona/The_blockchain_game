import PersonIcon from '@mui/icons-material/Person';

const Step_1 = ({ socket }) => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container sx={{ textAlign: "left", py: 8 }} >
                <Link to="/">
                    <PersonIcon sx={{ color: "#000000" , fontSize: '5vw', maxWidth: '50px' }}  />
                </Link>
            </Container>
           
        </Box>
        );
};

export default Step_1;
