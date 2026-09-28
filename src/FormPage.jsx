function FormPage() {
  return (
    <div class="conta">
      <form>
        <h1>Contact Us</h1>
        <label for="name">Name</label>
        <input type="text" id="name"></input>
        <label for="email">Email</label>
        <input type="email" id="email"></input>
        <label for="subject">subject</label>
        <textarea id="subject" rows="10" cols="40"></textarea>
        <label for="message">Message</label>
        <textarea id="message" rows="10" cols="40"></textarea>
        <br />
        <button>Send Message</button>
        <p className="chennai">
          📍 Chennai, India 📧 hello@example.com 📞 +91 98765 43210
        </p>
      </form>
    </div>
  );
}
export default FormPage;
