import ServiceCard from "../Component/ServiceCard";

export default function Services() {
  return (
    <div className="min-h-screen bg-[#e6f0fa]">
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1D4ED8] mb-6">
            Our Career Services
          </h1>
          <p className="text-lg text-gray-600 mb-12 leading-relaxed">
            Professional services designed to help you stand out in a competitive job market and
            advance your career.
          </p>

          {/* Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <ServiceCard
              icon="📄"
              title="Resume Review"
              description="Get your resume professionally reviewed with detailed feedback and suggestions for improvement."
              features={[
                'Detailed analysis by HR experts',
                'Formatting and content suggestions',
                'ATS optimization tips',
              ]}
              price="$49 / review"
              buttonText="Get Started"
            />
            <ServiceCard
              icon="👤"
              title="Career Counseling"
              description="One-on-one sessions with experienced career counselors to guide your professional journey."
              features={[
                'Personalized career strategy',
                'Skill gap analysis',
                'Industry-specific advice',
              ]}
              price="$99 / session"
              buttonText="Book Session"
            />
            <ServiceCard
              icon="💻"
              title="Interview Preparation"
              description="Practice interviews with industry professionals and receive actionable feedback."
              features={[
                'Mock interview sessions',
                'Detailed performance analysis',
                'Customized question preparation',
              ]}
              price="$129 / session"
              buttonText="Schedule"
            />
            <ServiceCard
              icon="🔗"
              title="LinkedIn Optimization"
              description="Enhance your LinkedIn profile to attract recruiters and showcase your professional brand."
              features={[
                'Profile analysis and optimization',
                'Content strategy guidance',
                'Network growth tactics',
              ]}
              price="$79 / profile"
              buttonText="Get Started"
            />
            <ServiceCard
              icon="✉️"
              title="Cover Letter Writing"
              description="Custom cover letters that highlight your strengths and make a compelling case for your candidacy."
              features={[
                'Personalized content creation',
                'Industry-specific messaging',
                'Two revision rounds',
              ]}
              price="$59 / letter"
              buttonText="Order Now"
            />
            <ServiceCard
              icon="💰"
              title="Salary Negotiation"
              description="Expert guidance to help you negotiate the best possible compensation package."
              features={[
                'Market rate research',
                'Negotiation strategy session',
                'Rehearsal scripting',
              ]}
              price="$149 / package"
              buttonText="Learn More"
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-[#1D4ED8] to-[#2563EB] py-12 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Accelerate Your Career?</h2>
        <p className="text-lg mb-6 leading-relaxed">
          Get started today and take advantage of our professional services to stand out in the job
          market.
        </p>
        <button className="bg-white text-[#1D4ED8] px-6 py-3 rounded-md hover:bg-gray-100 transition">
          Schedule a Consultation
        </button>
      </section>
    </div>
  );
}