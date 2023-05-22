const Product = ({ name, price }) => {
  return (
    <div>
      {name} - {price}
    </div>
  );
};
Product.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
};


