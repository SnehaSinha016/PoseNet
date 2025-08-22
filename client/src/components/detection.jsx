import React, { useState, useEffect, useRef } from 'react';
import home from '../pages/home';
import { useNavigate } from "react-router-dom";
const Detection = () => {
  const canvasRef = useRef();
  const [posture, setPosture] = useState("Analyzing...");
  const navigate=useNavigate();
   const getSuggestion=()=>{
    
      if(posture==="Good"){
        return "Keep sitting upright with your back straight and shoulders relaxed.";
      }
      else if(posture==="Slouching"){
        return "You're slouching. Try to keep your back straight and shoulders back.";
      }
      else if(posture==="Leaning"){
        return "You're leaning to one side. Center your body and distribute weight evenly.";
      }
      else {
        return "Analyzing";
      }
    }

  useEffect(() => {
    let poseNet, capture, pose, skeleton;

    const sketch = (p) => {
      p.setup = () => {
        p.createCanvas(960,720).parent(canvasRef.current);
        capture = p.createCapture(p.VIDEO);
        capture.size(960, 720);
        capture.hide();

        poseNet = ml5.poseNet(capture, () => console.log("Model Loaded"));
        poseNet.on("pose", (results) => {
          if (results.length > 0) {
            pose = results[0].pose;
            skeleton = results[0].skeleton;
          }
        });
      };

      p.draw = () => {
        p.image(capture, 0, 0);

        if (pose) {
          p.fill(0, 0, 255);
          for (let i = 0; i < pose.keypoints.length; i++) {
            const k = pose.keypoints[i];
            p.ellipse(k.position.x, k.position.y, 10, 10);
          }

          p.stroke(255, 0, 0);
          for (let j = 0; j < skeleton.length; j++) {
            p.line(
              skeleton[j][0].position.x,
              skeleton[j][0].position.y,
              skeleton[j][1].position.x,
              skeleton[j][1].position.y
            );
          }

          const currentPosture = CheckPosture(pose);
          setPosture(currentPosture);

          p.noStroke();
          p.fill(255);
          p.textSize(32);
          p.text(`Posture: ${currentPosture}`, 20, 40);
        }
      };

      function distance(p1, p2) {
        return Math.hypot(p1.x - p2.x, p1.y - p2.y);
      }

      function getAngle(a, b, c) {
        const ab = distance(a, b);
        const ac = distance(a, c);
        const bc = distance(b, c);
        const angleRad = Math.acos((ab ** 2 + bc ** 2 - ac ** 2) / (2 * ab * bc));
        return (angleRad * 180) / Math.PI;
      }

      function CheckPosture(pose) {
        const getPart = (name) => pose.keypoints.find(p => p.part === name)?.position;
        const nose = getPart("nose");
        const leftShoulder = getPart("leftShoulder");
        const rightShoulder = getPart("rightShoulder");
        const leftHip = getPart("leftHip");
        const rightHip = getPart("rightHip");

        if (!nose || !leftShoulder || !rightShoulder || !leftHip || !rightHip)
          return "Analyzing...";

        const midShoulder = {
          x: (leftShoulder.x + rightShoulder.x) / 2,
          y: (leftShoulder.y + rightShoulder.y) / 2,
        };
        const midHip = {
          x: (leftHip.x + rightHip.x) / 2,
          y: (leftHip.y + rightHip.y) / 2,
        };

        const angle = getAngle(midHip, midShoulder, nose);
        const shoulderDiff = Math.abs(leftShoulder.y - rightShoulder.y);

        if (angle > 160 && shoulderDiff < 20) return "Good";
        if (angle <= 160 && shoulderDiff < 20) return "Slouching";
        if (shoulderDiff >= 20) return "Leaning";
        return "Unknown";
      }
    };

    const p5Instance = new window.p5(sketch);

    return () => {
      if (canvasRef.current) {
        canvasRef.current.innerHTML = '';
      }
      if (capture) capture.remove();
      p5Instance.remove();
    };
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center">
      <h1 className="text-7xl font-bold mb-4 text-gray-800">Posture Detector</h1>
      <div className="bg-gray-100 shadow-lg rounded-lg p-4">
        <div ref={canvasRef}></div>
        <p className="text-5xl text-center mt-3 font-semibold text-gray-700">
          Posture: <span className="text-blue-600">{posture}</span>
        </p>
      </div>
      <div className="bg-gray-100 mt-2 w-[1008px] shadow-lg rounded-lg p-4">
      <p className="p-1 text-5xl font-bold items-center justify-center align-center">Suggestions:</p>
      <p className="text-3xl mt-4 text-center text-gray-800 font-medium">
    {getSuggestion()}
  </p>
  <button
  className="absolute top-4 left-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
  onClick={() => navigate('/Home')}
>
  Back
</button>
      </div>
    </div>
  );
};

export default Detection;
