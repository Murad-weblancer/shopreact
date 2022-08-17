import React from 'react'
import './Pagination.scss'
import ReactPaginate from 'react-paginate';
import { useDispatch,useSelector } from 'react-redux';
import { getPage } from '../../redux/slices/filterSlice';

export const Pagination = () => {
    const {page} = useSelector(state=>state.filter)
   const dispatch = useDispatch()
  return (
    <ReactPaginate
    className='root'
    breakLabel="..."
    nextLabel=">"
    onPageChange={e=>dispatch(getPage(e.selected+1))}
    pageRangeDisplayed={5}
    pageCount={3}
    forcePage={page-1}
    previousLabel="<"
    renderOnZeroPageCount={null}
  />  )
}
