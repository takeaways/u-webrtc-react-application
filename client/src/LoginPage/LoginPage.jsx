import React,{useState} from 'react';
import {useHistory} from "react-router-dom"
import {useDispatch} from "react-redux"

import SubmitButton from "./components/SubmitButton"
import UserNameInput from "./components/UserNameInput"

import "./LoginPage.css"
import logo from "../resources/logo.png"

import { setUserName } from '../store/actions/dashboard';

import {registerNewUser} from "../utils/socket/connection"

const LoginPage = () => {

  const dispatch = useDispatch();
  const history = useHistory();

  const [username, setUsername] = useState("")

  const handleClickSubmitButton = () => {
    registerNewUser(username)
    dispatch(setUserName(username));
    history.push(`/dashboard`);
  }

  return (
    <div className="login-page_container background_main_color">
      <div className="login-page_login_box background_secondary_color">
        <div className="login-page_logo_container">
          <img className="login-page_logo_image" src={logo} alt="logo" />
        </div>
        <div className="login-page_title_container">
          <h2>Get on Board</h2>
        </div>
        <UserNameInput username={username} setUsername={setUsername}/>
        <SubmitButton onClick={handleClickSubmitButton}/>
      </div>  
    </div>
  )
}

export default LoginPage
