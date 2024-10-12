import ProjectCard from "./ProjectCard";


const works = [
  {
    imgSrc: '/images/faicial_reco.jpg',
    title: 'Face Recognition',
    tags: ['Machine Learning', 'Python', 'OpenCV', 'Face Recognition', 'AI'],
    projectLink: 'https://github.com/El-adarissi/Reconnaissance_Facial'
  },
  {
    imgSrc: '/images/Mask-Detection.png',
    title: 'Mask Detection',
    tags: ['Convolutional Neural Networks', 'Python', 'Deep Learning', 'Image Processing', 'AI'],
    projectLink: 'https://github.com/El-adarissi/Mask_Detection_ConvNets'
  },
  {
    imgSrc: '/images/AirCrash.jpg',
    title: 'Air-Crash Data Analysis',
    tags: ['Data Analysis', 'Python', 'Pandas', 'Visualization', 'Jupyter'],
    projectLink: 'https://github.com/El-adarissi/Air-Crash-Data-Analysis'
  },
  
  {
    imgSrc: '/images/GitHub__headpic.jpg',
    title: 'Real-time Analysis of Air Traffic Data',
    tags: ['Real-time Data', 'Kafka', 'Spark', 'Big Data', 'Streaming'],
    projectLink: '#about'  
  },
  {
    imgSrc: '/images/GitHub__headpic.jpg',
    title: 'Real-time Analysis of Boston Crime Data',
    tags: ['Real-time Data', 'Kafka', 'PySpark', 'LSTM', 'Big Data',
      'Crime Analysis', 
      'Machine Learning'
    ],
    projectLink: '#about'
  }  
  
  ];

  
const Works = ()=>{
    return (
        <section
        id="work"
        className="section"
        >
        <div className="container">
            <h2 className="headline-2 mb-8">
              My portfolio highlights
            </h2>
            <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                {works.map(({imgSrc,title,tags,projectLink},key)=>(
                    <ProjectCard 
                    key={key}
                    imgSrc={imgSrc}
                    title={title}
                    tags={tags}
                    projectLink={projectLink}
                    />
                ))}
            </div>
        </div>

        </section>
    )
}

export default Works;