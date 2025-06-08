import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { staggerChildren, fadeInUpVariants } from "@/lib/utils";

const socialLinks = [
<<<<<<< HEAD
	{ icon: "github", url: "https://github.com/Mayurgit03", label: "GitHub" },
	{
		icon: "linkedin",
		url: "https://www.linkedin.com/in/mayurp03/",
		label: "LinkedIn",
	},
	{ icon: "twitter", url: "http://x.com/0xMayur_p", label: "Twitter" },
];

const personalInfo = [
	{ icon: "user", label: "Name", value: "Mayur .P" },
	{ icon: "envelope", label: "Email", value: "mayurkarthick2006@gmail.com" },
	{ icon: "map-marker-alt", label: "Location", value: "Coimbatore, Tamil Nadu" },
	{ icon: "laptop-code", label: "Status", value: "Fresher" },
];

const skills = [
	"React.js",
	"TypeScript",
	"Node.js",
	"Solidity",
	"Ethers.js",
	"Web3.js",
	"Java",
	"C",
	"Golang",
];

export default function About() {
	const { ref, inView } = useIntersectionObserver({
		threshold: 0.1,
		triggerOnce: true,
	});

	return (
		<>
			<section id="about" className="py-20 relative" ref={ref}>
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<motion.div
						className="text-center mb-12"
						initial="hidden"
						animate={inView ? "visible" : "hidden"}
						variants={fadeInUpVariants()}
					>
						<h2 className="text-3xl md:text-4xl font-bold mb-4">
							About <span className="text-primary">Me</span>
						</h2>
					</motion.div>

					<motion.div
						className="grid grid-cols-1 lg:grid-cols-2 gap-12"
						initial="hidden"
						animate={inView ? "visible" : "hidden"}
						variants={staggerChildren(0.2)}
					>
						<motion.div variants={staggerChildren(0.1)}>
							<motion.h3
								className="text-2xl font-semibold mb-4"
								variants={fadeInUpVariants()}
							>
								Blockchain Developer | Hackathon Enthusiast
							</motion.h3>

							<motion.p
								className="text-muted-foreground mb-6 leading-relaxed"
								variants={fadeInUpVariants(0.1)}
							>
								Hey, I'm Mayur — a passionate blockchain developer and Web3
								enthusiast on a mission to build the future with code. I specialize
								in crafting decentralized applications, AI-driven systems, and
								initiative IoT solutions that solve real problems.
							</motion.p>

							<motion.p
								className="text-muted-foreground mb-8 leading-relaxed"
								variants={fadeInUpVariants(0.2)}
							>
								With 10+ hackathons under my belt and multiple finalist positions, I
								thrive in fast-paced environments where bold ideas turn into
								powerful, scalable tech. Whether it's deploying smart contracts,
								integrating wallets, or building cutting-edge DApps, I bring energy,
								curiosity, and clean code to everything I do. Let's build something
								incredible.
							</motion.p>

							<motion.div
								className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8"
								variants={staggerChildren(0.05)}
							>
								{personalInfo.map((item, index) => (
									<motion.div
										key={index}
										className="flex items-center"
										variants={fadeInUpVariants()}
									>
										<i
											className={`fas fa-${item.icon} text-primary mr-3`}
										></i>
										<div>
											<p className="text-sm text-muted-foreground">
												{item.label}
											</p>
											<p className="font-medium">{item.value}</p>
										</div>
									</motion.div>
								))}
							</motion.div>

							<motion.div
								className="flex space-x-4"
								variants={fadeInUpVariants(0.3)}
							>
								{socialLinks.map((social, index) => (
									<a
										key={index}
										href={social.url}
										aria-label={social.label}
										className="w-10 h-10 flex items-center justify-center rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-colors duration-300"
									>
										<i className={`fab fa-${social.icon}`}></i>
									</a>
								))}
							</motion.div>
						</motion.div>

						<motion.div
							variants={fadeInUpVariants(0.3)}
							className="bg-background/80 p-6 rounded-xl"
						>
							<h3 className="text-xl font-semibold mb-6 flex items-center">
								<i className="fas fa-code text-primary mr-3"></i>
								My Technical Skills
							</h3>

							<div className="relative">
								<div className="mb-6 flex justify-end">
									<motion.div
										className="bg-background px-4 py-2 rounded-lg"
										initial={{ opacity: 0, y: 20 }}
										animate={
											inView
												? { opacity: 1, y: 0 }
												: { opacity: 0, y: 20 }
										}
										transition={{ delay: 0.4, duration: 0.6 }}
									>
										<p className="text-sm font-mono">
											<span className="text-primary">const</span>{" "}
											<span className="text-accent">passion</span> ={" "}
											<span className="text-green-400">'coding'</span>;
										</p>
									</motion.div>
								</div>

								<div className="flex flex-wrap gap-2 mt-4">
									{skills.map((skill, index) => (
										<motion.span
											key={index}
											className="px-3 py-1.5 bg-muted text-sm rounded-full hover:bg-primary/20 transition-colors duration-300 cursor-default"
											initial={{ opacity: 0, y: 20 }}
											animate={
												inView
													? { opacity: 1, y: 0 }
													: { opacity: 0, y: 20 }
											}
											transition={{ delay: 0.1 * index, duration: 0.4 }}
										>
											{skill}
										</motion.span>
									))}
								</div>

								<div className="mt-8">
									<h4 className="font-medium mb-4">My Development Process</h4>
									<ol className="space-y-3 list-decimal list-inside text-muted-foreground">
										<motion.li
											initial={{ opacity: 0, x: -20 }}
											animate={
												inView
													? { opacity: 1, x: 0 }
													: { opacity: 0, x: -20 }
											}
											transition={{ delay: 0.5, duration: 0.4 }}
										>
											Understanding requirements and planning architecture
										</motion.li>
										<motion.li
											initial={{ opacity: 0, x: -20 }}
											animate={
												inView
													? { opacity: 1, x: 0 }
													: { opacity: 0, x: -20 }
											}
											transition={{ delay: 0.6, duration: 0.4 }}
										>
											Designing wireframes and UI components
										</motion.li>
										<motion.li
											initial={{ opacity: 0, x: -20 }}
											animate={
												inView
													? { opacity: 1, x: 0 }
													: { opacity: 0, x: -20 }
											}
											transition={{ delay: 0.7, duration: 0.4 }}
										>
											Implementing core functionality and features
										</motion.li>
										<motion.li
											initial={{ opacity: 0, x: -20 }}
											animate={
												inView
													? { opacity: 1, x: 0 }
													: { opacity: 0, x: -20 }
											}
											transition={{ delay: 0.8, duration: 0.4 }}
										>
											Testing, optimizing and refining the experience
										</motion.li>
									</ol>
								</div>
							</div>
						</motion.div>
					</motion.div>
				</div>
			</section>
			{/* Resume Section */}
			<section id="resume" className="py-20 bg-background/90">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-12">
						<h2 className="text-3xl md:text-4xl font-bold mb-4">
							<span className="text-primary">Resume</span>
						</h2>
						<p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
							Explore my journey, experience, and education. Download my resume for a detailed overview of my skills and achievements.
						</p>
						<a
							href="/resume.pdf"
							download
							className="inline-block px-6 py-2 rounded-lg bg-primary text-white font-semibold hover:bg-accent transition-colors duration-300"
						>
							<i className="fas fa-download mr-2"></i>
							Download Resume
						</a>
					</div>
					<div className="max-w-3xl mx-auto">
						<ol className="relative border-l-2 border-primary/30 pl-8">
							<li className="mb-10 ml-4">
								<div className="absolute w-3 h-3 bg-primary rounded-full mt-1.5 -left-1.5 border-2 border-white"></div>
								<h3 className="text-xl font-semibold">Blockchain Developer Intern</h3>
								<span className="block text-sm text-muted-foreground mb-1">XYZ Labs &mdash; Summer 2023</span>
								<p className="text-muted-foreground">
									Developed and deployed smart contracts, collaborated on DApp projects, and contributed to open-source blockchain tooling.
								</p>
							</li>
							<li className="mb-10 ml-4">
								<div className="absolute w-3 h-3 bg-primary rounded-full mt-1.5 -left-1.5 border-2 border-white"></div>
								<h3 className="text-xl font-semibold">Finalist & Winner</h3>
								<span className="block text-sm text-muted-foreground mb-1">Multiple Hackathons &mdash; 2022-2024</span>
								<p className="text-muted-foreground">
									Achieved finalist and winner positions in 10+ national and international hackathons, building innovative Web3 and AI solutions.
								</p>
							</li>
							<li className="ml-4">
								<div className="absolute w-3 h-3 bg-primary rounded-full mt-1.5 -left-1.5 border-2 border-white"></div>
								<h3 className="text-xl font-semibold">B.Tech Computer Science</h3>
								<span className="block text-sm text-muted-foreground mb-1">ABC University &mdash; 2021-2025</span>
								<p className="text-muted-foreground">
									Specialized in blockchain, distributed systems, and AI. Led student developer clubs and organized tech events.
								</p>
							</li>
						</ol>
					</div>
				</div>
			</section>
		</>
	);
=======
  { icon: "github", url: "https://github.com/Mayurgit03", label: "GitHub" },
  { icon: "linkedin", url: "https://www.linkedin.com/in/mayurp03/", label: "LinkedIn" },
  { icon: "twitter", url: "http://x.com/0xMayur_p", label: "Twitter" }
];

