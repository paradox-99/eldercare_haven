import { useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from '@tanstack/react-query'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Dialog } from "@mui/material";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
     '& .MuiDialogContent-root': {
          padding: theme.spacing(2),
     },
     '& .MuiDialogActions-root': {
          padding: theme.spacing(1),
     },
}));

const DonarList = () => {

     const axiosPublic = useAxiosPublic();
     const [donations, setDonations] = useState([]);
     const [open, setOpen] = useState(false);

     const { data } = useQuery({
          queryKey: ['donation'],
          queryFn: async () => {
               const response = await axiosPublic.get('donorRoutes/donors/recent')
               return response.data
          }
     })

     // data?.date = data?.date.split("T")[0]

     const StyledTableCell = styled(TableCell)(({ theme }) => ({
          [`&.${tableCellClasses.head}`]: {
               backgroundColor: "#F58300",
               color: theme.palette.common.white,
               fontSize: 16,
               fontWeight: 600,
          },
          [`&.${tableCellClasses.body}`]: {
               fontSize: 14,
          },
     }));

     const StyledTableRow = styled(TableRow)(({ theme }) => ({
          '&:nth-of-type(odd)': {
               backgroundColor: theme.palette.action.hover,
          },
          // hide last border
          '&:last-child td, &:last-child th': {
               border: 0,
          },
     }));


     const handleClickOpen = () => {
          setOpen(true);
          allDonors();
     };
     const handleClose = () => {
          setOpen(false);
     };

     const allDonors = async () => {
          try {
               const response = await axiosPublic.get('donorRoutes/donors')
               setDonations(response.data)
          } catch (error) {
               console.log(error)
          }
     }

     return (
          <div>
               <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                         <TableHead>
                              <TableRow>
                                   <StyledTableCell>Name</StyledTableCell>
                                   <StyledTableCell >Date</StyledTableCell>
                                   <StyledTableCell >Amount</StyledTableCell>
                                   <StyledTableCell >Purpose</StyledTableCell>
                                   <StyledTableCell >Message</StyledTableCell>
                              </TableRow>
                         </TableHead>
                         <TableBody>
                              {data?.map((row) => (
                                   <StyledTableRow key={row.name}>
                                        <StyledTableCell component="th" scope="row">{row.name}</StyledTableCell>
                                        <StyledTableCell>{row.date}</StyledTableCell>
                                        <StyledTableCell>{row.amount}</StyledTableCell>
                                        <StyledTableCell>{row.donating_area}</StyledTableCell>
                                        <StyledTableCell>{row.message}</StyledTableCell>
                                   </StyledTableRow>
                              ))}
                         </TableBody>
                    </Table>
               </TableContainer>
               <div className="flex justify-center mt-10">
                    <Button variant="contained" sx={{ background: '#F58300', px: 4, py: 1, fontSize: 16, fontWeight: 600 }} onClick={handleClickOpen}>View More</Button>
               </div>
               <BootstrapDialog
                    onClose={handleClose}
                    aria-labelledby="customized-dialog-title"
                    open={open}
                    fullWidth
                    maxWidth="lg"
                    sx={{ px: 4 }}
               >
                    <TableContainer component={Paper}>
                         <Table sx={{ minWidth: 1000 }} aria-label="customized table">
                              <TableHead>
                                   <TableRow>
                                        <StyledTableCell>Name</StyledTableCell>
                                        <StyledTableCell >Date</StyledTableCell>
                                        <StyledTableCell >Amount</StyledTableCell>
                                        <StyledTableCell >Purpose</StyledTableCell>
                                        <StyledTableCell >Message</StyledTableCell>
                                   </TableRow>
                              </TableHead>
                              <TableBody>
                                   {donations?.map((row) => (
                                        <StyledTableRow key={row.name}>
                                             <StyledTableCell component="th" scope="row">{row.name}</StyledTableCell>
                                             <StyledTableCell>{row.date}</StyledTableCell>
                                             <StyledTableCell>{row.amount}</StyledTableCell>
                                             <StyledTableCell>{row.donating_area}</StyledTableCell>
                                             <StyledTableCell>{row.message}</StyledTableCell>
                                        </StyledTableRow>
                                   ))}
                              </TableBody>
                         </Table>
                    </TableContainer>
               </BootstrapDialog>
          </div>
     );
};

export default DonarList;