import { IconButton, Checkbox} from '@material-ui/core'
import { LabelImportantOutlined, StarBorderOutlined } from '@material-ui/icons'
import React from 'react'
import './EmailRow.css'
import {useHistory} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { selectMail } from './features/mailSlice';

function EmailRow({id,title,subject,description,time}) {
    const history = useHistory();
    const dispatch = useDispatch();

    const openMail = () => {
        dispatch(
            selectMail({
                id,title,subject,description,time

            })
        );
        history.push("./mail");
    }
    return (
        <div onClick={openMail} className= "emailRow">
            <div className='emailRow__option'>
                <Checkbox/>
                <IconButton>
                    <StarBorderOutlined/>
                </IconButton>
                <IconButton>
                    <LabelImportantOutlined/>
                </IconButton>
               
            </div>
            <h3 className='emailRow__title'>{title} </h3>
            <div className='emailRow__message'>
                <h4>
                    {subject} {" "}
                    <span className='emailRow__description'>-
                    {description}</span>
                </h4>
            </div>
            <div className='emailRow__time'>
                <h6>{time}</h6>
            </div>
            
        </div>
    )
}

export default EmailRow
