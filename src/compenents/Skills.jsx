import SkillCard from "./SkillCard";

const skillItem = [
    {
        imgSrc: '/images/svgs/python-svgrepo-com.svg',
        label: 'Python',
        desc: 'Programming Language'
    },
    {
        imgSrc: '/images/svgs/java-4-logo-svgrepo-com.svg',
        label: 'Java',
        desc: 'Programming Language'
    },

    {
        imgSrc: '/images/svgs/flask-svgrepo-com.svg',
        label: 'Flask',
        desc: 'Python Web Framework'
    },
    {
      imgSrc: '/images/svgs/deep-learning-svgrepo-com.svg',
      label: 'Deep Learning',
      desc: 'IA'
    },
      
    {
        imgSrc: '/images/svgs/pytorch-svgrepo-com.svg',
        label: 'PyTorch',
        desc: 'Deep Learning Framework'
    },
    { 
      imgSrc: '/images/svgs/XGBoost_logo.png', 
      label: 'XGBoost',
      desc: 'Machine Learning Library for Gradient Boosting'
    },  
    {
        imgSrc: '/images/svgs/tensorflow-svgrepo-com.svg',
        label: 'TensorFlow',
        desc: 'Deep Learning Framework'
    },
    {
      imgSrc: '/images/svgs/Scikit_learn_logo_small.svg',
      label: 'Scikit_learn',
      desc: 'Deep Learning Framework'
    },
    
    {
        imgSrc: '/images/svgs/opencv-svgrepo-com.svg',
        label: 'OpenCV',
        desc: 'Computer Vision'
    },
    {
        imgSrc: '/images/svgs/apachekafka-svgrepo-com.svg',
        label: 'Apache Kafka',
        desc: 'Streaming Platform'
    },
    {
        imgSrc: '/images/svgs/apache-spark-vector-logo.svg',
        label: 'Apache Spark',
        desc: 'Big Data Processing'
      },
      {
        imgSrc: '/images/svgs/hadoop-svgrepo-com.svg',
        label: 'Hadoop',
        desc: 'Distributed Storage & Processing'
      },
    {
      imgSrc: '/images/svgs/airflow-svgrepo-com.svg',
      label: 'Airflow',
      desc: 'Workflow Management'
    },
   
    {
      imgSrc: '/images/svgs/docker-svgrepo-com.svg',
      label: 'Docker',
      desc: 'Containerization'
    },
    {
      imgSrc: '/images/svgs/github-icon-1-logo-svgrepo-com.svg',
      label: 'GitHub',
      desc: 'Version Control'
    },
    {
        imgSrc: '/images/svgs/pandas-svgrepo-com.svg',
        label: 'Pandas',
        desc: 'Data Manipulation'
      },      
    {
      imgSrc: '/images/svgs/sql-database-sql-azure-svgrepo-com.svg',
      label: 'SQL',
      desc: 'Database'
    },
    {
      imgSrc: '/images/svgs/Power_BI_Logo.png',
      label: 'Power BI',
      desc: 'Data Visualization'
    },
    {
        imgSrc: '/images/svgs/matplotlib-seeklogo.svg',
        label: 'Matplotlib',
        desc: 'Data Visualization'
    },
    {
      imgSrc: '/images/svgs/Plotly.svg',
      label: 'Plotly',
      desc: 'Data Visualization'
    },
    {
        imgSrc: '/images/svgs/dompc_var_02_rtd_blue.svg',
        label: 'Model Predictive Controller',
        desc: 'Control System'
    },
    {
        imgSrc: '/images/svgs/scipy-seeklogo.svg',
        label: 'SciPy',
        desc: 'Scientific Computing'
    },
    {
        imgSrc: '/images/svgs/windows-svgrepo-com.svg',
        label: 'Windows',
        desc: 'Operating System'
      },
      {
        imgSrc: '/images/svgs/linux-svgrepo-com.svg',
        label: 'Linux',
        desc: 'Operating System'
      },
      {
        imgSrc: '/images/svgs/vs-code-svgrepo-com.svg',
        label: 'VS Code',
        desc: 'Code Editor'
      },
      {
        imgSrc: '/images/svgs/leetcode-svgrepo-com.svg',
        label: 'LeetCode',
        desc: 'Competitive Programming'
      },
      {
        imgSrc: '/images/svgs/latex-svgrepo-com.svg',
        label: 'LaTeX',
        desc: 'Document Preparation System'
      },
  ];
  


const Skills = ()=>{

    return(
        <section className="section">
            <div className="container">
                <h2 className="headline-2">
                    Essential Tools I use 
                </h2>
                <p className="text-zinc-400 mt-3 mb-8 maw-w-[50ch]">
                    Discover the powerful tools and technologies I use to create exceptional, high-performing Framworks & technologies.
                </p>

                <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
                    {
                        skillItem.map(({imgSrc,label,desc},key)=>
                        (<SkillCard 
                            key={key}
                            imgSrc={imgSrc}
                            label={label}
                            desc={desc}
                        />)
                        )
                    }
                </div>

            </div>
        </section>
    )

    
}

export default Skills;