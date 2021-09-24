import React ,{useEffect}from 'react'
import { makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { useSelector , useDispatch } from 'react-redux'
import Header from '../common_comp/Header';
import SideBar from '../common_comp/SideBar';
import { getAllPosts,approvePost,notapprovePost,deletePost } from '../../redux/actions';
import '../Comp_css/Dashboard.css'
//  here he views all his blogs
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

function Main_Dash() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const dispatch = useDispatch();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  useEffect(()=>{
    dispatch(getAllPosts());
    // dispatch(getAllUsers());
  },[])
  const posts = useSelector(state => state.posts);
  // console.log(posts);
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
      <CssBaseline />
      <Header toggler={handleDrawerToggle} />
      <SideBar mobileOpen={mobileOpen} toggler={handleDrawerToggle} />
      <main className={classes.content}>
        {/* <h1>All Posts</h1> */}
        <div className={classes.toolbar} />
        {
          posts.posts.map(item=>{
            return(
              <>

              <div className="card home-card" key={item._id}>
                <div className="top_name">
                  <span className="top_name_txt">
                    {item.title}
                  </span>
                  <span className="top_symbol" style={{float: 'right'}}>
                    {
                      item.approved=="Yes" && <span>Status: <span style={{color: 'green'}}>Approved</span></span>
                    }
                    {
                      item.approved=="No" && <span>Status: <span style={{color: 'red'}}>Not approved</span></span>
                    }
                    {
                      item.approved=="Pending" && (
                        <>
                           <button className="btn btn-primary" onClick ={async()=>{await dispatch(approvePost(item._id));await dispatch(getAllPosts());}}>Approve</button> 
                           <button className="btn btn-danger" onClick ={async()=>{await dispatch(notapprovePost(item._id));await dispatch(getAllPosts());}}>Not Approve</button> 
                        </>
                      )
                    }
                  </span>
                </div>
                <div className="below_body" style={{display: 'flex',flexDirection: 'row',justifyContent:'space-between'}}>
                  <p>
                    {item.body}
                  </p>
                  <button className="btn btn-danger" onClick ={async()=>{await dispatch(deletePost(item._id));await dispatch(getAllPosts());}} >delete</button>
                </div>
              </div>
              
              </>

          )
          })
        }
        
      </main>
    </div>
    </>
  )
}

export default Main_Dash;
