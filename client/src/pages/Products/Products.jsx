import React from "react";

const Products = () => {
  return (
    <div className="Products">
      <div className="container">
        <div className="row">
          <div className="col-3">
            <h5 className="mb-3">PRODUCT CATEGORY</h5>
            <div className="inputWrap">
              <input type="checkbox" id="shoes" />
              <label htmlFor="shoes">Shoes</label>
            </div>
            <div className="inputWrap">
              <input type="checkbox" id="Coast" />
              <label htmlFor="Coast">Coast</label>
            </div>

            <h5 className="my-3">FILTER BY PRICE</h5>
            <div className="inputWrap">
              <b>0</b>
              <input className="mx-2" type="range" min={0} max={10000} id="" />
              <b>10000</b>
            </div>

            <h5>SORT BY PRICE</h5>

            <div className="inputWrap">
              <input type="radio" name="price" id="Higher" />
              <label htmlFor="Higher">Higher Price</label>
            </div>
            <div className="inputWrap">
              <input type="radio" name="price" id="lower" />
              <label htmlFor="lower">Lower Price</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
