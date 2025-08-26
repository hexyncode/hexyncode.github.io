const Footer = () => {
  return (
    <footer className="bg-primary py-4">
      <div className="container mx-auto text-center text-text-secondary">
        <p>&copy; {new Date().getFullYear()} HexynCode. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;