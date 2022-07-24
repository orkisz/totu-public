import { graphql } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import * as React from 'react'
import LogoPrefixed from '../components/logo-prefixed/logo-prefixed';
import bg_top from '../images/bg_top_section.png';
import logo from '../images/logo.png';
import photoBanner from '../images/photo_banner.png';
import graphicDesignerSketchDesignLogo from '../images/graphic-designer-sketch-design-logo.jpg';
import CenteredContainer from '../components/centered-container/centered-container';

const IndexPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <section>
        <CenteredContainer className="relative">
          <div className="md:grid md:grid-cols-12">
            <div className="col-span-12 md:mx-0 max-w-xl">
              <img className=""
                src={logo} />
            </div>
            <div className="order-2 md:col-span-6 h-[348px] md:h-full relative">
              <div className="absolute h-full md:h-[calc(100%+65px)] w-[calc(100vw+1rem)] bg-cover -left-4 md:left-0 md:bottom-0 md:bg-contain" style={{ backgroundImage: `url('${bg_top}')` }} aria-hidden="true" />
              <img className="absolute top-[-39px] md:top-auto w-auto h-[389px] md:h-auto right-[-37px] md:right-[-68px] md:bottom-[-150px]" src={photoBanner} aria-hidden="true" />
              {/* <div className="relative">
                <img className="absolute top-[-62px] md:top-[100px] right-[-35px] md:left-[133px] w-[485px]"
                     src={photoBanner}/>
              </div> */}
            </div>
            <div className="order-1 max-w-xl md:max-w-full md:col-span-6">
              <p className="text-[28px] leading-[37px] mt-3.5 md:mb-60 mb-9" dangerouslySetInnerHTML={{ __html: t('index.section-1.text-1') }} />
              <p className="font-semibold">{t('index.section-1.text-2')}</p>
              <div className="mt-6 mb-9">
                <a className="button-primary mr-2" href="#">{t('index.section-1.send-message')}</a>
                <a className="button-secondary" href="#">{t('index.section-1.see-portfolio')}</a>
              </div>
            </div>
          </div>
        </CenteredContainer>
      </section>
      <section className="bg-secondary text-white py-9">
        <CenteredContainer className="max-w-3xl">
          <div className="max-w-3xl">
            <p className="mb-6">
              {t('index.section-2.text-1')}
            </p>
            <p className="font-semibold">
              {t('index.section-2.text-2')}
            </p>
            <ul className="marker:content-['>_'] list-inside mt-6">
              {Array.from({ length: 6 }, (_, idx) => <li>{t(`index.section-2.topics-list.topic-${idx + 1}`)}</li>)}
            </ul>
          </div>
        </CenteredContainer>
      </section>
      <section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-11">
          <header className="text-center text-lg font-semibold">{t('index.section-3.what-we-do')}</header>
          <div>
            <img src={graphicDesignerSketchDesignLogo} />
            <LogoPrefixed>LOGO</LogoPrefixed>
          </div>

        </div>
      </section>
    </>
  )
}

export default IndexPage;

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: {language: {eq: $language}}) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;