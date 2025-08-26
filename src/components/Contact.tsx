const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
        <p className="text-text-secondary mb-8">
          Have a project in mind or just want to say hi? Feel free to reach out!
        </p>
        <a
          href="mailto:hexyn.dev@proton.me"
          className="bg-accent text-white font-bold py-3 px-6 rounded-lg hover:bg-accent-hover transition-colors"
        >
          Email Me
        </a>
      </div>
    </section>
  );
};

export default Contact;