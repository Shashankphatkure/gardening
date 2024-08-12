import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Image from "next/image";
import "./css.css";

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
      <div className="section-g58 section-17t">
        <div className="row-z7c footer-gql column-fmi">
          <div className="column-hjy column-kdk et_-qsr et-last-4xt">
            <div className="et_-aqp text-i26 footer-1oz text-jpi">
              <div className="text-scd">
                <h2>Follow Us ON Instagram</h2>
              </div>
            </div>
            <div className="et_-aqp text-i26 footer-oao et_-6kb text-jpi">
              <div className="text-scd">
                <h3>
                  <a href="https://www.instagram.com/hugheslandscape.co/">
                    @hugheslandscape.co
                  </a>
                </h3>
              </div>
            </div>
            <div className="et_-aqp image-7ez footer-r5o">
              <span className="image-arh">
                <img
                  width={2880}
                  height={604}
                  src="https://hugheslandscape.co/wp-content/uploads/2024/02/Group-515289-1.png"
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
