import React from "react";

const About = () => {
  // Card Component
  const Card = ({ children }) => (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      {children}
    </div>
  );

  // CardContent Component
  const CardContent = ({ children }) => (
    <div className="flex flex-col items-center">{children}</div>
  );

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#e6f0fa] py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-[#1D4ED8]">Thrive</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              We're on a mission to transform how people discover and secure their dream careers.
              Our AI-powered platform connects talented individuals with the perfect opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-center text-3xl md:text-4xl font-bold mb-12">Our Story</h2>
            
            <Card>
              <CardContent>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Founded by a group of second-year students from the ITE department, Thrive was born out of our passion for solving real-world problems through technology.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  For our project practicum, we identified the challenges people face when discovering and securing their ideal careers. We wanted to create a platform that would help bridge the gap between job seekers and employers, using technology to make the job market more efficient and accessible for everyone.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  As a team, we are determined to revolutionize the job search experience. With our combined skills in software development, AI, and user experience design, we aim to create a tool that provides personalized, data-driven recommendations for both professionals and businesses.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl md:text-4xl font-bold mb-12">Our Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <Card>
              <CardContent>
                <div className="w-12 h-12 bg-[#e6f0fa] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-gray-700">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 uppercase">Inclusion</h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  We believe everyone deserves the opportunity to thrive in their career.
                  Our platform is designed to eliminate bias and create equitable opportunities.
                </p>
              </CardContent>
            </Card>
            
            {/* Value 2 */}
            <Card>
              <CardContent>
                <div className="w-12 h-12 bg-[#e6f0fa] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-gray-700">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 uppercase">Innovation</h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  We're constantly pushing boundaries and exploring new ways to improve the job search experience
                  through cutting-edge technology and creative solutions.
                </p>
              </CardContent>
            </Card>
            
            {/* Value 3 */}
            <Card>
              <CardContent>
                <div className="w-12 h-12 bg-[#e6f0fa] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-gray-700">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 uppercase">Impact</h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  We measure our success by the positive difference we make in people's lives,
                  helping them build rewarding careers that align with their passions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl md:text-4xl font-bold mb-12">Our Developer Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="flex flex-col items-center">
              <img
                src="/Assets/IMG_0215.JPG"
                alt="Min Phanith"
                className="w-32 h-32 rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-1">Min Phanith</h3>
              <p className="text-gray-600 mb-3">Frontend & Backend</p>
            </div>
            
            {/* Team Member 2 */}
            <div className="flex flex-col items-center">
              <img
                src="/path/to/photo2.jpg"
                alt="Rath Chhneoum"
                className="w-32 h-32 rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-1">Rath Chhneoum</h3>
              <p className="text-gray-600 mb-3">Machine Learning Trainer</p>
            </div>
            
            {/* Team Member 3 */}
            <div className="flex flex-col items-center">
              <img
                src="/path/to/photo3.jpg"
                alt="Ly Hour"
                className="w-32 h-32 rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-1">Ly Hour</h3>
              <p className="text-gray-600 mb-3">Backend & Machine Learning</p>
            </div>
            
            {/* Team Member 4 */}
            <div className="flex flex-col items-center">
              <img
                src="/path/to/photo4.jpg"
                alt="Ly Keasing"
                className="w-32 h-32 rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-1">Ly Keasing</h3>
              <p className="text-gray-600 mb-3">Supporter</p>
              
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;