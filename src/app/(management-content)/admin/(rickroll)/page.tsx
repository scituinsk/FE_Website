import React from "react";

const AdminPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-8">Welcome to Admin Portal! 🎵</h1>
        <div className="relative w-full max-w-4xl mx-auto">
          <iframe
            width="800"
            height="450"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&loop=1&playlist=dQw4w9WgXcQ"
            title="Never Gonna Give You Up"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-lg shadow-2xl"
          />
        </div>
        <p className="text-white mt-4 text-lg">You&apos;ve been rickrolled! 😄</p>
        <p className="text-gray-300 mt-2">Access specific admin pages using the sidebar navigation</p>
      </div>
    </div>
  );
};

export default AdminPage;
