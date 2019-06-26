import React, { Component } from 'react';
import api from '../services/api';

import './Pedidos.css';

import check from '../assets/check.svg';

class Pedido extends Component {

    state = {
        pedidos: [],
    }

    async componentDidMount() {
        const response = await api.get('listPedidos');

        this.setState({ pedidos: response.data });
    }

    render() {
        return (
            <section id='lista-pedidos'>
                <h1>TEST</h1>
                { this.state.pedidos.map(pedido => (
                    <article>
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


