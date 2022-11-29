import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear, faStore, faMugHot, faFaceSmileBeam} from '@fortawesome/free-solid-svg-icons'
import NavBar from "../NavBar/NavBar";

const LandingPage = ( {isAuth, setIsAuth} ) => {
  return  (
    <div>
        <NavBar isAuth = {isAuth} setIsAuth = {setIsAuth} />
      <header class="masthead">
        <div class="container px-4 px-lg-5 h-100">
          <div class="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
            <div class="col-lg-8 align-self-end">
              <h1 class="text-white font-weight-bold">
                Great Deals on Biking Equipments{" "}
              </h1>
              <hr class="divider" />
            </div>
            <div class="col-lg-8 align-self-baseline">
              <p class="text-white-75 mb-5">
                All of your cycling-related demands may be met by us. Call us or
                drop by right away.{" "}
              </p>
              <a class="btn btn-primary btn-xl" href="#about">
                Find Out More
              </a>
            </div>
          </div>
        </div>
      </header>
      <section class="page-section bg-primary" id="about">
        <div class="container px-4 px-lg-5">
          <div class="row gx-4 gx-lg-5 justify-content-center">
            <div class="col-lg-8 text-center">
              <h2 class="text-white mt-0">
                Amazing bikes for amazing people !
              </h2>
              <hr class="divider divider-light" />
              <p class="text-white-75 mb-4">
                We take great pride in offering dependable, fair service and
                bike repairs. Both your brand-new high-end race bike and your
                1950s Peugeot are welcome here, and our mechanics have the
                extensive training, certification, and expertise necessary to
                handle your bike with the care it merits. Please browse our
                website and don't hesitate to contact us by phone or in person
                if you have any queries.{" "}
              </p>
              <a class="btn btn-light btn-xl" href="#services">
                Get Started!
              </a>
            </div>
          </div>
        </div>
      </section>
      <section class="page-section" id="services">
            <div class="container px-4 px-lg-5">
                <h2 class="text-center mt-0">At Your Service</h2>
                <hr class="divider" />
                <div class="row gx-4 gx-lg-5">
                    <div class="col-lg-3 col-md-6 text-center">
                        <div class="mt-5">
                            <div class="mb-2"><FontAwesomeIcon color="#f4623a"  size="4x" icon={faGear}/></div>
                            <h3 class="h4 mb-2">Mechanic Shop</h3>
                            <p class="text-muted mb-0"> We are a full repair shop dedicated in servicing your ride. </p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 text-center">
                        <div class="mt-5">
                            <div class="mb-2">  <FontAwesomeIcon   color="#f4623a"   size = "4x" icon = {faStore}/> </div>
                            <h3 class="h4 mb-2">Shoping</h3>
                            <p class="text-muted mb-0">A full-service bike store....
Purchase bicycles, parts, accessories, clothes, and more online or in-person. </p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 text-center">
                        <div class="mt-5">
                            <div class="mb-2"><FontAwesomeIcon color="#f4623a"  size = "4x" icon = {faMugHot} /></div>
                            <h3 class="h4 mb-2">You can enjoy your coffee</h3>
                            <p class="text-muted mb-0">While we are taking care of your bike, you can enjoy your coffe</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 text-center">
                        <div class="mt-5">
                            <div class="mb-2"><FontAwesomeIcon color =  "#f4623a"  size = "4x" icon = {faFaceSmileBeam} /></div>
                            <h3 class="h4 mb-2">Great Community </h3>
                            <p class="text-muted mb-0">We are a great community, and having rides together. Stay tune to join us.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div id="portfolio">
            <div class="container-fluid p-0">
                <div class="row g-0">
                    <div class="col-lg-4 col-sm-6">
                        <a class="portfolio-box" href="assets/img/portfolio/fullsize/1.jpg" title="Project Name">
                            <img class="img-fluid" src={ require ("../../assets/images/img/portfolio/thumbnails/1.jpg")}  alt="..." />
                            <div class="portfolio-box-caption">
                                <div class="project-category text-white-50">Bike Components</div>
                                <div class="project-name">Explore for great deals</div>
                            </div>
                        </a>
                    </div>
                    <div class="col-lg-4 col-sm-6">
                        <a class="portfolio-box" href="assets/img/portfolio/fullsize/2.jpg" title="Project Name">
                        <img class="img-fluid" src={ require ("../../assets/images/img/portfolio/thumbnails/2.jpg")}  alt="..." />
                            <div class="portfolio-box-caption">
                                <div class="project-category text-white-50">Mechanic Shop</div>
                                <div class="project-name">Book Your Appointment </div>
                            </div>
                        </a>
                    </div>
                    <div class="col-lg-4 col-sm-6">
                        <a class="portfolio-box" href="assets/img/portfolio/fullsize/3.jpg" title="Project Name">
                        <img class="img-fluid" src={ require ("../../assets/images/img/portfolio/thumbnails/3.jpg")}  alt="..." />
                            <div class="portfolio-box-caption">
                                <div class="project-category text-white-50">Bike Clothing</div>
                                <div class="project-name">Explore for bike clothing</div>
                            </div>
                        </a>
                    </div>
                    <div class="col-lg-4 col-sm-6">
                        <a class="portfolio-box" href="assets/img/portfolio/fullsize/4.jpg" title="Project Name">
                        <img class="img-fluid" src={ require ("../../assets/images/img/portfolio/thumbnails/4.jpg")}  alt="..." />
                            <div class="portfolio-box-caption">
                                <div class="project-category text-white-50">Group Rides</div>
                                <div class="project-name">Join us for our next group ride</div>
                            </div>
                        </a>
                    </div>
                    <div class="col-lg-4 col-sm-6">
                        <a class="portfolio-box" href="assets/img/portfolio/fullsize/5.jpg" title="Project Name">
                        <img class="img-fluid" src={ require ("../../assets/images/img/portfolio/thumbnails/5.jpg")}  alt="..." />
                            <div class="portfolio-box-caption">
                                <div class="project-category text-white-50">Coffee Shop</div>
                                <div class="project-name">Project Name</div>
                            </div>
                        </a>
                    </div>
                    <div class="col-lg-4 col-sm-6">
                        <a class="portfolio-box" href="assets/img/portfolio/fullsize/6.jpg" title="Project Name">
                        <img class="img-fluid" src={ require ("../../assets/images/img/portfolio/thumbnails/6.jpg")}  alt="..." />
                            <div class="portfolio-box-caption p-3">
                                <div class="project-category text-white-50">Explore Our City</div>
                                <div class="project-name">Project Name</div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <section class="page-section bg-dark text-white">
            <div class="container px-4 px-lg-5 text-center">
                <h2 class="mb-4">Free Download at Start Bootstrap!</h2>
                <a class="btn btn-light btn-xl" href="https://startbootstrap.com/theme/creative/">Download Now!</a>
            </div>
        </section>

        <section class="page-section" id="contact">
            <div class="container px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-lg-8 col-xl-6 text-center">
                        <h2 class="mt-0">Let's Get In Touch!</h2>
                        <hr class="divider" />
                        <p class="text-muted mb-5">Ready to start your next project with us? Send us a messages and we will get back to you as soon as possible!</p>
                    </div>
                </div>
                <div class="row gx-4 gx-lg-5 justify-content-center mb-5">
                    <div class="col-lg-6">

                        <form id="contactForm" data-sb-form-api-token="API_TOKEN">

                            <div class="form-floating mb-3">
                                <input class="form-control" id="name" type="text" placeholder="Enter your name..." data-sb-validations="required" />
                                <label for="name">Full name</label>
                                <div class="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                            </div>

                            <div class="form-floating mb-3">
                                <input class="form-control" id="email" type="email" placeholder="name@example.com" data-sb-validations="required,email" />
                                <label for="email">Email address</label>
                                <div class="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                                <div class="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                            </div>

                            <div class="form-floating mb-3">
                                <input class="form-control" id="phone" type="tel" placeholder="(123) 456-7890" data-sb-validations="required" />
                                <label for="phone">Phone number</label>
                                <div class="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
                            </div>
 
                            <div class="form-floating mb-3">
                                <textarea class="form-control" id="message" type="text" placeholder="Enter your message here..." style= {{height: "10rem"}}  data-sb-validations="required"></textarea>
                                <label for="message">Message</label>
                                <div class="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
                            </div>

                            <div class="d-none" id="submitSuccessMessage">
                                <div class="text-center mb-3">
                                    <div class="fw-bolder">Form submission successful!</div>
                                    To activate this form, sign up at
                                    <br />
                                    <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                                </div>
                            </div>

                            <div class="d-none" id="submitErrorMessage"><div class="text-center text-danger mb-3">Error sending message!</div></div>

                            <div class="d-grid"><button class="btn btn-primary btn-xl disabled" id="submitButton" type="submit">Submit</button></div>
                        </form>
                    </div>
                </div>
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-lg-4 text-center mb-5 mb-lg-0">
                        <i class="bi-phone fs-2 mb-3 text-muted"></i>
                        <div>+1 (555) 123-4567</div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
};

export default LandingPage;
