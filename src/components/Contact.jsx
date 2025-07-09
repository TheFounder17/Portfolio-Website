function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-card">
        <h2>Instagram</h2>
        <p>Follow me for art, dev updates, and more!</p>
        <a href="https://instagram.com/thefounder.blend" target="_blank" rel="noopener noreferrer" className="contact-btn">Visit</a>
      </div>
      <div className="contact-card">
        <h2>Email Me</h2>
        <form action="https://formspree.io/f/xldnyayw" method="POST" className="contact-form">
          <input type="text" name="name" placeholder="Your Name" required className="contact-input" />
          <input type="email" name="email" placeholder="Your Email" required className="contact-input" />
          <textarea name="message" placeholder="Your Message" required className="contact-textarea"></textarea>
          <button type="submit" className="contact-btn">Send</button>
        </form>
      </div>
    </div>
  )
}

export default Contact 