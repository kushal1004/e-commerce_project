import axios from 'axios'
import { useState, useEffect, Fragment } from 'react'
import { Header } from '../../components/Header'
import { Link } from 'react-router'
import './OrdersPage.css'
import { OrdersGrid } from './OrdersGrid'


export function OrdersPage ({ cart }) {
  const [orders, setOrders] = useState([])
  useEffect(() => {
    axios.get('/api/orders?expand=products').then(response => {
      setOrders(response.data)
    })
  }, [])

  return (
    <>
      <title>Orders</title>
      <link rel='icon' type='image/svg+xml' href='orders-favicon.png' />
      <Header cart={cart} />

      <div className='orders-page'>
        <div className='page-title'>Your Orders</div>

        <OrdersGrid orders={ orders} />
        
      </div>
    </>
  )
}
