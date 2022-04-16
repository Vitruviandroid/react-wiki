// import styles from './Pagination.module.css';
import ReactPaginate from "react-paginate";

const Pagination = ({ setPageNumber, pageNumber, info }) => {
    // let next = () => {
    //     if (pageNumber === info.pages) return
    //     setPageNumber((x) => x + 1)
    // }

    // let prev = () => {
    //     if (pageNumber === 1) return
    //     setPageNumber((x) => x - 1)
    // }
    // console.log(pageNumber);
    return (
        <ReactPaginate
            className="pagination justify-content-center gap-4 mt-4"
            pageRangeDisplayed={2}
            marginPagesDisplayed={1}

            breakClassName="mt-3"
            breakLabel="..."

            nextLabel="next"
            previousLabel="previous"
            nextClassName='btn btn-primary'
            previousClassName="btn btn-primary "
            previousLinkClassName='link-warning text-decoration-none'
            nextLinkClassName='link-warning text-decoration-none'

            pageLinkClassName="page-link"
            pageClassName="page-item"
            activeClassName="active"

            onPageChange={(data) => {
                setPageNumber(data.selected + 1)
            }
            }
            pageCount={info?.pages}
        />
    )
};

export default Pagination;