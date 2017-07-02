var React = require('react');

var Main = (props) => {
  return (
    <div>

    <div>
      <nav className="nav--hover--line boxed--shadow overflow-visible nav--fixed hidden-sm hidden-xs">
        <div className="container">
          <div className="row row--nav row--nav--middle">
            <div className="nav-mod logo left">
              <a href="#body"><img alt="" src="img/1496457858479.logo--black.png" height="50" /></a>
            </div>
            <div className="nav-mod logo right">

              <a href ='#about' className='nav-link'>What We Do</a>
              <a href ='#product' className='nav-link'>Product Listing</a>
              <a href ='#location' className='nav-link'>Locations</a>
              <a href ='#contact' className='nav-link'>Contact Us</a>

            </div>
          </div>
        </div>
      </nav>  
      <header className="vh-100 background-image">
        <div className="bg w-bg-in-edit" data-opacity="5"></div>
        <div className="container pos-vertical-center marg-t-60">
          <div className="row marg-b-120">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <h1 className="h2 text--bold">Sourcing Raw Pharmaceutical and Nutraceutical Ingredients since 1994. </h1>
              <p className="">Guaranteed high quality, reliability, and competitive pricing </p>
              <a href="#contact" className="btn btn-md btn--default">Get a Price Quote</a>
              <a href="#product" className="btn btn-md btn--default">View our Product Listings</a>      

            </div>
          </div>
        </div>
      </header>
    </div>

      <section className="bg-color--white-2" id='about'>
        <div className="container">
          <div className="row">
            <div className="col-md-7 col-sm-5 col-xs-12">
              <div className="marg-t-60">
              <h2 className="marg-b-30 text--bold color--main">What We Do</h2>
              <p className="p-lg"> 
              Long Wing International, Inc. offers a wide range of bulk raw ingredients for your use in product production and research. 
              <br/><br/>

              For the last 20+ years, we've built an international network of global manufacturers in China, India and Europe that allow us to source both popular and hard to find ingredients for our customers. <br/><br/>
              We import and distribute the following categories of bulk ingredients: Active Pharmaceutical Ingredients, Nutraceuticals, Vitamins, Amino Acids and Excipients for use in manufacturing products for both Human and Animal use. 
              <br/><br/>
              The Long Wing team prides itself on providing personalized service to every customer. Finding the right solutions to meet your unique product, inventory and production requirements is what we do best. We source, import and deliver to you the product you need, when you need it. 
              
              </p>
              </div>
            </div>
            <div className="col-md-5 col-sm-7 col-xs-12">
              <div className="row row--fluid">
                <div className="col-md-8 col-sm-6 col-xs-12 h-2 bg-color--white">
                  <div className="boxed-lg">
                    <h5 className="">Quality Assurance</h5>
                    <i className="">Every product delivery is accompanied by a batch specific certificate of analysis and material safety data sheet.</i>
                  </div>
                    <div className="boxed-lg">
                    <h5 className="">Competitive Pricing</h5>
                    <i className="">We negotiate with reliable manufacturers to make sure we can get you the best quality at the best price.</i>
                  </div>
                  <div className="boxed-lg">
                    <h5 className="">Wide Product Offering</h5>
                    <i className="">We source popular and hard to find products that meet a wide range of BP, CP, EP, USP/NF, FCC and Feed Grades standards.</i>
                  </div>
                    <div className="boxed-lg">
                    <h5 className="">Personalized Service</h5>
                    <i className="">Personalized solutions for product sourcing, inventory management, and delivery.</i>
                  </div>
                </div>
          
              </div>
            </div>    
          </div>
        </div>
      </section>


      <section className="bg-color--second" id='product'>
        <div className="container">
          <div className="row">
            <div className="col-md-7 col-sm-7 col-xs-12">
              <h3 className="text--bold">Precursor A Chemicals</h3>
              <p className="p-lg text--opacity-5">
                Since 2004, Long Wing International has held a Health Canada approved license to import and distribute className A Precursor Chemicals.
                <br/><br/>
                We handle these products with the utmost care and tailor our processes to meet GMP Standards.
              </p>
              <a className="btn btn--default bg-color--main" href="#contact" role="button">Contact Us</a>
            </div>
            <div className="col-md-4 col-md-offset-1 col-sm-4 col-sm-offset-1 col-xs-12">
              <b className="">Certified Since</b>
              <p className="text--opacity-5">2004</p>
              <b className="marg-t-60">Licensed for Distribution in:</b>
              <p className="text--opacity-5">Canada, US</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
        <h3 className='text--bold center-small'>Product Listing </h3>
            <div className="col-md-4 col-sm-4 col-xs-12 center-small">
              <div className="boxed boxed--border boxed--radius-sm">
                <b className="">className A Precusors</b>
                <p className="p-xs--compact">USP, EP, BP, etc.</p>
                <a href="#" className="">View Listing</a>
              </div>
            </div>
            <div className="col-md-4 col-sm-4 col-xs-12 center-small">
              <div className="boxed boxed--border boxed--radius-sm">
                <b className="">Pharmaceuticals</b>
                <p className="p-xs--compact">USP, EP, BP, etc.</p>
                <a href="#" className="">View Listing</a>
              </div>
            </div>
            <div className="col-md-4 col-sm-4 col-xs-12 center-small">
              <div className="boxed boxed--border boxed--radius-sm">
                <b className="">Nutraceuticals</b>
                <p className="p-xs--compact">USP, EP, BP, etc.</p>
                <a href="#" className="">View Listing</a>
              </div>
            </div>
            <div className="col-md-4 col-sm-4 col-xs-12 center-small">
              <div className="boxed boxed--border boxed--radius-sm">
                <b className="">Veterinary</b>
                <p className="p-xs--compact">USP, EP, BP, etc.</p>
                <a href="#" className="">View Listing</a>
              </div>
            </div>
            <div className="col-md-4 col-sm-4 col-xs-12 center-small">
              <div className="boxed boxed--border boxed--radius-sm">
                <b className="">Animal Feed</b>
                <p className="p-xs--compact">USP, EP, BP, etc.</p>
                <a href="#" className="">View Listing</a>
              </div>
            </div>
            <div className="col-md-4 col-sm-4 col-xs-12 center-small">
              <div className="boxed boxed--border boxed--radius-sm">
                <b className="">Excipient</b>
                <p className="p-xs--compact">USP, EP, BP, etc.</p>
                <a href="#" className="">View Listing</a>
              </div>
            </div>
        </div>
      </section>

      <section className="bg-color--second">
        <div className="container">
          <h3 className='text--bold'>What Customers Say</h3>
          <div className="flexslider flexslider--light" data-pause="true">

          <ul className="slides">
            <li className="flexitem">
              <div className="container">
                <div className="row">
                  <div className="col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2 col-xs-12">
                    <div>
                    <p className="h4">
                    <i className="material-icons flip">format_quote</i>We've been working with Long Wing International for the last 10 years. They've been a great partner for all our sourcing needs. They've always been extremely diligent, reliable, and provided us with a great price. I look forward to working with them for many years to come.
                    <i className="material-icons">format_quote</i>
                    </p>
                    </div>
                    <b className="">Zachary Farmer </b>
                    <p className="p-xs">Genova Pharmaceuticals</p>
                  </div>    
                </div>
              </div>        
            </li>
            <li className="flexitem flex-active-slide">
              <div className="container">
                <div className="row">
                  <div className="col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2 col-xs-12">
                    <div>
                    <p className="h4">
                    <i className="material-icons flip">format_quote</i>We've been working with Long Wing International for the last 10 years. They've been a great partner for all our sourcing needs. They've always been extremely diligent, reliable, and provided us with a great price. I look forward to working with them for many years to come.
                    <i className="material-icons">format_quote</i>
                    </p>
                    </div>
                    <b className="">Pee Farmer </b>
                    <p className="p-xs">Genova Pharmaceuticals</p>
                  </div>    
                </div>
              </div>          
            </li>
            <li className="flexitem flex-active-slide">
              <div className="container">
                <div className="row">
                  <div className="col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2 col-xs-12">
                    <div>
                    <p className="h4">
                    <i className="material-icons flip">format_quote</i>We've been working with Long Wing International for the last 10 years. They've been a great partner for all our sourcing needs. They've always been extremely diligent, reliable, and provided us with a great price. I look forward to working with them for many years to come.
                    <i className="material-icons">format_quote</i>
                    </p>
                    </div>
                    <b className="">Poop Farmer </b>
                    <p className="p-xs">Genova Pharmaceuticals</p>
                  </div>    
                </div>
              </div>          
            </li>
          </ul>

          </div>
          
          <div className="container custom-navigation">
            <div className="custom-controls-container hidden-sm hidden-xs">
              <i className="material-icons ico--radial prev">arrow_back</i>
              <i className="material-icons ico--radial next">arrow_forward</i>
            </div>
          </div>
          
          <div className="flex-control"></div>
          <div id ='location'></div>
        </div>

      </section>

      <section>
        <div className="container">
        <h3 className='text--bold'>Locations</h3>
        </div>
      </section>

      <section className="vh-70 background-image flex flex-wrap flex-vertical w-flexslider-in-edit">
      <div className='container'>
        <div className="flexslider flexslider--light" data-pause="true">
          <ul className="slides">
            <li className="flexitem">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2899.8188917125162!2d-79.76872878484355!3d43.38081077802012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b60ed94c260c3%3A0x367d03a70ebbee97!2s5012+S+Service+Rd%2C+Burlington%2C+ON+L7L+5Y7!5e0!3m2!1sen!2sca!4v1496529009317" height ='492' width="100%%" frameBorder="0" allowFullScreen></iframe>
            </li>
            <li className="flexitem flex-active-slide">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2972.078005739776!2d-87.973971284893!3d41.848147775267684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e4c4cb9572cd3%3A0x3d16cf58976412a5!2s2021+Midwest+Rd+%23200%2C+Oak+Brook%2C+IL+60523%2C+USA!5e0!3m2!1sen!2sca!4v1496529367377"  height='492' width="100%" frameBorder="0" allowFullScreen></iframe>
            </li>
            <li className="flexitem flex-active-slide">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3225.8585149635383!2d120.34392587578708!3d36.04815873361739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35961aaaec027ebf%3A0x25d24b769b6fb890!2sDonghai+International+Building+Parking+Lot!5e0!3m2!1sen!2sca!4v1496529506250" width="100%" height="492" frameBorder="1005" allowFullScreen></iframe>
            </li>
          </ul>
          
          <div className="container custom-navigation">
            <div className="custom-controls-container">
              <i className="material-icons ico--radial prev">arrow_back</i>
              <i className="material-icons ico--radial next">arrow_forward</i>
            </div>
          </div>
          
          <div className="flex-control"></div>
        </div>
      </div>
      </section>

      <header className="vh-100 padding-null bg-color--gray" id='contact'>
        <div className="container">
              <div className="row">
                <div className="col-md-6 col-sm-12 col-xs-12">
                  <h1 className="h2 text--bold">Contact Us</h1>
                  <p>Whether you are looking to inquire about a specific product or just want to drop a note saying Hello, please leave us a message! We'll get back to you by e-mail as soon as possible.</p>
                  <div className="row">
                    <div className="col-md-12 col-sm-4 col-xs-12 marg-b-30">
                      <b>Email</b>
                      <p className="p-xs">office@longwinginternational.com</p>
                    </div>
                    <div className="col-md-12 col-sm-4 col-xs-12 marg-b-30">
                      <b>Phone</b>
                      <p className="p-xs">289-288-1100</p>
                    </div>
                    <div className="col-md-12 col-sm-4 col-xs-12 marg-b-30">
                      <b>Address</b>
                      <p className="p-xs">5012 South Service Road, Burlington, Ontario</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-12 col-xs-12">
                  <form action="/contact" method="post" onSubmit={ function () {alert('Thank you for your message!');}} >
                    <div className="row">
                      <div className="col-md-12 col-sm-12 col-xs-12">
                        <h3>Send Message</h3>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 col-sm-6 col-xs-12">
                        <input type="text" placeholder="Name" name="name" required="required" data-alert='Please write your name'></input>
                      </div>
                      <div className="col-md-6 col-sm-6 col-xs-12">
                        <input type="email" placeholder="Email *" name="email" className="valid" required="required" data-alert="Please write your e-mail"></input>
                      </div>
                      <div className="col-md-12 col-sm-12 col-xs-12">
                        <textarea placeholder="Message" name="comment" required="required" data-alert="please write your comment"></textarea>
                      </div>
                      <div className="col-md-12 col-sm-12 col-xs-12">
                        <input type="submit" className="btn btn--default btn--stretched-xs" value='E-mail Send'></input>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
      </header>

      <footer className="bg-color--white-2">
        <div className="container text-center">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <a href="index.html"><img alt="" src="img/1496457858479.logo--black.png" height="50"></img></a>
            </div>
          </div>
        
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <p className="p-xs">Copyright © 2017 Long Wing International All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
      <script type="text/javascript" src="js/1496457858484.prism.js"></script>
    </div>
  );
}

module.exports = Main;