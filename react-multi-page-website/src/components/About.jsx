import React from "react";

function Contact() {
  return (
    <div className="contact">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <h1 class="font-weight-light">Contact Us!</h1>
            <p>
              <strong>Address:</strong> 838 Farmington Ave, Farmington, CT 06032
            </p>
            <p>
              <strong>Phone:</strong> (860) 674-8876
            </p>
            <p>
              <strong>Email:</strong> <a href="mailto:info@naplespizza.com">naplesapizza@gmail.com</a>
            </p>
            <form>
              <div class="form-group">
                <label for="name">Name</label>
                <input type="text" class="form-control" id="name" placeholder="Enter name" />
              </div>
              <div class="form-group">
                <label for="email">Email address</label>
                <input type="email" class="form-control" id="email" placeholder="Enter email" />
              </div>
              <div class="form-group">
                <label for="message">Message</label>
                <textarea class="form-control" id="message" rows="3"></textarea>
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
          </div>
          <div class="col-lg-5">
            <div class="embed-responsive embed-responsive-21by9">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2977.670533537371!2d-72.82908332371294!3d41.72762777125874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e7ae18171cc9f9%3A0xd799c5143b2ca148!2sNaples%20Pizza!5e0!3m2!1sen!2sus!4v1709787871737!5m2!1sen!2sus" width="600" height="600" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;