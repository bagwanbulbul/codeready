const header = document.getElementById('mainHeader');

header.innerHTML = `		<div class="container-fluid">
<a class="navbar-brand" href="#"><img class="codeReady_logo img-fluid" src="assets/images/logos/logo.png"
        alt="code-ready"></a>
<button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse"
    data-bs-target="#navbar-content">
    <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse justify-content-end scroll_mobile" id="navbar-content">
    <ul class="navbar-nav mr-auto mb-2 mb-lg-0">
        <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="index.html">Home</a>
        </li>
        <li class="nav-item dropdown dropdown-mega position-static">
            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown"
                data-bs-auto-close="outside">Enterprise Products</a>
            <div class="dropdown-menu shadow full_width">
                <div class="mega-content px-4">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-12 col-sm-4 col-md-3 py-4">
                                <h5>Taxi Booking App</h5>
                                <div class="list-group">
                                    <a class="list-group-item" href="uber-like-app.html">Uber Like App For Taxi</a>
                                    <a class="list-group-item" href="grab-clone-app.html">Grab Clone App</a>
                                    <a class="list-group-item" href="ola-lyft-clone.html">Ola/lyft Clone</a>
                                    <a class="list-group-item" href="lecab-cabify-clone.html">Lecab/Cabify</a>
                                    <a class="list-group-item" href="bitaski-clone.html">Bitaksi Clone </a>
                                    <a class="list-group-item" href="blablacar-clone.html">Blabla Car Clone</a>
                                </div>
                                <h5>Food Delivery App</h5>
                                <div class="list-group">
                                    <a class="list-group-item" href="ubereats-clone.html">UberEats Like App</a>
                                    <a class="list-group-item" href="zomato-clone.html">Zomato Clone</a>
                                    <a class="list-group-item" href="foodpanda-clone.html">Foodpanda Clone</a>
                                    <a class="list-group-item" href="justeat-clone.html">JustEat Clone</a>
                                    <a class="list-group-item" href="swiggy-clone.html">Swiggy Clone</a>
                                    <a class="list-group-item" href="deliveroo-clone.html">Deliveroo Clone</a>
                                    <a class="list-group-item" href="seamless-clone.html">Seamless Clone</a>
                                    <a class="list-group-item" href="grubhub-clone.html">Grubhub clone</a>
                                    <a class="list-group-item" href="doordash-clone.html">Doordash Clone</a>
                                    <a class="list-group-item" href="eat24-clone.html">Eat24 Clone</a>
                                </div>
                                <h5>Grocery Delivery App</h5>
                                <div class="list-group">
                                    <a class="list-group-item" href="grofers-clone.html">Grofers Clone</a>
                                    <a class="list-group-item" href="instacart-clone.html">Instacart Clone</a>
                                    <a class="list-group-item" href="bigbasket-clone.html">Bigbasket Clone</a>
                                    <a class="list-group-item" href="happyfresh-clone.html">Happyfresh Clone </a>
                                </div>
                                <h5>Real-Estate App</h5>
                                <div class="list-group">
                                    <a class="list-group-item" href="zillow-clone.html">Zillow Clone</a>
                                    <a class="list-group-item" href="trulia-clone.html">Trulia Clone</a>
                                </div>
                                <h5>Rental App</h5>
                                <div class="list-group">
                                    <a class="list-group-item" href="airbnb-clone.html">Airbnb Clone</a>
                                    <a class="list-group-item" href="vacation-rental-app.html">Vacation Rental App</a>
                                    <a class="list-group-item" href="car-rental-app.html">Car Rental App</a>
                                    <a class="list-group-item" href="wimdu-clone.html">Wimdu Clone</a>
                                </div>
                                <h5>Travel App</h5>
                                <div class="list-group">
                                    <a class="list-group-item" href="makemytrip-clone.html">MakeMyTrip Clone</a>
                                    <a class="list-group-item" href="tripadvisor-clone.html">TripAdvisor Clone</a>
                                </div>
                            </div>
                            <div class="col-12 col-sm-4 col-md-3 py-4">
                                <h5>On-Demand App</h5>
                                <div class="list-group">
                                    <a class="list-group-item" href="uber-like-app-development.html">Uber Like App Developement</a>
                                    <a class="list-group-item" href="uber-like-app-mechanics.html">Uber Like App For Mechanics</a>
                                    <a class="list-group-item" href="uber-like-app-laundry.html">Uber Like App For Laundry</a>
                                    <a class="list-group-item" href="#">Uber Like App For Courier</a>
                                    <a class="list-group-item" href="#">Uber Like App For Movers</a>
                                    <a class="list-group-item" href="#">Uber Like App For Tow Truck</a>
                                    <a class="list-group-item" href="#">Uber Like App For Plumbers</a>
                                    <a class="list-group-item" href="#">Uber Like App For Beauty</a>
                                    <a class="list-group-item" href="#">Uber Like App For Massage</a>
                                    <a class="list-group-item" href="#">Uber Like App For Tutors</a>
                                    <a class="list-group-item" href="#">Uber Like App For Handyman</a>
                                    <a class="list-group-item" href="#">Uber Like App For Dogwalkers</a>
                                    <a class="list-group-item" href="#">Uber Like App For Marijuana</a>
                                    <a class="list-group-item" href="#">Uber Like App For Alcohol
                                        Delivery</a>
                                    <a class="list-group-item" href="#">Uber Like App For Cuddling</a>
                                    <a class="list-group-item" href="#">Uber Like App For Flower
                                        Delivery</a>
                                    <a class="list-group-item" href="#">Uber Like App For Babysitters</a>
                                </div>
                                <h5>Ridesharing App</h5>
                                <div class="list-group">
                                    <a class="list-group-item" href="#">Lime Bike Clone</a>
                                    <a class="list-group-item" href="#">Uber Like App For E-Scooters</a>
                                    <a class="list-group-item" href="#">Bike Taxi Software</a>
                                    <a class="list-group-item" href="#">Rapdio Clone</a>
                                </div>
                                <h5>Doctor App</h5>
                                <div class="list-group">
                                    <a class="list-group-item" href="#">ZocDoc Clone</a>
                                    <a class="list-group-item" href="#">Uber Like App For Doctors</a>
                                </div>
                                <h5>Travel Management Software</h5>
                                <div class="list-group">
                                    <a class="list-group-item" href="#">Limousine Software</a>
                                    <a class="list-group-item" href="#">Employee Travel Management
                                        Software</a>
                                </div>
                            </div>
                            <div class="col-12 col-sm-4 col-md-3 py-4">
                                <h5>Social Media App</h5>
                                <div class="list-group">
                                    <a class="list-group-item" href="#">WhatsApp Clone</a>
                                    <a class="list-group-item" href="#">Line Clone</a>
                                    <a class="list-group-item" href="#">Viber Clone</a>
                                    <a class="list-group-item" href="#">Twitter Clone</a>
                                    <a class="list-group-item" href="#">Instagram Clone</a>
                                    <a class="list-group-item" href="#">Snapchat Clone</a>
                                </div>
                                <h5>E-Commerce App</h5>
                                <div class="list-group">
                                    <a class="list-group-item" href="#">Multi Vendor E-Commerce Script</a>
                                    <a class="list-group-item" href="#">Amazon / Flipkart Clone</a>
                                    <a class="list-group-item" href="#">Etsy Clone</a>
                                    <a class="list-group-item" href="#">Alibaba Clone</a>
                                    <a class="list-group-item" href="#">Groupon Clone</a>
                                    <a class="list-group-item" href="#">eBay Clone</a>
                                    <a class="list-group-item" href="#">Yoink Clone</a>
                                    <a class="list-group-item" href="#">Woot Clone</a>
                                </div>
                                <h5>Entertainment App</h5>
                                <div class="list-group">
                                    <a class="list-group-item" href="#">9GAG TV Clone</a>
                                    <a class="list-group-item" href="#">9GAG Clone</a>
                                    <a class="list-group-item" href="#">Flipboard Clone</a>
                                    <a class="list-group-item" href="#">Spotify Clone</a>
                                </div>
                                <h5>On-Demand Video Streaming App</h5>
                                <div class="list-group">
                                    <a class="list-group-item" href="#">Netflix Clone Script</a>
                                    <a class="list-group-item" href="#">Hulu Clone</a>
                                    <a class="list-group-item" href="#">YouTube Clone</a>
                                    <a class="list-group-item" href="#">Tik-Tok Clone</a>
                                </div>
                                <h5>Services</h5>
                                <div class="list-group">
                                    <a class="list-group-item" href="#">App Marketing Services</a>
                                </div>
                                <h5>Logistics App</h5>
                                <div class="list-group">
                                    <a class="list-group-item" href="#">Lynk Clone</a>
                                    <a class="list-group-item" href="#">Porter Clone</a>
                                </div>
                            </div>
                            <div class="col-12 col-sm-12 col-md-3 py-4">
                                <h5>Education App</h5>
                                <div class="list-group">
                                    <a class="list-group-item" href="#">Udemy Clone</a>
                                </div>
                                <h5>Job Marketplace App</h5>
                                <div class="list-group">
                                    <a class="list-group-item" href="#">Fiverr Clone </a>
                                    <a class="list-group-item" href="#">Freelancer Clone</a>
                                    <a class="list-group-item" href="#">Upwork Clone</a>
                                </div>
                                <h5>Multi-Services App</h5>
                                <div class="list-group">
                                    <a class="list-group-item" href="#">Urbanclap Clone</a>
                                    <a class="list-group-item" href="#">Postmates Clone</a>
                                    <a class="list-group-item" href="#">Dunzo Clone</a>
                                    <a class="list-group-item" href="#">HouseJoy Clone</a>
                                    <a class="list-group-item" href="#">Uber for x</a>
                                </div>
                                <h5>Dating App</h5>
                                <div class="list-group">
                                    <a class="list-group-item" href="#">Tinder Clone</a>
                                </div>
                                <h5>Fundraising App</h5>
                                <div class="list-group">
                                    <a class="list-group-item" href="#">Crowdfunding Script</a>
                                    <a class="list-group-item" href="#">Kickstarter Clone</a>
                                    <a class="list-group-item" href="#">Gofund Clone</a>
                                    <a class="list-group-item" href="#">Indiegogo Clone</a>
                                </div>
                                <h5>Other Products</h5>
                                <div class="list-group">
                                    <a class="list-group-item" href="#">Chattbot Software</a>
                                    <a class="list-group-item" href="#">Letgo Clone</a>
                                    <a class="list-group-item" href="#">Flippa Clone</a>
                                    <a class="list-group-item" href="#">IMDB Clone</a>
                                    <a class="list-group-item" href="#">Eventbrite Clone</a>
                                    <a class="list-group-item" href="#">Alexa Skill Development</a>
                                    <a class="list-group-item" href="#">Task Rabbit Clone</a>
                                    <a class="list-group-item" href="#">Foodspotting Clone</a>
                                    <a class="list-group-item" href="#">Bizzby Clone</a>
                                    <a class="list-group-item" href="#">IOT Vehicle Tracking Software</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </li>
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown"
                data-bs-auto-close="outside">On Demand App</a>
            <ul class="dropdown-menu shadow">
                <li><a class="dropdown-item" href="#">Uber Like App Development</a></li>
                <li><a class="dropdown-item" href="#">Admin Dashboard</a></li>
                <li><a class="dropdown-item" href="#">App Work Flow</a></li>
                <li><a class="dropdown-item" href="#">App Features</a></li>
                <li><a class="dropdown-item" href="#">Web Panel Visuals</a></li>
                <li><a class="dropdown-item" href="#">Pricing & Paid Plugins</a></li>
                <li><a class="dropdown-item" href="#">Premium Themes & Templates</a></li>
            </ul>
        </li>
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown"
                data-bs-auto-close="outside">Blockchain Development</a>
            <ul class="dropdown-menu shadow">
                <li><a class="dropdown-item" href="#">Cryptokitties Clone</a></li>
                <li><a class="dropdown-item" href="#">Local Bitcoin Clone</a></li>
                <li><a class="dropdown-item" href="#">Coinmarket Cap Clone</a></li>
                <li><a class="dropdown-item" href="#">ICO Bench - Clone</a></li>
                <li><a class="dropdown-item" href="#">CryptoLoan Platform</a></li>
                <li><a class="dropdown-item" href="#">Cryptocurrency Exchange Software</a></li>
            </ul>
        </li>
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown"
                data-bs-auto-close="outside">ERP/SAAS</a>
            <ul class="dropdown-menu shadow">
                <li><a class="dropdown-item" href="#">HRMS </a></li>
                <li><a class="dropdown-item" href="#">CMS </a></li>
                <li><a class="dropdown-item" href="#">ERP </a></li>
            </ul>
        </li>
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown"
                data-bs-auto-close="outside">Hire Us</a>
            <ul class="dropdown-menu shadow">
                <li class="dropstart">
                    <a href="#" class="dropdown-item dropdown-toggle" data-bs-toggle="dropdown">Mobile App
                        Development</a>
                    <ul class="dropdown-menu shadow">
                        <li><a class="dropdown-item" href="#">Hire Android App Developers</a></li>
                        <li><a class="dropdown-item" href="#">Hire iPhone App Developers</a></li>
                    </ul>
                </li>
                <li class="dropstart">
                    <a href="#" class="dropdown-item dropdown-toggle" data-bs-toggle="dropdown">Web App
                        Development</a>
                    <ul class="dropdown-menu shadow">
                        <li><a class="dropdown-item" href="#">Hire Angular JS Developers</a></li>
                        <li><a class="dropdown-item" href="#">Hire NodeJS Developers</a></li>
                        <li><a class="dropdown-item" href="#">Hire Laravel Developers</a></li>
                        <li><a class="dropdown-item" href="#">Hire WordPress developer</a></li>
                        <li><a class="dropdown-item" href="#">Hire Magento Developers</a></li>
                        <li><a class="dropdown-item" href="#">Hire E-Commerce Developers</a></li>
                        <li><a class="dropdown-item" href="#">Hire .Net Developers</a></li>
                        <li><a class="dropdown-item" href="#">Hire Meteor JS Developers</a></li>
                        <li><a class="dropdown-item" href="#">Hire PHP Developers</a></li>
                        <li><a class="dropdown-item" href="#">Hire MEAN Stack Developers</a></li>
                    </ul>
                </li>
                <li class="dropstart">
                    <a href="#" class="dropdown-item dropdown-toggle"
                        data-bs-toggle="dropdown">Marketing</a>
                    <ul class="dropdown-menu shadow">
                        <li><a class="dropdown-item" href="#">Digital Marketing Services</a></li>
                        <li><a class="dropdown-item" href="#">Mobile App Marketing Services</a></li>
                    </ul>
                </li>
                <li><a class="dropdown-item" href="#">Hire a Dedicated Resource</a></li>
                <li><a class="dropdown-item" href="#">Custom Mobile App Development</a></li>
            </ul>
        </li>
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown"
                data-bs-auto-close="outside">Contact Us</a>
            <ul class="dropdown-menu shadow">
                <li><a class="dropdown-item" href="#">Contact Us</a></li>
                <li><a class="dropdown-item" href="#">About Us</a></li>
                <li><a class="dropdown-item" href="#">Call Us(+91 6263691795) </a></li>
            </ul>
        </li>
    </ul>
    <a class=" client_login" href="javascript:;">Client Login</a>
</div>
</div>`;