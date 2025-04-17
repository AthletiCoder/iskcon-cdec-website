// src/components/Footer.jsx
const Footer = () => {
    return (
      <footer className="bg-gray-100 py-6 text-center text-sm text-gray-600 mt-10">
        <div className="space-x-4 mb-2">
          <a href="https://facebook.com/iskconcdec" target="_blank" rel="noreferrer">Facebook</a>
          <a href="https://instagram.com/iskconcdec" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://youtube.com/iskconcdec" target="_blank" rel="noreferrer">YouTube</a>
        </div>
        <p>© {new Date().getFullYear()} ISKCON CDEC. All rights reserved.</p>
      </footer>
    );
  };
  
  export default Footer;
  