
import { Button } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import React from 'react';
import './SendMail.css';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {closeSendMessage} from "./features/mailSlice"
import {db} from "./firebase";
import firebase from "firebase";

function SendMail() {
    const { register, handleSubmit, watch, errors } = useForm();
    const dispatch = useDispatch();

    const onSubmit = (formData) => {
        console.log(formData);
        db.collection("emails").add({
            to: formData.to,
            subject: formData.subject,
            message: formData.message,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
        dispatch(closeSendMessage());
    };
    
    return (
        <div className= 'sendMail'>
            <div className= 'sendMail__header'> 
                <h3>New message</h3>
                <Close className= 'sendMail__close'
                onClick={ () => dispatch(closeSendMessage())}  />
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input 
                    name="to" 
                    placeholder= "To" 
                    type="email" 
                    ref={register({required: true})}/>
                    {errors.to && <p className= "sendMail__error">To is required</p>}

                <input 
                    name="subject" 
                    placeholder= "Subject" 
                    type="text" 
                    ref={register({required: true})}/>
                    {errors.subject && <p className= "sendMail__error">subject is required</p>}

                <input 
                    name="message" 
                    placeholder= "Message..." 
                    type="text" 
                    ref={register({required: true})}
                    className="sendMail__message"/>
                    {errors.message && <p className= "sendMail__error">message is required</p>}
                    

                <div className= "sendMail__options"> 
                    <Button className= "sendMail__button"
                    variant= "contained"
                    color= "primary"
                    type= "submit">
                        Send</Button>
                </div>
            </form>
            
        </div>
    )
}

export default SendMail;
