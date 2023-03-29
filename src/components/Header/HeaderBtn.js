import React from "react";
import { FiMenu } from "react-icons/fi";
import { BiSearch } from "react-icons/bi";
import { AiTwotoneAudio } from "react-icons/ai";
import { BiVideoPlus } from "react-icons/bi";
import { BsBell } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { handleShowSearch } from "../../redux/action/action";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import SearchInput from "./SearchInput";
function HeaderBtn() {
  const dispatch = useDispatch();
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }
  console.log(transcript);
  return (
    <div className="px-2.5 h-16">
      <div className="mx-auto  h-full flex justify-between items-center">
        <div className="flex items-center space-x-5">
          <div className="btn">
            <FiMenu />
          </div>
          <Link to="/">
            <img
              className="w-24"
              src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
              alt=""
            />
          </Link>
        </div>
        <div className="w-1/2 mx-3 items-center hidden md:flex">
          <SearchInput />
        </div>
        <div className="space-x-1 lg:space-x-3">
          <button
            className="btn md:hidden"
            onClick={() => dispatch(handleShowSearch())}
          >
            <BiSearch />
          </button>
          <button className="btn" onClick={SpeechRecognition.startListening}>
            <AiTwotoneAudio />
          </button>
          <button
            className="btn hidden md:inline-block"
            onClick={SpeechRecognition.stopListening}
          >
            <BiVideoPlus />
          </button>
          <button className="btn hidden md:inline-block">
            <BsBell />
          </button>
          <button className="btn">
            <BiSearch />
          </button>
        </div>
      </div>
      <p>{transcript}</p>
    </div>
  );
}

export default HeaderBtn;
