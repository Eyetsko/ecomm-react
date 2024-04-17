function ProductCard() {
  return (
    <>
      <div className="product-card">
        <img
          src="src/Images/typewriters-denver.png"
          alt=""
          className="product-image"
        />

        <div className="product-content">
          <div className="product-info">
            <div>description</div>
            <div>$100</div>
          </div>
          <div className="product-button">
            <a href="www.google.com">Buy</a>
          </div>
        </div>
        
      </div>
    </>
  );
}

export default ProductCard;
