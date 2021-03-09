import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  makeStyles,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Input,
  TextareaAutosize
} from "@material-ui/core";
import "./View.scss";
import ViewIssueCard from "./ViewIssueCard";
import ViewBox from './ViewBox'
import { borderStyle1, borderStyle2, borderStyle3, headerHeight } from "../../../scss/variables";

const issueData = {
  resolved: [
    {
      id: 1,
      title: "Coal",
      description:
        "This is a serious issue, please consider a healthy debate to resolve it. We need to work hard to make our party great again hfiljgnfiu dgio jdiojiogjiogjuoiuigoiodugiod oiuf oiudiof guoid gioudfgiodo gdfioug do fdo",
      postby: "Rookee",
      date: "12 January, 2020",
      img: [],
      solution: "Okay Sir",
    },
    {
      id: 2,
      title: "Electricity",
      description:
        "This is a serious issue, please consider a healthy debate to resolve it. We need to work hard to make our party great again",
      postby: "Scott",
      date: "12 January, 2021",
      img: [],
      solution: "Okay Sir",
    },
    {
      id: 3,
      title: "Swacch Bharat",
      description:
        "This is a serious issue, please consider a healthy debate to resolve it. We need to work hard to make our party great again",
      postby: "Mendeleev",
      date: "12 January, 2022",
      img: [],
      solution: "Okay Sir",
    },
    {
      id: 4,
      title: "Road",
      description:
        "This is a serious issue, please consider a healthy debate to resolve it. We need to work hard to make our party great again",
      postby: "Narendra",
      date: "12 January, 2020",
      img: [
        {
          img:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFokuIjWnHD5UGB2aJf5FzsLNmAdXCCYjeIw&usqp=CAU",
          fileName: "Eagle.jpg",
        },
        {
          img:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9IsyHdgqdUTaf9oYA7k344m5Y9ndt6vqY6Q&usqp=CAU",
          fileName: "Sparrow.jpeg",
        },
        {
          img:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFokuIjWnHD5UGB2aJf5FzsLNmAdXCCYjeIw&usqp=CAU",
          fileName: "Eagle.jpg",
        },
        {
          img:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFokuIjWnHD5UGB2aJf5FzsLNmAdXCCYjeIw&usqp=CAU",
          fileName: "Eagle.jpg",
        },
        {
          img:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFokuIjWnHD5UGB2aJf5FzsLNmAdXCCYjeIw&usqp=CAU",
          fileName: "Eagle.jpg",
        },
      ],
      solution: "Okay Sir",
    },
    {
      id: 5,
      title: "Electricity",
      description:
        "This is a serious issue, please consider a healthy debate to resolve it. We need to work hard to make our party great again",
      postby: "Rahul",
      date: "12 January, 2023",
      img: [],
      solution: "Okay Sir",
    },
  ],
  unsettled: [
    {
      id: 6,
      title: "Road area",
      description:
        "This is a serious issue, please consider a healthy debate to resolve it. We need to work hard to make our party great again",
      postby: "Kejriwal",
      date: "12 January, 2020",
      img: [],
      solution: null
    },
    {
      id: 7,
      title: "Water works",
      description:
        "This is a serious issue, please consider a healthy debate to resolve it. We need to work hard to make our party great again",
      postby: "Ming",
      date: "12 January, 2021",
      img: [],
      solution: null
    },
    {
      id: 8,
      title: "Municipal Works",
      description:
        "This is a serious issue, please consider a healthy debate to resolve it. We need to work hard to make our party great again",
      postby: "Justin",
      date: "12 January, 2022",
      img: [],
      solution: null
    },
    {
      id: 9,
      title: "Meet",
      description:
        "This is a serious issue, please consider a healthy debate to resolve it. We need to work hard to make our party great again",
      postby: "Ram Lal",
      date: "12 January, 2020",
      img: [],
      solution: null
    },
    {
      id: 10,
      title: "International Visit",
      description:
        "This is a serious issue, please consider a healthy debate to resolve it. We need to work hard to make our party great again",
      postby: "Raghu Ram",
      date: "12 January, 2023",
      img: [],
      solution: null
    },
  ],
};

const useStyles = makeStyles({
  gridContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    alignItems: "center",
    columnGap: "1em",
    rowGap: "1em",
    justifyItems: "grid-start",
    marginBottom: "3em",
  },
  gridContainer2: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    alignItems: "center",
    columnGap: "1em",
    rowGap: "1em",
    justifyItems: "grid-start",
    marginBottom: "3em",
  },
  formControl: {
    backgroundColor: "#a9a9a9",
  },
  proposeContainer: {
    // display: 'flex',
    // width: '100%',
    // padding: '1em',
    // backgroundColor: '#fff',
    // border: borderStyle2,
    // marginBottom: '2em',
    // flexDirection: 'column',
    // alignItems: 'flex-end',
    // justifyContent: 'space-between',
    // height: '200px'
    position: 'relative',
    width: '100%',
    display: 'flex',
    alignItems: 'center'
  },
  proposeText: {
    border: borderStyle1,
    padding: '0.7em',
    fontSize: '0.95rem',
    width: '100%',
    resize: 'vertical',
    margin: '0',
    maxWidth: '100%',
  }
});


