import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import "./css.css";

/**
 * Props for `Services`.
 */
export type ServicesProps = SliceComponentProps<Content.ServicesSlice>;

/**
 * Component for "Services" Slices.
 */
const Services = ({ slice }: ServicesProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="section-kxv section-z67 column-vn4 et_-88w section-djm">
        <div className="row-n3b et_-rof">
          <div className="column-ax6 column-qbs footer-hfv et_-kc1 column-kw3">
            <div className="et_-7vr et_-iq3 et_-855 footer-p2w footer-poa text-reo et_-bkr">
              <div className="content-qar">
                <div className="image-5gv">
                  <span className="image-se7 image-cxf">
                    <img
                      width={200}
                      height={200}
                      src="https://hugheslandscape.co/wp-content/uploads/2024/02/Mask-group-8.png"
                      className="et-n84 et_-d82"
                    />
                  </span>
                </div>
                <div className="container-nwz">
                  <h4 className="header-aza">
                    <span>Address</span>
                  </h4>
                  <div className="et_-trg">
                    <p>5170 Golden Foothill Pkwy, El Dorado Hills, CA 95762</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="et_-7vr et_-iq3 et_-855 footer-rra footer-poa text-reo et_-bkr">
              <div className="content-qar">
                <div className="image-5gv">
                  <span className="image-se7 image-cxf">
                    <img
                      width={180}
                      height={180}
                      src="https://hugheslandscape.co/wp-content/uploads/2024/02/Mask-group-10.png"
                      className="et-n84 et_-d82"
                    />
                  </span>
                </div>
                <div className="container-nwz">
                  <h4 className="header-aza">
                    <span>Phone Number</span>
                  </h4>
                  <div className="et_-trg">
                    <p>
                      <a href="tel:(916)%20209-0298">(916) 209-0298</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="et_-iq3 et_-855 footer-o8g footer-poa text-reo et_-bkr">
              <div className="content-qar">
                <div className="image-5gv">
                  <span className="image-se7 image-cxf">
                    <img
                      width={200}
                      height={201}
                      src="https://hugheslandscape.co/wp-content/uploads/2024/02/Mask-group-9.png"
                      className="et-n84 et_-d82"
                    />
                  </span>
                </div>
                <div className="container-nwz">
                  <h4 className="header-aza">
                    <span>Email</span>
                  </h4>
                  <div className="et_-trg">
                    <p>
                      <a href="mailto:info@hugheslandscape.co">
                        info@hugheslandscape.co
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="column-ax6 column-s3k et_-kc1 et-last-d5v">
            <div className="row-pt3 footer-v2i et_-vem">
              <div className="column-ax6 column-499 footer-l4o">
                <div className="et_-iq3 text-9ot footer-tiw text-reo">
                  <div className="text-irx">
                    <h3>LINKS</h3>
                  </div>
                </div>
                <div className="et_-iq3 et_-eiq footer-rib et_-fri et_-66t">
                  <div className="et_-kmg" />
                </div>
                <div className="et_-iq3 text-9ot footer-n9y footer-d3r text-reo">
                  <div className="text-irx">
                    <a href="https://hugheslandscape.co/residential/">
                      Residential
                    </a>
                    <br />
                    <a href="https://hugheslandscape.co/design/">Design</a>
                    <br />
                    <a href="https://hugheslandscape.co/careers/">Careers</a>
                    <br />
                    <a href="https://hugheslandscape.co/about/">About Us</a>
                    <br />
                    <a href="https://hugheslandscape.co/gallery/">Gallery</a>
                    <br />
                    <a href="https://hugheslandscape.co/blog/">Blog</a>
                  </div>
                </div>
              </div>
              <div className="column-ax6 column-499 footer-t2t">
                <div className="et_-iq3 text-9ot footer-cld text-reo">
                  <div className="text-irx">
                    <h3>our Services</h3>
                  </div>
                </div>
                <div className="et_-iq3 et_-eiq footer-in8 et_-fri et_-66t">
                  <div className="et_-kmg" />
                </div>
                <div className="et_-iq3 text-9ot footer-6sz footer-d3r text-reo">
                  <div className="text-irx">
                    <a href="https://hugheslandscape.co/fire-pits-fireplaces/">
                      Fire Pits &amp; Fireplaces
                    </a>
                    <br />
                    <a href="https://hugheslandscape.co/swimming-pools/">
                      Swimming Pools
                    </a>
                    <br />
                    <a href="https://hugheslandscape.co/patios-walkways/">
                      Patios &amp; Walkways
                    </a>
                    <br />
                    <a href="https://hugheslandscape.co/walls/">Walls</a>
                    <br />
                    <a href="https://hugheslandscape.co/patio-covers/">
                      Patio Covers
                    </a>
                    <br />
                    <a href="https://hugheslandscape.co/outdoor-kitchens/">
                      Outdoor Kitchens
                    </a>
                    <br />
                    <a href="https://hugheslandscape.co/planting/">Planting</a>
                    <br />
                    <a href="https://hugheslandscape.co/water-features/">
                      Water Features
                    </a>
                    <br />
                    <a href="https://hugheslandscape.co/synthetic-turf/">
                      Synthetic Turf
                    </a>
                    <br />
                    <a href="https://hugheslandscape.co/outdoor-lighting/">
                      Outdoor Lighting
                    </a>
                  </div>
                </div>
              </div>
              <div className="column-ax6 column-499 et-last-d5v">
                <div className="et_-iq3 image-sw5 footer-kho">
                  <a href="https://hugheslandscape.co/">
                    <span className="image-se7">
                      <img
                        width={976}
                        height={940}
                        src="https://hugheslandscape.co/wp-content/uploads/2024/02/Mask-group-11.png"
                      />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
