import React, { useState, useEffect } from "react";
import axios from "axios";
import { makeStyles, FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import SurveyCard from "./SurveyCard";
import "./Create.scss";

const useStyles = makeStyles({
  gridContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    alignItems: "center",
    columnGap: "1em",
    rowGap: "1em",
    justifyItems: "grid-start",
    marginBottom: '3em',
  },
  gridContainer2: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    alignItems: "center",
    columnGap: "1em",
    rowGap: "1em",
    justifyItems: "grid-start",
    marginBottom: '3em',
  },
  formControl: {
      backgroundColor: '#a9a9a9',
  }
});

const Create = () => {
  const [availableForms, setAvailableForms] = useState([]);
  const [modified, setModified] = useState(true);
  const classes = useStyles();

  const [dropdowns, setDropdowns] = useState({
      search: '',
      date: '',
      status: '',
      location: '',
      category: '',
  })
  const handleChange = (event) => {
    const name = event.target.name;
    setDropdowns({
      ...dropdowns,
      [name]: event.target.value,
    });
  };

  useEffect(() => {
    const source = axios.CancelToken.source();
    axios
      .get("http://localhost:5000/create/forms")
      .then((forms) => setAvailableForms(forms.data.rows))
      .catch((err) => console.log(err));
    return () => {
      source.cancel();
    };
  }, [modified]);

  if (availableForms === null)
    return (
      <div>
        <SurveyCard setModified={setModified} />
      </div>
    );
  else {
    return (
      <div>
        <h1 className="create-main-heading">Create Survey</h1>
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
            name='status'
            className='create-filter-common create-filter-dropdown'
            >
                {/* <MenuItem value="">
                    <em>None</em>
                </MenuItem> */}
                <MenuItem value={10} className='create-dropdown-option'>status</MenuItem>
                <MenuItem value={20} className='create-dropdown-option'>Twenty</MenuItem>
                <MenuItem value={30} className='create-dropdown-option'>Thirty</MenuItem>
            </Select>
        </FormControl>
          {/* <input type='option' placeholder='Status' className='create-filter-common create-filter-status'/> */}
          <input
            type="text"
            placeholder="Location"
            className="create-filter-common create-filter-location"
          />
          {/* <input
            type="text"
            placeholder="Category"
            className="create-filter-common create-filter-category"
          /> */}
          <FormControl variant="outlined">
            <InputLabel id="demo-simple-select-outlined-label">Category</InputLabel>
            <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={dropdowns.category}
            onChange={handleChange}
            label="Age"
            name='category'
            className='create-filter-common create-filter-dropdown'
            >
                {/* <MenuItem value="">
                    <em>None</em>
                </MenuItem> */}
                <MenuItem value={10} className='create-dropdown-option'>status</MenuItem>
                <MenuItem value={20} className='create-dropdown-option'>Twenty</MenuItem>
                <MenuItem value={30} className='create-dropdown-option'>Thirty</MenuItem>
            </Select>
        </FormControl>
        </div>
        <SurveyCard formId={null} setModified={setModified} />
        <div className='create-draft-holder'>
            <p className='create-draft-head'>
                Drafts
            </p>
        <div className={classes.gridContainer2}>
          {availableForms.map((f, i) => (
            <SurveyCard
              formId={f.form_id}
              formTitle={f.form_title}
              dateUpdated={f.date_updated}
              key={i}
              setModified={setModified}
            />
          ))}
        </div>
        </div>
      </div>
    );
  }
};

export default Create;
