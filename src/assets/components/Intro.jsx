import PropTypes from "prop-types";
import Button from "./Button";
import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Line,
  MeshDistortMaterial,
  OrbitControls,
  RoundedBox,
  Sphere,
} from "@react-three/drei";
import Calender from "../../../public/Calender";
import CanvasLoader from "./Loader";

const Intro = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <div className="hero-slider">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="hero-slide-content">
              <h2 className="title animated">
                Full Solution <br />
                for your{" "}
                <span className="text-decoration-underline">Existence</span>
                <br />
                in Social Life
              </h2>
              <Button
                classOption="btn btn-lg animated delay1 btn-dark btn-hover-dark me-4 mb-3 mb-sm-0"
                text="Contact Us"
                path="contact"
              />
              <Button
                classOption="btn btn-lg animated delay2 btn-secondary btn-hover-secondary mb-3 mb-sm-0"
                text="Check Services"
                path="service"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="h-[250px] md:h-[500px]">
              <Canvas>
                <Suspense fallback={<CanvasLoader />}>
                  <OrbitControls enableZoom={false} />
                  <ambientLight intensity={1} />
                  <directionalLight position={[0, 1, 1]} />
                  <Calender isMobile={isMobile} />
                  {/* <Sphere args={[1, 100, 200]} scale={2.4}>
                    <MeshDistortMaterial
                      color="#3d72a4"
                      attach="material"
                      distort={0.6}
                      speed={1}
                    />
                  </Sphere> */}
                  {/* <RoundedBox
                    args={[1, 1, 1]} // Width, height, depth. Default is [1, 1, 1]
                    radius={0.05} // Radius of the rounded corners. Default is 0.05
                    smoothness={4} // The number of curve segments. Default is 4
                    bevelSegments={4} // The number of bevel segments. Default is 4, setting it to 0 removes the bevel, as a result the texture is applied to the whole geometry.
                    creaseAngle={0.4} // Smooth normals everywhere except faces that meet at an angle greater than the crease angle
                    scale={3}
                  > */}
                  {/* <meshPhongMaterial color="#000000" wireframe /> */}
                  {/* <MeshDistortMaterial
                      color="#000000"
                      attach="material"
                      wireframe
                      distort={0.3}
                      speed={1}
                    />
                  </RoundedBox>  */}
                </Suspense>
              </Canvas>
              {/* <img className="animated" src={imgintro} alt="" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Intro.propTypes = {
  data: PropTypes.object,
};

export default Intro;
