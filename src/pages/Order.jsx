import React, { useState, useEffect } from 'react';
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
    const [order, setOrder] = useState({
        id: '',
        quantity: 0,
        price: 0,
        itemPrice: 0
    })
    let productDetails = products.find((product) => {
        return product.id === Number(order.id)
    })
    const [itemPrice, setItemPrice] = useState(0)
    const [isAllDataFilled, setIsAllDataFilled] = useState(false)

    useEffect(() => {
        dispatch(getNames())
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        if (distributor.name && distributor.distributionCenter) {
            setIsDistributorFilled(true);
        }
        if (distributor.name && distributor.distributionCenter && distributor.paymentType && distributor.expiredDate && order.id && order.price && order.quantity) {
            setIsAllDataFilled(true)
        }
    }, [names, distributor, order, productDetails, itemPrice])
    // console.log(isDistributorFilled);

    useEffect(() => {
        setItemPrice(order.price * order.quantity)
    }, [order.quantity])

    function handleDistributorChange(event) {
        const name = event.target.name
        const value = event.target.value
        setDistributor({
            ...distributor,
            [name]: value
        })
    }

    function handleProductChange(event) {
        const name = event.target.name
        const value = event.target.value
        console.log(name, value);
        setOrder({
            ...order,
            [name]: value,
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
                                        <select onChange={(event) => handleDistributorChange(event)} name="name" className="form-select" required>
                                            <option defaultValue value="">Open this select menu</option>
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
                                        <select onChange={(event) => handleDistributorChange(event)} name="distributionCenter" className="form-select" required>
                                            {
                                                !distributor.name ? (
                                                    <option defaultValue value="">No data available</option>
                                                ) : (
                                                    <React.Fragment>
                                                        <option defaultValue value="">Open this select menu</option>
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
                                                    <select onChange={(event) => handleDistributorChange(event)} name="paymentType" className="form-select" required>
                                                        <option defaultValue value="">Open this select menu</option>
                                                        <option value="Cash H+1">Cash H+1</option>
                                                        <option value="Cash H+3">Cash H+3</option>
                                                        <option value="Cash H+7">Cash H+7</option>
                                                        <option value="Transfer H+1">Transfer H+1</option>
                                                        <option value="Transfer H+3">Transfer H+4</option>
                                                        <option value="Transfer H+7">Transfer H+7</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-3">
                                                <div className="my-3">
                                                    <label htmlFor="expired-date" className="form-label">Expired Date</label>
                                                    <input onChange={(event) => handleDistributorChange(event)} name="expiredDate" type="date" className="form-control" id="expired-date" required />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="fw-bold col-3"></div>
                                            <div className="col-6">
                                                <div className="form">
                                                    <label htmlFor="notes" className="form-label">Notes</label>
                                                    <textarea onChange={(event) => handleDistributorChange(event)} name="notes" className="form-control"></textarea>
                                                </div>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="fw-bold col-3">Products</div>
                                            <div className="col-6">
                                                <div className="mb-3">
                                                    <label htmlFor="name" className="form-label">Product</label>
                                                    <select onChange={(event) => handleProductChange(event)} className="form-select" name="id">
                                                        <option defaultValue value="">Open this select menu</option>
                                                        {
                                                            products.map((product) => {
                                                                return <option key={product.id} value={product.id}>{product.product_name}</option>
                                                            })
                                                        }
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-3">
                                                <div className="mb-3">
                                                    <label htmlFor="name" className="form-label">Unit</label>
                                                    <select onChange={(event) => handleProductChange(event)} className="form-select" name="price">
                                                        {
                                                            !order.id ? (
                                                                <option defaultValue value="">No data available</option>
                                                            ) : (
                                                                productDetails.units.map((unit) => {
                                                                    return <option key={unit.id} value={unit.price}>{unit.name}</option>
                                                                })                                                                    
                                                            )
                                                        }
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="fw-bold col-3"></div>
                                            <div className="col-3">
                                                <div className="mb-3">
                                                    <label htmlFor="quanitty" className="form-label">Quantity</label>
                                                    <input onChange={(event) => handleProductChange(event)} name="quantity" type="number" className="form-control" id="quanitty" />
                                                </div>
                                            </div>
                                            <div className="col-3">
                                                <div className="mb-3">
                                                    <label htmlFor="price" className="form-label">Price</label>
                                                    <input onChange={(event) => handleProductChange(event)} name="price" type="number" className="form-control" value={order.price} id="price" />
                                                </div>
                                            </div>
                                            <div className="col-3">
                                                <div className="mb-3">
                                                    <label htmlFor="item-price" className="form-label">Total Price</label>
                                                    <input name="itemPrice" type="number" className="form-control" id="item-price" value={Intl.NumberFormat(['ban', 'id']).format(itemPrice)} disabled />
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
                                                        <div className="col d-flex justify-content-end">Rp. {Intl.NumberFormat(['ban', 'id']).format(itemPrice)}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- Different Component but rendered inside the Order form -->
                                        <!-- Product List rendered if button add button is triggered --> */}
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
                                <div className="col d-flex flex-row-reverse">
                                    {
                                        isAllDataFilled ? (
                                            <button type="button" className="btn btn-success text-uppercase mx-1">Confirm</button>
                                        ) : (
                                            <button disabled type="button" className="btn btn-success text-uppercase mx-1">Confirm</button>

                                        )
                                    }
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