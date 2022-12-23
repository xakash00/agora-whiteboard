import "./App.css";
import { RecordRTCPromisesHandler } from "recordrtc";
import { useState } from "react";
import { saveAs } from "file-saver";
function App() {
  const [recorder, setRecorder] = useState();
  const [stream, setStream] = useState();
  const [videoBlob, setVideoUrlBlob] = useState();

  const startRecording = async () => {
    const mediadevices = navigator.mediaDevices;
    const stream = await mediadevices.getDisplayMedia({
      video: true,
      audio: false,
    });
    let recorder = new RecordRTCPromisesHandler(stream, {
      type: "video",
    });
    await recorder.startRecording();
    setRecorder(recorder);
    setStream(stream);
    setVideoUrlBlob(null);
  };

  const stopRecording = async () => {
    if (recorder) {
      await recorder.stopRecording();
      const blob = await recorder.getBlob();
      stream.stop();
      setVideoUrlBlob(blob);
      setStream(null);
      setRecorder(null);
    }
  };

  const downloadVideo = () => {
    if (videoBlob) {
      const mp4File = new File([videoBlob], "demo.mp4", { type: "video/mp4" });
      saveAs(mp4File, `Video-${Date.now()}.mp4`);
      // saveAs(videoBlob, `Video-${Date.now()}.webm`)
    }
  };

  return (
    <div className="container App">
      <div className="mt-5">
        <h3 className="lead mb-4">Screen Recording</h3>
        <div className="row mb-5">
          <div className="col-md-4">
            <button onClick={startRecording} className="btn-primary btn">Start Recording</button>
          </div>
          <div className="col-md-4">
            <button onClick={stopRecording} className="btn-danger btn">Stop Recording</button>
          </div>
          <div className="col-md-4">
            <button onClick={downloadVideo} className="btn-secondary btn">Download Recording</button>
          </div>
        </div>
        <iframe
          className="iframe"
          title="animation"
          src="https://embed.lottiefiles.com/animation/95875"
        ></iframe>
      </div>
    </div>
  );
}

export default App;
