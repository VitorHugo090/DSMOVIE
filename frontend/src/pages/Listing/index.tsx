import Pagination from "components/Pagination";

import CartaoFilme from "components/CartaoFilme";

function Listing() {



    return (
        <>
            <Pagination />
            <div className="container">
            <div className="row">
                <div className="col-sm-6 col-lg-4 col-xl-3">
                    <CartaoFilme />
                </div>
                <div className="col-sm-6 col-lg-4 col-xl-3">
                    <CartaoFilme />
                </div>
                <div className="col-sm-6 col-lg-4 col-xl-3">
                    <CartaoFilme />
                </div>
                <div className="col-sm-6 col-lg-4 col-xl-3">
                    <CartaoFilme />
                </div>
                <div className="col-sm-6 col-lg-4 col-xl-3">
                    <CartaoFilme />
                </div>
                <div className="col-sm-6 col-lg-4 col-xl-3">
                    <CartaoFilme />
                </div>
                <div className="col-sm-6 col-lg-4 col-xl-3">
                    <CartaoFilme />
                </div>
                <div className="col-sm-6 col-lg-4 col-xl-3">
                    <CartaoFilme />
                </div>
            </div>
            </div>
        </>
    );
}

export default Listing;