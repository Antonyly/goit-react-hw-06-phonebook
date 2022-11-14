
    // <div>
    //   <label className={s.label}>
    //     Find contacts by name
    //     <input
    //       value={value}
    //       type="text"
    //       onChange={onChange}
    //       className={s.input}
    //     />
    //   </label>
    // </div>


import React from "react";
import { useSelector, useDispatch } from 'react-redux';
  import { addFilter } from 'redux/filterSlice';
  import s from '../ContactForm/ContactForm.module.css';



export const Filter = () => {
  const filterValue = useSelector(state => state.filter);
  const dispatch = useDispatch();
    
  const handleFilterChange = e => {
    dispatch(addFilter(e.currentTarget.value));
  };


  return (
    <div className={s.container}>
      <label className={s.label}>
        Find contacts by name
        <input
          type="text"
          name="filter"
          value={filterValue}
          onChange={handleFilterChange}
          className={s.input}
        />
      </label>
    </div>
  );
};