
import Sidebarpro from '../../component/admin/sidebarpro';
import Topbarpro from '../../component/admin/topbarpro';
import Contentpro from '../../component/admin/contentpro';
import Footerpro from '../../component/admin/footerpro';

export default function Crearpro() {
  return (
    <div id="wrapper">
      <Sidebarpro />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Topbarpro />
          <Contentpro />
        </div>        
      </div>
      <Footerpro/>
    </div>
  );
}
