import React from "react";
import "./Service.css";

export default function Service() {
    const services = [
        { icon: "☕", title: "Coffee", description: "Freshly brewed coffee with a rich aroma and smooth taste." },
        { icon: "🍗", title: "Beijing Duck", description: "Succulent roast duck with a crispy skin and tender meat." },
        { icon: "🐶", title: "Pet Care", description: "Comprehensive pet care services to keep your pets healthy and happy." },
        { icon: "🍣", title: "Sushi", description: "Authentic sushi prepared with the finest fish and seafood." },
        { icon: "🍕", title: "Pizza", description: "Hot and cheesy pizzas with a variety of toppings to choose from." },
        { icon: "🥗", title: "Salads", description: "Fresh and healthy salads with a mix of greens and vegetables." }
    ];


    return (
        <div className="services">
            <h1>Our Service </h1>
            <h6>Explore our wide range of delicious food and beverages. From gourmet burgers to refreshing drinks, we have something for everyone.</h6>
            <div className="services-container">
                {services.map((service, index) => (
                    <div key={index} className="service-card">
                        <div className="icon">{service.icon}</div>
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
