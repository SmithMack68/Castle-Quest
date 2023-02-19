import React from 'react'
import { Link } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography style={{ fontFamily: 'cursive'}}  variant="h3" className={classes.title}>
            Castle Quest
          </Typography>
          <Button style={{fontFamily: ""}} color="inherit">Castles</Button>
          <Button color="inherit">Trips</Button>
          <Button color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}



// const Navbar = () => {
//   return (
//     <div>
//         <h1>Navbar</h1>
//         <ul>
//         <nav style={{fontFamily: 'cursive', fontSize: 25}}>
//           <li><Link to="/">Castle Quest</Link></li>
//           </nav>
//         </ul>
//     </div>
//   )
// }

// export default Navbar
