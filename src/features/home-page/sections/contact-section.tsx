"use client";

import { footerConfig } from "@/constants/footer-config";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export const ContactSection = () => {
  return (
    <section
      id="contact"
      className="container py-12 scroll-mt-24"
    >
      <div className="z-10 w-full md:w-auto  col-span-2 flex flex-col justify-center items-start md:items-start text-start px-10 overflow-hidden">
        <motion.h1
          className="px-3 md-px-0 text-foreground text-5xl md:text-8xl font-bold mb-3"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.1,
            type: "spring",
          }}
          viewport={{
            once: true,
          }}
        >
          Get In Touch
        </motion.h1>
        <hr />
        <motion.p
          className="title text-xl mt-4 tracking-wider text-muted-foreground leading-[1.7rem] md:mb-5"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            type: "spring",
          }}
          viewport={{
            once: true,
          }}
        >
          Feel free to contact me if you have any questions or just want to say hi.
        </motion.p>
        <motion.p
          className="title text-xl mt-4 tracking-wider text-muted-foreground leading-[1.7rem] mb-5"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.3,
            type: "spring",
          }}
          viewport={{
            once: true,
          }}
        >
          <a href={`mailto:${footerConfig.contact.email}?subject=Hello&body=Hello%20SCIT`}>{footerConfig.contact.email}</a>
        </motion.p>
        {/* icons */}
        <div className="flex justify-center items-center space-x-4">
          <motion.a
            href={`mailto:${footerConfig.contact.email}?subject=Hello&body=Hello%20SCIT`}
            className="flex justify-center items-center bg-gray-700 w-14 h-14 rounded-full text-gray-100 hover:bg-gray-400 transition-all ease-in-out duration-300"
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              y: { delay: 0.1 },
              opacity: { delay: 0.2 },
            }}
            viewport={{
              once: true,
            }}
          >
            <FaEnvelope className="text-3xl" />
          </motion.a>

          <motion.a
            href={footerConfig.socialMedia.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center bg-gray-700 w-14 h-14 rounded-full text-gray-100 hover:bg-gray-400 transition-all ease-in-out duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              y: { delay: 0.2 },
              opacity: { delay: 0.3 },
            }}
            viewport={{
              once: true,
            }}
          >
            <FaGithub className="text-3xl" />
          </motion.a>
          <motion.a
            href={footerConfig.socialMedia.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center bg-gray-700 w-14 h-14 rounded-full text-gray-100 hover:bg-gray-400 transition-all ease-in-out duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              y: { delay: 0.3 },
              opacity: { delay: 0.4 },
            }}
            viewport={{
              once: true,
            }}
          >
            <FaInstagram className="text-3xl" />
          </motion.a>
          <motion.a
            href={footerConfig.socialMedia.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center bg-gray-700 w-14 h-14 rounded-full text-gray-100 hover:bg-gray-400 transition-all ease-in-out duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              y: { delay: 0.4 },
              opacity: { delay: 0.5 },
            }}
            viewport={{
              once: true,
            }}
          >
            <FaLinkedin className="text-3xl" />
          </motion.a>
          {/* <motion.a
            href="https://discordapp.com/users/bloody#6118"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center bg-gray-700 w-14 h-14 rounded-full text-gray-100 hover:bg-gray-400 transition-all ease-in-out duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              y: { delay: 0.5 },
              opacity: { delay: 0.6 },
            }}
          >
            <FaDiscord className="text-3xl" />
          </motion.a> */}
        </div>
      </div>
    </section>
  );
};
