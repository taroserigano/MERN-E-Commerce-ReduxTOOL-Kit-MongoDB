import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../slices/cartSlice';
import { toast } from 'react-toastify';
import Rating from './Rating';

const Product = ({ product }) => {
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(addToCart({ ...product, qty: 1 }));
    toast.success(`${product.name} added!`, {
      autoClose: 500,
    });
  };

  return (
    <Card className='my-3 p-3 rounded h-100 product-card'>
      <Link to={`/product/${product._id}`} className='product-card__link'>
        <Card.Img
          src={product.image}
          variant='top'
          className='product-card__image'
        />
      </Link>

      <Card.Body className='d-flex flex-column px-2 pt-3 pb-2'>
        <Link
          to={`/product/${product._id}`}
          className='product-card__link text-reset'
        >
          <Card.Title as='div' className='product-title mb-3'>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        {product.category && (
          <span className='category-pill mb-3'>{product.category}</span>
        )}

        <Card.Text as='div' className='mb-4'>
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>

        <div className='d-flex flex-column gap-3 mt-auto'>
          <p className='price-tag mb-0'>
            <span>${product.price}</span>
            <small>USD</small>
          </p>
          <Button
            onClick={addToCartHandler}
            variant='primary'
            className='w-100'
            disabled={product.countInStock === 0}
          >
            {product.countInStock === 0 ? 'Out of Stock' : 'Add to Cart'}
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Product;
