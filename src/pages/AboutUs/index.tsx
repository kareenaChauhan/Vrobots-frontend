import React from 'react';
import Button from '../../components/ui/Button';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import { useNavigate } from 'react-router-dom';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
}

interface StatisticProps {
  value: string;
  label: string;
}

const About: React.FC = () => {
  const navigate = useNavigate();
  const teamMembers: TeamMember[] = [
    {
      id: '1',
      name: 'John Doe',
      role: 'CEO & Founder',
      image: '/images/img_pic1_jpg.png'
    },
    {
      id: '2',
      name: 'Ivan Mathews',
      role: 'iOS Developer',
      image: '/images/img_pic2_jpg.png'
    },
    {
      id: '3',
      name: 'Macauley Herring',
      role: 'Customer Success',
      image: '/images/img_pic3_jpg.png'
    },
    {
      id: '4',
      name: 'Alya Levine',
      role: 'CTO',
      image: '/images/img_pic4_jpg.png'
    },
    {
      id: '5',
      name: 'Rose Hernandez',
      role: 'Backend Developer',
      image: '/images/img_pic5_jpg.png'
    },
    {
      id: '6',
      name: 'Elen Benitez',
      role: 'Designer',
      image: '/images/img_pic6_jpg.png'
    }
  ];

  const StatisticCard: React.FC<StatisticProps> = ({ value, label }) => (
    <div className="flex flex-col gap-1 justify-center items-start w-full sm:w-auto">
      <div className="flex flex-row justify-start items-center w-full">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight text-primary font-dm-sans">
          {value}
        </h2>
      </div>
      <p className="text-base sm:text-lg md:text-xl text-global-2 font-roboto">
        {label}
      </p>
    </div>
  );

  const TeamMemberCard: React.FC<{ member: TeamMember }> = ({ member }) => (
    <div className="flex flex-col gap-4 sm:gap-5 justify-start items-center w-full max-w-sm mx-auto">
      <div className="w-full">
        <img 
          src={member.image} 
          alt={member.name}
          className="w-full h-64 sm:h-72 md:h-80 object-cover rounded-lg"
        />
      </div>
      <div className="flex flex-col justify-center items-center w-full px-8 sm:px-12 md:px-14">
        <h3 className="text-lg sm:text-xl font-bold leading-7 text-center text-primary font-dm-sans">
          {member.name}
        </h3>
        <p className="text-sm font-normal leading-4 text-center text-global-2 font-roboto mt-1">
          {member.role}
        </p>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col justify-start items-center w-full min-h-screen bg-primary">
      <Header/>
      <div className="flex flex-row justify-start items-center w-full bg-primary">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-row justify-center items-center w-full">
            <div className="flex flex-row justify-start items-end w-full py-16 sm:py-20 md:py-24 lg:py-32 xl:py-36">
              <div className="flex flex-col justify-start items-center w-full px-3 sm:px-4 md:flex-row " >
                <div className="flex flex-col gap-2 sm:gap-3 justify-start items-center w-full mr-6" >
                  <div className="w-full">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight capitalize text-primary font-dm-sans">
                      Behind MoonCart The People,{'\n'}The Passion, And The Purpose
                    </h1>
                  </div>
                  {/* <div className="flex flex-row justify-start items-center w-full">
                    <div className="flex flex-row justify-center items-center w-full">
                      <div className="flex flex-row justify-center items-center w-auto">
                        <p className="text-sm sm:text-base font-normal leading-5 capitalize text-primary font-roboto">
                          Home
                        </p>
                      </div>
                      <div className="flex flex-row justify-start items-center w-full px-2 sm:px-3">
                        <img 
                          src="/images/img_container.svg" 
                          alt="Arrow"
                          className="w-4 h-6 sm:w-5 sm:h-7"
                        />
                        <p className="text-sm sm:text-base font-normal leading-5 capitalize text-primary font-roboto ml-2">
                          About us
                        </p>
                      </div>
                    </div>
                  </div> */}
                </div>
                
                {/* Statistics */}
                <div className=" lg:flex flex-row justify-start items-center w-full max-w-2xl px-2 mt-2">
                  <div className="flex flex-row justify-between items-center w-full gap-8">
                    <StatisticCard value="50+" label="Items Sale" />
                    <StatisticCard value="400%" label="Return on investment" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Mobile */}
      <div className="flex lg:hidden flex-col gap-6 justify-center items-center w-full px-4 py-8 bg-global-3">
        <StatisticCard value="50+" label="Items Sale" />
        <StatisticCard value="400%" label="Return on investment" />
      </div>

      {/* Video Section with Overlay */}
      <div className="flex flex-row justify-start items-center w-full">
        <div className="flex flex-col justify-start items-center w-full">
          <div className="relative w-full h-96 sm:h-[450px] md:h-[500px] lg:h-[550px]">
            <img 
              src="/images/img_bg_video_mp4.png" 
              alt="Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 md:bottom-12 md:right-16 lg:bottom-16 lg:right-36 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
              <div className="flex flex-col gap-2 justify-start items-start bg-dark p-6 sm:p-8 rounded-lg shadow-[0px_30px_50px_#00000019]">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold leading-8 sm:leading-9 text-white font-dm-sans">
                  why MoonCart ?
                </h3>
                <p className="text-sm sm:text-base font-normal leading-6 text-white font-roboto mb-2">
                  It is a long established fact that a reader will be distracted by the{'\n'}readable content of a page when looking at its layout. The point of{'\n'}using Lorem Ipsum is that it has a more-or-less normal distribution{'\n'}of letters, as opposed to using Content here, content here, making it{'\n'}look like readable English. Many desktop publishing packages and{'\n'}web page editors now use
                </p>
              </div>
            </div>
          </div>

          {/* About Section */}
          <div className="flex flex-row justify-start items-center w-full py-8 sm:py-12 md:py-16 lg:py-20 -mt-16 sm:-mt-20">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col lg:flex-row justify-between items-center w-full gap-8 lg:gap-12">
                <div className="flex flex-col justify-start items-center w-full lg:w-1/2 mb-8 lg:mb-0  rounded-lg overflow-hidden">
                  <img 
                    src="/images/img_men_png.png" 
                    alt="Team member"
                    className="w-full h-auto object-cover"
                  />
                </div>
                
                <div className="flex flex-col gap-8 sm:gap-10 justify-start items-center w-full lg:w-1/2">
                  <div className="flex flex-col gap-4 sm:gap-5 justify-start items-start w-full">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-primary font-dm-sans">
                      About MoonCart Our{'\n'}Story and Mission in{'\n'}Ecommerce
                    </h2>
                    <div className="flex flex-col gap-4 justify-start items-center w-full">
                      <p className="text-sm sm:text-base font-normal leading-6 text-global-2 font-roboto">
                        There are many variations of passages of Lorem Ipsum available, but the majority have{'\n'}suffered alteration in some form, by injected humour, or randomised words which do not{'\n'}look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need{'\n'}to be sure there is not anything embarrassing hidden in the middle of text.
                      </p>
                      <p className="text-sm sm:text-base font-normal leading-6 text-global-2 font-roboto">
                        All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as{'\n'}necessary, making this the first true generator on the Internet. It uses a dictionary of over{'\n'}200 Latin words, combined with a handful of model sentence structures, to generate{'\n'}Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always{'\n'}free from repetition, injected humour, or non-characteristic words etc.
                      </p>
                    </div>
                  </div>
                  
                  {/* Kenneth Fong Profile */}
                  <div className="flex flex-row gap-3 sm:gap-4 justify-center items-center w-full">
                    <div className="flex flex-col justify-start items-center w-auto border-2 border-white rounded-full">
                      <img 
                        src="/images/img_testimonial4_jpg.png" 
                        alt="Kenneth Fong"
                        className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col gap-1 justify-center items-start w-full">
                      <h4 className="text-lg sm:text-xl md:text-2xl font-semibold leading-7 sm:leading-8 text-primary font-dm-sans">
                        Kenneth Fong
                      </h4>
                      <p className="text-xs sm:text-sm font-normal leading-4 text-global-2 font-roboto">
                        Postgraduate Student
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Questions Section */}
      <div className="flex flex-row justify-start items-center w-full bg-dark py-6">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center w-full gap-4 sm:gap-8">
            <div className="flex flex-col sm:flex-row justify-start items-center w-full sm:w-auto text-center sm:text-left">
              <h3 className="text-xl sm:text-2xl font-normal leading-8 text-white font-dm-sans">
                Questions ?
              </h3>
              <p className="text-base sm:text-lg font-normal leading-6 text-white font-dm-sans mt-2 sm:mt-0 sm:ml-4 self-end">
                Our experts will help find the grar that is right for you
              </p>
            </div>
            <Button 
              variant="primary" 
              size="md"
              className="bg-global-4 text-primary border border-global-4 hover:bg-gray-100"
              onClick={() => navigate('/contact-us')}
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="flex flex-row justify-center items-center w-full py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-start items-center w-full">
            <div className="flex flex-col lg:flex-row justify-start items-start w-full gap-8 lg:gap-12">
              {/* Team Description */}
              <div className="flex flex-col gap-3 justify-start items-start w-full lg:w-1/2 px-4 py-6">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight sm:leading-snug text-primary font-dm-sans">
                  Meet our team of creators,{'\n'}designers, and world-class{'\n'}problem solvers
                </h2>
                <p className="text-sm sm:text-base font-normal leading-6 text-global-2 font-roboto">
                  There are many variations of passages of Lorem Ipsum available, but the majority have{'\n'}suffered alteration in some form, by injected humour, or randomised words.
                </p>
                <Button 
                  variant="primary" 
                  size="md"
                  className="bg-dark text-white border border-global-1 hover:bg-gray-800 mt-6"
                >
                  Join Our Team
                </Button>
              </div>

              {/* First Two Team Members */}
              <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 justify-start items-center w-full lg:w-1/2">
                <div className="w-full sm:w-1/2 px-4 py-6">
                  <TeamMemberCard member={teamMembers[0]} />
                </div>
                <div className="w-full sm:w-1/2 px-4 py-6">
                  <TeamMemberCard member={teamMembers[1]} />
                </div>
              </div>
            </div>

            {/* Remaining Team Members Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 w-full mt-8 sm:mt-12">
              {teamMembers.slice(2).map((member) => (
                <div key={member.id} className="px-4 py-6">
                  <TeamMemberCard member={member} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      {/* <div className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50">
        <button 
          className="w-10 h-10 bg-dark rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-200"
          aria-label="Scroll to top"
        >
          <img 
            src="/images/img_button.svg" 
            alt="Scroll to top"
            className="w-5 h-5"
          />
        </button>
      </div> */}
      <Footer/>
    </div>
  );
};

export default About;