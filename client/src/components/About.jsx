/* eslint-disable no-unused-vars */
import React from 'react';

const teamMembers = [
  {
    name: 'Blessing Uwem Asuquo',
    linkedin: 'https://www.linkedin.com/in/blessing-a-0696a3274',
    github: 'https://github.com/Sparklingbae',
    twitter: 'https://x.com/sparklingbabe3 '
  },
  {
    name: 'Akinola Ridwan Temitope',
    linkedin: 'https://www.linkedin.com/in/ridak-id',
    github: 'https://github.com/sefrel',
    twitter: 'https://x.com/akinolaridwan14'
  },
  {
    name: 'Ugochukwu Lopez Ubani',
    linkedin: 'https://www.linkedin.com/in/ugochukwu-lopez-ubani',
    github: 'https://github.com/Lopdee',
    twitter: 'https://x.com/loppydizzle'
  }
];

const About = () => {
  return (
    <section id="about" className="about-section py-0">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold mb-2">About This Project</h2>
        <p className="mb-2">
          This project was inspired by our passion for connecting people through events. We wanted to create a platform
          where users can easily find, create, and manage events. Our journey started in 2023, and this project has
          been a significant part of our portfolio at Holberton School. For more information about the school, you can visit 
          <a href="https://www.holbertonschool.com" className="text-blue-500"> Holberton School</a>.
        </p>
        <div className="team-section mb-1">
          <h3 className="text-2xl font-semibold mb-2">Meet the Team</h3>
          <div className="flex min-h-full flex-1 flex-col justify-center px-4 py-0 lg:px-4">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-member p-2 border rounded shadow-md">
                <h4 className="text-xl font-bold">{member.name}</h4>
                <p>
                  <a href={member.linkedin} className="text-blue-500" target="_blank" rel="noopener noreferrer">LinkedIn</a> | 
                  <a href={member.github} className="text-gray-800 ml-2" target="_blank" rel="noopener noreferrer">GitHub</a> | 
                  <a href={member.twitter} className="text-blue-400 ml-2" target="_blank" rel="noopener noreferrer">Twitter</a>
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="github-section">
          <h3 className="text-2xl font-semibold mb-2">Project Repository</h3>
          <p>
            You can find the source code for this project on our 
            <a href="https://github.com/Sparklingbae/Ticketing-Website.git" className="text-blue-500" target="_blank" rel="noopener noreferrer"> GitHub Repository</a>.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;