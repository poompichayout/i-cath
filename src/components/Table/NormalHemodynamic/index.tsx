import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Typography from '@mui/material/Typography'

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
            <TableRow hover key={e.id}>
              <TableCell component="th" scope="row">
                {e.parameter}
              </TableCell>
              <TableCell align="center">
                <Typography color="red">{e.abbreviation}</Typography>
              </TableCell>
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
