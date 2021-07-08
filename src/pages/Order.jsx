import React from 'react';
import ProductList from '../components/ProductList';

function Order() {
    return (
        <div className="container my-3">
            <div className="container-fluid">
                <h3 className="fw-bold">Create Order</h3>
                <div className="card">
                    <div className="card-body">
                        <form>
                            <div className="row">
                                <div className="fw-bold col-3">Detail</div>
                                <div className="col-6">
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label">Name</label>
                                        <select className="form-select">
                                            <option defaultValue>Open this select menu</option>
                                            <option value="Garett Winters">Garett Winters</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="fw-bold col-3"></div>
                                <div className="col-3">
                                    <div className="my-3">
                                        <label htmlFor="distribution-center" className="form-label">Distribution Center</label>
                                        <select className="form-select">
                                            <option defaultValue>Open this select menu</option>
                                            <option value="DC Tangerang">DC Tangerang</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="fw-bold col-3"></div>
                                <div className="col-3">
                                    <div className="my-3">
                                        <label htmlFor="payment-type" className="form-label">Payment Type</label>
                                        <select className="form-select">
                                            <option defaultValue>Open this select menu</option>
                                            <option value="Cash H+1">Cash H+1</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="my-3">
                                        <label htmlFor="expired-date" className="form-label">Expired Date</label>
                                        <input type="date" className="form-control" id="name" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="fw-bold col-3"></div>
                                <div className="col-6">
                                    <div className="form">
                                        <label htmlFor="notes" className="form-label">Notes</label>
                                        <textarea className="form-control"></textarea>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="fw-bold col-3">Products</div>
                                <div className="col-6">
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label">Product</label>
                                        <select className="form-select">
                                            <option defaultValue>Open this select menu</option>
                                            <option value="Greenfields Full Cream 1L">Greenfields Full Cream 1L</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-3">
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
                                        <label htmlFor="quanitty" className="form-label">Quantity</label>
                                        <input type="number" className="form-control" id="quanitty" />
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
                            </div>
                            <div className="row d-flex justify-content-end">
                                <div className="fw-bold col-3"></div>
                                <div className="col-4">
                                    <hr />
                                    <div className="mb-3">
                                        <div className="row d-flex">
                                            <div className="col fw-bold">Total Nett Price</div>
                                            <div className="col d-flex justify-content-end">Rp. 1234</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Different Component but rendered inside the Order form -->
                            <!-- Product List, rendered like Product Input but it's displaying values --> */}
                            <ProductList />
                            {/* <!-- Add new items button --> */}
                            <div className="row">
                                <div className="fw-bold col-3"></div>
                                <div className="col-3">
                                    <button type="button" className="btn btn-warning text-white text-uppercase">Add New Item
                                        <i className="fas fa-plus"></i>
                                    </button>
                                </div>
                            </div>
                            <hr />
                            <div className="row d-flex justify-content-end">
                                <div className="col d-flex flex-row-reverse mb-3">
                                    <button type="button" className="btn btn-success text-uppercase mx-1">Confirm</button>
                                    <button type="button" className="btn btn-light text-uppercase mx-1">Cancel</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Order;