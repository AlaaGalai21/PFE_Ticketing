import React, {Component} from 'react';
import { Link } from "react-router-dom"
import Navbar from '../layout/Navbar';
import Button from 'react-bootstrap/Button';
import { withRouter } from "react-router-dom";


class BuyTicket extends Component {

    componentWillMount(){
        setTimeout(() => { 
            this.props.history.push('/register-form');
        }, 15000)
    }

    render() {
        return (
            <div>

               <h3> Dear Customer,</h3>
               <h3>Please send 20$  ETH  to : 0x89a6DB899a44874C344edcdFc91BabE769CdB0Ee</h3>
               
               <div>
                   
                   <h3>
                   PS: The verification of your payment takes at most 15min 
                   </h3>
                   
               </div>
            </div>

            
            
            
        );
    }
}

export default withRouter(BuyTicket) ;