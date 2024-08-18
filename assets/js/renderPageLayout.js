function MainNavigation() {
  document.write(`
          <!------- Header ------->
    <div class="header bg-light flex-column flex-md-row p-1">
      <div class="container d-flex justify-content-between flex-md-row">
        <!-- Social Media Icons (Visible on medium and larger screens) -->
        <div class="d-flex justify-content-lg-between justify-content-between d-none d-md-block">
        <a href="" class="text-decoration-none mx-2">
          <i class="fa-brands fa-facebook-f text-primary link-secondary rounded-2 link-primary"></i>
        </a>
        <a href="" class="text-decoration-none mx-2" target="_blank">
          <i class="fa-brands fa-twitter text-primary link-secondary rounded-2 link-primary"></i>
        </a>
        <a href="" class="text-decoration-none mx-2" target="_blank">
          <i class="fa-brands fa-instagram text-primary link-secondary rounded-2 link-primary"></i>
        </a>
        <a href="" class="text-decoration-none mx-2" target="_blank">
          <i class="fa-brands fa-whatsapp text-primary link-secondary rounded-2 link-primary"></i>
        </a>
        <!-- Language Switch Link -->
        <a class="text-decoration-none border-start border-primary text-primary link-primary text-capitalize lan" id="LanguageText" href="">
          <span class="mx-3">العربية</span>
        </a>
      </div>
        <!-- Header Content -->
        <div class="d-flex">
          <!-- Phone Link -->
          <a href="" target="_blank" class="text-primary link-secondary text-decoration-none link-primary d-flex align-items-center">
            <div class="mx-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M13.3334 4.66659V11.3333C13.3334 13.9999 12.6667 14.6666 10 14.6666H6.00002C3.33335 14.6666 2.66669 13.9999 2.66669 11.3333V4.66659C2.66669 1.99992 3.33335 1.33325 6.00002 1.33325H10C12.6667 1.33325 13.3334 1.99992 13.3334 4.66659Z" stroke="#2B386E" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M9.33335 3.6665H6.66669" stroke="#2B386E" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8.00001 12.7332C8.5707 12.7332 9.03334 12.2705 9.03334 11.6998C9.03334 11.1291 8.5707 10.6665 8.00001 10.6665C7.42931 10.6665 6.96667 11.1291 6.96667 11.6998C6.96667 12.2705 7.42931 12.7332 8.00001 12.7332Z" stroke="#2B386E" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            <span class="fs-14 mx-1 mt-1 text-primary fw-400">+966556911007</span>
          </a>
            <!-- Email Link -->
            <a href="" target="_blank" class="text-primary link-secondary text-decoration-none link-primary d-flex align-items-center mx-2">
              <div class="mx-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M11.3333 13.6666H4.66665C2.66665 13.6666 1.33331 12.6666 1.33331 10.3333V5.66659C1.33331 3.33325 2.66665 2.33325 4.66665 2.33325H11.3333C13.3333 2.33325 14.6666 3.33325 14.6666 5.66659V10.3333C14.6666 12.6666 13.3333 13.6666 11.3333 13.6666Z" stroke="#2B386E" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M11.3334 6L9.24668 7.66667C8.56002 8.21333 7.43335 8.21333 6.74668 7.66667L4.66669 6" stroke="#2B386E" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <span class="fs-14 mx-1 mt-1 text-primary fw-400">drsaeed@lilevabeauty.con</span>
            </a>
        </div>
    
        
      </div>
    </div>
    <!------------ Header End ------------>
    <!-- Start Navbar -->
    <nav class="navbar navbar-expand-lg background-gradient py-1">
      <div class="container">
        <!-- Logo -->
        <a href="index.html" class="navbar-brand me-auto me-lg-0">
          <img src="assets/images/Logo.svg" width="150" alt="Logo" />
        </a>
        <!-- Navbar Toggler for Mobile View -->
        <button class="navbar-toggler text-white border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight">
          <span class="navbar-toggler-icon"> </span>
        </button>
        <!-- Navbar Links -->
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul id="navbar" class="navbar-nav mx-auto mb-lg-0 d-flex px-3">
            <!-- Home Link -->
            <li class="nav-item mx-2 fw-semibold">
              <a class="nav-link text-white active link-secondary text-capitalize" href="index.html"> Home</a>
            </li>
            <li class="nav-item mx-2 fw-semibold">
              <a class="nav-link text-white active link-secondary text-capitalize" href="services.html"> Services</a>
            </li>
            <li class="nav-item mx-2 fw-semibold">
              <a class="nav-link text-white active link-secondary text-capitalize" href="about-us.html"> About Us</a>
            </li>
            <li class="nav-item mx-2 fw-semibold">
              <a class="nav-link text-white active link-secondary text-capitalize" href="contact-us.html"> Contact Us</a>
            </li>
          </ul>
          
          <div>
            <form class="d-flex position-relative w-100">
              <input class="form-control input-search text-white w-100 bg-transparent border-0 rounded-0 border-bottom" type="search" placeholder="Search" aria-label="Search">
              <img src="./assets/images/search-normal.svg" alt="" class="search-icon">
            </form>
          </div>

        </div>
      </div>
    </nav>
    <!-- End Navbar -->
  `);
}
function MainFooter() {
  document.write(`
    <footer class="py-5 background-gradient">
  <div class="container">
    <div class="row align-items-center">
      <div class="col-md-4">
        <a href="index.html" class="mb-3">
          <img src="assets/images/Logo.svg" width="150" class="img-fluid" alt="">
        </a>
        <p class="text-white fs-14 mt-3"> <span class="fw-semibold"> Dr. Ali Darwish </span> Dental Center combines advanced technology with outstanding dental care. We offer a wide range of dental services to enhance your dental life health.</p>
        <ul class="list-unstyled m-0 p-0">
          <div class="row g-4">
            <div class="col-lg-8 d-flex justify-content-lg-between col-12 col-md-12 justify-content-between">
              <a href="" class="text-decoration-none" target="_blank"><i class="fa-brands fa-facebook-f text-white fs-5 border social-icons rounded-circle rounded-2 link-primary"></i></a>
              <a href="" class="text-decoration-none" target="_blank"><i class="fa-brands fa-instagram  text-white fs-5 border social-icons rounded-circle rounded-2 link-primary"></i></a>
              <a href="" class="text-decoration-none" target="_blank">
                <i class="fa-brands fa-twitter text-white fs-5 border social-icons rounded-circle rounded-2 link-primary"></i>
              </a>
              <a href="" class="text-decoration-none" target="_blank">
                 <i class="fa-brands fa-whatsapp text-white fs-5 border social-icons rounded-circle rounded-2 link-primary"></i>
                </a>
              <a href="" class="text-decoration-none" target="_blank">
                 <i class="fa-brands fa-tiktok text-white fs-5 border social-icons rounded-circle rounded-2 link-primary"></i>
                </a>
            </div>
          
          </div>
        </ul>  
      </div>
      <div class="col-md-4 mt-5 mt-md-3">
        <div>
          <h5 class="text-white fw-semibold">Dr.Ali Darwish Dental <span class="fw-normal">Center</span> </h5>
            <div class="d-flex flex-column">
              <a href="index.html" class="text-decoration-none text-white mb-2 link-secondary">Home</a>
              <a href="contact-us.html" class="text-decoration-none text-white mb-2 link-secondary">Contact Us</a>
              <a href="privacy-policy.html" class="text-decoration-none text-white mb-2 link-secondary">Privacy Policy</a>
              <a href="terms-conditions.html" class="text-decoration-none text-white mb-2 link-secondary">Terms & Conditions</a>
            </div>
        </div>
      </div>
      <div class="col-md-4 mt-5 mt-md-0">
        <h5 class="text-white">Contact Us</h5>
        <div>
          <a href="" target="_blank" class="d-flex align-items-center mb-2 text-decoration-none">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23" fill="none">
                <path d="M11.0001 12.8108C12.5797 12.8108 13.8601 11.5304 13.8601 9.95082C13.8601 8.37129 12.5797 7.09082 11.0001 7.09082C9.4206 7.09082 8.14014 8.37129 8.14014 9.95082C8.14014 11.5304 9.4206 12.8108 11.0001 12.8108Z" stroke="white" stroke-width="1.5"/>
                <path d="M3.31823 8.28242C5.12406 0.344087 16.8849 0.353254 18.6816 8.29159C19.7357 12.9483 16.8391 16.8899 14.2999 19.3283C12.4574 21.1066 9.5424 21.1066 7.69073 19.3283C5.16073 16.8899 2.26406 12.9391 3.31823 8.28242Z" stroke="white" stroke-width="1.5"/>
                </svg>
            </div>
          <span class="text-white mx-1 mt-1">  6HWG+HVW, Manama, Bahrain</span> 
          </a>
          <a href="" target="_blank" class="d-flex align-items-center mb-2 text-decoration-none">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                <path d="M18.3087 15.7751C18.3087 16.0751 18.242 16.3834 18.1003 16.6834C17.9587 16.9834 17.7753 17.2667 17.5337 17.5334C17.1253 17.9834 16.6753 18.3084 16.167 18.5167C15.667 18.7251 15.1253 18.8334 14.542 18.8334C13.692 18.8334 12.7837 18.6334 11.8253 18.2251C10.867 17.8167 9.90866 17.2667 8.95866 16.5751C8.00033 15.8751 7.09199 15.1001 6.22533 14.2417C5.36699 13.3751 4.59199 12.4667 3.90033 11.5167C3.21699 10.5667 2.66699 9.61675 2.26699 8.67508C1.86699 7.72508 1.66699 6.81675 1.66699 5.95008C1.66699 5.38341 1.76699 4.84175 1.96699 4.34175C2.16699 3.83341 2.48366 3.36675 2.92533 2.95008C3.45866 2.42508 4.04199 2.16675 4.65866 2.16675C4.89199 2.16675 5.12533 2.21675 5.33366 2.31675C5.55033 2.41675 5.74199 2.56675 5.89199 2.78341L7.82533 5.50841C7.97533 5.71675 8.08366 5.90841 8.15866 6.09175C8.23366 6.26675 8.27533 6.44175 8.27533 6.60008C8.27533 6.80008 8.21699 7.00008 8.10033 7.19175C7.99199 7.38341 7.83366 7.58341 7.63366 7.78341L7.00033 8.44175C6.90866 8.53341 6.86699 8.64175 6.86699 8.77508C6.86699 8.84175 6.87533 8.90008 6.89199 8.96675C6.91699 9.03341 6.94199 9.08341 6.95866 9.13341C7.10866 9.40841 7.36699 9.76675 7.73366 10.2001C8.10866 10.6334 8.50866 11.0751 8.94199 11.5167C9.39199 11.9584 9.82533 12.3667 10.267 12.7417C10.7003 13.1084 11.0587 13.3584 11.342 13.5084C11.3837 13.5251 11.4337 13.5501 11.492 13.5751C11.5587 13.6001 11.6253 13.6084 11.7003 13.6084C11.842 13.6084 11.9503 13.5584 12.042 13.4667L12.6753 12.8417C12.8837 12.6334 13.0837 12.4751 13.2753 12.3751C13.467 12.2584 13.6587 12.2001 13.867 12.2001C14.0253 12.2001 14.192 12.2334 14.3753 12.3084C14.5587 12.3834 14.7503 12.4917 14.9587 12.6334L17.717 14.5917C17.9337 14.7417 18.0837 14.9167 18.1753 15.1251C18.2587 15.3334 18.3087 15.5417 18.3087 15.7751Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10"/>
                </svg>
            </div>
            <div class="d-flex flex-column">
              <span class="text-white mx-1 mt-1">+97317870066 </span> 
            </div>
          </a>
          <a href="" target="_blank" class="d-flex align-items-center mb-2 text-decoration-none">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                <path d="M14.1665 17.5834H5.83317C3.33317 17.5834 1.6665 16.3334 1.6665 13.4167V7.58341C1.6665 4.66675 3.33317 3.41675 5.83317 3.41675H14.1665C16.6665 3.41675 18.3332 4.66675 18.3332 7.58341V13.4167C18.3332 16.3334 16.6665 17.5834 14.1665 17.5834Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M14.1668 8L11.5585 10.0833C10.7002 10.7667 9.29183 10.7667 8.43349 10.0833L5.8335 8" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
          <span class="text-white mx-1 mt-1">Dralidarwishdc@gmail.com</span> 
          </a>  
        </div>
      
      </div>
    </div>
      <hr class="text-white border-white">
      <div class="text-center align-items-center">
        <div class="d-flex align-items-center justify-content-between flex-wrap mt-4">
          <div class="d-flex align-items-center">
            <div>
              <div class="d-flex justify-content-between">
                <img src="./assets/images/visa-three.png" alt="" class="img-fluid mx-1">
                <img src="./assets/images/tabby.png" alt="" class="img-fluid mx-1">
                <img src="./assets/images/paypal.png" alt="" class="img-fluid mx-1">
                <img src="./assets/images/master.png" alt="" class="img-fluid mx-1">
                <img src="./assets/images/visa.png" alt="" class="img-fluid mx-1">
              </div>
            </div>
          </div>
          <div class="mt-4">
            <h6 class="fw-semibold text-white fs-14">    © 2024 Glamour Medical Center. All right reserved.</h6>
          </div>
          <div class="">
            <span class="text-white fw-normal fs-14"> Powered By <a target="_blank" href="https://www.linkedin.com/in/sohaila-abo-el-wafa-a2b417248" class="fw-semibold text-decoration-none fw-normal text-white">  Sohaila Abo El-Wafa</a></span>
        </div>
        
        </div>
      </div>
  </div>
</footer>
  `);
}

