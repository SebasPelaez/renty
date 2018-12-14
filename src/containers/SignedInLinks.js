import React from "react";
import { connect } from "react-redux";
import { signOut } from "../actions/auth";
import { Link } from "react-router-dom";
import avatar from "../assets/avatar.png";
import "../index.scss";
import ReactTooltip from "react-tooltip";


const SignedInLinks = ({ userInfo, dispatch }) => {
  return (
    <div>
      <Link to="/my_bookings" className="btn btn-bookings mr-3">
        My Bookings
      </Link>
      <img data-tip="Juan Esteban Marín" className="img-profile" src={avatar}></img>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit"
        onClick={ () => dispatch(signOut())}>
        Log Out
      </button>
      <ReactTooltip place="bottom" effect="solid"/>
    </div>
    
  )
}

const mapStateToProps = (state) => ({ userInfo: state.firebase.auth });


 export default connect(mapStateToProps)(SignedInLinks);