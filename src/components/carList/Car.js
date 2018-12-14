import React from "react";
import Modal from "react-responsive-modal";
import "./Car.scss";
import RentalCarDetails from "../../containers/RentalCarDetails";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class Car extends React.Component{
  constructor(props){
    super(props);
  }

  state = {
    open: false,
  };
  
  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render(){
    const { open } = this.state;

    return(
      <div className="rental-car card-item shadow-sm">
      <figure>
        <img src={this.props.thumbnail} alt={`Car #${this.props.id}`}/>
      </figure>

      <div className="content">
        <p className="title mb-2 truncated">
          {this.props.brand} {this.props.model}
        </p>

        <div>
          <FontAwesomeIcon icon="car" className="mr-2" fixedWidth />
          {this.props.type}
        </div>
        <div className="font-weight-bold my-4 price">
          <span className="mr-1 currency">COP$</span>
          <span className="amount">{this.props.price.toLocaleString()}</span>
        </div>
        <div className="view-details-wrapper">
          <button onClick={this.onOpenModal} className="view-details"> VIEW DETAILS </button>
        </div>
        <Modal styles={{padding:0}} open={open} onClose={this.onCloseModal} center>
          <RentalCarDetails carId={this.props.id} rentalId={this.props.rental.id} />
        </Modal>

      </div>
    </div>
    )
  }
}

export default Car