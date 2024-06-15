
import Contentlist from '../../component/admin/contentlist'
import Footerlist from '../../component/admin/footerlist'
import Sidebarlist from '../../component/admin/sidebarlist'
import Topbarlist from '../../component/admin/topbarlist'

export default function Listadopro() {
  return (
    <>
    <div id="wrapper">
      <Sidebarlist />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Topbarlist/>
          <Contentlist />
        </div>
        <Footerlist />
      </div>
    </div>
    </>
  )
}
