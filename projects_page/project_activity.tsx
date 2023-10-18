import React from 'react';

function ProjectActivity() {
  return (
    <div className="mt-16 relative"> 
      
      {/* Sol tarafta dikey çizgi */}
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
          <div className="h-full border-l-2 border-black"></div>
      </div>

      {/* Sağ tarafta dikey çizgi */}
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
          <div className="h-full border-l-2 border-black"></div>
      </div>

      {/* "Project Activity" başlığı */}
      <h1 className="text-center absolute top-1/2 left-1/2 font-bold transform -translate-x-1/2 -translate-y-1/2">Project Activity</h1>
      
      {/* Tarih */}
      <p className="text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-8">Wednesday, August 2</p>
      
      {/* "Projects" yazısı */}
      <p className="absolute top-1/2 left-0 transform -translate-y-1/2 mt-16 text-start text-base leading-6 font-sans text-#877457 bg-white" style={{ color: '#877457', backgroundColor: '#ffffff' }}>
        Projects
      </p>
      
      {/* Buraya Project Activity ile ilgili diğer içerikler gelecek */}
    </div>
  );
}

export default ProjectActivity;
