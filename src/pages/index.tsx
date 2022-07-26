import { graphql } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import * as React from 'react'
import bg_top from '../images/bg_top_section.png';
import logo from '../images/logo.png';
import photoBanner from '../images/photo_banner.png';
import homepageFeatureLogo from '../images/home-page-features/logo.jpg';
import homepageFeatureBranding from '../images/home-page-features/branding.jpg';
import homepageFeatureSocialMedia from '../images/home-page-features/social-media.jpg';
import homepageFeatureWebPages from '../images/home-page-features/web-pages.jpg';
import CenteredContainer from '../components/centered-container/centered-container';
import HomepageFeature from '../components/homepage-feature/homepage-feature';

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
              <img className="absolute top-[-39px] md:top-auto w-auto h-[389px] md:h-auto right-[-37px] md:right-[-68px] md:bottom-[-48px] lg:bottom-[-150px]" src={photoBanner} aria-hidden="true" />
            </div>
            <div className="order-1 max-w-xl md:max-w-full md:col-span-6">
              <p className="text-[28px] md:text-5xl leading-[37px] mt-3.5 md:mt-32 mb-9 md:mb-8" dangerouslySetInnerHTML={{ __html: t('index.section-1.text-1') }} />
              <p className="font-semibold font-secondary md:text-2xl" dangerouslySetInnerHTML={{ __html: t('index.section-1.text-2')}} />
              <div className="mt-6 md:mt-11 mb-9 md:mb-28">
                <a className="button-primary mr-2" href="#">{t('index.section-1.send-message')}</a>
                <a className="button-secondary" href="#">{t('index.section-1.see-portfolio')}</a>
              </div>
            </div>
          </div>
        </CenteredContainer>
      </section>
      <section className="bg-secondary text-white py-9 md:py-20">
        <CenteredContainer>
          <div className="max-w-xl">
            <p className="mb-6">
              {t('index.section-2.text-1')}
            </p>
            <p className="font-semibold">
              {t('index.section-2.text-2')}
            </p>
          </div>
          <ul className="marker:content-['>_'] list-inside font-semibold mt-6 md:grid md:grid-cols-3">
            {Array.from({ length: 6 }, (_, idx) => <li>{t(`index.section-2.topics-list.topic-${idx + 1}`)}</li>)}
          </ul>
        </CenteredContainer>
      </section>
      <section className="py-11">
        <CenteredContainer>
          <header className="text-center text-lg font-semibold mb-16">{t('index.section-3.what-we-do')}</header>
          <HomepageFeature title={t('index.section-3.logo')}
            description={t('index.section-3.logo-description')}
            image={homepageFeatureLogo} 
            button={<a href="#">{t('shared.know-more')}</a>} />
          <HomepageFeature title={t('index.section-3.branding')}
            description={t('index.section-3.branding-description')}
            image={homepageFeatureBranding} 
            button={<a href="#">{t('shared.know-more')}</a>} 
            reverse />
          <HomepageFeature title={t('index.section-3.social-media')}
            description={<span dangerouslySetInnerHTML={{ __html: t('index.section-3.social-media-description') }} />}
            image={homepageFeatureSocialMedia} 
            button={<a href="#">{t('shared.know-more')}</a>} />
          <HomepageFeature title={t('index.section-3.web-pages')}
            description={t('index.section-3.web-pages-description')}
            image={homepageFeatureWebPages} 
            button={<a href="#">{t('shared.know-more')}</a>} 
            reverse />
        </CenteredContainer>
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