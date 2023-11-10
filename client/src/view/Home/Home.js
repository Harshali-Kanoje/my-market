import React ,{useState , useEffect} from 'react'
import Navbar from '../../component/Navbar/Navbar.js'
import axios from 'axios'
import ProductCard from '../../component/ProductCard/ProductCard.js'
import './Home.css'


const Home = () => {

  const [product , setProduct] = useState([])
  const [search , setSearch] = useState('')
   
    const loadProduct = async () => {
       const response = await axios.get('/products') 
       setProduct(response?.data?.data)
    }
    useEffect(() => {
      loadProduct();
    },[])

    const searchProduct = async () => {
     if(search == '')
     {
      loadProduct();
      return
     }
     
      const response = await axios.get(`/product?q=${search}`)
      setProduct(response?.data?.data)
     
    }
    useEffect(() => {
      searchProduct();
    },[search])
  return (
    <div>
      <Navbar/>

      <input type='text' placeholder='Search Product' value={search} onChange={(e) => {
        setSearch(e.target.value)
        }} className='search'/>
      <div className='product-card-container'>
      {
        product?.map((product,index) => {
          const {name, description, price, category, brand, image,_id} = product
          return(
            <div>
              <ProductCard name={name} description={description} price={price} category={category} brand={brand} image={image} _id={_id}/>
            </div>
          )
        })
      }
      </div>
    </div>
  )
}

export default Home;
