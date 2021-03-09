import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {makeStyles} from '@material-ui/core'
import {fillColor, borderStyle3, lightBlue, parrot, mainColor} from '../../../scss/variables'
import { GetApp } from '@material-ui/icons'
import './View.scss'

const useStyles = makeStyles({
    rightbar: {
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
        border: borderStyle3,
        padding: '1em 1.5em',
        backgroundColor: '#fff',
        border: borderStyle3,
        marginBottom: '1em',
        textAlign: 'start',
        overflow: 'hidden auto',
    },
    rightHead: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '1em',
    },
    rightInfo: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        lineHeight: 1.7,
        marginBottom: '1.4em',
    }, 
    rightDesc: {
        display: 'flex',
        flexDirection: 'column',
        lineHeight: '1.4',
        width: '100%',
    },
    solutionButton: {
        outline: 'none',
        border: `3px solid ${lightBlue}`,
        backgroundColor: '#6598be',
        color: '#fff',
        borderRadius: '5px',
        padding: '0.3em 1em',
    },
    dividerLine: {
        width: '100%',
        height: '1px',
        margin: '1.7em 0',
        backgroundColor: '#c9c9c9',
    },
    imageContainer: {
        width: 150,
        height: 150,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: fillColor,
        gridRow: 'span 1',
        gridColumn: 'span 1',
    },
    imageStyle: {
        width: 150,
        height: 130,
        margin: 0,
        padding: 0,
        display: 'block',
        border: '2px solid #c9c9c9',
    },
    imageDesc: {
        height: 20,
        display: 'flex',
        justifyContent: 'space-between',
    },
    imgContainerHolder: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
        rowGap: '2em',
        columnGap: '2em',
        padding: '1em 0',
        marginBottom: '1em',
    }
})

const ViewBox = ({currentView, viewboxWidth}) => {
    const classes = useStyles()

    if(currentView !== null)
    return (
        <div
          className="iss-vi-right-drawer"
          style={{
            width: viewboxWidth,
            display: viewboxWidth === "0px" ? "none" : "flex",
          }}
        >
          <div className={classes.rightbar}>
            <div className={classes.rightHead}>
              <h1>{currentView.title}</h1>
              <button disabled={true} className={classes.solutionButton}>
                Solution Provided
              </button>
            </div>
            <div className={classes.rightInfo}>
              <h4>Posted by</h4>
              <p>Mr {currentView.postby}</p>
              <p>on {currentView.date}</p>
            </div>
            <div className={classes.rightDesc}>
              <h4 style={{ marginBottom: "10px" }}>Description</h4>
              <p>{currentView.description}</p>
            </div>

            <div className={classes.dividerLine} />
            {currentView.img.length !== 0 ? (
              <>
                <h4>{currentView.img.length} Attachments</h4>
                <div className={classes.imgContainerHolder}>
                  {currentView.img.map((image, i) => (
                    <div className={classes.imageContainer}>
                      <img
                        key={i}
                        src={image.img}
                        className={classes.imageStyle}
                      />
                      <div className={classes.imageDesc}>
                        <p>{image.fileName}</p>
                        <GetApp style={{ fontSize: "20px" }} />
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ) : null}
            <div className={classes.rightDesc}>
              <h3 style={{ marginBottom: "10px" }}>Posted Solution</h3>
              <p>{currentView.solution}</p>
            </div>
          </div>
        </div>
    )
    else {
        return null
    }
}

export default ViewBox
