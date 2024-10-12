const educationData = [
  {
    degree: 'Master Systèmes Informatiques Distribués & Big Data',
    institution: 'Faculté des sciences Agadir',
    startDate: 'September 2022',
    endDate: 'July 2024',
    description: 'Focused on distributed systems and big data technologies.',
  },
  {
    degree: 'Licence Sciences Mathématiques et Informatique',
    institution: 'Faculté Polydisciplinaire - Ouarzazate',
    startDate: 'September 2019',
    endDate: 'July 2022',
    description: 'Specialized in mathematics and computer science fundamentals.',
  },
  {
    degree: 'Baccalauréat en sciences physiques',
    institution: 'Lycée Othman Ibn Affan',
    startDate: 'September 2018',
    endDate: 'July 2019',
    description: 'Secondary education with a focus on physical sciences.',
  },
];

const Education = () => {
  return (
    <div className="my-12 px-6 py-8 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Education</h2>
      <ul className="space-y-6">
        {educationData.map((education, index) => (
          <li
            key={index}
            className="p-6 bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 flex items-start space-x-4"
          >
            <i className="fas fa-graduation-cap text-blue-600 text-3xl"></i>
            <div>
              <h3 className="text-xl font-semibold text-blue-600">{education.degree}</h3>
              <p className="text-gray-700 font-medium">{education.institution}</p>
              <p className="text-sm text-gray-500">
                {education.startDate} - {education.endDate}
              </p>
              <p className="mt-2 text-gray-600">{education.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Education;
