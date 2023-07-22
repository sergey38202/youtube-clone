import React, {FormEvent, useState} from 'react';
import { useNavigate } from "react-router-dom";
import { Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import * as SC from "./styles";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const onhandleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);

      setSearchTerm('');
    }
  };

  return (
    <Paper
      component='form'
      onSubmit={onhandleSubmit}
      sx={{
        borderRadius: 20,
        border: '1px solid #e3e3e3',
        pl: 2,
        boxShadow: 'none',
        mr: { sm: 5 },
      }}
    >
      <input
        className='search-bar'
        placeholder='Search...'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <SC.SearchBarIconBtn
          type='submit'
          aria-label='search'
      >
        <SearchIcon />
      </SC.SearchBarIconBtn>
    </Paper>
  );
};

export default SearchBar;
