
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../app/globals.css'; // Certifique-se de que este caminho esteja correto

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
