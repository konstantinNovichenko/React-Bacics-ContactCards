import React, {Component} from "react";
import PropTypes from "prop-types";

class ContactCard extends Component{
    render()
    {
        return (
        <div className="contact-card col-8">            
            <h1> {this.props.name}</h1>
            <h2>{this.props.cellPhone}</h2>
            <h2>{this.props.workPhone}</h2>
            <h2>{this.props.email}</h2>
        </div>
        );
    }
}


ContactCard.propTypes = {
    name: PropTypes.string.isRequired,
    cellProne: PropTypes.string.isRequired,
    workPhone: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
};

export default ContactCard;