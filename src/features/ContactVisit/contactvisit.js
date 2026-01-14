import './contactvisit.css';

function ContactVisit() {
  return (
    <section className="visit-section">
      <h2 className="visit-main-title">CALL OR VISIT</h2>

      <div className="visit-container">
        <div className="contact-form-side">
          <h3>Send Message</h3>
          <form className="simple-form">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email*" required />
            <textarea placeholder="Message" rows="5"></textarea>
            <button type="submit" className="send-btn">SEND</button>
          </form>
        </div>

        <div className="info-side">
          <a href="https://api.whatsapp.com/send/?phone=14259412560&text&type=phone_number&app_absent=0" 
          className="whatsapp-btn" 
          target="_blank" 
          rel="noreferrer">
            <span className="wa-icon">WhatsApp</span> Message us on WhatsApp
          </a>

          <div className="office-details">
            <h4>Marci Metzger - THE RIDGE REALTY GROUP</h4>
            <p>3190 HW-160, Suite F, Pahrump, Nevada 89048, United States</p>
            <p className="phone-text">(206) 919-6886</p>
          </div>

          <div className="hours-simple">
            <p className="status-text">
                <span className="open-label">Open Daily:</span> 8:00 am - 7:00 pm
            </p>
            <p className="appointment-text">
            *Appointments available outside these hours upon request.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactVisit;