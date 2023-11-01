// pages/bookmarks.tsx

"use client"
import React from 'react';

const Bookmarks: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <h1 className="text-2xl font-semibold mb-4">Your Bookmarks</h1>
                <div className="flex items-center border-dashed border-2 border-gray-300 p-4 rounded-md">
                    <svg className="w-6 h-6 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M2 12a10 10 0 1020 0 10 10 0 00-20 0z"></path>
                    </svg>
                    <div>
                        <p className="font-medium">You haven’t bookmarked anything yet</p>
                        <p className="text-sm text-gray-500 mt-1">Hit the Bookmark option from the menu on any message, doc, to-do list, etc. to save it here.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Bookmarks;


// Muadil Kodları

// import { FC } from 'react';

// const BookmarksPage: FC = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//       <div className="p-4 bg-white rounded-md shadow-md">
//         <h1 className="text-2xl font-bold mb-4">Your Bookmarks</h1>
//         <div className="flex flex-col items-center">
//           <div className="p-4 mb-4 bg-yellow-100 border border-yellow-200 rounded-md">
//             <p className="text-lg font-medium">You haven’t bookmarked anything yet</p>
//           </div>
//           <p className="text-center text-gray-600">
//             Hit the Bookmark option from the menu on any message, doc, to-do list, etc. to save it here.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BookmarksPage;
