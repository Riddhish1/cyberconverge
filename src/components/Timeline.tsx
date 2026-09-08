import React, { useState } from 'react';
import { Users, Shield, Target, Code, Zap, Coffee, Award, Eye, Lock, Flame, Terminal, Network, Bug, UserCheck } from 'lucide-react';

interface TimelineEvent {
  time: string;
  title: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>> | string;
  type: 'workshop' | 'seminar' | 'session' | 'break' | 'networking' | 'competition';
}

const Timeline: React.FC = () => {
  const [activeDay, setActiveDay] = useState<1 | 2 | 3 | 4 | 5 | 6>(1);

  const day1Schedule: TimelineEvent[] = [
    {
      time: '8:00 AM - 9:00 AM',
      title: 'Kali Linux Installation Booth',
      description: 'Get your systems ready with expert guidance on Kali Linux setup and configuration',
      icon: Terminal,
      type: 'workshop'
    },
    {
      time: '9:00 AM - 11:00 AM',
      title: 'Hands-on CTF Workshop',
      description: 'Interactive capture-the-flag challenges to test your cybersecurity skills',
      icon: Target,
      type: 'competition'
    },
    {
      time: '11:00 AM - 1:00 PM',
      title: 'CTF (Session 1)',
      description: 'First competitive session with progressive difficulty challenges',
      icon: Shield,
      type: 'competition'
    },
    {
      time: '1:00 PM - 1:30 PM',
      title: 'Lunch Break',
      description: 'Networking lunch with fellow participants and mentors',
      icon: Coffee,
      type: 'break'
    },
    {
      time: '1:30 PM - 4:30 PM',
      title: 'CTF (Session 2)',
      description: 'Advanced challenges and team collaboration opportunities',
      icon: Code,
      type: 'competition'
    },
    {
      time: '4:30 PM - 5:00 PM',
      title: 'Evening Snacks & Networking',
      description: 'Connect with industry experts and fellow cybersecurity enthusiasts',
      icon: Users,
      type: 'networking'
    }
  ];

  const day2Schedule: TimelineEvent[] = [
    {
      time: '8:30 AM - 9:00 AM',
      title: 'Opening Keynote: Building Trust Online',
      description: 'A practical look at the people, processes, and technology shaping resilient digital communities',
      icon: Shield,
      type: 'session'
    },
    {
      time: '9:00 AM - 10:30 AM',
      title: 'Secure Coding Workshop',
      description: 'Identify common application flaws and apply secure design patterns through guided exercises',
      icon: Code,
      type: 'workshop'
    },
    {
      time: '10:30 AM - 11:00 AM',
      title: 'Coffee & Community Connect',
      description: 'Meet fellow builders, mentors, and security practitioners between sessions',
      icon: Coffee,
      type: 'networking'
    },
    {
      time: '11:00 AM - 12:30 PM',
      title: 'Web Application Security Seminar',
      description: 'Threat modeling, authentication, and practical defenses for modern web applications',
      icon: Bug,
      type: 'session'
    },
    {
      time: '12:30 PM - 1:30 PM',
      title: 'Lunch Break',
      description: 'Recharge and continue conversations with speakers and participants',
      icon: Coffee,
      type: 'break'
    },
    {
      time: '1:30 PM - 4:00 PM',
      title: 'Build a Secure API Workshop',
      description: 'Hands-on API testing, input validation, secrets management, and access control',
      icon: Terminal,
      type: 'workshop'
    },
    {
      time: '4:00 PM - 5:00 PM',
      title: 'Ask the Experts',
      description: 'Open panel on careers, certifications, internships, and security leadership',
      icon: Users,
      type: 'networking'
    }
  ];

  const day3Schedule: TimelineEvent[] = [
    {
      time: '8:30 AM - 9:00 AM',
      title: 'Day 3 Briefing & Threat Landscape',
      description: 'Understand the attacks and defensive priorities shaping the current threat landscape',
      icon: Eye,
      type: 'session'
    },
    {
      time: '9:00 AM - 10:30 AM',
      title: 'SOC & SIEM Secrets',
      description: 'Explore alert triage, log correlation, and practical Security Operations Center workflows',
      icon: Eye,
      type: 'workshop'
    },
    {
      time: '10:30 AM - 11:00 AM',
      title: 'Networking Break',
      description: 'Exchange ideas with analysts, defenders, and aspiring security professionals',
      icon: Users,
      type: 'networking'
    },
    {
      time: '11:00 AM - 12:30 PM',
      title: 'DFIR Seminar',
      description: 'Digital forensics, evidence handling, and incident response lessons from real investigations',
      icon: Lock,
      type: 'session'
    },
    {
      time: '12:30 PM - 1:30 PM',
      title: 'Lunch & Recharge',
      description: 'Refuel before the afternoon blue team lab',
      icon: Coffee,
      type: 'break'
    },
    {
      time: '1:30 PM - 4:30 PM',
      title: 'Blue Team Incident Response Lab',
      description: 'Contain a simulated breach, investigate indicators, and present a response plan',
      icon: Shield,
      type: 'workshop'
    },
    {
      time: '4:30 PM - 5:00 PM',
      title: 'Incident Debrief',
      description: 'Compare team decisions and capture the most important defensive takeaways',
      icon: Award,
      type: 'session'
    }
  ];

  const day4Schedule: TimelineEvent[] = [
    {
      time: '8:30 AM - 9:00 AM',
      title: 'Security Leadership Seminar',
      description: 'Connect technical security work to risk, governance, and responsible decision-making',
      icon: UserCheck,
      type: 'session'
    },
    {
      time: '9:00 AM - 10:30 AM',
      title: 'Cloud Security Workshop',
      description: 'Secure identities, storage, networks, and workloads across modern cloud environments',
      icon: Network,
      type: 'workshop'
    },
    {
      time: '10:30 AM - 11:00 AM',
      title: 'Mentor Networking',
      description: 'Small-group conversations with practitioners working across cloud and infrastructure security',
      icon: Users,
      type: 'networking'
    },
    {
      time: '11:00 AM - 12:30 PM',
      title: 'DevSecOps in Practice',
      description: 'Integrate security checks into CI/CD pipelines without slowing engineering teams down',
      icon: Zap,
      type: 'seminar'
    },
    {
      time: '12:30 PM - 1:30 PM',
      title: 'Lunch Break',
      description: 'Recharge and connect with the DevSecOps community',
      icon: Coffee,
      type: 'break'
    },
    {
      time: '1:30 PM - 4:00 PM',
      title: 'Cloud Attack & Defense Workshop',
      description: 'Trace an attack path and harden a cloud environment through guided defensive challenges',
      icon: Target,
      type: 'workshop'
    },
    {
      time: '4:00 PM - 5:00 PM',
      title: 'Architecture Review Clinic',
      description: 'Review participant designs and turn security principles into actionable improvements',
      icon: Code,
      type: 'session'
    }
  ];

  const day5Schedule: TimelineEvent[] = [
    {
      time: '8:30 AM - 9:00 AM',
      title: 'Red Team Briefing',
      description: 'Plan an ethical engagement with clear scope, rules of engagement, and reporting goals',
      icon: Flame,
      type: 'session'
    },
    {
      time: '9:00 AM - 10:30 AM',
      title: 'Bug Bounty Workshop',
      description: 'Find, validate, and responsibly report vulnerabilities using a repeatable workflow',
      icon: Bug,
      type: 'workshop'
    },
    {
      time: '10:30 AM - 11:00 AM',
      title: 'Community Coffee Break',
      description: 'Share findings and compare approaches with ethical hackers and mentors',
      icon: Coffee,
      type: 'networking'
    },
    {
      time: '11:00 AM - 12:30 PM',
      title: 'Red Team Live Seminar',
      description: 'Team tradecraft, command-and-control frameworks, and lessons from controlled engagements',
      icon: Flame,
      type: 'session'
    },
    {
      time: '12:30 PM - 1:30 PM',
      title: 'Lunch & Recharge',
      description: 'Refuel before the afternoon team challenge',
      icon: Coffee,
      type: 'break'
    },
    {
      time: '1:30 PM - 4:30 PM',
      title: 'Purple Team Challenge',
      description: 'Red and blue teams collaborate to attack, detect, and improve a live training environment',
      icon: Target,
      type: 'competition'
    },
    {
      time: '4:30 PM - 5:00 PM',
      title: 'Findings Showcase',
      description: 'Teams present discoveries, defensive improvements, and standout techniques',
      icon: Award,
      type: 'session'
    }
  ];

  const day6Schedule: TimelineEvent[] = [
    {
      time: '8:00 AM - 8:30 AM',
      title: 'Check-in & Coffee Kickstart',
      description: 'Participants arrive, collect badges, and network informally',
      icon: Coffee,
      type: 'networking'
    },
    {
      time: '8:30 AM - 9:00 AM',
      title: 'CyberConverge 2026 Grand Opening',
      description: 'Welcome remarks and housekeeping announcements',
      icon: UserCheck,
      type: 'session'
    },
    {
      time: '9:00 AM - 10:00 AM',
      title: 'Cybersecurity Futures Keynote',
      description: 'Address by Chief Guests, Law Enforcement Officials (CBI, Cyber Crime Wing, Local Police)',
      icon: Shield,
      type: 'session'
    },
    {
      time: '10:00 AM - 11:00 AM',
      title: 'Seminar Highlights & Research Talks',
      description: 'Short talks from students, researchers, and practitioners on emerging security challenges',
      icon: Eye,
      type: 'session'
    },
    {
      time: '12:00 PM - 1:00 PM',
      title: 'Networking Hour',
      description: 'Connect and collaborate among law enforcement, security professionals, and industry experts',
      icon: Network,
      type: 'networking'
    },
    {
      time: '1:00 PM - 2:00 PM',
      title: 'Lunch & Recharge',
      description: 'Refuel and recharge for the thrilling sessions ahead',
      icon: Coffee,
      type: 'break'
    },
    {
      time: '2:00 PM - 2:45 PM',
      title: 'Innovation Showcase',
      description: 'Student projects, security tools, and community initiatives solving real-world problems',
      icon: Bug,
      type: 'workshop'
    },
    {
      time: '2:45 PM - 3:00 PM',
      title: 'Closing Panel: The Next Five Years',
      description: 'Experts discuss careers, research, responsible innovation, and the future of cybersecurity',
      icon: Zap,
      type: 'session'
    },
    {
      time: '3:00 PM - 4:30 PM',
      title: 'Live Demo Arena',
      description: 'Technical demonstrations from T.A.S.C, CYSCOM, and invited security communities',
      icon: Flame,
      type: 'workshop'
    },
    {
      time: '4:30 PM - 5:00 PM',
      title: 'Awards, Certificates & Closing',
      description: 'Celebrate participant achievements, announce challenge winners, and close CyberConverge 2026',
      icon: Award,
      type: 'session'
    }
  ];

  const schedules = [day1Schedule, day2Schedule, day3Schedule, day4Schedule, day5Schedule, day6Schedule];
  const currentSchedule = schedules[activeDay - 1];

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'workshop': return 'from-emerald-500 to-emerald-700';
      case 'seminar': return 'from-cyan-400 to-blue-500';
      case 'session': return 'from-emerald-400 to-emerald-600';
      case 'break': return 'from-orange-400 to-red-400';
      case 'networking': return 'from-green-400 to-teal-400';
      case 'competition': return 'from-red-400 to-pink-400';
      default: return 'from-gray-400 to-gray-500';
    }
  };

  const getEventTypeBorder = (type: string) => {
    switch (type) {
      case 'workshop': return 'border-emerald-500/50';
      case 'seminar': return 'border-cyan-400/50';
      case 'session': return 'border-emerald-400/50';
      case 'break': return 'border-orange-400/50';
      case 'networking': return 'border-green-400/50';
      case 'competition': return 'border-red-400/50';
      default: return 'border-gray-400/50';
    }
  };

  return (
    <div className="relative">
      {/* Section Header */}
      <div className="text-center mb-16 ">
  <h3 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-700 mb-6">
          Event Timeline
        </h3>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Six days of intensive cybersecurity learning, seminars, workshops, competitions, and networking
        </p>
      </div>

      {/* Day Switcher */}
      <div className="flex justify-center mb-12 px-4">
        <div className="cyber-card w-full max-w-5xl bg-gray-800/60 border border-gray-700 rounded-2xl p-2 backdrop-blur-sm">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
            {[
              'CTF',
              'AppSec',
              'Blue Team',
              'Cloud & DevSecOps',
              'Red Team',
              'Summit & Awards'
            ].map((label, index) => {
              const day = (index + 1) as 1 | 2 | 3 | 4 | 5 | 6;
              return (
                <button
                  key={label}
                  onClick={() => setActiveDay(day)}
                  className={`px-3 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                    activeDay === day
                      ? 'bg-gradient-to-r from-emerald-400 to-emerald-700 text-black shadow-lg shadow-emerald-400/25'
                      : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                  }`}
                >
                  <span className="block text-xs opacity-70">Day {day}</span>
                  {label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Timeline Container */}
      <div className="relative max-w-6xl mx-auto">
        {/* Desktop Timeline (hidden on mobile) */}
        <div className="hidden md:block">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-emerald-400 via-emerald-600 to-lime-400 h-full rounded-full opacity-60"></div>
          
          {/* Timeline Events */}
          <div className="space-y-12">
            {currentSchedule.map((event, index) => (
              <div
                key={`desktop-${index}`}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-emerald-400 to-emerald-700 rounded-full border-4 border-gray-900 z-10 shadow-lg shadow-emerald-400/50"></div>
                
                {/* Event Card */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
                  <div className={`cyber-card group p-6 bg-gradient-to-br from-gray-800/60 to-gray-900/80 border ${getEventTypeBorder(event.type)} rounded-2xl backdrop-blur-sm hover:border-opacity-100 transition-all duration-500 transform hover:scale-105 ${
                    index % 2 === 0 ? 'hover:rotate-1' : 'hover:-rotate-1'
                  }`}>
                    <div className="flex items-start space-x-4">
                      <div className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-r ${getEventTypeColor(event.type)} p-3 group-hover:shadow-xl transition-all duration-300 transform group-hover:rotate-6`}>
                        {typeof event.icon === 'string' ? (
                          <span className="text-2xl">{event.icon}</span>
                        ) : (
                          <event.icon className="w-8 h-8 text-white" />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-mono text-emerald-400 mb-2">{event.time}</div>
                        <h4 className="text-xl font-bold text-white mb-3">{event.title}</h4>
                        <p className="text-gray-300 leading-relaxed">{event.description}</p>
                        <div className={`inline-block mt-3 px-3 py-1 rounded-full text-xs font-semibold ${
                          event.type === 'workshop' ? 'bg-emerald-500/20 text-emerald-500' :
                            event.type === 'seminar' ? 'bg-cyan-400/20 text-cyan-400' :
                            event.type === 'session' ? 'bg-emerald-400/20 text-emerald-400' :
                          event.type === 'break' ? 'bg-orange-400/20 text-orange-400' :
                          event.type === 'networking' ? 'bg-green-400/20 text-green-400' :
                          event.type === 'competition' ? 'bg-red-400/20 text-red-400' :
                          'bg-gray-400/20 text-gray-400'
                        }`}>
                          {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Time Display on Opposite Side with Connecting Line */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pl-12' : 'pr-12'} relative`}>
                  {/* Horizontal Connecting Line */}
                  <div className={`absolute top-1/2 transform -translate-y-1/2 ${
                    index % 2 === 0 ? 'right-0 left-[10px]' : 'left-0 right-[10px]'
                  } h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 opacity-40`}></div>
                  
                  <div className={`relative z-10 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <div className="inline-block px-6 py-3 bg-gray-800/40 border border-gray-700 rounded-xl backdrop-blur-sm">
                      <div className="text-2xl font-bold text-green-400 mb-1">
                        {event.time.split(' - ')[0]}
                      </div>
                      <div className="text-sm text-gray-400">
                        {event.time.split(' - ')[1] && `to ${event.time.split(' - ')[1]}`}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Timeline End Marker */}
          <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-8 h-8 bg-gradient-to-r from-lime-400 to-emerald-500 rounded-full border-4 border-gray-900 shadow-lg shadow-emerald-400/50"></div>
        </div>
        
        {/* Mobile Timeline (shown only on mobile) */}
        <div className="md:hidden px-4">
          {/* Left-aligned vertical timeline */}
          <div className="relative">
            {/* Vertical Timeline Line */}
            <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-400 via-emerald-600 to-lime-400 rounded-full opacity-60"></div>
            
            {/* Timeline Start Marker */}
            <div className="absolute left-6 transform -translate-x-1/2 top-0 -mt-3 w-6 h-6 bg-gradient-to-r from-emerald-400 to-emerald-700 rounded-full border-4 border-gray-900 z-10 shadow-lg shadow-emerald-400/50"></div>
            
            {/* Timeline Events - Stacked Vertically */}
            <div className="space-y-8 pt-8 pb-8">
              {currentSchedule.map((event, index) => (
                <div key={`mobile-${index}`} className="relative pl-16">
                  {/* Timeline Node */}
                  <div className="absolute left-6 transform -translate-x-1/2 top-6 w-5 h-5 bg-gradient-to-r from-emerald-400 to-emerald-700 rounded-full border-4 border-gray-900 z-10 shadow-md shadow-emerald-400/40"></div>
                  
                  {/* Horizontal Connecting Line */}
                  <div className="absolute left-6 top-6 h-1 w-10 bg-gradient-to-r from-emerald-600 to-emerald-400 opacity-40 transform -translate-y-1/2"></div>
                  
                  {/* Event Card */}
                  <div className={`cyber-card group p-4 bg-gradient-to-br from-gray-800/60 to-gray-900/80 border ${getEventTypeBorder(event.type)} rounded-2xl backdrop-blur-sm hover:border-opacity-100 transition-all duration-500 transform hover:scale-[1.02]`}>
                    {/* Time Display - Mobile */}
                    <div className="mb-3 inline-block px-4 py-2 bg-gray-800/60 border border-gray-700 rounded-lg backdrop-blur-sm">
                      <div className="text-lg font-bold text-green-400">
                        {event.time}
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-r ${getEventTypeColor(event.type)} p-2.5 group-hover:shadow-lg`}>
                        {typeof event.icon === 'string' ? (
                          <span className="text-xl">{event.icon}</span>
                        ) : (
                          <event.icon className="w-7 h-7 text-white" />
                        )}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-white mb-2">{event.title}</h4>
                        <p className="text-gray-300 text-sm leading-relaxed">{event.description}</p>
                        <div className={`inline-block mt-3 px-3 py-1 rounded-full text-xs font-semibold ${
                          event.type === 'workshop' ? 'bg-emerald-500/20 text-emerald-500' :
                            event.type === 'seminar' ? 'bg-cyan-400/20 text-cyan-400' :
                            event.type === 'session' ? 'bg-emerald-400/20 text-emerald-400' :
                          event.type === 'break' ? 'bg-orange-400/20 text-orange-400' :
                          event.type === 'networking' ? 'bg-green-400/20 text-green-400' :
                          event.type === 'competition' ? 'bg-red-400/20 text-red-400' :
                          'bg-gray-400/20 text-gray-400'
                        }`}>
                          {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Timeline End Marker */}
            <div className="absolute left-6 transform -translate-x-1/2 bottom-0 w-6 h-6 bg-gradient-to-r from-lime-400 to-emerald-500 rounded-full border-4 border-gray-900 shadow-lg shadow-emerald-400/50"></div>
          </div>
        </div>
      </div>

      {/* Day Summary */}
      <div className="mt-16 text-center">
        <div className="cyber-card inline-block p-8 bg-gradient-to-br from-gray-800/60 to-gray-900/80 border border-emerald-400/30 rounded-2xl backdrop-blur-sm">
          <h4 className="text-2xl font-bold text-emerald-400 mb-4">
            {activeDay === 1 ? 'Day 1 Focus' : activeDay === 2 ? 'Day 2 Focus' : activeDay === 3 ? 'Day 3 Focus' : activeDay === 4 ? 'Day 4 Focus' : activeDay === 5 ? 'Day 5 Focus' : 'Day 6 Focus'}
          </h4>
          <p className="text-gray-300 max-w-2xl">
            {activeDay === 1
              ? 'Capture-the-flag competition, Kali setup, and hands-on offensive security challenges'
              : activeDay === 2
                ? 'Application security seminars, secure coding, and practical API defense workshops'
                : activeDay === 3
                  ? 'SOC operations, digital forensics, incident response, and blue team labs'
                  : activeDay === 4
                    ? 'Cloud security, DevSecOps, architecture, and infrastructure defense'
                    : activeDay === 5
                      ? 'Bug bounty, red team tradecraft, purple team competition, and findings showcase'
                      : 'Keynotes, research seminars, innovation demos, awards, and closing celebration'
            }
          </p>
        </div>
      </div>
    </div>
  );
};

export default Timeline;