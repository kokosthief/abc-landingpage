import { logo } from "../assets";
import { footerLinks } from "../constants";
import styles from "../pages/HomePage/HomePage.style";

const Footer = () => (
  <section
    className={`${styles.flexCenter} ${styles.paddingY} flex-col bg-[#0a0a0a]`}
  >
    <div
      className={`${styles.flexStart} md:flex-row flex-col  mb-4 w-full bg-[#0a0a0a]`}
    >
      <div className="flex basis-3/12 flex-col mx-auto ">
        <img
          src={logo}
          alt="AlphaBotCalls"
          className="w-[106px] h-auto self-center md:self-start"
        />
      </div>

      <div className="w-full flex flex-wrap md:flex-row justify-around gap-4 text-center md:mt-0 mt-10 md:text-left">
        {footerLinks.map((footerlink) => (
          <div key={footerlink.title} className={`flex flex-col ss:my-0 my-4`}>
            <h4 className="font-league font-bold text-[22px] leading-[27px] text-white">
              {footerlink.title}
            </h4>
            <ul className="list-none mt-4">
              {footerlink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-notosans font-medium text-[16px] leading-[24px] text-white hover:text-orange cursor-pointer ${
                    index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                  }`}
                >
                  <a href={link.link} target="_blank" rel="noopener noreferrer">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] -mb-5 sm:-mb-9 border-t-[#3F3E45]">
      <p className="font-notosans font-normal text-center text-[16px] leading-[25px] text-white">
        Copyright Ⓒ 2023 AlphaBotCalls. All Rights Reserved.
      </p>

      {/* Social links*/}
      <ul className="flex my-4 md:order-1 md:ml-4 md:mb-0">
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/alphabotcalls"
            className="flex justify-center items-center bg-white text-[#0a0a0a] rounded-full hover:text-orange shadow transition duration-200 ease-in-out"
            aria-label="Twitter"
          >
            <svg
              className="w-8 h-8 fill-current"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z" />
            </svg>
          </a>
        </li>
        <li className="ml-4">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://t.me/AlphaBotCalls"
            className="flex justify-center items-center bg-white text-[#0a0a0a] rounded-full hover:text-orange shadow transition duration-200 ease-in-out"
            aria-label="Telegram"
          >
            <svg
              className="w-8 h-8 fill-current"
              viewBox="-8 -8 32 32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z" />
            </svg>
          </a>
        </li>
        <li className="ml-4">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://dexscreener.com/ethereum/0xD4d4B7b55B30fB096C30ad202e746d010B47dc30"
            className="flex justify-center items-center bg-white text-[#0a0a0a] rounded-full hover:text-orange shadow transition duration-200 ease-in-out"
            aria-label="DexScreener"
          >
            <svg
              className="w-8 h-8 fill-current"
              fill="#000000"
              fill-rule="evenodd"
              viewBox="-105 -105 450 500"
              xmlns="http://www.w3.org/2000/svg"
            >
              <svg>
                <path d="M151.818 106.866c9.177-4.576 20.854-11.312 32.545-20.541 2.465 5.119 2.735 9.586 1.465 13.193-.9 2.542-2.596 4.753-4.826 6.512-2.415 1.901-5.431 3.285-8.765 4.033-6.326 1.425-13.712.593-20.419-3.197m1.591 46.886l12.148 7.017c-24.804 13.902-31.547 39.716-39.557 64.859-8.009-25.143-14.753-50.957-39.556-64.859l12.148-7.017a5.95 5.95 0 003.84-5.845c-1.113-23.547 5.245-33.96 13.821-40.498 3.076-2.342 6.434-3.518 9.747-3.518s6.671 1.176 9.748 3.518c8.576 6.538 14.934 16.951 13.821 40.498a5.95 5.95 0 003.84 5.845zM126 0c14.042.377 28.119 3.103 40.336 8.406 8.46 3.677 16.354 8.534 23.502 14.342 3.228 2.622 5.886 5.155 8.814 8.071 7.897.273 19.438-8.5 24.796-16.709-9.221 30.23-51.299 65.929-80.43 79.589-.012-.005-.02-.012-.029-.018-5.228-3.992-11.108-5.988-16.989-5.988s-11.76 1.996-16.988 5.988c-.009.005-.017.014-.029.018-29.132-13.66-71.209-49.359-80.43-79.589 5.357 8.209 16.898 16.982 24.795 16.709 2.929-2.915 5.587-5.449 8.814-8.071C69.31 16.94 77.204 12.083 85.664 8.406 97.882 3.103 111.959.377 126 0m-25.818 106.866c-9.176-4.576-20.854-11.312-32.544-20.541-2.465 5.119-2.735 9.586-1.466 13.193.901 2.542 2.597 4.753 4.826 6.512 2.416 1.901 5.432 3.285 8.766 4.033 6.326 1.425 13.711.593 20.418-3.197" />
                <path d="M197.167 75.016c6.436-6.495 12.107-13.684 16.667-20.099l2.316 4.359c7.456 14.917 11.33 29.774 11.33 46.494l-.016 26.532.14 13.754c.54 33.766 7.846 67.929 24.396 99.193l-34.627-27.922-24.501 39.759-25.74-24.231L126 299.604l-41.132-66.748-25.739 24.231-24.501-39.759L0 245.25c16.55-31.264 23.856-65.427 24.397-99.193l.14-13.754-.016-26.532c0-16.721 3.873-31.578 11.331-46.494l2.315-4.359c4.56 6.415 10.23 13.603 16.667 20.099l-2.01 4.175c-3.905 8.109-5.198 17.176-2.156 25.799 1.961 5.554 5.54 10.317 10.154 13.953 4.48 3.531 9.782 5.911 15.333 7.161 3.616.814 7.3 1.149 10.96 1.035-.854 4.841-1.227 9.862-1.251 14.978L53.2 160.984l25.206 14.129a41.926 41.926 0 015.734 3.869c20.781 18.658 33.275 73.855 41.861 100.816 8.587-26.961 21.08-82.158 41.862-100.816a41.865 41.865 0 015.734-3.869l25.206-14.129-32.665-18.866c-.024-5.116-.397-10.137-1.251-14.978 3.66.114 7.344-.221 10.96-1.035 5.551-1.25 10.854-3.63 15.333-7.161 4.613-3.636 8.193-8.399 10.153-13.953 3.043-8.623 1.749-17.689-2.155-25.799l-2.01-4.175z" />
              </svg>
            </svg>
          </a>
        </li>
        <li className="pl-4">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://medium.com/@alphabotcalls"
            className="flex justify-center items-center bg-white text-[#0a0a0a] rounded-full hover:text-orange shadow transition duration-200 ease-in-out"
            aria-label="Medium"
          >
            <svg
              className="w-8 h-8 fill-current"
              viewBox="-6.5 -7 38 38"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4.37162 7.26396C4.39646 7.01656 4.30284 6.77204 4.11951 6.60553L2.2521 4.33862V4H8.05042L12.5322 13.9048L16.4725 4H22V4.33862L20.4034 5.88125C20.2657 5.98698 20.1974 6.16075 20.226 6.33275V17.6673C20.1974 17.8392 20.2657 18.013 20.4034 18.1188L21.9627 19.6614V20H14.1195V19.6614L15.7348 18.0811C15.8936 17.9212 15.8936 17.8742 15.8936 17.6296V8.46796L11.4024 19.9624H10.7955L5.56676 8.46796V16.1717C5.52316 16.4955 5.62991 16.8216 5.85621 17.0559L7.95705 19.6238V19.9624H2V19.6238L4.10084 17.0559C4.32549 16.8212 4.42601 16.493 4.37162 16.1717V7.26396Z" />
            </svg>
          </a>
        </li>
        <li className="pl-4">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.youtube.com/@AlphaBotCalls"
            className="flex justify-center items-center bg-white text-[#0a0a0a] rounded-full hover:text-orange shadow transition duration-200 ease-in-out"
            aria-label="Youtube"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 fill-current"
              viewBox="-64 -31.5 360 215"
            >
              <path d="M229.763 25.817c-2.699-10.162-10.65-18.165-20.747-20.881C190.716 0 117.333 0 117.333 0S43.951 0 25.651 4.936C15.554 7.652 7.602 15.655 4.904 25.817 0 44.237 0 82.667 0 82.667s0 38.43 4.904 56.85c2.698 10.162 10.65 18.164 20.747 20.881 18.3 4.935 91.682 4.935 91.682 4.935s73.383 0 91.683-4.935c10.097-2.717 18.048-10.72 20.747-20.88 4.904-18.422 4.904-56.851 4.904-56.851s0-38.43-4.904-56.85" />
              <path
                d="M93.333 117.558l61.334-34.89-61.334-34.893z"
                fill="#ffffff"
              />
            </svg>
          </a>
        </li>
      </ul>
    </div>
  </section>
);

export default Footer;
