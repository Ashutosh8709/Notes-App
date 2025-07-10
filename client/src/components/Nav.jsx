import Button from '@mui/joy/Button';
import Add from '@mui/icons-material/Add';
import {useNavigate} from 'react-router-dom';


export default function Nav({ifAdd}){
    const navigate=useNavigate();
    return(
        <div className="h-24 bg-black flex items-center justify-between px-4">
                <p className="font-sans-serif text-7xl font-extrabold bg-gradient-to-r from-yellow-400 to-pink-600 text-transparent bg-clip-text">NOTES APP</p>
                {   ifAdd===1 ? (<Button startDecorator={<Add />}  sx={{
                        backgroundImage: "linear-gradient(to right, #facc15, #ec4899)", // yellow-400 to pink-600
                        color: "white",
                        fontWeight: "bold",
                        borderRadius: "10px",
                        "&:hover": {
                        opacity: 0.9,
                },}} onClick={()=>navigate('/create')}>Add Notes</Button>):null}
            </div>
    );
}