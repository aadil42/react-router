import { Link } from 'react-router-dom';

const PRODUCTS = [
    {id: 'p1', title: 'product n1'},
    {id: 'p2', title: 'product n2'},
    {id: 'p3', title: 'product n3'}
];

const Products = () => {
    return (
        <main>
        <h1>Products</h1>
            <ul>
                { PRODUCTS.map((prod) => {
                    return  <li><Link to={`${prod.id}`}>{prod.title}</Link></li>;
                })}
            </ul>
        </main>
    );
}

export default Products;