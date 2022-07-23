import { graphql } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import * as React from 'react'
import LogoPrefixed from '../components/logo-prefixed/logo-prefixed';
import bg_top from '../images/bg_top_section.png';
import logo from '../images/logo.png';
import photoBanner from '../images/photo_banner.png';
import graphicDesignerSketchDesignLogo from '../images/graphic-designer-sketch-design-logo.jpg';

const IndexPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <section className="relative">
        <div className="max-w-6xl mx-auto">
          <div className="md:grid md:grid-cols-12">
            <div className="my-8 col-span-12 mx-auto md:mx-0 max-w-xl px-4 sm:px-6">
              <img className=""
                   src={logo}/>
            </div>
            <div className="order-2 md:col-span-7 h-[476px] overflow-hidden md:overflow-visible relative md:static">
              <img className="min-w-[502px] min-h-[497px] md:absolute md:bottom-0 absolute bottom-0"
                   src={bg_top}/>
              <div className="relative">
                <img className="absolute top-[-62px] md:top-[100px] right-[-35px] md:left-[133px] w-[485px]"
                     src={photoBanner}/>
              </div>
            </div>
            <div className="order-1 max-w-xl md:max-w-full mx-auto md:col-span-5 px-4 sm:px-6">
              <p className="text-[28px] leading-[37px] mt-3.5 md:mb-60 mb-9" dangerouslySetInnerHTML={{ __html: t('index.section-1.text-1') }} />
              <p className="font-semibold">{t('index.section-1.text-2')}</p>
              <div className="mt-6 mb-9">
                <a className="button-primary mr-2" href="#">{t('index.section-1.send-message')}</a>
                <a className="button-secondary" href="#">{t('index.section-1.see-portfolio')}</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-secondary text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-9">
          <div className="max-w-xl mx-auto md:mx-0">
            <p className="mb-6">
              {t('index.section-2.text-1')}
            </p>
            <p className="font-semibold">
              {t('index.section-2.text-2')}
            </p>
            <ul className="marker:content-['>_'] list-inside mt-6">
              <li>{t('index.section-2.topics-list.topic-1')}</li>
              <li>{t('index.section-2.topics-list.topic-2')}</li>              
              <li>{t('index.section-2.topics-list.topic-3')}</li>              
              <li>{t('index.section-2.topics-list.topic-4')}</li>
              <li>{t('index.section-2.topics-list.topic-5')}</li>
              <li>{t('index.section-2.topics-list.topic-6')}</li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-11">
          <header className="text-center text-lg font-semibold">{t('index.section-3.what-we-do')}</header>
          <div>
            <img src={graphicDesignerSketchDesignLogo}/>
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