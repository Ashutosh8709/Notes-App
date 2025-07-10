import * as React from 'react';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import Divider from '@mui/joy/Divider';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import Typography from '@mui/joy/Typography';
import Check from '@mui/icons-material/Check';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import DeleteIcon from '@mui/icons-material/Delete';
import EditNoteIcon from '@mui/icons-material/EditNote';
import {useNavigate} from 'react-router-dom'

export default function NoteCard({title,content,category,id,tags,handleDelete}) {
  const navigate=useNavigate();
  return (
      <Card
        size="lg"
        variant="solid"
        color="neutral"
        invertedColors
        sx={{ bgcolor: 'neutral.900' }}
       className="bg-gradient-to-br from-yellow-400 to-pink-600 max-w-xs my-4 mx-4">
        <Typography level="h2" className="text-white">{title}</Typography>
        <Typography level="title-md" sx={{ mr: 'auto'}}>
          Category: {category}
        </Typography>
        <Divider inset="none" />
          <Typography level="body-sm" sx={{ mr: 'auto',color:"white"}} className="text-white">
            Content: {content}
          </Typography>
        <Divider inset="none" />
        <Typography level="title-sm">Tags:</Typography>
        <List
          size="sm"
          sx={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            mx: 'calc(-1 * var(--ListItem-paddingX))',
          }}
        >
          {tags.map((item,index)=>(
            <ListItem key={index}>
            <ListItemDecorator>
              <Check />
            </ListItemDecorator>
            {item}
          </ListItem>
          ))}
        </List>
        <Divider inset="none" />
          <div className='flex flex-wrap justify-around'>
        <CardActions>
          <Button endDecorator={<EditNoteIcon />} onClick={()=>navigate(`/edit/${id}`)}>Edit</Button>
          <Button endDecorator={<DeleteIcon />} onClick={handleDelete}>Delete</Button>
        </CardActions>
          </div>
      </Card>
  );
}
