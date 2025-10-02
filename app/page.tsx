'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Mail, Linkedin, Github, Twitter, FileText, Award, Users, Code, Database } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-effect">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-xl font-semibold gradient-text"
            >
              Daniel Jurg
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden md:flex space-x-8"
            >
              <a href="#about" className="text-gray-600 hover:text-accent-red transition-colors">About</a>
              <a href="#research" className="text-gray-600 hover:text-accent-red transition-colors">Research</a>
              <a href="#publications" className="text-gray-600 hover:text-accent-red transition-colors">Publications</a>
              <a href="#contact" className="text-gray-600 hover:text-accent-red transition-colors">Contact</a>
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-white"></div>
        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center mb-8"
            >
              <div className="relative">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                  <Image 
                    src="/profile-image.jpg" 
                    alt="Daniel Jurg - Digital Conservative Media Researcher"
                    width={160}
                    height={160}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-accent-red rounded-full border-4 border-white flex items-center justify-center">
                  <span className="text-white text-sm font-bold">DJ</span>
                </div>
              </div>
            </motion.div>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
                Digital
                <br />
                <span className="gradient-text">Researcher</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                I am a researcher working on <span className="accent-text font-semibold">conservative media</span> and digital audience engagement
              </p>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <button className="button-primary text-lg px-8 py-4">
                View My Research
              </button>
              <button className="button-secondary text-lg px-8 py-4">
                Download CV
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="pt-16"
            >
              <ArrowDown className="w-6 h-6 text-gray-400 animate-bounce mx-auto" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Me
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              PhD Candidate at Vrije Universiteit Brussel passionate about <span className="accent-text font-semibold">conservative media</span> and digital audience engagement
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold text-gray-900">My Journey</h3>
              <p className="text-gray-600 leading-relaxed">
                As a PhD Candidate at Vrije Universiteit Brussel, I study <span className="accent-text font-semibold">conservative media</span> 
                and digital audience engagement. My research focuses on understanding how digital platforms shape communication 
                and social behavior, particularly through YouTube&apos;s alternative influence network and reactionary fandoms.
              </p>
              <p className="text-gray-600 leading-relaxed">
                I&apos;m particularly interested in <span className="accent-text font-semibold">audience capture</span>, reactionary fandoms, and developing 
                innovative approaches to studying digital conservative media. My work includes the data-mirroring framework and 
                has been presented at international conferences and workshops.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="glass-effect p-6 rounded-2xl text-center card-hover">
                <Code className="w-8 h-8 text-accent-red mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Programming</h4>
                <p className="text-sm text-gray-600">Python, R, JavaScript, SQL</p>
              </div>
              <div className="glass-effect p-6 rounded-2xl text-center card-hover">
                <Database className="w-8 h-8 text-gray-700 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Digital Methods</h4>
                <p className="text-sm text-gray-600">YouTube API, Data Donation</p>
              </div>
              <div className="glass-effect p-6 rounded-2xl text-center card-hover">
                <Users className="w-8 h-8 text-gray-700 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Audience Engagement</h4>
                <p className="text-sm text-gray-600">Digital Audiences, Fandoms</p>
              </div>
              <div className="glass-effect p-6 rounded-2xl text-center card-hover">
                <Award className="w-8 h-8 text-accent-red mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Research</h4>
                <p className="text-sm text-gray-600">h-index: 2, 27 Citations</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Research Interests
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              My research focuses on <span className="accent-text font-semibold">conservative media</span> and digital audience engagement
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Conservative Media Analysis",
                description: "Studying reactionary fandoms, alternative influence networks, and conservative content on YouTube",
                icon: "📺",
                color: "from-accent-red to-gray-600"
              },
              {
                title: "Audience Capture",
                description: "Understanding how reactionary fandoms and alternative commentators influence their audiences",
                icon: "🎯",
                color: "from-gray-800 to-accent-red"
              },
              {
                title: "Reactionary Fandoms",
                description: "Studying how conservative audiences engage with alternative political content and form communities",
                icon: "👥",
                color: "from-gray-600 to-gray-800"
              },
              {
                title: "YouTube Alternative Influence",
                description: "Analyzing how conservative commentators build audiences and influence political discourse",
                icon: "📺",
                color: "from-gray-700 to-gray-900"
              },
              {
                title: "Content Moderation",
                description: "Investigating platform governance and the politics of content moderation",
                icon: "⚖️",
                color: "from-accent-red to-gray-800"
              },
              {
                title: "Alternative Influence",
                description: "Understanding reactionary fandoms and alternative influence networks online",
                icon: "🌐",
                color: "from-gray-800 to-accent-red"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-effect p-8 rounded-2xl card-hover"
              >
                <div className={`text-4xl mb-4 bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-apple-gray-900 mb-3">{item.title}</h3>
                <p className="text-apple-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Recent Publications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Selected publications showcasing my research in <span className="accent-text font-semibold">conservative media</span> and digital audience engagement
            </p>
          </motion.div>

          <div className="max-h-96 overflow-y-auto space-y-4 pr-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
            {[
              {
                title: "A free market in extreme speech: Scientific racism and bloodsports on YouTube",
                authors: "de Keulenaar, E., Tuters, M., Osborne-Carey, C., Jurg, D., Kisjes, I.",
                journal: "Digital Scholarship in the Humanities",
                year: "2021",
                type: "Journal Article",
                citations: "12"
              },
              {
                title: "Alex, DO NOT BACKPEDAL ON SANDY HOOK!: Reactionary Fandom, Cancel Culture, and the Possibility of &apos;Audience Capture&apos; on YouTube",
                authors: "Jurg, D., Tuters, M., Picone, I.",
                journal: "Television & New Media",
                year: "2025",
                type: "Journal Article",
                citations: "9"
              },
              {
                title: "Making sense of ambivalence: audience perceptions and uses of Ben Shapiro as an alternative political commentator",
                authors: "Jurg, D., Vis, S., Picone, I.",
                journal: "Information, Communication & Society",
                year: "2025",
                type: "Journal Article",
                citations: "2"
              },
              {
                title: "Data Mirroring: A methodological framework for data-donation-based interviews in media use research",
                authors: "Jurg, D. H. M., Vis, S., Picone, I. & Mathieu, D.",
                journal: "OSF",
                year: "2025",
                type: "Preprint"
              },
              {
                title: "Post-Authentic engagement with alternative political commentary on YouTube and twitch",
                authors: "Jurg, D., Luitse, D., Pouwels, S., Tuters, M., Kisjes, I.",
                journal: "Cultures of authenticity",
                year: "2022",
                type: "Book Chapter",
                citations: "2"
              },
              {
                title: "Inside the Cult of Stefan Molyneux: A Historical Exploration of Far-Right Radicalisation on YouTube",
                authors: "Jurg, D., Schlüter, M., Tuters, M.",
                journal: "Global Network on Extremism & Technology",
                year: "2023",
                type: "Report",
                citations: "1"
              },
              {
                title: "Cult Leaders, Masculinity, and White Supremacy on YouTube: The Case of Stefan Molyneux",
                authors: "Jurg, D., Schlüter, M., Tuters, M., Ronchetti, C. V., Newell, C., Hillen, B., et al.",
                journal: "Various",
                year: "2023",
                type: "Report",
                citations: "1"
              },
              {
                title: "YouTube&apos;s Safety Features Lost In Translation",
                authors: "Jurg, D. H. M., Romano, S., Çetin, R. B., Rieder, B.",
                journal: "AI Forensics",
                year: "2025",
                type: "Report"
              },
              {
                title: "Ranking authority: A critical audit of YouTube&apos;s content moderation",
                authors: "Jurg, D., Romano, S., Rieder, B.",
                journal: "OSF",
                year: "2025",
                type: "Preprint"
              },
              {
                title: "data-mirroring: v0. 1.0-demo",
                authors: "Jurg, D. H. M., Vis, S., Picone, I.",
                journal: "GitHub",
                year: "2025",
                type: "Software"
              },
              {
                title: "Audience Capture: Rethinking Influencer-Audience Relationships within the Alternative Influence Network",
                authors: "Jurg, D., Tuters, M., Trans, M., Costanzo, G., Carvalho Do Amaral, J., Wielga, J., et al.",
                journal: "Digital Methods Summer School 2024",
                year: "2024",
                type: "Conference Paper"
              },
              {
                title: "Designing Digital Inclusivity: Mapping and Shaping Online Environments for the LGBTQ+ Community (Data Donation Research)",
                authors: "Jurg, D., Ex, L., Nieuwenhuizen, W., Veerbeek, J., Peeters, S., Picone, I., Vis, S., et al.",
                journal: "Various",
                year: "2024",
                type: "Research Project"
              },
              {
                title: "Detecting misinformation on TikTok with a focus on teen users",
                authors: "Peeters, S., Espinoza, A., Roncalli, B., Martins, B. M. M., Sussan-Molson, C., et al.",
                journal: "Various",
                year: "2022",
                type: "Research Project"
              },
              {
                title: "Hey Alex…:(Re) constructing Parasocial Relationships with Alex Jones Through YouTube Comment Sections",
                authors: "Jurg, D. H. M., Tuters, M.",
                journal: "Various",
                year: "2022",
                type: "Research Project"
              },
              {
                title: "Alternative Commentaries on the 2020 US Presidential Election",
                authors: "Jurg, D. H. M., Luitse, D., Pouwels, S., Tuters, M., Antwi, P., Yüce, N., Richards, C., et al.",
                journal: "Various",
                year: "2021",
                type: "Research Project"
              },
              {
                title: "Digitale Disconnectie: Wanneer polarisatie viraal gaat",
                authors: "Jurg, D. H. M., Picone, I.",
                journal: "Various",
                year: "2021",
                type: "Research Project"
              },
              {
                title: "Grounds for War",
                authors: "Jurg, D. H. M.",
                journal: "Master&apos;s Thesis",
                year: "2020",
                type: "Thesis"
              },
              {
                title: "The Secret Histories of the Radical Right on 4chan/pol",
                authors: "Jurg, D., Wilson, J., de Keulenaar, E., Giorgi, G., Tuters, M., Kisjes, I., et al.",
                journal: "Various",
                year: "Various",
                type: "Research Project"
              }
            ].map((pub, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-effect p-6 rounded-xl card-hover"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{pub.title}</h3>
                    <p className="text-gray-600 mb-2">{pub.authors}</p>
                    <p className="text-sm text-gray-500">{pub.journal} ({pub.year})</p>
                  </div>
                  <div className="mt-4 md:mt-0 md:ml-6 flex flex-col items-end space-y-2">
                    <span className="inline-block bg-accent-red/10 text-accent-red px-3 py-1 rounded-full text-sm font-medium">
                      {pub.type}
                    </span>
                    {pub.citations && (
                      <span className="text-sm text-gray-500">
                        {pub.citations} citations
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I&apos;m always interested in discussing new research opportunities and collaborations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-900">Let&apos;s Connect</h3>
                <p className="text-gray-600 leading-relaxed">
                Whether you&apos;re interested in collaboration, have questions about my research, 
                or want to discuss potential opportunities, I&apos;d love to hear from you.
                </p>
              </div>

              <div className="space-y-4">
                <a 
                  href="mailto:daniel.jurg@vub.be" 
                  className="flex items-center space-x-3 text-gray-600 hover:text-accent-red transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span>daniel.jurg@vub.be</span>
                </a>
                <a 
                  href="https://researchportal.vub.be/en/persons/daniël-hans-marinus-jurg" 
                  className="flex items-center space-x-3 text-gray-600 hover:text-accent-red transition-colors"
                >
                  <FileText className="w-5 h-5" />
                  <span>VUB Research Portal</span>
                </a>
                <a 
                  href="https://github.com/dj-urg" 
                  className="flex items-center space-x-3 text-gray-600 hover:text-accent-red transition-colors"
                >
                  <Github className="w-5 h-5" />
                  <span>GitHub Profile</span>
                </a>
                <a 
                  href="https://orcid.org/0000-0003-1771-6673" 
                  className="flex items-center space-x-3 text-gray-600 hover:text-accent-red transition-colors"
                >
                  <Award className="w-5 h-5" />
                  <span>ORCID Profile</span>
                </a>
                <a 
                  href="https://scholar.google.com/citations?user=gLt7mFgAAAAJ&hl=en" 
                  className="flex items-center space-x-3 text-gray-600 hover:text-accent-red transition-colors"
                >
                  <FileText className="w-5 h-5" />
                  <span>Google Scholar</span>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-effect p-8 rounded-2xl"
            >
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Quick Links</h3>
              <div className="space-y-4">
                <a 
                  href="#" 
                  className="flex items-center justify-between p-4 rounded-lg bg-gray-50 hover:bg-accent-red/5 transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <FileText className="w-5 h-5 text-apple-blue" />
                    <span className="text-gray-700">Download CV</span>
                  </div>
                  <ArrowDown className="w-4 h-4 text-gray-400" />
                </a>
                <a 
                  href="#" 
                  className="flex items-center justify-between p-4 rounded-lg bg-gray-50 hover:bg-accent-red/5 transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <Award className="w-5 h-5 text-apple-green" />
                    <span className="text-gray-700">View Awards</span>
                  </div>
                  <ArrowDown className="w-4 h-4 text-gray-400" />
                </a>
                <a 
                  href="#" 
                  className="flex items-center justify-between p-4 rounded-lg bg-gray-50 hover:bg-accent-red/5 transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-apple-purple" />
                    <span className="text-gray-700">Research Group</span>
                  </div>
                  <ArrowDown className="w-4 h-4 text-gray-400" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4">Daniel Jurg</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              PhD Candidate | <span className="accent-text">Student of Conservative Media</span> | Digital Audience Engagement Specialist
            </p>
          </div>
          <div className="border-t border-gray-700 pt-8">
            <p className="text-gray-400">
              © 2024 Daniel Jurg. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
