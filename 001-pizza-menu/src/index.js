import React, {StrictMode} from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {pizzaData} from './data';

function App() {
    return <div className = "container">
        <Header />
        <Menu />
        <Footer />
    </div>
}

function Pizza(props){
    return <li className = "pizza"> <img src = {props.pizzaObj.photoName} alt={props.pizzaObj.name}/>
        <div>
            <h3>{props.pizzaObj.name}</h3>
            <p>{props.pizzaObj.price}</p>
            <span>{props.pizzaObj.ingredients}</span>
        </div>
    </li>
}

const Header = () => <header className='header'><h1>Fast React Pizza Co.</h1></header>;
const Menu = () => <main className='menu'>
    <h2>Our Menu</h2>
    <p>Authentic Italian cusine. 6 creative dishes to choose from. All from our stone oven, all organic, all delecious.</p>
    <ul className='pizzas'>
        {pizzaData.map((pizza) => (
            <Pizza pizzaObj = {pizza}
                   key = {pizza.name}
            />
        ))};
    </ul>

</main>;
const Footer = () => {
    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;

    return (
        <footer className='footer'>
        {isOpen && (
            <div className='order'>
                <p>We're Open until {closeHour}:00</p>
                <button className='btn'>Order</button>
            </div>
        )}
    </footer>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"))
    .render(<React.StrictMode>
        <App />
    </React.StrictMode>);


