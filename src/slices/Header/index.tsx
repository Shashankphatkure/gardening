import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import "./css.css";

/**
 * Props for `Header`.
 */
export type HeaderProps = SliceComponentProps<Content.HeaderSlice>;

/**
 * Component for "Header" Slices.
 */
const Header = ({ slice }: HeaderProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="section-svf section-93g section-rj2" style={{}}>
        <div className="row-3ye header-746 header-rqn" style={{ zIndex: 3 }}>
          <div className="column-l5l column-jyy et_-82y et-last-tko column-j7y">
            <div className="et_-c58 menu-1go header-aik text-6gn dropdown-ldb menu-6by menu-o8k">
              <div className="container-nmz">
                <div className="menu-r62">
                  <div className="menu-p41">
                    <a href="https://hugheslandscape.co/">
                      <img
                        width={901}
                        height={240}
                        src="https://hugheslandscape.co/wp-content/uploads/2024/02/Untitled-1.png"
                      />
                    </a>
                  </div>
                </div>
                <div className="menu-hep">
                  <div className="menu-1i3">
                    <nav className="menu-jtv">
                      <ul className="menu-oxc nav-2wb">
                        <li className="menu-1kx">
                          <a href="https://hugheslandscape.co/">Home</a>
                        </li>
                        <li className="menu-y1h et-73z">
                          <a href="#">Services</a>
                          <ul className="menu-t35">
                            <li>
                              <a href="https://hugheslandscape.co/firepits-and-fireplaces/">
                                Fire Pits &amp; Fireplaces
                              </a>
                            </li>
                            <li>
                              <a href="https://hugheslandscape.co/swimming-pools/">
                                Swimming Pools
                              </a>
                            </li>
                            <li>
                              <a href="https://hugheslandscape.co/patios-walkways/">
                                Patios &amp; Walkways
                              </a>
                            </li>
                            <li>
                              <a href="https://hugheslandscape.co/walls/">
                                Walls
                              </a>
                            </li>
                            <li>
                              <a href="https://hugheslandscape.co/patio-covers/">
                                Patio Covers
                              </a>
                            </li>
                            <li>
                              <a href="https://hugheslandscape.co/outdoor-kitchens/">
                                Outdoor Kitchens
                              </a>
                            </li>
                            <li>
                              <a href="https://hugheslandscape.co/planting/">
                                Planting
                              </a>
                            </li>
                            <li>
                              <a href="https://hugheslandscape.co/water-features/">
                                Water Features
                              </a>
                            </li>
                            <li>
                              <a href="https://hugheslandscape.co/synthetic-turf/">
                                Synthetic Turf
                              </a>
                            </li>
                            <li>
                              <a href="https://hugheslandscape.co/outdoor-lighting/">
                                Outdoor Lighting
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="https://hugheslandscape.co/about/">
                            About Us
                          </a>
                        </li>
                        <li>
                          <a href="https://hugheslandscape.co/gallery/">
                            Gallery
                          </a>
                        </li>
                        <li>
                          <a href="https://hugheslandscape.co/blog/">
                            Resources
                          </a>
                        </li>
                        <li className="btn-y1v">
                          <a href="https://hugheslandscape.co/estimate/">
                            Get An Estimate
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  <div className="menu-4t7">
                    <div className="nav-rxo">
                      <span className="menu-5o1" />
                      <ul className="menu-oki">
                        <li className="menu-1kx">
                          <a href="https://hugheslandscape.co/">Home</a>
                        </li>
                        <li className="menu-y1h">
                          <a href="#">Services</a>
                          <ul className="menu-t35">
                            <li>
                              <a href="https://hugheslandscape.co/firepits-and-fireplaces/">
                                Fire Pits &amp; Fireplaces
                              </a>
                            </li>
                            <li>
                              <a href="https://hugheslandscape.co/swimming-pools/">
                                Swimming Pools
                              </a>
                            </li>
                            <li>
                              <a href="https://hugheslandscape.co/patios-walkways/">
                                Patios &amp; Walkways
                              </a>
                            </li>
                            <li>
                              <a href="https://hugheslandscape.co/walls/">
                                Walls
                              </a>
                            </li>
                            <li>
                              <a href="https://hugheslandscape.co/patio-covers/">
                                Patio Covers
                              </a>
                            </li>
                            <li>
                              <a href="https://hugheslandscape.co/outdoor-kitchens/">
                                Outdoor Kitchens
                              </a>
                            </li>
                            <li>
                              <a href="https://hugheslandscape.co/planting/">
                                Planting
                              </a>
                            </li>
                            <li>
                              <a href="https://hugheslandscape.co/water-features/">
                                Water Features
                              </a>
                            </li>
                            <li>
                              <a href="https://hugheslandscape.co/synthetic-turf/">
                                Synthetic Turf
                              </a>
                            </li>
                            <li>
                              <a href="https://hugheslandscape.co/outdoor-lighting/">
                                Outdoor Lighting
                              </a>
                            </li>
                          </ul>
                          <a href="#" className="toggle-wpv" />
                        </li>
                        <li>
                          <a href="https://hugheslandscape.co/about/">
                            About Us
                          </a>
                        </li>
                        <li>
                          <a href="https://hugheslandscape.co/gallery/">
                            Gallery
                          </a>
                        </li>
                        <li>
                          <a href="https://hugheslandscape.co/blog/">
                            Resources
                          </a>
                        </li>
                        <li className="btn-y1v">
                          <a href="https://hugheslandscape.co/estimate/">
                            Get An Estimate
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
