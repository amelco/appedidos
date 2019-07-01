import React, { Component } from 'react';

import api from '../services/api';
import check from '../assets/check.svg';
import './Pedidos.css';

class Pedido extends Component {

    state = {
        pedidos: [],
    }
    // console.log();

    async componentDidMount() {
        const response = await api.get('listPedidos');

        this.setState({ pedidos: response.data });
    }

    async handleEntregue() {

    }

    render() {
        return (
            <section id='lista-pedidos'>
                <div id='sort-list'>
                    <button type="button" onclick={this.handleOrder}>A-Z</button>
                    <button type="button" onclick={this.handleEntregue}>Entregue</button>
                </div>
                { this.state.pedidos.map(pedido => (
                    <article key={pedido._id}>
                        <header>
                            <div className='user-info'>
                                <span>{pedido.cliente}</span>
                            </div>
                        </header>
                        <div className='pedido'>
                            <span>{pedido.produto}</span>
                            <span className='data-entrega'>Data de entrega: {pedido.entrega}</span>
                        </div>
                        <footer>
                            <img src={check} alt="Entregue" />
                        </footer>
                    </article>
                    ))
                }
            </section>
        );
    }
}

export default Pedido;


