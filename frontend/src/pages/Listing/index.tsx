import Pagination from "components/Pagination";

import CartaoFilme from "components/CartaoFilme";

function Listing() {



    return (
        <>
            <Pagination />
            <div className="container">
            <div className="row">
                <div className="cow">
                    <CartaoFilme />
                </div>
                <div className="cow">
                    <CartaoFilme />
                </div>
                <div className="cow">
                    <CartaoFilme />
                </div>
                <div className="cow">
                    <CartaoFilme />
                </div>
                <div className="cow">
                    <CartaoFilme />
                </div>
                <div className="cow">
                    <CartaoFilme />
                </div>
                <div className="cow">
                    <CartaoFilme />
                </div>
                <div className="cow">
                    <CartaoFilme />
                </div>
                <div className="cow">
                    <CartaoFilme />
                </div>
            </div>
            </div>
        </>
    );
}

export default Listing;