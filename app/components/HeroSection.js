
import Image from 'next/image';

const HeroSection = () => {
    return (
        <section>
            <div className="grid grid-cols-1 lg:grid-cols-2"> 
                <div className="col-span-7 place-self-center">  
                    <h1 className="text-white mb-4 text-6xl font-extrabold">
                        Hello, I'm Ahad 
                    </h1>
                    <p className="text-[#ADB7BE] text-lg mb-6 lg:text-xl">
                    As a recent computer science graduate, I bring a solid foundation in coding with Java and C, alongside proficiency in web development and database languages such as MongoDB and SQL. My previous roles involved SSD and GPU testing for industry giants like Intel and Nvidia. With a keen interest in software engineering and information technology, I'm eager to leverage my skills and experience in dynamic professional environments.
                        
                    </p>
                    <div>
                        <button className=' px-6 py-3 rounded-full mr-4 bg-white hover:bg-slate-200'>Contact</button>
                        <button className=' px-6 py-3 rounded-full bg-transparent hover:bg-slate-800 text-white border border-white mt-3  ' >Download Resume</button>
                    </div>
                </div>
                </div>
        </section>
    ); 
};

export default HeroSection; 
