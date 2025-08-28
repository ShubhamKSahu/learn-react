import { Link } from "react-router-dom";

function HomePage(){
    return <>
    <h2>My Home Page</h2>
    {/* <h5>Go to <a href="/products">products page.</a></h5> */}
    <h5>Go to <Link to="/products">products page.</Link></h5>
    </>
}

export default HomePage;