function ProposeSolution() {
  const classes = useStyles()
  const [solution, setSolution] = useState('')

  return (
      <div className={classes.proposeContainer}>
          <textarea type='text' onChange={(e) => setSolution(e.target.value)} value={solution} required className={classes.proposeText}/>
          <Button variant='contained' color='primary'>Add</Button>
      </div>
  )
}

const View = () => {
  const classes = useStyles();

  const [dropdowns, setDropdowns] = useState({
    search: "",
    date: "",
    status: "",
    location: "",
    category: "",
  });
  const handleChange = (event) => {
    const name = event.target.name;
    setDropdowns({
      ...dropdowns,
      [name]: event.target.value,
    });
  };

  const [viewboxWidth, setViewboxWidth] = useState("0px");
  const [currentId, setCurrentId] = useState("");
  const [currentView, setCurrentView] = useState(null);

  const activecardHandler = (id, isResolved) => {
    // setViewboxWidth(viewboxWidth => viewboxWidth === '100px' ? '0px' : '100px')
    if(currentId === id){
      setCurrentView(null)
      setViewboxWidth('0px')
      setCurrentId('')
    }
    else {
      let currView;
      if(isResolved){
        currView = issueData.resolved.find(element => element.id === id)
      }
      else currView = issueData.unsettled.find(element => element.id === id)

      if(currView !== -1) {
        setCurrentView(currView)
      }
      else setCurrentView(null)
      setCurrentId(id)
      setViewboxWidth('500px')
    }
  };

  return (
    <div>
      <h1 className="create-main-heading">Posted Issue</h1>
      <div className={classes.gridContainer}>
        <input
          type="text"
          placeholder="Search"
          className="create-filter-common create-filter-search"
        />
        <input
          type="date"
          className="create-filter-common create-filter-date"
        />
        <FormControl variant="outlined">
          <InputLabel id="demo-simple-select-outlined-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={dropdowns.status}
            onChange={handleChange}
            label="Age"
            name="status"
            className="create-filter-common create-filter-dropdown"
          >
            <MenuItem value={10} className="create-dropdown-option">
              status
            </MenuItem>
            <MenuItem value={20} className="create-dropdown-option">
              Twenty
            </MenuItem>
            <MenuItem value={30} className="create-dropdown-option">
              Thirty
            </MenuItem>
          </Select>
        </FormControl>
        <input
          type="text"
          placeholder="Location"
          className="create-filter-common create-filter-location"
        />
        <FormControl variant="outlined">
          <InputLabel id="demo-simple-select-outlined-label">
            Category
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={dropdowns.category}
            onChange={handleChange}
            label="Age"
            name="category"
            className="create-filter-common create-filter-dropdown"
          >
            <MenuItem value={10} className="create-dropdown-option">
              status
            </MenuItem>
            <MenuItem value={20} className="create-dropdown-option">
              Twenty
            </MenuItem>
            <MenuItem value={30} className="create-dropdown-option">
              Thirty
            </MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="iss-vi-holder-main">
        <div
          className="iss-vi-left-container"
          style={{  width: `calc(100% - ${viewboxWidth})`, maxHeight: viewboxWidth === '0px' ? null : `calc(100vh - ${headerHeight})` }}
        >
          <div className="iss-vi-left-main">
            <h2 className="iss-vi-res-head">Resolved</h2>
            <div style={{ marginBottom: "3em" }}>
              {issueData.resolved.map((sol, i) => (
                <div key={i} onClick={() => activecardHandler(sol.id, true)}>
                  <ViewIssueCard
                    sol={sol}
                    resolve={true}
                    currentId={currentId}
                  />
                </div>
              ))}
            </div>
            <h2 className="iss-vi-res-head">Unsettled</h2>
            <div style={{ marginBottom: "3em" }}>
            {issueData.unsettled.map((sol, i) => (
              <>
              <div key={i} onClick={() => activecardHandler(sol.id, false)}>
                <ViewIssueCard sol={sol} resolve={false} currentId={currentId}/>
              </div>
              {currentId === sol.id ? <ProposeSolution/> : null}
              </>
            ))}
            </div>
          </div>
        </div>




        <ViewBox currentView={currentView} viewboxWidth={viewboxWidth}/>
      
      
      </div>
    </div>
  );
};

export default View;
