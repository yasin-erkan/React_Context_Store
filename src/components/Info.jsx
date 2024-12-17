import { Link } from "react-router-dom";
const Info = () => {
  return (
    <div className="text-center fs-5">
      <p>Please, add a product into the Basket! </p>
      <Link to="/" className="btn btn-primary">
        Please, pop into the products!
      </Link>
    </div>
  );
};

export default Info;
