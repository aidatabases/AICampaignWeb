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
import './SurveyCard.scss'
import FormImg from '../../../images/profilesample.png'

const useStyles = makeStyles({
  root: {
    gridRow: 'span 1',
    gridColumn: 'span 1',
    width: 250,
    height: 230,
    display: "flex",
    flexDirection: "column",
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  Button: {
    cursor: "pointer",
    width: "100%",
    height: "100%",
  },
  main: {
    height: 190,
    cursor: "pointer",
  },
  navs: {
    height: 40,
  },
  floating: {
    position: 'fixed',
    zIndex: 2,
    height: '100vh',
    width: '100vw',
    maxWidth: '100vw',
    backgroundColor: 'rgba(0,0,0,0.9)',
    top: 0,
    left: 0,
    right: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gridElement: {
    gridRow: 'span 1',
    gridColumn: 'span 1',
    width: 300,
    height: 270,
  }
});

export default function SurveyCard({ formId, formTitle, setModified, dateUpdated }) {
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
      <div>
        {/* <Card className={classes.root} onClick={() => setCreate(true)}>
          <AddBoxOutlinedIcon className={classes.Button} />
        </Card> */}
        <div className='survey-new-holder'>
          <div className='survey-new-form' onClick={() => setCreate(true)}>
            <div className='new-form-vertical'/>
            <div className='new-form-horizontal'/>
          </div>
          <p className='survey-new-text'>Start New Survey</p>
        </div>
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
      </div>
    );
  } else {
    return (
      // <div className={classes.gridElement}>
      <div className='surveycard-holder' onClick={() => history.push(`${curUrl.url}/${formId}`)}>
          <img className='surveycard-image' src={FormImg}/>
          <div className='surveycard-info'>
            {/* <Button size="small" color="primary" onClick={deleteFormHandler}>
              Delete
            </Button> */}
            <div style={{margin: 'auto 0'}}>
              <p className='surveycard-big-text'>{formTitle}</p>
              <p className='surveycard-small-text'>Opened on - {dateUpdated}</p>
            </div>
          </div>
      </div>
    );
  }
}
