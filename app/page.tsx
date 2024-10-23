import Image from 'next/image';
import getDevs from './lib/getDevs';

export default function Home() {
  getDevs();
  return (
    
    <div>
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full flex justify-between items-center p-6 bg-white shadow-lg">
        <a href="#experence" className="hover:underline">Experiences</a>
        <a href="#projects" className="hover:underline">Projects</a>
        <a href="#connect" className="hover:underline">Connect</a>
      </nav>


      {/* Main Section */}
      <section className="min-h-screen flex items-center justify-center p-8 bg-[var(--background)] text-[var(--foreground)]">
        <div className="flex flex-col sm:flex-row items-center gap-8">
          {/* Text on the Left, Centered Vertically */}
          <div className="sm:w-2/3 text-center sm:text-left flex flex-col justify-center">
            <h1 className="text-4xl font-bold">Hi! I’m Camila, welcome to my Page! I’m happy you’re here ☺️</h1>
            <p className="text-xl mt-4">
              I'm currently a junior at UC Berkeley with a strong interest in the relationship between technology and social progress!
            </p>
          </div>

          {/* Image on the Right */}
          <div className="sm:w-1/3">
            <img
              src="/images/mypicture.jpg"
              alt="My Picture"
              width={300}
              height={300}
              className="rounded-md mb-4"
            />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 bg-[var(--background)] text-[var(--foreground)]">
        <h1 className="text-5xl font-bold text-center mb-12">Experience</h1>
        <div className="flex flex-col sm:flex-row justify-around items-center gap-12 p-8">
          {/* First Picture with Title "LLS" and Text */}
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-2">LLS</h2>
            <img
              src="/images/actionpic.JPG"
              alt="Picture 1"
              width={300}
              height={300}
              className="rounded-md mb-4"
            />
            <p className="text-center text-lg font-medium">
              Within LLS, part of a team that drives meaningful initiatives to establish connections between our 
              organization and Latin America. Together, we effectively organize and implement two events each month. 
              These events are specifically structured to gather donations for non-profit organizations in Peru, Venezuela, and Mexico.
            </p>
          </div>

          {/* Second Picture with Title "Codebase" and Text */}
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-2">Codebase</h2>
            <img
              src="/images/codebasepic.jpeg"
              alt="Picture 2"
              width={200}
              height={200}
              className="rounded-md mb-4"
            />
            <p className="text-center text-lg font-medium">
              In Codebase, I am part of a team where we leverage Next.JS, Express.JS, and PostgreSQL to develop 
              a portal for Seacology, a nonprofit organization dedicated to preserving island ecosystems, to 
              share resources with field representatives.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-[var(--background)] text-[var(--foreground)]">
        {getDevs()}
        <h1 className="text-5xl font-bold text-center mb-12">Projects</h1>
        <div className="flex flex-col sm:flex-row justify-around items-center gap-12 p-8">
          {/* Project 1 */}
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-2">Seacology</h2>
            <img
              src="/images/seacologypic.png"
              alt="Seacology Pic"
              width={300}
              height={300}
              className="rounded-md mb-4"
            />
            <p className="text-center text-lg font-medium">
              Currently developing a portal for field members to submit updates to the organization
              regarding their research. Also providing a filterable view of organization members and
              field representatives to Seacology admin.
            </p>
          </div>

          {/* Project 2 */}
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-2">Build Your Own World</h2>
            <img
              src="/images/byowpic.png"
              alt="BYOW Pic"
              width={500}
              height={500}
              className="rounded-md mb-4"
            />
            <p className="text-center text-lg font-medium">
              In Codebase, I am part of a team where we leverage Next.JS, Express.JS, and PostgreSQL to develop 
              a portal for Seacology, a nonprofit organization dedicated to preserving island ecosystems, to 
              share resources with field representatives.
            </p>
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section id="connect" className="py-16 bg-[var(--background)] text-[var(--foreground)]">
        <h1 className="text-5xl font-bold text-center mb-12">Let's Connect!</h1>
        <div className="flex flex-col sm:flex-row justify-around items-center gap-12 p-8">
          {/* Contact 1 */}
          <div className="flex flex-col items-center">
            <img
              src="/images/call.png"
              alt="Call Pic"
              width={290}
              height={290}
              className="rounded-md mb-4"
            />
            <p className="text-center text-lg font-medium">Phone Number: 408-591-1361</p>
          </div>

          {/* Contact 2 */}
          <div className="flex flex-col items-center">
            <img
              src="/images/linkedin.png"
              alt="LinkedIn Pic"
              width={300}
              height={300}
              className="rounded-md mb-4"
            />
            <p className="text-center text-lg font-medium">LinkedIn: camila-quezadas</p>
          </div>

          {/* Contact 3 */}
          <div className="flex flex-col items-center">
            <img
              src="/images/mail.png"
              alt="Mail Pic"
              width={350}
              height={350}
              className="rounded-md mb-4"
            />
            <p className="text-center text-lg font-medium">Email: camilaquezadas@berkeley.edu</p>
          </div>
        </div>
      </section>
    </div>
  );
}
