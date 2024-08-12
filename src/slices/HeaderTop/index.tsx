import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import "./css.css";

/**
 * Props for `HeaderTop`.
 */
export type HeaderTopProps = SliceComponentProps<Content.HeaderTopSlice>;

/**
 * Component for "HeaderTop" Slices.
 */
const HeaderTop = ({ slice }: HeaderTopProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="section-brw section-yjg et_-z1e">
        <div className="row-rbx header-yrj header-1gg column-kn8 et_-ia3">
          <div className="column-a94 column-scj column-3tf et_-o5i">
            <div className="et_-vmg et_-yl2 header-4no box-x5q text-mbv et_-mtr">
              <div className="content-8bf">
                <div className="image-yl7">
                  <span className="image-ytm">
                    <img
                      width={56}
                      height={43}
                      src="https://hugheslandscape.co/wp-content/uploads/2024/02/Symbol-6.png"
                      className="et-gs7 et_-kdv"
                    />
                  </span>
                </div>
                <div className="container-ewk">
                  <div className="et_-xh5">
                    <p>
                      <a href="mailto:info@hugheslandscape.co">
                        info@hugheslandscape.co
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="et_-vmg et_-yl2 header-djr box-x5q text-mbv et_-mtr">
              <div className="content-8bf">
                <div className="image-yl7">
                  <span className="image-ytm">
                    <img
                      width={50}
                      height={50}
                      src="https://hugheslandscape.co/wp-content/uploads/2024/02/Symbol-7.png"
                      className="et-gs7 et_-kdv"
                    />
                  </span>
                </div>
                <div className="container-ewk">
                  <div className="et_-xh5">
                    <a href="tel:(916) 209-0298">(916) 209-0298</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="et_-vmg et_-yl2 header-enj box-x5q text-mbv et_-mtr">
              <div className="content-8bf">
                <div className="image-yl7">
                  <span className="image-ytm">
                    <img
                      width={48}
                      height={60}
                      src="https://hugheslandscape.co/wp-content/uploads/2024/02/Symbol-1.png"
                      className="et-gs7 et_-kdv"
                    />
                  </span>
                </div>
                <div className="container-ewk">
                  <div className="et_-xh5">
                    5170 Golden Foothill Pkwy, El Dorado Hills, CA 95762
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="column-a94 column-coe et_-o5i et-last-rxq">
            <ul className="et_-vmg media-sby header-wh6 box-qaq cle-yrt text-a8i">
              <li className="header-e3o icon-pim fa-mf4">
                <a
                  href="https://www.facebook.com/hugheslandscape.co/"
                  className="icon-49q et_-ok4"
                >
                  <span className="media-5r2">Follow</span>
                </a>
              </li>
              <li className="header-hlf icon-pim tag-1ok">
                <a
                  href="https://www.instagram.com/hugheslandscape.co/"
                  className="icon-49q et_-ok4"
                >
                  <span className="media-5r2">Follow</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderTop;
