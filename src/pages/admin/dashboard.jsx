
import Sidebar from "../../component/admin/sidebar";
import Topbar from "../../component/admin/topbar";
import Pagecontent from "../../component/admin/pagecontent";
import Footer from "../../component/admin/footer";
import Scroll from "../../component/admin/scroll";

export default function Dashboard() {
  return (
    <>
      <div id="wrapper">
        <Sidebar/>

        <div id="content-wrapper">
            <div  id="content">
                <Topbar/>
                <Pagecontent/>
            </div>
            <Footer/>
        </div>
        <Scroll/>
      </div>
      
    </>
  );
}
