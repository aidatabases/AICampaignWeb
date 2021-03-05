import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import AddBoxOutlinedIcon from "@material-ui/icons/AddBoxOutlined";
import IconButton from "@material-ui/core/IconButton";
import { useHistory, useRouteMatch } from "react-router";
import { Container, TextField } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: 180,
    height: 180,
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  Button: {
    cursor: "pointer",
    width: "100%",
    height: "100%",
  },
  main: {
    height: 140,
    cursor: "pointer",
  },
  navs: {
    height: 40,
  },
  floating: {
    position: 'fixed',
    zIndex: 2,
    height: '100vh',
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.9)',
    top: 0,
    left: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function SurveyCard({ formId, formTitle, setModified }) {
  const curUrl = useRouteMatch();
  const classes = useStyles();
  const [create, setCreate] = useState(false);
  const [title, setTitle] = useState("");
  const history = useHistory();

  const createFormHandler = async () => {
    let newForm = await axios.post("http://localhost:5000/create/forms", {
      title: title,
    });
    //If successful then store the created form id and push it in the nav bar
    const data = newForm.data.rows[0];
    history.push(`${curUrl.url}/${data.form_id}`);
  };

  const deleteFormHandler = async () => {
    let form = await axios.delete(`http://localhost:5000/create/forms/${formId}`);
    setModified(modified => !modified)
    console.log(form);
  };

  if (formId === null) {
    return (
      <>
        <Card className={classes.root} onClick={() => setCreate(true)}>
          <AddBoxOutlinedIcon className={classes.Button} />
        </Card>
        {create ? (
        <Container className={classes.floating}>
          <Card className={classes.floatingCard}>
                <CardContent>          
                <TextField
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required={true}
                    placeholder="Enter the title of your form"
                />
                </CardContent>
              <CardActions>
                <Button
                    disabled={title === ""}
                    onClick={createFormHandler}
                    variant="contained"
                    color="primary"
                >
                    Create the form
                </Button>
                <Button
                    onClick={() => setCreate(false)}
                    variant="contained"
                    color="primary"
                >
                    Cancel
                </Button>
              </CardActions>
          </Card>
        </Container>
        ) : null}
      </>
    );
  } else {
    return (
      <Card className={classes.root}>
        <CardActionArea className={classes.main}>
          <CardContent onClick={() => history.push(`${curUrl.url}/${formId}`)}>
            <Typography gutterBottom variant="h5" component="h2">
              {formTitle}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.navs}>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary" onClick={deleteFormHandler}>
            Delete
          </Button>
        </CardActions>
      </Card>
    );
  }
}
