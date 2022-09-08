import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'

import { data } from 'src/contents/normalHemodynamicValue'

const NormalHemodynamicTable = () => {
  return (
    <TableContainer sx={{ mt: 3 }} component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Parameter</TableCell>
            <TableCell align="center">Abbreviation</TableCell>
            <TableCell align="right">Range</TableCell>
            <TableCell align="right">Unit</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((e) => (
            <TableRow key={e.id}>
              <TableCell component="th" scope="row">
                {e.parameter}
              </TableCell>
              <TableCell align="center">{e.abbreviation}</TableCell>
              <TableCell align="right">{e.range}</TableCell>
              <TableCell align="right">{e.unit}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default NormalHemodynamicTable
