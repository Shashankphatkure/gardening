import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

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
      <div
        style={{
          padding: "100px 0px",
          paddingTop: "100px",
          paddingBottom: "100px",
          position: "relative",
          backgroundColor: "rgb(255, 255, 255)",
          backgroundPosition: "50% 50%",
          backgroundSize: "cover",
          boxSizing: "border-box",
          margin: "0px",
          border: "0px none rgb(0, 0, 0)",
          outline: "rgb(0, 0, 0) none 0px",
          fontSize: "15px",
          textSizeAdjust: "100%",
          verticalAlign: "baseline",
          background:
            "rgb(255, 255, 255) none repeat scroll 50% 50% / cover padding-box border-box",
        }}
      >
        <div
          style={{
            padding: "0px",
            display: "flex",
            width: "90%",
            maxWidth: "1170px",
            backgroundSize: "cover",
            backgroundPosition: "50% 50%",
            backgroundRepeat: "no-repeat",
            margin: "auto",
            position: "relative",
            boxSizing: "border-box",
            border: "0px none rgb(0, 0, 0)",
            outline: "rgb(0, 0, 0) none 0px",
            fontSize: "15px",
            textSizeAdjust: "100%",
            verticalAlign: "baseline",
            background:
              "rgba(0, 0, 0, 0) none no-repeat scroll 50% 50% / cover padding-box border-box",
          }}
        >
          <div
            style={{
              WebkitBoxOrdinalGroup: 2,
              order: 1,
              padding: "0px",
              width: "48.5%",
              marginRight: "35.1px",
              paddingTop: "0px",
              paddingBottom: "0px",
              margin: "auto",
              backgroundSize: "cover",
              backgroundPosition: "50% 50%",
              backgroundRepeat: "no-repeat",
              float: "left",
              position: "relative",
              zIndex: 2,
              minHeight: "1px",
              mixBlendMode: "normal",
              boxSizing: "border-box",
              border: "0px none rgb(0, 0, 0)",
              outline: "rgb(0, 0, 0) none 0px",
              fontSize: "15px",
              textSizeAdjust: "100%",
              verticalAlign: "baseline",
              background:
                "rgba(0, 0, 0, 0) none no-repeat scroll 50% 50% / cover padding-box border-box",
            }}
          >
            <div
              style={{
                maxWidth: "432px",
                marginTop: "0px",
                marginBottom: "0px",
                width: "100%",
                overflowWrap: "break-word",
                animationTimingFunction: "linear",
                animationDuration: "0.2s",
                position: "relative",
                backgroundSize: "cover",
                backgroundPosition: "50% 50%",
                backgroundRepeat: "no-repeat",
                textAlign: "left",
                boxSizing: "border-box",
                margin: "0px",
                padding: "0px",
                border: "0px none rgb(0, 0, 0)",
                outline: "rgb(0, 0, 0) none 0px",
                fontSize: "15px",
                textSizeAdjust: "100%",
                verticalAlign: "baseline",
                background:
                  "rgba(0, 0, 0, 0) none no-repeat scroll 50% 50% / cover padding-box border-box",
              }}
            >
              <div
                style={{
                  position: "relative",
                  paddingBottom: "0px",
                  boxSizing: "border-box",
                  margin: "0px",
                  padding: "0px",
                  border: "0px none rgb(0, 0, 0)",
                  outline: "rgb(0, 0, 0) none 0px",
                  fontSize: "15px",
                  textSizeAdjust: "100%",
                  verticalAlign: "baseline",
                  background:
                    "rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box",
                }}
              >
                <h1
                  style={{
                    fontFamily: '"Saol Display"',
                    fontWeight: 400,
                    fontSize: "55px",
                    color: "rgb(0, 0, 0)",
                    boxSizing: "border-box",
                    paddingBottom: "10px",
                    lineHeight: "55px",
                    margin: "0px",
                    padding: "0px 0px 10px",
                    border: "0px none rgb(0, 0, 0)",
                    outline: "rgb(0, 0, 0) none 0px",
                    textSizeAdjust: "100%",
                    verticalAlign: "baseline",
                    background:
                      "rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box",
                  }}
                >
                  Luxury Outdoor Living
                </h1>
              </div>
            </div>
            <div
              style={{
                marginBottom: "16px",
                maxWidth: "185px",
                textAlign: "left",
                marginLeft: "0px",
                display: "block",
                marginRight: "auto",
                lineHeight: "0px",
                animationTimingFunction: "linear",
                animationDuration: "0.2s",
                position: "relative",
                backgroundSize: "cover",
                backgroundPosition: "50% 50%",
                backgroundRepeat: "no-repeat",
                boxSizing: "border-box",
                padding: "0px",
                border: "0px none rgb(0, 0, 0)",
                outline: "rgb(0, 0, 0) none 0px",
                fontSize: "15px",
                textSizeAdjust: "100%",
                verticalAlign: "baseline",
                background:
                  "rgba(0, 0, 0, 0) none no-repeat scroll 50% 50% / cover padding-box border-box",
              }}
            >
              <a
                href="https://www.google.com/search?q=hughes-landscape&amp;rlz=1C1CHBF_enIN1003IN1003&amp;oq=&amp;gs_lcrp=EgZjaHJvbWUqCQgFECMYJxjqAjIJCAAQIxgnGOoCMgkIARAjGCcY6gIyCQgCECMYJxjqAjIJCAMQIxgnGOoCMgkIBBAjGCcY6gIyCQgFECMYJxjqAjIJCAYQIxgnGOoCMgkIBxAjGCcY6gLSAQkzNDcxajBqMTWoAgiwAgE&amp;sourceid=chrome&amp;ie=UTF-8"
                target="_blank"
                style={{
                  boxSizing: "border-box",
                  textDecoration: "none solid rgb(46, 163, 242)",
                  color: "rgb(46, 163, 242)",
                  margin: "0px",
                  padding: "0px",
                  border: "0px none rgb(46, 163, 242)",
                  outline: "rgb(46, 163, 242) none 0px",
                  fontSize: "15px",
                  textSizeAdjust: "100%",
                  verticalAlign: "baseline",
                  background:
                    "rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    position: "relative",
                    maxWidth: "100%",
                    boxSizing: "border-box",
                    margin: "0px",
                    padding: "0px",
                    border: "0px none rgb(46, 163, 242)",
                    outline: "rgb(46, 163, 242) none 0px",
                    fontSize: "15px",
                    textSizeAdjust: "100%",
                    verticalAlign: "baseline",
                    background:
                      "rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box",
                  }}
                >
                  <img
                    decoding="async"
                    width="740"
                    height="88"
                    src="https://hugheslandscape.co/wp-content/uploads/2024/02/Group-14014158.png"
                    alt=""
                    title="Group 14014158"
                    srcSet="https://hugheslandscape.co/wp-content/uploads/2024/02/Group-14014158.png 740w, https://hugheslandscape.co/wp-content/uploads/2024/02/Group-14014158-480x57.png 480w"
                    sizes="(min-width: 0px) and (max-width: 480px) 480px, (min-width: 481px) 740px, 100vw"
                    style={{
                      position: "relative",
                      boxSizing: "border-box",
                      maxWidth: "100%",
                      height: "auto",
                      margin: "0px",
                      padding: "0px",
                      border: "0px none rgb(46, 163, 242)",
                      outline: "rgb(46, 163, 242) none 0px",
                      fontSize: "15px",
                      textSizeAdjust: "100%",
                      verticalAlign: "baseline",
                      background:
                        "rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box",
                    }}
                  />
                </span>
              </a>
            </div>
            <div
              style={{
                marginBottom: "10px",
                fontWeight: 700,
                color: "rgb(51, 51, 51)",
                overflowWrap: "break-word",
                animationTimingFunction: "linear",
                animationDuration: "0.2s",
                position: "relative",
                backgroundSize: "cover",
                backgroundPosition: "50% 50%",
                backgroundRepeat: "no-repeat",
                textAlign: "left",
                boxSizing: "border-box",
                padding: "0px",
                border: "0px none rgb(51, 51, 51)",
                outline: "rgb(51, 51, 51) none 0px",
                fontSize: "15px",
                textSizeAdjust: "100%",
                verticalAlign: "baseline",
                background:
                  "rgba(0, 0, 0, 0) none no-repeat scroll 50% 50% / cover padding-box border-box",
              }}
            >
              <div
                style={{
                  position: "relative",
                  paddingBottom: "0px",
                  boxSizing: "border-box",
                  margin: "0px",
                  padding: "0px",
                  border: "0px none rgb(51, 51, 51)",
                  outline: "rgb(51, 51, 51) none 0px",
                  fontSize: "15px",
                  textSizeAdjust: "100%",
                  verticalAlign: "baseline",
                  background:
                    "rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box",
                }}
              >
                <p
                  style={{
                    boxSizing: "border-box",
                    paddingBottom: "0px",
                    margin: "0px",
                    padding: "0px",
                    border: "0px none rgb(51, 51, 51)",
                    outline: "rgb(51, 51, 51) none 0px",
                    fontSize: "15px",
                    textSizeAdjust: "100%",
                    verticalAlign: "baseline",
                    background:
                      "rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box",
                  }}
                >
                  Landscaping &amp; Outdoor Construction Services in El Dorado
                  County
                </p>
              </div>
            </div>
            <div
              style={{
                maxWidth: "538px",
                marginBottom: "18px",
                color: "rgb(51, 51, 51)",
                overflowWrap: "break-word",
                animationTimingFunction: "linear",
                animationDuration: "0.2s",
                position: "relative",
                backgroundSize: "cover",
                backgroundPosition: "50% 50%",
                backgroundRepeat: "no-repeat",
                textAlign: "left",
                boxSizing: "border-box",
                margin: "0px 0px 18px",
                padding: "0px",
                border: "0px none rgb(51, 51, 51)",
                outline: "rgb(51, 51, 51) none 0px",
                fontSize: "15px",
                textSizeAdjust: "100%",
                verticalAlign: "baseline",
                background:
                  "rgba(0, 0, 0, 0) none no-repeat scroll 50% 50% / cover padding-box border-box",
              }}
            >
              <div
                style={{
                  position: "relative",
                  paddingBottom: "0px",
                  boxSizing: "border-box",
                  margin: "0px",
                  padding: "0px",
                  border: "0px none rgb(51, 51, 51)",
                  outline: "rgb(51, 51, 51) none 0px",
                  fontSize: "15px",
                  textSizeAdjust: "100%",
                  verticalAlign: "baseline",
                  background:
                    "rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box",
                }}
              >
                <p
                  style={{
                    boxSizing: "border-box",
                    paddingBottom: "15px",
                    margin: "0px",
                    padding: "0px 0px 15px",
                    border: "0px none rgb(51, 51, 51)",
                    outline: "rgb(51, 51, 51) none 0px",
                    fontSize: "15px",
                    textSizeAdjust: "100%",
                    verticalAlign: "baseline",
                    background:
                      "rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box",
                  }}
                >
                  At Hughes Landscape, we specialize in transforming outdoor
                  spaces into luxurious, serene retreats. Proudly serving El
                  Dorado County and surrounding regions, we offer a range of
                  services including hardscape design, water and fire features,
                  and sophisticated lighting solutions.
                </p>
                <p
                  style={{
                    boxSizing: "border-box",
                    paddingBottom: "0px",
                    margin: "0px",
                    padding: "0px",
                    border: "0px none rgb(51, 51, 51)",
                    outline: "rgb(51, 51, 51) none 0px",
                    fontSize: "15px",
                    textSizeAdjust: "100%",
                    verticalAlign: "baseline",
                    background:
                      "rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box",
                  }}
                >
                  Whether you're looking to create a cozy backyard haven with a
                  fire pit and ambient lighting, or an elegant outdoor
                  entertainment area complete with a modern, stamped concrete
                  patio, our expert team is dedicated to bringing your vision to
                  life.
                </p>
              </div>
            </div>
            <div
              style={{
                marginBottom: "0px",
                animationTimingFunction: "linear",
                animationDuration: "0.2s",
                position: "relative",
                backgroundSize: "cover",
                backgroundPosition: "50% 50%",
                backgroundRepeat: "no-repeat",
                boxSizing: "border-box",
                padding: "0px",
                border: "0px none rgb(0, 0, 0)",
                outline: "rgb(0, 0, 0) none 0px",
                fontSize: "15px",
                textSizeAdjust: "100%",
                verticalAlign: "baseline",
                background:
                  "rgba(0, 0, 0, 0) none no-repeat scroll 50% 50% / cover padding-box border-box",
              }}
            >
              <a
                href="https://hugheslandscape.co/gallery/"
                style={{
                  transition: "0.3s",
                  padding: "18px 31px",
                  display: "inline-flex",
                  fontWeight: 500,
                  alignItems: "center",
                  lineHeight: "16px",
                  color: "rgb(0, 0, 0)",
                  fontSize: "16px",
                  borderColor: "rgb(0, 0, 0)",
                  borderRadius: "0px",
                  fontStyle: "normal",
                  textTransform: "uppercase",
                  textDecoration: "none solid rgb(0, 0, 0)",
                  borderWidth: "0.8px",
                  position: "relative",
                  backgroundColor: "rgba(0, 0, 0, 0)",
                  backgroundSize: "cover",
                  backgroundPosition: "50% 50%",
                  backgroundRepeat: "no-repeat",
                  border: "0.8px solid rgb(0, 0, 0)",
                  transitionDuration: "0.3s",
                  transitionProperty: "all",
                  boxSizing: "border-box",
                  paddingRight: "31px",
                  paddingLeft: "31px",
                  margin: "0px",
                  outline: "rgb(0, 0, 0) none 0px",
                  textSizeAdjust: "100%",
                  verticalAlign: "baseline",
                  background:
                    "rgba(0, 0, 0, 0) none no-repeat scroll 50% 50% / cover padding-box border-box",
                }}
              >
                Browse Our Services
              </a>
            </div>
          </div>
          <div
            style={{
              WebkitBoxOrdinalGroup: 2,
              order: 1,
              marginRight: "0px",
              width: "48.5%",
              paddingTop: "0px",
              paddingBottom: "0px",
              backgroundSize: "cover",
              backgroundPosition: "50% 50%",
              backgroundRepeat: "no-repeat",
              float: "left",
              position: "relative",
              zIndex: 2,
              minHeight: "1px",
              mixBlendMode: "normal",
              boxSizing: "border-box",
              margin: "0px",
              padding: "0px",
              border: "0px none rgb(0, 0, 0)",
              outline: "rgb(0, 0, 0) none 0px",
              fontSize: "15px",
              textSizeAdjust: "100%",
              verticalAlign: "baseline",
              background:
                "rgba(0, 0, 0, 0) none no-repeat scroll 50% 50% / cover padding-box border-box",
            }}
          >
            <div
              style={{
                display: "flex",
                width: "100%",
                padding: "0px",
                paddingTop: "0px",
                paddingBottom: "0px",
                backgroundSize: "cover",
                backgroundPosition: "50% 50%",
                backgroundRepeat: "no-repeat",
                position: "relative",
                boxSizing: "border-box",
                margin: "0px",
                border: "0px none rgb(0, 0, 0)",
                outline: "rgb(0, 0, 0) none 0px",
                fontSize: "15px",
                textSizeAdjust: "100%",
                verticalAlign: "baseline",
                background:
                  "rgba(0, 0, 0, 0) none no-repeat scroll 50% 50% / cover padding-box border-box",
              }}
            >
              <div
                style={{
                  marginRight: "12px",
                  width: "46.9072%",
                  backgroundSize: "cover",
                  backgroundPosition: "50% 50%",
                  backgroundRepeat: "no-repeat",
                  float: "left",
                  position: "relative",
                  zIndex: 2,
                  minHeight: "1px",
                  boxSizing: "border-box",
                  padding: "0px",
                  border: "0px none rgb(0, 0, 0)",
                  outline: "rgb(0, 0, 0) none 0px",
                  fontSize: "15px",
                  textSizeAdjust: "100%",
                  verticalAlign: "baseline",
                  background:
                    "rgba(0, 0, 0, 0) none no-repeat scroll 50% 50% / cover padding-box border-box",
                }}
              >
                <div
                  style={{
                    marginBottom: "24px",
                    width: "100%",
                    textAlign: "left",
                    marginLeft: "0px",
                    maxWidth: "100%",
                    display: "block",
                    marginRight: "auto",
                    lineHeight: "0px",
                    animationTimingFunction: "linear",
                    animationDuration: "0.2s",
                    position: "relative",
                    backgroundSize: "cover",
                    backgroundPosition: "50% 50%",
                    backgroundRepeat: "no-repeat",
                    boxSizing: "border-box",
                    padding: "0px",
                    border: "0px none rgb(0, 0, 0)",
                    outline: "rgb(0, 0, 0) none 0px",
                    fontSize: "15px",
                    textSizeAdjust: "100%",
                    verticalAlign: "baseline",
                    background:
                      "rgba(0, 0, 0, 0) none no-repeat scroll 50% 50% / cover padding-box border-box",
                  }}
                >
                  <span
                    style={{
                      width: "100%",
                      display: "inline-block",
                      position: "relative",
                      maxWidth: "100%",
                      boxSizing: "border-box",
                      margin: "0px",
                      padding: "0px",
                      border: "0px none rgb(0, 0, 0)",
                      outline: "rgb(0, 0, 0) none 0px",
                      fontSize: "15px",
                      textSizeAdjust: "100%",
                      verticalAlign: "baseline",
                      background:
                        "rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box",
                    }}
                  >
                    <img
                      decoding="async"
                      width="546"
                      height="741"
                      src="https://hugheslandscape.co/wp-content/uploads/2024/04/Rectangle-683.jpg"
                      alt=""
                      title="Rectangle-683"
                      srcSet="https://hugheslandscape.co/wp-content/uploads/2024/04/Rectangle-683.jpg 546w, https://hugheslandscape.co/wp-content/uploads/2024/04/Rectangle-683-480x651.jpg 480w"
                      sizes="(min-width: 0px) and (max-width: 480px) 480px, (min-width: 481px) 546px, 100vw"
                      style={{
                        width: "100%",
                        height: "370px",
                        objectFit: "cover",
                        position: "relative",
                        boxSizing: "border-box",
                        maxWidth: "100%",
                        margin: "0px",
                        padding: "0px",
                        border: "0px none rgb(0, 0, 0)",
                        outline: "rgb(0, 0, 0) none 0px",
                        fontSize: "15px",
                        textSizeAdjust: "100%",
                        verticalAlign: "baseline",
                        background:
                          "rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box",
                      }}
                    />
                  </span>
                </div>
                <div
                  style={{
                    marginBottom: "0px",
                    width: "100%",
                    textAlign: "left",
                    marginLeft: "0px",
                    maxWidth: "100%",
                    display: "block",
                    marginRight: "auto",
                    lineHeight: "0px",
                    animationTimingFunction: "linear",
                    animationDuration: "0.2s",
                    position: "relative",
                    backgroundSize: "cover",
                    backgroundPosition: "50% 50%",
                    backgroundRepeat: "no-repeat",
                    boxSizing: "border-box",
                    padding: "0px",
                    border: "0px none rgb(0, 0, 0)",
                    outline: "rgb(0, 0, 0) none 0px",
                    fontSize: "15px",
                    textSizeAdjust: "100%",
                    verticalAlign: "baseline",
                    background:
                      "rgba(0, 0, 0, 0) none no-repeat scroll 50% 50% / cover padding-box border-box",
                  }}
                >
                  <span
                    style={{
                      width: "100%",
                      display: "inline-block",
                      position: "relative",
                      maxWidth: "100%",
                      boxSizing: "border-box",
                      margin: "0px",
                      padding: "0px",
                      border: "0px none rgb(0, 0, 0)",
                      outline: "rgb(0, 0, 0) none 0px",
                      fontSize: "15px",
                      textSizeAdjust: "100%",
                      verticalAlign: "baseline",
                      background:
                        "rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box",
                    }}
                  >
                    <img
                      decoding="async"
                      width="546"
                      height="356"
                      src="https://hugheslandscape.co/wp-content/uploads/2024/04/Rectangle-682.jpg"
                      alt=""
                      title="Rectangle-682"
                      srcSet="https://hugheslandscape.co/wp-content/uploads/2024/04/Rectangle-682.jpg 546w, https://hugheslandscape.co/wp-content/uploads/2024/04/Rectangle-682-480x313.jpg 480w"
                      sizes="(min-width: 0px) and (max-width: 480px) 480px, (min-width: 481px) 546px, 100vw"
                      style={{
                        height: "177px",
                        width: "100%",
                        objectFit: "cover",
                        position: "relative",
                        boxSizing: "border-box",
                        maxWidth: "100%",
                        margin: "0px",
                        padding: "0px",
                        border: "0px none rgb(0, 0, 0)",
                        outline: "rgb(0, 0, 0) none 0px",
                        fontSize: "15px",
                        textSizeAdjust: "100%",
                        verticalAlign: "baseline",
                        background:
                          "rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box",
                      }}
                    />
                  </span>
                </div>
              </div>
              <div
                style={{
                  marginLeft: "12px",
                  marginRight: "0px",
                  width: "46.9072%",
                  backgroundSize: "cover",
                  backgroundPosition: "50% 50%",
                  backgroundRepeat: "no-repeat",
                  float: "left",
                  position: "relative",
                  zIndex: 2,
                  minHeight: "1px",
                  boxSizing: "border-box",
                  padding: "0px",
                  border: "0px none rgb(0, 0, 0)",
                  outline: "rgb(0, 0, 0) none 0px",
                  fontSize: "15px",
                  textSizeAdjust: "100%",
                  verticalAlign: "baseline",
                  background:
                    "rgba(0, 0, 0, 0) none no-repeat scroll 50% 50% / cover padding-box border-box",
                }}
              >
                <div
                  style={{
                    marginBottom: "0px",
                    width: "100%",
                    textAlign: "left",
                    marginLeft: "0px",
                    maxWidth: "100%",
                    display: "block",
                    marginRight: "auto",
                    lineHeight: "0px",
                    animationTimingFunction: "linear",
                    animationDuration: "0.2s",
                    position: "relative",
                    backgroundSize: "cover",
                    backgroundPosition: "50% 50%",
                    backgroundRepeat: "no-repeat",
                    boxSizing: "border-box",
                    padding: "0px",
                    border: "0px none rgb(0, 0, 0)",
                    outline: "rgb(0, 0, 0) none 0px",
                    fontSize: "15px",
                    textSizeAdjust: "100%",
                    verticalAlign: "baseline",
                    background:
                      "rgba(0, 0, 0, 0) none no-repeat scroll 50% 50% / cover padding-box border-box",
                  }}
                >
                  <span
                    style={{
                      width: "100%",
                      display: "inline-block",
                      position: "relative",
                      maxWidth: "100%",
                      boxSizing: "border-box",
                      margin: "0px",
                      padding: "0px",
                      border: "0px none rgb(0, 0, 0)",
                      outline: "rgb(0, 0, 0) none 0px",
                      fontSize: "15px",
                      textSizeAdjust: "100%",
                      verticalAlign: "baseline",
                      background:
                        "rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box",
                    }}
                  >
                    <img
                      decoding="async"
                      width="546"
                      height="356"
                      src="https://hugheslandscape.co/wp-content/uploads/2024/04/Rectangle-684.jpg"
                      alt=""
                      title="Rectangle-684"
                      srcSet="https://hugheslandscape.co/wp-content/uploads/2024/04/Rectangle-684.jpg 546w, https://hugheslandscape.co/wp-content/uploads/2024/04/Rectangle-684-480x313.jpg 480w"
                      sizes="(min-width: 0px) and (max-width: 480px) 480px, (min-width: 481px) 546px, 100vw"
                      style={{
                        height: "177px",
                        width: "100%",
                        objectFit: "cover",
                        position: "relative",
                        boxSizing: "border-box",
                        maxWidth: "100%",
                        margin: "0px",
                        padding: "0px",
                        border: "0px none rgb(0, 0, 0)",
                        outline: "rgb(0, 0, 0) none 0px",
                        fontSize: "15px",
                        textSizeAdjust: "100%",
                        verticalAlign: "baseline",
                        background:
                          "rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box",
                      }}
                    />
                  </span>
                </div>
                <div
                  style={{
                    marginBottom: "0px",
                    width: "100%",
                    textAlign: "left",
                    marginLeft: "0px",
                    marginTop: "24px",
                    maxWidth: "100%",
                    display: "block",
                    marginRight: "auto",
                    lineHeight: "0px",
                    animationTimingFunction: "linear",
                    animationDuration: "0.2s",
                    position: "relative",
                    backgroundSize: "cover",
                    backgroundPosition: "50% 50%",
                    backgroundRepeat: "no-repeat",
                    boxSizing: "border-box",
                    padding: "0px",
                    border: "0px none rgb(0, 0, 0)",
                    outline: "rgb(0, 0, 0) none 0px",
                    fontSize: "15px",
                    textSizeAdjust: "100%",
                    verticalAlign: "baseline",
                    background:
                      "rgba(0, 0, 0, 0) none no-repeat scroll 50% 50% / cover padding-box border-box",
                  }}
                >
                  <span
                    style={{
                      width: "100%",
                      display: "inline-block",
                      position: "relative",
                      maxWidth: "100%",
                      boxSizing: "border-box",
                      margin: "0px",
                      padding: "0px",
                      border: "0px none rgb(0, 0, 0)",
                      outline: "rgb(0, 0, 0) none 0px",
                      fontSize: "15px",
                      textSizeAdjust: "100%",
                      verticalAlign: "baseline",
                      background:
                        "rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box",
                    }}
                  >
                    <img
                      decoding="async"
                      width="546"
                      height="742"
                      src="https://hugheslandscape.co/wp-content/uploads/2024/04/Rectangle-685.jpg"
                      alt=""
                      title="Rectangle-685"
                      srcSet="https://hugheslandscape.co/wp-content/uploads/2024/04/Rectangle-685.jpg 546w, https://hugheslandscape.co/wp-content/uploads/2024/04/Rectangle-685-480x652.jpg 480w"
                      sizes="(min-width: 0px) and (max-width: 480px) 480px, (min-width: 481px) 546px, 100vw"
                      style={{
                        width: "100%",
                        height: "370px",
                        objectFit: "cover",
                        position: "relative",
                        boxSizing: "border-box",
                        maxWidth: "100%",
                        margin: "0px",
                        padding: "0px",
                        border: "0px none rgb(0, 0, 0)",
                        outline: "rgb(0, 0, 0) none 0px",
                        fontSize: "15px",
                        textSizeAdjust: "100%",
                        verticalAlign: "baseline",
                        background:
                          "rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box",
                      }}
                    />
                  </span>
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
