import React, { useState, useEffect } from 'react';
import ProductList from '../components/ProductList';
import { getNames } from '../store/actions/orderAction';
import { useSelector, useDispatch } from 'react-redux';

function Order() {
    const names = useSelector(state => state.orderReducer.names)
    const distributionCentres = useSelector(state => state.orderReducer.distributionCentres)
    const products = useSelector(state => state.orderReducer.products)
    const [isDistributorFilled, setIsDistributorFilled] = useState(false)
    const dispatch = useDispatch()
    const [distributor, setDistributor] = useState({
        name: '',
        distributionCenter: '',
        paymentType: '',
        expiredDate: '',
        notes: ''
    })

    useEffect(() => {
        dispatch(getNames())
    }, [])

    useEffect(() => {
        if (distributor.name && distributor.distributionCenter) {
            setIsDistributorFilled(true);
        }
    }, [distributor])
    // console.log(isDistributorFilled);

    function handleChange(event) {
        const name = event.target.name
        const value = event.target.value
        setDistributor({
            ...distributor,
            [name]: value
        })
    }

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
                                        <select onChange={(event) => handleChange(event)} name="name" className="form-select">
                                            <option defaultValue>Open this select menu</option>
                                            {
                                                names.map((name) => {
                                                    return <option key={name.id} value={name.employee_name}>{name.employee_name}</option>
                                                })
                                            }
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="fw-bold col-3"></div>
                                <div className="col-3">
                                    <div className="my-3">
                                        <label htmlFor="distribution-center" className="form-label">Distribution Center</label>
                                        <select onChange={(event) => handleChange(event)} name="distributionCenter" className="form-select">
                                            {
                                                !distributor.name ? (
                                                    <option defaultValue>No data available</option>
                                                ) : (
                                                    <React.Fragment>
                                                        <option defaultValue>Open this select menu</option>
                                                        {
                                                            distributionCentres.map((center) => {
                                                                return <option key={center.id} value={center.name}>{center.name}</option>
                                                            })
                                                        }
                                                    </React.Fragment>
                                                )
                                            }
                                        </select>
                                    </div>
                                </div>
                            </div>
                            {
                                !isDistributorFilled ? (
                                    <React.Fragment></React.Fragment>
                                ) : (
                                    <React.Fragment>
                                        <div className="row">
                                            <div className="fw-bold col-3"></div>
                                            <div className="col-3">
                                                <div className="my-3">
                                                    <label htmlFor="payment-type" className="form-label">Payment Type</label>
                                                    <select onChange={(event) => handleChange(event)} name="paymentType" className="form-select">
                                                        <option defaultValue>Open this select menu</option>
                                                        <option value="Cash H+1">Cash H+1</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-3">
                                                <div className="my-3">
                                                    <label htmlFor="expired-date" className="form-label">Expired Date</label>
                                                    <input onChange={(event) => handleChange(event)} name="expiredDate" type="date" className="form-control" id="expired-date" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="fw-bold col-3"></div>
                                            <div className="col-6">
                                                <div className="form">
                                                    <label htmlFor="notes" className="form-label">Notes</label>
                                                    <textarea onChange={(event) => handleChange(event)} name="notes" className="form-control"></textarea>
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
                                                    <input name="quanitty" type="number" className="form-control" id="quanitty" />
                                                </div>
                                            </div>
                                            <div className="col-3">
                                                <div className="mb-3">
                                                    <label htmlFor="price" className="form-label">Price</label>
                                                    <input name="price" type="number" className="form-control" id="price" />
                                                </div>
                                            </div>
                                            <div className="col-3">
                                                <div className="mb-3">
                                                    <label htmlFor="item-price" className="form-label">Total Price</label>
                                                    <input name="item-price" type="number" className="form-control" id="item-price" disabled />
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
                                        {
                                            !products.length ? (
                                                <React.Fragment></React.Fragment>
                                            ) : (
                                                <ProductList />
                                            )
                                        }
                                        <div className="row">
                                            <div className="fw-bold col-3"></div>
                                            <div className="col-3">
                                                <button type="button" className="btn btn-warning text-white text-uppercase">Add New Item
                                                    <i className="fas fa-plus"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </React.Fragment>
                                )
                            }
                            <hr />
                            <div className="row d-flex justify-content-end">
                                <div className="col d-flex flex-row-reverse mb-3">
                                    {/* Needs to validate if all local states are filled or changed */}
                                    <button disabled type="button" className="btn btn-success text-uppercase mx-1">Confirm</button>
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