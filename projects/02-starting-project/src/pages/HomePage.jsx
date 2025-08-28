import { Link, useNavigate } from "react-router-dom";

function HomePage(){
   const navigate = useNavigate();
    const navigationHandler = () =>{
        navigate('/products')
    }
    return <>
    <h2>My Home Page</h2>
    {/* <h5>Go to <a href="/products">products page.</a></h5> */}
    <h5>Go to <Link to="/products">products page.</Link></h5>
    <button onClick={navigationHandler}>Go to Product page</button>
    </>
}

export default HomePage;