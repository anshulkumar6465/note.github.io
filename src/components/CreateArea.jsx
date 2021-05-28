import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import { makeStyles } from "@material-ui/core/styles";
import Zoom from '@material-ui/core/Zoom';



function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const [isExpand, setIsExpand] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
  }));

  function expand(){

    setIsExpand(true);
  }

  const classes = useStyles();
  return (
    <div>
      <form className="create-note">
        {isExpand?<input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />:null}
        <textarea
          name="content"
          onClick = {expand}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpand?"3":"1"}
        />


<Zoom in={isExpand}
        >
        <Fab
          size="large"
          color="white"
          aria-label="add"
          onClick={submitNote}
          className={classes.margin}
        >
          <AddIcon />
        </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
