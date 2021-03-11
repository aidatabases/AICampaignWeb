import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {Button, Input, makeStyles} from '@material-ui/core'
import {fillColor, borderStyle3, lightBlue, parrot, mainColor} from '../../../scss/variables'
import { GetApp } from '@material-ui/icons'

const useStyles = makeStyles({
    container: {
        padding: '1em 0',
        width: '100%',
        backgroundColor: '#fff',
        border: borderStyle3,
        display: 'flex',
        alignItems: 'center',
        height: 85,
        '&:hover': {
            backgroundColor: fillColor,
            cursor: 'pointer',
        }
    },
    flagContainer: {
        width: 70,
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexShrink: 0,
    },
    flag1: {
        width: 15,
        height: 15,
        borderRadius: 4,
        backgroundColor: 'green',
    },
    flag2: {
        width: 15,
        height: 15,
        borderRadius: 4,
        backgroundColor: 'red',
    },
    textContainer: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        flexDirection: 'column',
        height: '100%',
        overflow: 'hidden',
    },
    text: {
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        margin: 0,
        width: '100%',
        overflow: 'hidden',
    },
    resolveStatus: {
        padding: '0 1em',
        flexShrink: 0,
        // lineHeight
    },
    questionStatus1: {
        padding: '0 1em',
        flexShrink: 0,
    },
    questionStatus2: {
        padding: '0 1em',
        flexShrink: 0,
        color: lightBlue,
        '&:hover': {
            color: parrot,
        }
    },
    rightbar: {
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
        border: borderStyle3,
        padding: '1em 70px',
        backgroundColor: '#fff',
        border: borderStyle3,
        marginBottom: '1em',
        textAlign: 'start',
        '&:hover': {
            backgroundColor: fillColor,
            cursor: 'pointer',
        }
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
        margin: '2.5em 0',
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


const ViewIssueCard = ({sol, resolve, currentId}) => {
    const classes = useStyles()


    const [openSolutionPropose, setSolutionPropose] = useState(false)

    // const proposeSolutionHandler = () => {
    //     setSolutionPropose(!openSolutionPropose)
    // }

    if(resolve)
    return (
        <>
        {/* {!openIssueDetails?  */}
        <div className={classes.container} 
        // onClick={() => setOpenIssueDetails(!openIssueDetails)} 
        style={{backgroundColor: currentId === sol.issue_id ? fillColor : '#fff'}}>
            <div className={classes.flagContainer}>
                <div className={classes.flag1}/>
            </div>
            <div style={{display: 'flex', overflow: 'hidden'}}>
                <div className={classes.textContainer}>
                    <h3>{sol.issue_title}</h3>
                    <p className={classes.text}>{sol.description}</p>
                </div>
            </div>
            <div className={classes.resolveStatus}>Resolved</div>
            <div className={classes.questionStatus1}>Solution Provided</div>
        </div>
        {/* :
        <div className={classes.rightbar} onClick={() => setOpenIssueDetails(!openIssueDetails)}>
            <div className={classes.rightHead}>
                <h1>{sol.issue_title}</h1>
                <button disabled={true} className={classes.solutionButton}>Solution Provided</button>
            </div>
            <div className={classes.rightInfo}>
                <h4>Posted by</h4>
                <p>Mr {sol.created_by}</p>
                <p>on {sol.created_on}</p>
            </div>
            <div className={classes.rightDesc}>
                <h4 style={{marginBottom: '10px'}}>Description</h4>
                <p>{sol.description}</p>
            </div>
            
            <div className={classes.dividerLine}/>
            {sol.img.length !== 0 ? 
            <>
            <h4>{sol.img.length} Attachments</h4>
            <div className={classes.imgContainerHolder}>
            {sol.img.map((image,i) => 
            <div className={classes.imageContainer}>
                <img key={i} src={image.img} className={classes.imageStyle}/>
                <div className={classes.imageDesc}>
                    <p>{image.fileName}</p>
                    <GetApp style={{fontSize: '20px'}}/>
                </div>
            </div>)}</div></> : null}
            <div className={classes.rightDesc}>
                <h3 style={{marginBottom: '10px'}}>Posted Solution</h3>
                <p>{sol.solution}</p>
            </div>
        </div>
        } */}
        </>
    )
    else {
        return(
        <>
        <div className={classes.container} style={{backgroundColor: currentId === sol.issue_id ? fillColor : '#fff'}}>
            <div className={classes.flagContainer}>
                <div className={classes.flag2}/>
            </div>
            <div style={{display: 'flex', overflow: 'hidden'}}>
                <div className={classes.textContainer}>
                    <h3>{sol.issue_title}</h3>
                    <p className={classes.text}>{sol.description}</p>
                </div>
            </div>
            <div className={classes.resolveStatus}>Unsettled</div>
            <div className={classes.questionStatus2}>Propose Solution</div>
        </div>
        
        </>
        )
    }
}

// ViewIssueCard.propTypes = {
    
// }

export default ViewIssueCard


