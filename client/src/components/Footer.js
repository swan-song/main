import React from "react";

export default function Footer() {
  return (
    <div>
      <footer class="footer-container">
        <div class="container py-5">
          <div class="row py-4">
            <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
              <img src="img/logo.png" alt="" width="180" class="mb-3" />
              <p class="font-italic text-muted">
                This website was put together by Randy Chong, Frankie Ferbrache,
                Kendall Burdette, and Carlo Carbonell.
              </p>
              <ul className="list-inline mt-4">
                <li className="list-inline-item">
                  <a href="#" target="_blank" title="twitter">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#" target="_blank" title="facebook">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#" target="_blank" title="instagram">
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#" target="_blank" title="pinterest">
                    <i className="fa fa-pinterest"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#" target="_blank" title="vimeo">
                    <i className="fa fa-vimeo"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
              <h6 className="text-uppercase font-weight-bold mb-4">
                Reservations
              </h6>
              <ul className="list-unstyled mb-0">
                <li className="mb-2">
                  <a href="#" className="text-muted">
                    FAQ
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/garage" className="text-muted">
                    Cars for Rent
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
              <h6 className="text-uppercase font-weight-bold mb-4">Company</h6>
              <ul className="list-unstyled mb-0">
                <li className="mb-2">
                  <a href="/login" className="text-muted">
                    Login
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/signup" className="text-muted">
                    Register
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/about" className="text-muted">
                    About Us
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="https://github.com/swan-song"
                    className="text-muted"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Contributors
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-6 mb-lg-0">
              <h6 className="text-uppercase font-weight-bold mb-4">
                Medium Article
              </h6>
              <p className="text-muted mb-4">
                Follow this{" "}
                <a
                  href="https://medium.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  link
                </a>{" "}
                to check out the Medium article that we all collectively
                contributed to!
              </p>
            </div>
          </div>
        </div>

        <div className="bg-light py-4">
          <div className="container text-center">
            <p className="text-muted mb-0 py-2">
              © 2021 Luxury Motor Group. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