function includeSidebar() {
  document.write(`
  <!--========= start sidebar  =========-->
<div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasWithBothOptionsLabel">
  <div class="offcanvas-header bg-primary">
    <img src="assets/images/Logo.svg" width="80"  alt="" />
    <button type="button" class="btn-close text-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body bg-primary hover-links">
    <ul class="navbar-nav ms-auto me-auto mb-lg-0 d-flex px-3">
      <li class="nav-item me-3 fw-bold ">
          <a class="nav-link text-white active link-secondary" href="index.html">Home</a>
      </li>
      
      <li class="nav-item me-3 fw-bold ">
          <a class="nav-link text-white active link-secondary" href="services.html">Services</a>
      </li>
      
      <li class="nav-item me-3 fw-bold ">
          <a class="nav-link text-white active link-secondary" href="about-us.html">About Us</a>
      </li>
      
      <li class="nav-item me-3 fw-bold ">
          <a class="nav-link text-white active link-secondary" href="contact-us.html">Contact Us</a>
      </li>
      
    
      
    </ul>
  </div>
</div>
<!--========= end sidebar  =========-->
  `);
}



function BtnBackToTop() {
  document.write(`
  <button
        type="button" title="Back to top"
        class="back-to-top btn btn- text-white rounded-circle py-2 px-2">
  <img src="assets/images/arrow-up.svg" class="mb-3" width="18" />
  </button>  
  `);
}
function WhatsApp() {
  document.write(`
  <a href="https://wa.me/+97334479384" class="whats-app btn btn-info py-2 px-2 rounded-circle" target="_blank" data-toggle="tooltip" data-placement="bottom" title="Whatsapp">
  <i class="bi bi-whatsapp my-float"></i>
  </a>  
  `);
}




