import React from 'react';

function ProductList() {
    return (
        <React.Fragment>
            <div className="row">
                <div className="fw-bold col-3"></div>
                <div className="col-6">
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Product</label>
                        <div className="row">
                            <div className="col-1">
                                <button type="button" className="btn btn-danger text-white text-uppercase">
                                    <i className="fas fa-minus"></i>
                                </button>
                            </div>
                            <div className="col">
                                <select className="form-select">
                                    <option defaultValue>Open this select menu</option>
                                    <option value="Greenfields Full Cream 1L">Greenfields Full Cream 1L</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Unit</label>
                        <select className="form-select">
                            <option defaultValue>Open this select menu</option>
                            <option value="Karton">Karton</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="fw-bold col-3"></div>
                <div className="col-3">
                    <div className="mb-3">
                        <label htmlFor="quantity" className="form-label">Quantity</label>
                        <input type="number" className="form-control" id="quantity" />
                    </div>
                </div>
                <div className="col-3">
                    <div className="mb-3">
                        <label htmlFor="price" className="form-label">Price</label>
                        <input type="number" className="form-control" id="price" />
                    </div>
                </div>
                <div className="col-3">
                    <div className="mb-3">
                        <label htmlFor="total-price" className="form-label">Total Price</label>
                        <input type="number" className="form-control" id="total-price" disabled />
                    </div>
                </div>
                <div className="row d-flex justify-content-end">
                    <div className="fw-bold col-3"></div>
                    <div className="col-4">
                        <hr />
                        <div className="mb-3">
                            <div className="row d-flex">
                                <div className="col fw-bold">Total</div>
                                <div className="col d-flex justify-content-end">Rp. 1234</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ProductList;