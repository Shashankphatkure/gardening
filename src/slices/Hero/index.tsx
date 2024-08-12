import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div
        style={{
          backgroundBlendMode: "overlay",
          backgroundImage:
            'url("https://hugheslandscape.co/wp-content/uploads/2024/04/Hughes-Landscape.jpeg")',
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          padding: "184px 50px",
          borderStyle: "solid",
          borderWidth: "0px",
          width: "100%",
          flexGrow: 1,
          backgroundPosition: "50% 50%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          position: "relative",
          boxSizing: "border-box",
          margin: "0px",
          border: "0px solid rgb(0, 0, 0)",
          outline: "rgb(0, 0, 0) none 0px",
          fontSize: "14px",
          textSizeAdjust: "100%",
          verticalAlign: "baseline",
        }}
      >
        <div
          data-hash="dica_divi_carouselitem_2"
          style={{
            display: "flex",
            flexDirection: "column",
            height: "443.6px",
            flexShrink: 0,
            boxSizing: "border-box",
            margin: "0px",
            padding: "0px",
            border: "0px none rgb(0, 0, 0)",
            outline: "rgb(0, 0, 0) none 0px",
            fontSize: "14px",
            textSizeAdjust: "100%",
            verticalAlign: "baseline",
            background:
              "rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box",
          }}
        >
          <div
            style={{
              zIndex: 10,
              flexGrow: 1,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "50% 50%",
              fontSize: "14px",
              display: "flex",
              flexDirection: "column",
              width: "100%",
              maxWidth: "677px",
              margin: "auto",
              alignItems: "center",
              boxSizing: "border-box",
              padding: "0px",
              border: "0px none rgb(0, 0, 0)",
              outline: "rgb(0, 0, 0) none 0px",
              textSizeAdjust: "100%",
              verticalAlign: "baseline",
              background:
                "rgba(0, 0, 0, 0) none no-repeat scroll 50% 50% / cover padding-box border-box",
            }}
          >
            <h4
              style={{
                textTransform: "uppercase",
                color: "rgb(255, 255, 255)",
                textAlign: "center",
                paddingBottom: "20px",
                fontSize: "90px",
                lineHeight: "99px",
                letterSpacing: "normal",
                fontFamily: '"Saol Display"',
                fontWeight: 400,
                boxSizing: "border-box",
                margin: "0px",
                padding: "0px 0px 20px",
                border: "0px none rgb(255, 255, 255)",
                outline: "rgb(255, 255, 255) none 0px",
                textSizeAdjust: "100%",
                verticalAlign: "baseline",
                background:
                  "rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box",
              }}
            >
              Luxury Outdoor Living
            </h4>
            <h6
              style={{
                textTransform: "uppercase",
                fontSize: "26px",
                color: "rgb(255, 255, 255)",
                textAlign: "center",
                letterSpacing: "normal",
                fontFamily: '"Saol Display"',
                fontWeight: 400,
                boxSizing: "border-box",
                paddingBottom: "10px",
                lineHeight: "26px",
                margin: "0px",
                padding: "0px 0px 10px",
                border: "0px none rgb(255, 255, 255)",
                outline: "rgb(255, 255, 255) none 0px",
                textSizeAdjust: "100%",
                verticalAlign: "baseline",
                background:
                  "rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box",
              }}
            >
              Serving El Dorado County &amp; Surrounding Areas
            </h6>
            <div
              style={{
                textAlign: "center",
                marginTop: "10px",
                boxSizing: "border-box",
                margin: "10px 0px 0px",
                padding: "0px",
                border: "0px none rgb(0, 0, 0)",
                outline: "rgb(0, 0, 0) none 0px",
                fontSize: "14px",
                textSizeAdjust: "100%",
                verticalAlign: "baseline",
                background:
                  "rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box",
              }}
            >
              <a
                href="https://hugheslandscape.co/estimate/"
                data-icon="$"
                style={{
                  borderColor: "rgb(0, 118, 55)",
                  fontSize: "16px",
                  paddingRight: "52px",
                  paddingLeft: "24px",
                  color: "rgb(255, 255, 255)",
                  fontFamily:
                    "Montserrat, Helvetica, Arial, Lucida, sans-serif",
                  fontWeight: 500,
                  backgroundColor: "rgb(0, 118, 55)",
                  marginTop: "25px",
                  padding: "19px 52px 19px 24px",
                  transition: "0.3s",
                  display: "inline-block",
                  lineHeight: "16px",
                  borderRadius: "0px",
                  fontStyle: "normal",
                  textTransform: "uppercase",
                  textDecoration: "none solid rgb(255, 255, 255)",
                  borderWidth: "0.8px",
                  position: "relative",
                  backgroundSize: "cover",
                  backgroundPosition: "50% 50%",
                  backgroundRepeat: "no-repeat",
                  transitionDuration: "0.3s, 0.3s",
                  transitionProperty: "all",
                  boxSizing: "border-box",
                  margin: "25px 0px 0px",
                  outline: "rgb(255, 255, 255) none 0px",
                  textSizeAdjust: "100%",
                  verticalAlign: "baseline",
                  background:
                    "rgb(0, 118, 55) none no-repeat scroll 50% 50% / cover padding-box border-box",
                }}
              >
                GET AN ESTIMATE
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
