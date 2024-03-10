import React from "react";

// Define a functional component called Contact
function Contact() {
  // Return a JSX element that represents the Contact page
  return (
    <div className="contact"> {/* Add a class of "contact" to the top-level div */}
      <div class="container"> {/* Add a Bootstrap container */}
        <div class="row align-items-center my-5"> {/* Add a Bootstrap row and set the alignment to center */}
          <div class="col-lg-7"> {/* Add a Bootstrap column that spans 7 out of 12 columns on large screens */}
            <h1 class="font-weight-light" style={{ color: '#58483A' }}>Contact Us!</h1> {/* Add a heading with a class of "font-weight-light" and a custom color */}
            <p style={{ color: '#58483A' }}>
              <strong>Address:</strong> 838 Farmington Ave, Farmington, CT 06032 {/* Add a paragraph with a custom color and a bold address */}
            </p>
            <p style={{ color: '#58483A' }}>
              <strong>Phone:</strong> (860) 674-8876 {/* Add a paragraph with a custom color and a bold phone number */}
            </p>
            <p style={{ color: '#58483A' }}>
              <strong>Email:</strong> <a href="mailto:info@naplespizza.com" style={{ color: '#90A74C' }}>naplesapizza@gmail.com</a> {/* Add a paragraph with a custom color, a bold email label, and a clickable email link with a different color */}
            </p>
            <form> {/* Add a form element */}
              <div class="form-group"> {/* Add a Bootstrap form group */}
                <label for="name">Name</label> {/* Add a label for the name input */}
                <input type="text" class="form-control" id="name" placeholder="Enter name" /> {/* Add a text input with a class of "form-control" and a placeholder */}
              </div>
              <div class="form-group"> {/* Add a Bootstrap form group */}
                <label for="email">Email address</label> {/* Add a label for the email input */}
                <input type="email" class="form-control" id="email" placeholder="Enter email" /> {/* Add an email input with a class of "form-control" and a placeholder */}
              </div>
              <div class="form-group"> {/* Add a Bootstrap form group */}
                <label for="message">Message</label> {/* Add a label for the message textarea */}
                <textarea class="form-control" id="message" rows="3"></textarea> {/* Add a textarea with a class of "form-control" and a specified number of rows */}
              </div>
              <button type="submit" class="btn btn-primary" style={{ backgroundColor: '#90A74C', color: 'white' }}>Submit</button> {/* Add a submit button with a class of "btn btn-primary" and custom colors */}
            </form>
          </div>
          <div class="col-lg-5"> {/* Add a Bootstrap column that spans 5 out of 12 columns on large screens */}
            <div class="embed-responsive embed-responsive-21by9"> {/* Add a Bootstrap embed-responsive container */}
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2977.670533537371!2d-72.82908332371294!3d41.72762777125874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e7ae18171cc9f9%3A0xd799c5143b2ca148!2sNaples%20Pizza!5e0!3m2!1sen!2sus!4v1709787871737!5m2!1sen!2sus" width="600" height="600" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;