import { useParams } from "react-router-dom";

function ProductDetail() {
  const params = useParams();

  return (
    <>
      <h2>Product Detail</h2>
      <h4>{params.productId}</h4>
    </>
  );
}
export default ProductDetail;
