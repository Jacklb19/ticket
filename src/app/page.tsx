import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-amber-500">
      <div className="relative scale-110">
        <div className="bg-white rounded-2xl shadow-2xl relative overflow-hidden">
          <div className="absolute bg-amber-500 rounded-full w-10 h-10 -top-4 left-[220px]" />
          <div className="absolute bg-amber-500 rounded-full w-10 h-10 -bottom-4 left-[220px]" />
          <div className="absolute top-6 bottom-6 left-[240px] border-l-2 border-dotted border-amber-400 z-10"></div>

          <div className="flex h-full">
            <div className="flex items-center justify-center pl-5">
              <div className="bg-white p-6">
                <Image
                  src="/qr.png"
                  alt="QR Code"
                  width={150}
                  height={150}
                  className="object-contain"
                />
              </div>
            </div>

            <div className="flex-1 px-10 py-8 flex flex-col justify-between">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <div className="text-sm text-gray-600 mb-2">
                    Mumbai,<br />India
                  </div>
                  <div className="text-7xl font-bold text-blue-900">
                    BOM
                  </div>
                  <div className="text-base mt-3 text-blue-900">
                    Wed, July 27<sup>th</sup><br />
                    1:00 AM
                  </div>
                </div>

                <div className="flex items-center justify-center mx-10 mt-15 flex-1 ">
                  <div className="flex flex-row items-center w-full">
                    <div className="w-18 border-t-2 border-dotted border-gray-400"></div>
                    <span className=" text-3xl text-blue-900">✈</span>
                    <div className="w-18 border-t-2 border-dotted border-gray-400"></div>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-sm text-gray-600 mb-2">
                    Amsterdam,<br />Netherlands
                  </div>
                  <div className="text-7xl font-bold text-blue-900 leading-none">
                    AMS
                  </div>
                  <div className="text-base mt-3 text-blue-900">
                    Thu, July 27<sup>th</sup><br />
                    8:30 AM
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-end text-lg">
                <div>
                  <div className="text-xs text-gray-400 mb-1">Passenger</div>
                  <div className="font-semibold text-blue-900">Nikita Sharma</div>
                </div>
                <div className="text-center">
                  <div className="text-xs text-gray-400 mb-1">Seat</div>
                  <div className="font-semibold text-blue-900">4A</div>
                </div>
                <div className="text-center">
                  <div className="text-xs text-gray-400 mb-1">Terminal</div>
                  <div className="font-semibold text-blue-900">D</div>
                </div>
                <div className="text-center">
                  <div className="text-xs text-gray-400 mb-1">Gate</div>
                  <div className="font-semibold text-blue-900">32</div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-gray-400 mb-1">Boarding</div>
                  <div className="font-semibold text-blue-900">12:40 PM</div>
                </div>
              </div>
            </div>

            <div className="w-16 bg-blue-900 rounded-r-2xl flex flex-col items-center justify-center text-white gap-14">
              <div className="transform -rotate-90 whitespace-nowrap text-sm font-medium mb-16">
                Boarding Pass
              </div>
              <div className="transform -rotate-90 whitespace-nowrap font-bold text-base mt-4">
                <div className="flex items-center">
                  <span className="text-amber-400 mr-2">✈</span>
                  JET AIRWAYS
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
