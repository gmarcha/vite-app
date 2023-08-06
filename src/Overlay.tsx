import { css } from "@emotion/css";
import { IconBrandGithub } from "@tabler/icons-react";
import "@fontsource-variable/roboto-mono";

const Overlay = () => {
  return (
    <>
      <div
        className={css`
          font-size: 2rem;
          font-family: "Roboto Mono Variable";
          font-weight: 340;
          position: absolute;
          top: 1.2rem;
          left: 2.4rem;
          zindex: 1000;
        `}
      >
        gmarcha's room
      </div>
      <div
        className={css`
          padding: 0.7rem 0.5rem 0.3rem 0.6rem;
          border-radius: 100%;
          position: absolute;
          bottom: 1.8rem;
          left: 2.4rem;
          z-index: 1000;
          &:hover {
            background-color: #61677a26;
          }
          transition: background-color 0.2s ease-in-out;
        `}
      >
        <a href="https://github.com/gmarcha" target="_blank" rel="noreferrer">
          <IconBrandGithub size={48} stroke={1.5} color="white" />
        </a>
      </div>
    </>
  );
};

export default Overlay;
