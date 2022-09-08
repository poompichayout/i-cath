import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'

import { cardiacPressureMeasurement as data } from 'src/contents/cardiacPressureMeasurement'

const CardiacPressureTable = () => {
  return (
    <TableContainer sx={{ mt: 3 }} component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Chamber</TableCell>
            <TableCell align="center">Format</TableCell>
            <TableCell align="right">Mean</TableCell>
            <TableCell align="right">Normal range</TableCell>
            <TableCell align="right">O2 content</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((e) => (
            <TableRow key={e.id}>
              <TableCell component="th" scope="row">
                {e.chamber}
              </TableCell>
              <TableCell align="center">{e.format}</TableCell>
              <TableCell align="right">{e.mean}</TableCell>
              <TableCell align="right">{e.normalrange}</TableCell>
              <TableCell align="right">{e.o2content}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default CardiacPressureTable
