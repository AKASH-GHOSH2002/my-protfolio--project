import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillYoutube,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={"https://avatars.githubusercontent.com/u/144939912?v=4"}
          alt="Founder"
        />

        <h2>Akash Ghosh</h2>
        <p>Motivation is temporary, but discipline last forever.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://www.linkedin.com/in/akash-ghosh-124b252b9/" target={"blank"}>
            <AiFillLinkedin/>
          </a>
          <a href="https://instagram.com/a.k.a.s.h___2002" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://github.com/AKASH-GHOSH2002" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
