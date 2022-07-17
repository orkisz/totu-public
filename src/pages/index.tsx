import * as React from 'react'
import bg_top from '../images/bg_top_section.png';
import logo from '../images/logo.png';
import photoBanner from '../images/photo_banner.png';

const IndexPage = () => {
  return (
    <>
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="md:grid md:grid-cols-12 md-gap-8">
            <div className="max-w-xl md:max-w-none md:max-w-full mx-auto md:col-span-5">
              <img className="my-8"
                   src={logo}/>
              <div className="text-5xl mt-16 md:mb-60 mb-12">
                Projekty graficzne skrojone na miarę Twoich potrzeb.
              </div>
            </div>
            <div className="hidden md:block md:col-span-7">
              <img className="absolute bottom-0"
                   src={bg_top}/>
              <div className="relative hidden md:block">
                <img className="absolute top-[100px] left-[133px]"
                     src={photoBanner}/>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-secondary text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-24">
          <div className="max-w-xl mx-auto md:mx-0">
            <p className="mb-6">
              Jesteś właścicielem firmy i chcesz odświeżyć jej wizerunek, a może jesteś na etapie zakładania
              działalności i potrzebujesz kreacji graficznej swojego projektu?
            </p>
            <p>
              TOTU mamy ciekawe pomysły, które odzwierciedlą charakter Twojej marki.
            </p>
            <a className="inline-block bg-primary text-secondary font-bold py-3 px-10 mt-16 border border-secondary rounded" href="#">Portfolio</a>
          </div>
        </div>
      </section>
    </>
  )
}

export default IndexPage;
