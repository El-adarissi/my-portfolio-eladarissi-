
import Education from "./Education ";
import Certifications from "./Certifications ";
const aboutItems = [
    {
      label: 'Project done',
      number: 4
    },
    {
      label: 'Years of experience',
      number: 6 + "mois"
    }
  ];

const About = () => {

    return (
        <section
        id="about"
        className="section"
        >
        <div className="container">
            <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12">
             <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
             I am Abdelaziz El-Adarissi, a passionate and dedicated Data Scientist with a strong foundation in machine learning, deep learning, and distributed systems.<br/>
             I have developed a deep interest in solving complex problems through data-driven approaches.
             <br/><br/>
             
             I have hands-on experience working with technologies such as Python, Spark, TensorFlow, and Docker, which I have applied to real-world projects ranging from industrial process optimization to real-time data analysis.
             <br/><br/>
             
             With a passion for continuous learning, I have completed various certifications in machine learning, data science, and Git, and I am always exploring new ways to enhance my skills. I am committed to leveraging my knowledge and expertise to drive innovation and help businesses harness the power of their data.
             <br/><br/>
             Let’s connect!
             </p>
             <Education />
             <Certifications />
             <div className="flex flex-wrap items-center gap-4 md:gap-7">
                {
                    aboutItems.map(({label,number},key)=>(
                    <div key={key}>
                        <div className="flex items-center md:mb-2">
                            <span className="text-2xl font-bold md:text-4xl">{number}</span>
                            <span className="text-sky-400 font-semibold md:text-3xl">+</span>
                        </div>
                        <p className="text-sm text-zinc-400">{label}</p>
                    </div>
                    ))
                }
                <img 
                src="/images/logo.svg" 
                width={30}
                height={30}
                className="ml-auto md:w-[40px] md:h-[40px]"
                alt="Logo"  />

             </div>
        </div>
          
        </div>
       
        </section>
    )
}

export default About;