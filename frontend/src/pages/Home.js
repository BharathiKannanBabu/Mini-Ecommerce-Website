import {Fragment, useEffect, useState} from 'react'
import ProductCard from '../components/ProductCard'
import { useSearchParams } from 'react-router-dom';

const Home = () => {
    const [products, setProducts] = useState([]);

    const [searchParams, setSearchparams] = useSearchParams()
    
    useEffect(() => {
        fetch(process.env.REACT_APP_API_URL+ '/products?' +searchParams)
        .then(res => res.json())
        .then(res => setProducts(res.products))
    },[setSearchparams])

  return (
    <Fragment>
        

        <h1 id="products_heading" className='text-center'>Latest Products</h1>

        <section id="products" className="container mt-5">
        <div className="row">
            {products.map(product => <ProductCard product={product} />)}
            
        </div>
        </section>

        
    </Fragment>
  )
}

export default Home
