import React from "react"

import "./index.css"

export const Album = () => {
    return (
        <div className="album py-5 bg-light">
            <div className="container">

                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    {/* PHOTO 1 */}
                    <div className="col d-flex justify-content-center">
                        <div className="card shadow-sm">
                            <div className="card-img" id="img-1"></div>
                            <div className="card-body">
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional
                                    content. This content is a little bit longer.</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="btn-group">
                                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                        <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                                    </div>
                                    <small className="text-muted">9 mins</small>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* PHOTO 2 */}
                    <div className="col d-flex justify-content-center">
                        <div className="card shadow-sm">
                            <div className="card-img" id="img-2"></div>

                            <div className="card-body">
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional
                                    content. This content is a little bit longer.</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="btn-group">
                                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                        <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                                    </div>
                                    <small className="text-muted">9 mins</small>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* PHOTO 3 */}
                    <div className="col d-flex justify-content-center">
                        <div className="card shadow-sm">
                            <div className="card-img" id="img-3"></div>

                            <div className="card-body">
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional
                                    content. This content is a little bit longer.</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="btn-group">
                                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                        <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                                    </div>
                                    <small className="text-muted">9 mins</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}