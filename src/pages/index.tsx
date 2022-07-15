import * as React from 'react'
import Layout from '../layouts';
import bg_top from '../images/bg_top_section.png';
import logo from '../images/logo.png';
import photoBanner from '../images/photo_banner.png';

const IndexPage = () => {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="md:grid md:grid-cols-12 md-gap-8">
          <div className="max-w-xl md:max-w-none md:max-w-full mx-auto md:col-span-5">
            <img className="my-8"
                 src={logo}/>
            <div className="text-5xl mt-16 mb-12">
              Projekty graficzne skrojone na miarę Twoich potrzeb.
            </div>
            <div className="mb-36">
              <button className="bg-yellow-300 py-4 px-5 border-slate-900 border">Napisz wiadomość</button>
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
  )
}

export default IndexPage
