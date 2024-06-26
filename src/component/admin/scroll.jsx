

export default function Scroll() {
  return (
    <>
            <a className="scroll-to-top rounded" href="#page-top">
                <i className="fas fa-angle-up"></i>
            </a>

            {/* Logout Modal */}
            <div className="modal fade" id="logoutModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                            <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            Select Logout below if you are ready to end your current session.
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                            <a className="btn btn-primary" href="login.html">Logout</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bootstrap core JavaScript */}
            <script src="vendor/jquery/jquery.min.js"></script>
            <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

            {/* Core plugin JavaScript */}
            <script src="vendor/jquery-easing/jquery.easing.min.js"></script>

            {/* Custom scripts for all pages */}
            <script src="js/sb-admin-2.min.js"></script>

            {/* Page level plugins */}
            <script src="vendor/chart.js/Chart.min.js"></script>

            {/* Page level custom scripts */}
            <script src="js/demo/chart-area-demo.js"></script>
            <script src="js/demo/chart-pie-demo.js"></script>

            {/* Local script */}
            <script src="js/local.js"></script>
        </>
  )
}
