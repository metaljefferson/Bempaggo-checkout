import React, {} from 'react';
import { render } from 'react-dom';
import './form.css';



class Form extends React.Component {
  render(){
    return (
      <div className="app-container">
        <div className="row">         
          <div className="col no-gutters">
            <Checkout />
          </div>
        </div>
       </div>
    )
  }
}
const Checkout = () => (
 <div className="checkout">
    <div className="checkout-container">
     <h3 className="heading-3">Pagamento</h3>
     <Input label="NOME IMPRESSO NO CARTÃO" type="text" name="name" />
     <Input label="Número do cartão de crédito" type="number" name="card_number" imgSrc="https://seeklogo.com/images/V/visa-logo-6F4057663D-seeklogo.com.png"/>
      <div className="row">
        <div className="col">
          <Input label="Data de validade" type="month" name="exp_date" />
        </div>
        <div className="col">
          <Input label="CVV" type="number" name="cvv" />
        </div>
      </div>
      <Button text="Realizar Pagamento" />
    </div>
 </div>
);

const Input = (props) => (
  <div className="input">
    <label>{props.label}</label>
    <div className="input-field">
      <input type={props.type} name={props.name} />
      <img src={props.imgSrc}/>
    </div>
  </div>
);

const Button = (props) => (
  <button className="checkout-btn" type="button">{props.text}</button>
);


render(
  <Form />, document.getElementById('root')
)


export default Form;
