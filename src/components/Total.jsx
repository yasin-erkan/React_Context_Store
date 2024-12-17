const Total = ({ basket }) => {
  // Sum all the 'amount' values of the objects in the array
  const totalAmount = basket.reduce((acc, item) => acc + item.amount, 0);

  // Sum all the 'amount * price' values of the objects in the array
  const totalPrice = basket.reduce(
    (acc, item) => acc + item.price * item.amount,
    0
  );

  return (
    <div className="rounded my-5 shadow border p-4 d-flex flex-column justify-content-between">
      <div className="fs-4">
        <p>
          There are <span className="text-warning fw-bold">{totalAmount}</span>{" "}
          items in the basket
        </p>

        <p>
          Total price{" "}
          <span className="text-success fw-bold">{totalPrice.toFixed(2)}₺</span>
        </p>
      </div>

      <button className="btn btn-warning py-2 px-4">Confirm Order</button>
    </div>
  );
};

export default Total;
