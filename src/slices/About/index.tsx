import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Image from "next/image";

/**
 * Props for `About`.
 */
export type AboutProps = SliceComponentProps<Content.AboutSlice>;

/**
 * Component for "About" Slices.
 */
const About = ({ slice }: AboutProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="py-[100px] bg-white">
        <div className="flex w-[90%] max-w-[1170px] mx-auto relative">
          <div className="w-[48.5%] mr-[35.1px] my-auto">
            <div className="max-w-[432px] mb-4">
              <h1 className="font-[Saol Display] font-normal text-[55px] text-black pb-2.5 leading-[55px]">
                Luxury Outdoor Living
              </h1>
            </div>
            <div className="mb-4 max-w-[185px] text-left">
              <a
                href="https://www.google.com/search?q=hughes-landscape"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="https://hugheslandscape.co/wp-content/uploads/2024/02/Group-14014158.png"
                  alt="Hughes Landscape Logo"
                  width={740}
                  height={88}
                />
              </a>
            </div>
            <div className="mb-2.5 font-bold text-[#333]">
              <p>
                Landscaping &amp; Outdoor Construction Services in El Dorado
                County
              </p>
            </div>
            <div className="max-w-[538px] mb-4.5 text-[#333]">
              <p className="pb-[15px]">
                At Hughes Landscape, we specialize in transforming outdoor
                spaces into luxurious, serene retreats. Proudly serving El
                Dorado County and surrounding regions, we offer a range of
                services including hardscape design, water and fire features,
                and sophisticated lighting solutions.
              </p>
              <p>
                Whether you&apos;re looking to create a cozy backyard haven with
                a fire pit and ambient lighting, or an elegant outdoor
                entertainment area complete with a modern, stamped concrete
                patio, our expert team is dedicated to bringing your vision to
                life.
              </p>
            </div>
            <div>
              <a
                href="https://hugheslandscape.co/gallery/"
                className="inline-flex font-medium items-center leading-4 text-black text-base uppercase border border-black rounded-none py-[18px] px-[31px] transition duration-300"
              >
                Browse Our Services
              </a>
            </div>
          </div>
          <div className="w-[48.5%]">
            <div className="flex w-full">
              <div className="w-[46.9072%] mr-3">
                <div className="mb-6 w-full">
                  <Image
                    src="https://hugheslandscape.co/wp-content/uploads/2024/04/Rectangle-683.jpg"
                    alt="Landscape Design 1"
                    width={546}
                    height={741}
                    className="w-full h-[370px] object-cover"
                  />
                </div>
                <div className="w-full">
                  <Image
                    src="https://hugheslandscape.co/wp-content/uploads/2024/04/Rectangle-682.jpg"
                    alt="Landscape Design 2"
                    width={546}
                    height={356}
                    className="w-full h-[177px] object-cover"
                  />
                </div>
              </div>
              <div className="w-[46.9072%] ml-3">
                <div className="w-full">
                  <Image
                    src="https://hugheslandscape.co/wp-content/uploads/2024/04/Rectangle-684.jpg"
                    alt="Landscape Design 3"
                    width={546}
                    height={356}
                    className="w-full h-[177px] object-cover"
                  />
                </div>
                <div className="w-full mt-6">
                  <Image
                    src="https://hugheslandscape.co/wp-content/uploads/2024/04/Rectangle-685.jpg"
                    alt="Landscape Design 4"
                    width={546}
                    height={742}
                    className="w-full h-[370px] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
