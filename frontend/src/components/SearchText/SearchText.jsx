import React, { useState, useEffect } from 'react'
import axios from 'axios'

import TextField from '@mui/material/TextField';

import Autocomplete from '@mui/material/Autocomplete';

const URL = "http://localhost:8080"

const SearchSelect = props => {
  const { from, label } = props

  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [options, setOptions] = useState([])

  useEffect(() => {
    if (isOpen) {
      const fetchProduct = async () => {
        const response = await axios.get(`${URL}${from}`)
        setOptions(response.data)
      }
      fetchProduct()
    }
  }, [isOpen, from])

  useEffect(() => {
    if (options.length >= 0) setIsLoading(false)
  }, [options, setIsLoading])

  return (
    <Autocomplete
      {...props}
      open={isOpen}
      onOpen={() => setIsOpen(true)}
      onClose={() => setIsOpen(false)}
      options={options}
      loading={isLoading}
      renderInput={params => <TextField {...params} label={label} variant='outlined' />}
    />
  )
}

export default SearchSelect