const personalInfo = [
  { icon: "user", label: "Name", value: "Mayur .P" },
  { icon: "envelope", label: "Email", value: "mayurkarthick2006@gmail.com" },
  { icon: "map-marker-alt", label: "Location", value: "Coimbatore, Tamil Nadu" },
  { icon: "laptop-code", label: "Status", value: "Fresher" }
];

const skills = [
  "React.js", "Next.js", "JavaScript", "TypeScript", "Node.js",
  "Tailwind CSS", "UI/UX Design", "Figma", "Responsive Design"
];

export default function About() {
  const { ref, inView } = useIntersectionObserver({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="about" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUpVariants()}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerChildren(0.2)}
        >
          <motion.div 
            variants={staggerChildren(0.1)}
          >
            <motion.h3 
              className="text-2xl font-semibold mb-4"
              variants={fadeInUpVariants()}
            >
              Blockchain Developer | Hackathon Enthusiast
            </motion.h3>
            
            <motion.p 
              className="text-muted-foreground mb-6 leading-relaxed"
              variants={fadeInUpVariants(0.1)}
            >
              Hey, I'm Mayur — a passionate blockchain developer and Web3 enthusiast on a mission to build the future with code. 
              I specialize in crafting decentralized applications, AI-driven systems, and innovative IoT solutions that solve real problems.
            </motion.p>
            
            <motion.p 
              className="text-muted-foreground mb-8 leading-relaxed"
              variants={fadeInUpVariants(0.2)}
            >
              With 10+ hackathons under my belt and multiple finalist positions, I thrive in fast-paced environments where bold ideas 
              turn into powerful, scalable tech. Whether it's deploying smart contracts, integrating wallets, or building cutting-edge DApps, 
              I bring energy, curiosity, and clean code to everything I do. Let's build something incredible.
            </motion.p>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8"
              variants={staggerChildren(0.05)}
            >
              {personalInfo.map((item, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center"
                  variants={fadeInUpVariants()}
                >
                  <i className={`fas fa-${item.icon} text-primary mr-3`}></i>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <p className="font-medium">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div 
              className="flex space-x-4"
              variants={fadeInUpVariants(0.3)}
            >
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.url} 
                  aria-label={social.label}
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-colors duration-300"
                >
                  <i className={`fab fa-${social.icon}`}></i>
                </a>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div
            variants={fadeInUpVariants(0.3)}
            className="bg-background/80 p-6 rounded-xl border border-border"
          >
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <i className="fas fa-code text-primary mr-3"></i>
              My Technical Skills
            </h3>
            
            <div className="relative">
              <motion.div 
                className="absolute -top-4 -right-4 bg-background px-4 py-2 rounded-lg shadow-lg z-20 border border-border"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <p className="text-sm font-mono">
                  <span className="text-primary">const</span>{" "}
                  <span className="text-accent">passion</span> ={" "}
                  <span className="text-green-400">'coding'</span>;
                </p>
              </motion.div>
              
              <div className="flex flex-wrap gap-2 mt-4">
                {skills.map((skill, index) => (
                  <motion.span
                    key={index}
                    className="px-3 py-1.5 bg-muted text-sm rounded-full hover:bg-primary/20 transition-colors duration-300 cursor-default"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.1 * index, duration: 0.4 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
              
              <div className="mt-8">
                <h4 className="font-medium mb-4">My Development Process</h4>
                <ol className="space-y-3 list-decimal list-inside text-muted-foreground">
                  <motion.li
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 0.5, duration: 0.4 }}
                  >
                    Understanding requirements and planning architecture
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 0.6, duration: 0.4 }}
                  >
                    Designing wireframes and UI components
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 0.7, duration: 0.4 }}
                  >
                    Implementing core functionality and features
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 0.8, duration: 0.4 }}
                  >
                    Testing, optimizing and refining the experience
                  </motion.li>
                </ol>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
>>>>>>> 215ecdedc1769aa92bd69336bb1c1a1adbdfcd33
}
