const certificationData = [ 
  {
    title: 'Getting Started with Git and GitHub',
    institution: 'IBM',
    date: 'August 2023',
    description: 'An introductory course on using Git version control and GitHub for collaboration.',
  },
  {
    title: 'Spécialisation Machine Learning',
    institution: 'Coursera',
    date: 'July 2023',
    description: 'Comprehensive specialization focused on machine learning algorithms and real-world applications.',
  },
  {
    title: 'Python for Data Science, AI & Development',
    institution: 'IBM',
    date: 'May 2023',
    description: 'Covered Python programming for data science, artificial intelligence, and application development.',
  },
  {
    title: 'Hadoop: Map Reduce',
    institution: 'Great Learning',
    date: 'June 2023',
    description: 'A course on the Hadoop MapReduce framework for processing and managing large-scale data.',
  },
];

const Certifications = () => {
  return (
    <div className="my-12 px-6 py-8 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Certifications</h2>
      <ul className="space-y-6">
        {certificationData.map((certification, index) => (
          <li
            key={index}
            className="p-6 bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 flex items-start space-x-4"
          >
            <i className="fas fa-certificate text-blue-600 text-3xl"></i>
            <div>
              <h3 className="text-xl font-semibold text-blue-600">{certification.title}</h3>
              <p className="text-gray-700 font-medium">{certification.institution}</p>
              <p className="text-sm text-gray-500">{certification.date}</p>
              <p className="mt-2 text-gray-600">{certification.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Certifications;
