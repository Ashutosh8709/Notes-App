import TextField from '@mui/material/TextField';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
export default function SearchBar({display,searchNote,setSearchNote}){
    return(
        <div className="text-white">
            {display==1? (
                <div className="flex items-center gap-2 bg-white rounded-full px-2 pt-1">
          <SearchRoundedIcon className="text-gray-600" />
          <TextField
            id="outlined-basic"
            name="title"
            variant="standard"
            placeholder="Search..."
            size="small"
            value={searchNote}
            onChange={(e)=>setSearchNote(e.target.value)}
            InputProps={{ disableUnderline: true }}
            className="w-60"
          />
        </div>
            ) :null}
        </div>
    );
}