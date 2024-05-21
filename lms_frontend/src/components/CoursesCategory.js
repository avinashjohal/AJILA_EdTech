import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";


function CoursesCategory() {
    useEffect(() => {
        document.title ="AJILA | Category Wise Course"
        }, []);
    return (
        <div className="container mt-3">
            {/* Latest courses Section Start*/}
            <h3 className="my-4">
                <span className="my-3 py-2 px-4 border rounded-3 border-danger">
                    Web Development Courses
                </span>
            </h3>
            <div className="row ">
                <div className="col-md-3 mb-4 ">
                    <div className="card">
                        <Link to="/detail/1">
                            <img src="/lc1.jpg" className="card-img-top" alt="..." />
                        </Link>
                        <div className="card-body">
                            <h5 className="card-title">
                                <Link to="detail/1">Course Title</Link>
                            </h5>
                            <p className="card-text">It is a Javascript course.</p>
                            <Link to="detail/1" className="btn btn-primary">
                                Details{" "}
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <div className="card">
                        <Link to="detail/2">
                            <img src="/lc1.jpg" className="card-img-top" alt="..." />
                        </Link>
                        <div className="card-body">
                            <h5 className="card-title">
                                <Link to="detail/2">Course Title</Link>
                            </h5>
                            <p className="card-text">It is a Javascript course.</p>
                            <Link to="detail/2" className="btn btn-primary">
                                Details{" "}
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <div className="card">
                        <Link to="detail/3">
                            <img src="/lc1.jpg" className="card-img-top" alt="..." />
                        </Link>
                        <div className="card-body">
                            <h5 className="card-title">
                                <Link to="detail/3">Course Title</Link>
                            </h5>
                            <p className="card-text">It is a Javascript course.</p>
                            <Link to="detail/3" className="btn btn-primary">
                                Details{" "}
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <div className="card">
                        <Link to="2">
                            <img src="/lc1.jpg" className="card-img-top" alt="..." />
                        </Link>
                        <div className="card-body">
                            <h5 className="card-title">
                                <Link to="3">Course Title</Link>
                            </h5>
                            <p className="card-text">It is a Javascript course.</p>
                            <Link to="1" className="btn btn-primary">
                                Details{" "}
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <div className="card">
                        <Link to="2">
                            <img src="/lc1.jpg" className="card-img-top" alt="..." />
                        </Link>
                        <div className="card-body">
                            <h5 className="card-title">
                                <Link to="3">Course Title</Link>
                            </h5>
                            <p className="card-text">It is a Javascript course.</p>
                            <Link to="1" className="btn btn-primary">
                                Details{" "}
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <div className="card">
                        <Link to="2">
                            <img src="/lc1.jpg" className="card-img-top" alt="..." />
                        </Link>
                        <div className="card-body">
                            <h5 className="card-title">
                                <Link to="3">Course Title</Link>
                            </h5>
                            <p className="card-text">It is a Javascript course.</p>
                            <Link to="1" className="btn btn-primary">
                                Details{" "}
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <div className="card">
                        <Link to="2">
                            <img src="/lc1.jpg" className="card-img-top" alt="..." />
                        </Link>
                        <div className="card-body">
                            <h5 className="card-title">
                                <Link to="3">Course Title</Link>
                            </h5>
                            <p className="card-text">It is a Javascript course.</p>
                            <Link to="1" className="btn btn-primary">
                                Details{" "}
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <div className="card">
                        <Link to="2">
                            <img src="/lc1.jpg" className="card-img-top" alt="..." />
                        </Link>
                        <div className="card-body">
                            <h5 className="card-title">
                                <Link to="3">Course Title</Link>
                            </h5>
                            <p className="card-text">It is a Javascript course.</p>
                            <Link to="1" className="btn btn-primary">
                                Details{" "}
                            </Link>
                        </div>
                    </div>
                </div>
                {/*Latest course Section End  */}

                {/* Pagination */}
                <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center">
                        <li className="page-item disabled">
                        <a className="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
                        </li>
                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item">
                        <a className="page-link" href="#">Next</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}
export default CoursesCategory;
