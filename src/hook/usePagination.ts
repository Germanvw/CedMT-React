import { useMemo, useState, useEffect } from 'react';

export const usePagination = (rows: string[][], active: string ) => {
  const [page, setPage] = useState(0)
  const [pageSize, setPageSize] = useState(10)


  const handleChange = (value: string) => {
    setPage(0)
    setPageSize(parseInt(value))
  }

  const paginatedRows = useMemo(() => 
    rows ? rows.slice(page * pageSize, (page + 1) * pageSize) : []
  , [page, rows, pageSize])

  useEffect(() => {if(active !== '') setPage(0)},[active])

  return { page, pageSize, paginatedRows, handleChange, setPage }
}