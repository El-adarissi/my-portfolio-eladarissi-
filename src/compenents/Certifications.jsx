import { useState } from "react";

const images = [
  "/Certifications/Machine_Learning_Spécialisation-1.png",
  "/Certifications/Machine_Learning_Algorithms_A-Z-1.png",
  "/Certifications/Advanced_Learning_Algos-1.png",
  "/Certifications/Python_for_Data_Science-1.png",
  "/Certifications/Supervised_Machine-1.png",
  "/Certifications/Unsupervised_Learning-1.png",
  "/Certifications/Introduction_to_IA.jpg",
  "/Certifications/MapReduce.jpg",
  "/Certifications/Getting_Started_with_Git_and_GitHub-1.png",
  "/Certifications/Introduction_to_Jupyter-1.png",
  "/Certifications/Introduction_to_Machine_Learning_on_AWS-1.png",
];

const Certifications = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 2;

  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);

  const totalPages = Math.ceil(images.length / imagesPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="my-8 px-4 md:px-8 py-8 rounded-lg shadow-md">
      {/* Image Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {currentImages.map((img, index) => (
          <div key={index} className="w-full">
            <img
              src={img}
              alt={`Certificate ${index + 1}`}
              className="w-full h-auto rounded-lg shadow-md object-cover"
            />
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-6 flex justify-center items-center space-x-1 sm:space-x-2">
        {/* Left Arrow Button */}
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-2 py-2 sm:px-3 sm:py-3 rounded-md border ${
            currentPage === 1
              ? "bg-gray-200 text-gray-400"
              : "bg-white text-blue-600 hover:bg-blue-100"
          }`}
        >
          &lt;
        </button>

        {/* Page Number Buttons */}
        <div className="flex overflow-x-auto space-x-1">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`px-3 py-2 sm:px-4 sm:py-3 rounded-md border ${
                currentPage === index + 1
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-200"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>

        {/* Right Arrow Button */}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-2 py-2 sm:px-3 sm:py-3 rounded-md border ${
            currentPage === totalPages
              ? "bg-gray-200 text-gray-400"
              : "bg-white text-blue-600 hover:bg-blue-100"
          }`}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Certifications;
