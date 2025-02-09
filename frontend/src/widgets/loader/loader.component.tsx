import React from 'react';
import './loader.component.scss';
import { FallingLines, RotatingLines, TailSpin, ThreeDots } from 'react-loader-spinner';

type LoaderType = 'rotating-lines' | 'tail-spin' | 'three-dots' | 'falling-lines';

interface Props {
  loaderType: LoaderType;
}

const Loader: React.FC<Props> = ({ loaderType }) => {
  switch (loaderType) {
    case 'rotating-lines':
      return (<RotatingLines
        visible={true}
        width="96"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
      />);
    case 'tail-spin':
      return (<TailSpin
        visible={true}
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="tail-spin-loading"
        radius="1"
      />);
    case 'three-dots':
      return (<ThreeDots
        visible={true}
        height="80"
        width="80"
        color="#4fa94d"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />);
    case 'falling-lines':
      return (<FallingLines
        color="#4fa94d"
        width="100"
        visible={true}
      />);
  }
}

const LoaderBox: React.FC<Props> = ({ loaderType }) => {
  return (
    <div className="loader-box">
      <Loader loaderType={loaderType}/>
    </div>
  )
}

export default LoaderBox;
