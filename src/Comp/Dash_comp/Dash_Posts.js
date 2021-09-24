import React,{useEffect} from 'react'
import { makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from '../common_comp/Header';
import { useSelector , useDispatch } from 'react-redux'
import SideBar from '../common_comp/SideBar';
import { getAllUsers,deleteUser } from '../../redux/actions';

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function Dash_Posts() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const dispatch = useDispatch();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  useEffect(()=>{
    console.log("aclews");
    dispatch(getAllUsers());
  },[])
  const classes = useStyles();
  const posts = useSelector(state => state.posts);
  return (
    <>
      <div className={classes.root}>
        <CssBaseline />
        <Header toggler={handleDrawerToggle} />
        <SideBar mobileOpen={mobileOpen} toggler={handleDrawerToggle} />
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <table class="table table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">UserName </th>
                <th scope="col">Email ID</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
            {
              posts.users.map((user,id)=>{
                return(
                  <tr>
                    <th scope="row">{id+1}</th>
                    <td>{user.userName}</td>
                    <td>{user.email}</td>
                    <td> <button className="btn btn-danger" onClick ={async()=>{await dispatch(deleteUser(user._id));await dispatch(getAllUsers());}}>Delete</button></td>
                  </tr>
                )
              })
            }
            </tbody>
            
          </table>
        </main>
      </div>
    </>
  );
}

export default Dash_Posts;
