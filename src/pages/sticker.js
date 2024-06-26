import Link from 'next/link'
import React from 'react'

const Sticker = () => {
  return (
    <div>
           <section className="text-gray-600 body-font md:px-20 sm:px-2">
        <div className="container px-5 py-24 mx-auto">
          <div className="md:flex flex-wrap -m-4">
            {[1, 2, 3, 3, 4, 4, 4, 4, 4, 4, 44].map((item, i) => (
              <div key={i} className="lg:w-1/4 md:w-1/2 p-4">
                <Link href={"/product/tshit-black"}>
                  <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-md">
                    <img
                      className="lg:h-48 md:h-36 w-full object-cover object-center"
                      src="https://m.media-amazon.com/images/I/A1GtzEaO3KL._AC_UL320_.jpg"
                      alt="tsjot"
                    />
                    <div className="p-6">
                      <h3 className="tracking-widest text-xs title-font mb-1 text-gray-500">
                        fdfdfsf
                      </h3>
                      <h2 className="title-font text-lg font-medium text-gray-900">
                        yrsjiy
                      </h2>
                      <p className="mt-1">2333</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Sticker