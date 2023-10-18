import React from 'react';
import Container from './container';
import "./index_style.css"// İçe aktarma

function Page() {
  return (
    <div className="bg-fffcf9 min-h-screen">
      <Container>
        {/* Container içeriği (eğer varsa) */}
      </Container>
       {/* ProjectActivity bileşenini ekledik */}
    </div>
  );
}

export default Page;
