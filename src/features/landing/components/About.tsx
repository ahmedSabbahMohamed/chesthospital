import React from 'react'
import Title from './Title';
import about from "../assets/images/about.png"
// import LearnMoreBtn from './LearnMoreBtn';
import { useTranslation } from 'react-i18next';

const About: React.FC = () => {
  const { t } = useTranslation()

  return (
    <section>
      <div id="about" className="min-w-screen min-h-screen pt-8">
        <Title firstHalf={t("about")} secondHalf={t("us")} />

        <div className="container mx-auto flex gap-8 flex-col lg:flex-row items-center py-5">
          {/* left */}
          <div className="">
            <img src={about} alt="about-img" />
          </div>

          {/* right */}
          <div className="px-5 text-center">
            <h2 className="text-black text-[46px] font-medium capitalize leading-[70px] mb-8">
              {t("about_title")}
            </h2>
            <p className="text-black text-opacity-60 text-lg font-normal leading-[27px] mb-[51px]">
              {t("about_desc")}
              <br />
              <br />
              {t("about_desc")}
              <br />
              {t("about_desc")}
            </p>

            {/* <LearnMoreBtn /> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About