import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

import { cardiacPressureMeasurement as data } from 'src/contents/cardiacPressureMeasurement'

const CardiacPressureTable = () => {
  return (
    <TableContainer sx={{ mt: 3 }} component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Chamber</TableCell>
            <TableCell align="center">Mean</TableCell>
            <TableCell align="right">Normal range</TableCell>
            <TableCell align="right">O2 content</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((e) => (
            <TableRow hover key={e.id}>
              <TableCell component="th" scope="row">
                {e.chamber}
              </TableCell>
              <TableCell align="center">{e.mean}</TableCell>
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
