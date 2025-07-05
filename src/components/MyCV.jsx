import React, { useState } from "react";

function MyCV({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="relative bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
            My CV
          </h2>
          <div className="flex items-center space-x-2">
            {/* Download button */}
            <a
              href="/RenderCV_EngineeringResumes_Theme.pdf"
              download
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-gray-800 dark:bg-white dark:text-gray-800 rounded-lg hover:bg-gray-700 dark:hover:bg-gray-100 transition-colors"
            >
              <i className="bx bx-download mr-2"></i>
              Download
            </a>
            {/* Close button */}
            <button
              onClick={onClose}
              className="inline-flex items-center justify-center w-8 h-8 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
            >
              <i className="bx bx-x text-xl"></i>
            </button>
          </div>
        </div>

        {/* PDF Viewer */}
        <div className="p-4">
          <iframe
            src="/RenderCV_EngineeringResumes_Theme.pdf"
            className="w-full h-[70vh] border border-gray-200 dark:border-gray-700 rounded-lg"
            title="My CV"
          />
        </div>
      </div>
    </div>
  );
}

export default MyCV;
